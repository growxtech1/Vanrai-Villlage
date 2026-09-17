import nodemailer from "nodemailer";
import { RESORT_CONTACT, getWhatsAppUrl } from "./contact-config";

export interface EnquiryEmailPayload {
    enquiryId?: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    eventType: string;
    eventDate: string | null;
    numDays: number;
    endDate: string | null;
    rooms: number;
    pax: number;
    catering: boolean;
    cateringType: string | null;
    submittedAt?: string;
}

const adminEmail = process.env.ADMIN_EMAIL || RESORT_CONTACT.emailAddress || "vanrai_resort@yahoo.co.in";
const senderName = "Vanrai Village Resort";
const senderAddress = process.env.SMTP_USER || "vikrammhaske5743@gmail.com";
const emailFrom = `${senderName} <${senderAddress}>`;

/** Create a reusable Nodemailer transporter using Gmail SSL (port 465) */
function createTransporter() {
    return nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: Number(process.env.SMTP_PORT) || 465,
        secure: true, // port 465 always uses TLS/SSL
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS, // Google App Password (spaces are stripped by nodemailer)
        },
        tls: {
            rejectUnauthorized: true,
        },
    });
}

/**
 * Generate luxury dark-themed HTML email for the Resort Admin
 */
function getAdminEmailHtml(data: EnquiryEmailPayload): string {
    const fullName = `${data.firstName} ${data.lastName}`.trim();
    const cleanPhone = data.phone.replace(/[^0-9+]/g, "");
    const waUrl = getWhatsAppUrl(
        `Hello ${fullName}, this is Vanrai Village Resort following up regarding your ${data.eventType || "event"} enquiry.`
    );

    return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>New Event Enquiry</title>
<style>
  body { margin: 0; padding: 0; background-color: #0b0f0d; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f3f4f6; }
  .container { max-width: 600px; margin: 24px auto; background-color: #121815; border: 1px solid #1f2923; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
  .header { background: linear-gradient(135deg, #0d3824 0%, #081d13 100%); padding: 32px 24px; text-align: center; border-bottom: 2px solid #00c97b; }
  .header h1 { margin: 0 0 8px; color: #ffffff; font-size: 24px; letter-spacing: -0.5px; }
  .badge { display: inline-block; background-color: rgba(0, 201, 123, 0.15); border: 1px solid #00c97b; color: #00c97b; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; padding: 5px 12px; border-radius: 20px; }
  .content { padding: 28px 24px; }
  .section-title { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #00c97b; margin: 20px 0 10px; border-bottom: 1px solid #1f2923; padding-bottom: 6px; }
  .grid { width: 100%; border-collapse: collapse; margin-bottom: 16px; }
  .grid td { padding: 8px 0; font-size: 14px; vertical-align: top; }
  .grid td.label { color: #9ca3af; width: 40%; font-weight: 500; }
  .grid td.val { color: #ffffff; font-weight: 600; }
  .stat-card { background-color: #1a231e; border: 1px solid #27372d; border-radius: 12px; padding: 14px; text-align: center; }
  .stat-val { font-size: 20px; font-weight: 800; color: #00c97b; }
  .stat-label { font-size: 11px; color: #9ca3af; text-transform: uppercase; letter-spacing: 1px; margin-top: 4px; }
  .actions { text-align: center; padding: 24px; background-color: #0d1310; border-top: 1px solid #1f2923; }
  .btn-whatsapp { display: inline-block; background-color: #25D366; color: #ffffff; text-decoration: none; font-weight: 700; font-size: 14px; padding: 12px 24px; border-radius: 10px; margin: 6px; }
  .btn-reply { display: inline-block; background-color: #1f2923; color: #ffffff; text-decoration: none; font-weight: 600; font-size: 14px; padding: 12px 24px; border-radius: 10px; margin: 6px; border: 1px solid #374151; }
  .footer { text-align: center; padding: 16px; font-size: 12px; color: #6b7280; }
</style>
</head>
<body>
<div class="container">
  <div class="header">
    <span class="badge">New Inquiry Alert</span>
    <h1 style="margin-top: 12px;">Vanrai Village Resort</h1>
    <p style="margin: 0; color: #9ca3af; font-size: 14px;">Incoming celebration enquiry from website</p>
  </div>
  
  <div class="content">
    <div class="section-title">Customer Information</div>
    <table class="grid">
      <tr><td class="label">Full Name</td><td class="val">${fullName}</td></tr>
      <tr><td class="label">Phone</td><td class="val"><a href="tel:${cleanPhone}" style="color: #00c97b; text-decoration: none;">${data.phone}</a></td></tr>
      <tr><td class="label">Email</td><td class="val"><a href="mailto:${data.email}" style="color: #00c97b; text-decoration: none;">${data.email}</a></td></tr>
    </table>

    <div class="section-title">Event Specifications</div>
    <table class="grid">
      <tr><td class="label">Occasion / Type</td><td class="val" style="text-transform: capitalize; color: #34d399;">${data.eventType || "Not Specified"}</td></tr>
      <tr><td class="label">Start Date</td><td class="val">${data.eventDate || "Flexible / Not selected"}</td></tr>
      <tr><td class="label">Duration</td><td class="val">${data.numDays} ${data.numDays === 1 ? "Day" : "Days"}</td></tr>
      ${data.endDate ? `<tr><td class="label">End Date</td><td class="val">${data.endDate}</td></tr>` : ""}
    </table>

    <div class="section-title">Scale &amp; Requirements</div>
    <table style="width: 100%; border-collapse: separate; border-spacing: 8px; margin: 12px 0 20px;">
      <tr>
        <td style="width: 33%;"><div class="stat-card"><div class="stat-val">${data.pax}+</div><div class="stat-label">Expected Guests</div></div></td>
        <td style="width: 33%;"><div class="stat-card"><div class="stat-val">${data.rooms}</div><div class="stat-label">Rooms Needed</div></div></td>
        <td style="width: 33%;"><div class="stat-card"><div class="stat-val" style="font-size: 15px; text-transform: capitalize; padding-top: 4px;">${data.catering ? (data.cateringType || "Yes") : "None"}</div><div class="stat-label">Catering Service</div></div></td>
      </tr>
    </table>

    ${data.enquiryId ? `<p style="font-size: 11px; color: #6b7280; margin-top: 16px;">Reference ID: <code>${data.enquiryId}</code></p>` : ""}
  </div>

  <div class="actions">
    <a href="${waUrl}" target="_blank" class="btn-whatsapp">Reply via WhatsApp</a>
    <a href="mailto:${data.email}?subject=Regarding Your Event Enquiry at Vanrai Village Resort" class="btn-reply">Reply via Email</a>
  </div>

  <div class="footer">
    Vanrai Village Resort CRM &bull; Ahmednagar City Bypass, Maharashtra 414111 &bull; +91 97300 01579
  </div>
</div>
</body>
</html>
    `.trim();
}

/**
 * Generate luxury confirmation / thank you HTML email for the Customer
 */
function getCustomerEmailHtml(data: EnquiryEmailPayload): string {
    const firstName = data.firstName.trim();
    const fullName = `${data.firstName} ${data.lastName}`.trim();
    const waUrl = getWhatsAppUrl(
        `Hi Vanrai Village, I recently submitted an enquiry for ${data.eventType || "an event"} under the name ${fullName}.`
    );

    return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Thank You for Your Enquiry - Vanrai Village Resort</title>
<style>
  body { margin: 0; padding: 0; background-color: #0b0f0d; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f3f4f6; }
  .container { max-width: 600px; margin: 24px auto; background-color: #121815; border: 1px solid #1f2923; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
  .header { background: linear-gradient(135deg, #062b1a 0%, #0d3824 50%, #081d13 100%); padding: 36px 24px; text-align: center; border-bottom: 2px solid #00c97b; }
  .header h1 { margin: 10px 0 6px; color: #ffffff; font-size: 26px; font-weight: 700; letter-spacing: -0.5px; }
  .header p { margin: 0; color: #a7f3d0; font-size: 14px; }
  .content { padding: 32px 24px; }
  .greeting { font-size: 18px; font-weight: 700; color: #ffffff; margin-bottom: 12px; }
  .intro-text { color: #d1d5db; font-size: 14px; line-height: 1.6; margin-bottom: 24px; }
  .timeline-box { background: rgba(0, 201, 123, 0.08); border-left: 3px solid #00c97b; padding: 14px 16px; border-radius: 0 10px 10px 0; margin-bottom: 24px; }
  .timeline-box p { margin: 0; font-size: 13px; color: #d1d5db; line-height: 1.5; }
  .card { background-color: #17201b; border: 1px solid #233229; border-radius: 14px; padding: 20px; margin-bottom: 24px; }
  .card-title { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #00c97b; margin-bottom: 14px; border-bottom: 1px solid #233229; padding-bottom: 6px; }
  .actions { text-align: center; padding: 24px; background-color: #0d1310; border-top: 1px solid #1f2923; }
  .btn-whatsapp { display: inline-block; background-color: #25D366; color: #ffffff; text-decoration: none; font-weight: 700; font-size: 14px; padding: 12px 28px; border-radius: 10px; margin: 6px; }
  .contact-info { margin-top: 20px; font-size: 12px; color: #9ca3af; text-align: center; line-height: 1.6; }
</style>
</head>
<body>
<div class="container">
  <div class="header">
    <span style="display: inline-block; background-color: rgba(0, 201, 123, 0.2); border: 1px solid #00c97b; color: #00c97b; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; padding: 4px 12px; border-radius: 20px;">Enquiry Received</span>
    <h1>Vanrai Village Resort</h1>
    <p>A Nature &amp; Celebration Sanctuary in Ahmednagar</p>
  </div>

  <div class="content">
    <div class="greeting">Dear ${firstName},</div>
    <div class="intro-text">
      Thank you for reaching out to Vanrai Village Resort. We are delighted you are considering our resort for your upcoming celebration. We have safely logged your details into our system.
    </div>

    <div class="timeline-box">
      <p><strong>What happens next?</strong><br>
      Our dedicated event curators are currently reviewing your preferences. A representative will contact you at <strong>${data.phone}</strong> within 24 hours with custom arrangements and pricing.</p>
    </div>

    <div class="card">
      <div class="card-title">Summary of Your Request</div>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 6px 0; color: #9ca3af; font-size: 13px;">Event Type:</td><td style="padding: 6px 0; color: #34d399; font-weight: 600; font-size: 13px; text-transform: capitalize; text-align: right;">${data.eventType || "General"}</td></tr>
        <tr><td style="padding: 6px 0; color: #9ca3af; font-size: 13px;">Requested Date:</td><td style="padding: 6px 0; color: #ffffff; font-weight: 600; font-size: 13px; text-align: right;">${data.eventDate || "To be finalized"}</td></tr>
        <tr><td style="padding: 6px 0; color: #9ca3af; font-size: 13px;">Duration:</td><td style="padding: 6px 0; color: #ffffff; font-weight: 600; font-size: 13px; text-align: right;">${data.numDays} ${data.numDays === 1 ? "Day" : "Days"}</td></tr>
        <tr><td style="padding: 6px 0; color: #9ca3af; font-size: 13px;">Expected Guests:</td><td style="padding: 6px 0; color: #ffffff; font-weight: 600; font-size: 13px; text-align: right;">${data.pax}+ Guests</td></tr>
        <tr><td style="padding: 6px 0; color: #9ca3af; font-size: 13px;">Rooms:</td><td style="padding: 6px 0; color: #ffffff; font-weight: 600; font-size: 13px; text-align: right;">${data.rooms} Rooms</td></tr>
        <tr><td style="padding: 6px 0; color: #9ca3af; font-size: 13px;">Catering:</td><td style="padding: 6px 0; color: #ffffff; font-weight: 600; font-size: 13px; text-transform: capitalize; text-align: right;">${data.catering ? (data.cateringType || "Required") : "Not needed"}</td></tr>
      </table>
    </div>

    <div class="intro-text" style="margin-bottom: 0;">
      Need immediate assistance or have urgent date adjustments? Feel free to contact our reservations desk directly.
    </div>
  </div>

  <div class="actions">
    <a href="${waUrl}" target="_blank" class="btn-whatsapp">Chat with Us on WhatsApp</a>
    <div class="contact-info">
      <strong>Vanrai Village Resort</strong><br>
      G.No 648, Wadgaon Gupta, Ahmednagar City Bypass, Maharashtra 414111<br>
      Direct: <a href="tel:+919730001579" style="color: #00c97b; text-decoration: none;">+91 97300 01579</a> &bull; Email: <a href="mailto:vanrai_resort@yahoo.co.in" style="color: #00c97b; text-decoration: none;">vanrai_resort@yahoo.co.in</a>
    </div>
  </div>
</div>
</body>
</html>
    `.trim();
}

/**
 * Send both admin alert and customer thank-you emails via Nodemailer + Gmail SMTP
 */
export async function sendEnquiryEmails(data: EnquiryEmailPayload): Promise<{
    adminSent: boolean;
    customerSent: boolean;
    provider: "smtp" | "mock";
    error?: string;
}> {
    const adminHtml = getAdminEmailHtml(data);
    const customerHtml = getCustomerEmailHtml(data);

    const adminSubject = `New Event Enquiry: ${data.eventType || "Celebration"} — ${data.firstName} ${data.lastName}`;
    const customerSubject = `Thank You for Your Enquiry — Vanrai Village Resort`;

    // Send via Nodemailer SMTP (Gmail SSL port 465)
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
        try {
            const transporter = createTransporter();

            // Verify connection before sending
            await transporter.verify();

            const [adminRes, customerRes] = await Promise.allSettled([
                transporter.sendMail({
                    from: emailFrom,
                    to: adminEmail,
                    subject: adminSubject,
                    html: adminHtml,
                }),
                transporter.sendMail({
                    from: emailFrom,
                    to: data.email,
                    subject: customerSubject,
                    html: customerHtml,
                }),
            ]);

            const adminSuccess = adminRes.status === "fulfilled";
            const customerSuccess = customerRes.status === "fulfilled";

            if (!adminSuccess) {
                console.error("[Email SMTP] Admin email failed:", (adminRes as PromiseRejectedResult).reason);
            }
            if (!customerSuccess) {
                console.error("[Email SMTP] Customer email failed:", (customerRes as PromiseRejectedResult).reason);
            }

            console.log("[Email Service: SMTP/Gmail]", { adminSuccess, customerSuccess });
            return { adminSent: adminSuccess, customerSent: customerSuccess, provider: "smtp" };
        } catch (err: any) {
            console.error("[Email Service: SMTP Error]", err?.message || err);
            return {
                adminSent: false,
                customerSent: false,
                provider: "mock",
                error: err?.message || "SMTP connection failed",
            };
        }
    }

    // DEV SIMULATION — SMTP env vars not yet set
    console.log("------------------------------------------------------------------");
    console.log("[Email Service: DEV SIMULATION — SMTP not configured]");
    console.log(`  Admin → ${adminEmail} | Subject: ${adminSubject}`);
    console.log(`  Customer → ${data.email} | Subject: ${customerSubject}`);
    console.log(`  Guest: ${data.firstName} ${data.lastName} | ${data.phone} | ${data.eventType} | ${data.eventDate}`);
    console.log("------------------------------------------------------------------");

    return { adminSent: true, customerSent: true, provider: "mock" };
}
