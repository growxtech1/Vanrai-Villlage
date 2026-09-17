import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/client";
import { EventEnquiryRecord } from "@/lib/supabase";
import { sendEnquiryEmails, EnquiryEmailPayload } from "@/lib/email";

// Helper to format Date objects/strings to a readable string
function formatDate(d: Date | string | null): string | null {
    if (!d) return null;
    const date = typeof d === "string" ? new Date(d) : d;
    if (isNaN(date.getTime())) return null;
    return date.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

// Helper to get ISO date string (YYYY-MM-DD)
function toISODate(d: Date | string | null): string | null {
    if (!d) return null;
    const date = typeof d === "string" ? new Date(d) : d;
    if (isNaN(date.getTime())) return null;
    return date.toISOString().split("T")[0];
}

function addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const {
            firstName,
            lastName,
            phone,
            email,
            eventType,
            date,
            numDays,
            rooms,
            pax,
            catering,
            cateringType,
        } = body;

        // ── 1. Validate Required Fields ──────────────────────────────────────
        const errors: string[] = [];
        if (!firstName?.trim()) errors.push("First name is required.");
        if (!lastName?.trim()) errors.push("Last name is required.");
        if (!phone?.trim()) errors.push("Phone number is required.");
        if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errors.push("A valid email address is required.");
        }

        if (errors.length > 0) {
            return NextResponse.json({ success: false, errors }, { status: 400 });
        }

        // ── 2. Prepare Data ──────────────────────────────────────────────────
        const startDate = date ? new Date(date) : null;
        const days = typeof numDays === "number" && numDays >= 1 ? numDays : 1;
        const endDate = startDate && days > 1 ? addDays(startDate, days - 1) : startDate;

        const formattedStartDate = formatDate(startDate);
        const formattedEndDate = endDate && days > 1 ? formatDate(endDate) : null;

        const ip =
            req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
            req.headers.get("x-real-ip") ||
            null;
        const userAgent = req.headers.get("user-agent") || null;

        // ── 3. Insert into Supabase ──────────────────────────────────────────
        let enquiryId: string | undefined;

        if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
            try {
                const supabase = createClient();
                const record: EventEnquiryRecord = {
                    first_name: firstName.trim(),
                    last_name: lastName.trim(),
                    phone: phone.trim(),
                    email: email.trim().toLowerCase(),
                    event_type: eventType || "general",
                    event_date: toISODate(startDate),
                    num_days: days,
                    end_date: toISODate(endDate),
                    rooms: typeof rooms === "number" ? rooms : 0,
                    pax: typeof pax === "number" ? pax : 50,
                    catering: Boolean(catering),
                    catering_type: catering ? (cateringType || null) : null,
                    status: "pending",
                    ip_address: ip,
                    user_agent: userAgent,
                };

                const { data: insertedRow, error: dbError } = await supabase
                    .from("event_enquiries")
                    .insert(record)
                    .select("id")
                    .single();

                if (dbError) {
                    console.error("[Supabase Insert Error]", dbError);
                    // Don't block submission – still send emails and return success
                } else {
                    enquiryId = insertedRow?.id;
                    console.log("[Supabase] Enquiry saved:", enquiryId);
                }
            } catch (dbErr) {
                console.error("[Supabase Client Error]", dbErr);
            }
        } else {
            console.log("[Supabase] Not configured. Skipping DB insert (dev mode).");
            console.log("[Enquiry Payload]", { firstName, lastName, phone, email, eventType, eventDate: formattedStartDate, numDays: days });
        }

        // ── 4. Send Emails ────────────────────────────────────────────────────
        const emailPayload: EnquiryEmailPayload = {
            enquiryId,
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            phone: phone.trim(),
            email: email.trim(),
            eventType: eventType || "General",
            eventDate: formattedStartDate,
            numDays: days,
            endDate: formattedEndDate,
            rooms: typeof rooms === "number" ? rooms : 0,
            pax: typeof pax === "number" ? pax : 50,
            catering: Boolean(catering),
            cateringType: catering ? (cateringType || null) : null,
            submittedAt: new Date().toISOString(),
        };

        const emailResult = await sendEnquiryEmails(emailPayload);
        console.log("[Email Result]", emailResult);

        // ── 5. Return Success ─────────────────────────────────────────────────
        return NextResponse.json({
            success: true,
            id: enquiryId || null,
            message: "Your enquiry has been submitted successfully. We will contact you within 24 hours.",
            emailsSent: {
                admin: emailResult.adminSent,
                customer: emailResult.customerSent,
                provider: emailResult.provider,
            },
        });
    } catch (err: any) {
        console.error("[API /api/enquiry Error]", err);
        return NextResponse.json(
            {
                success: false,
                errors: ["An unexpected error occurred. Please try again or contact us directly."],
            },
            { status: 500 }
        );
    }
}
