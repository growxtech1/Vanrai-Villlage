"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type RoomType = "Wooden Cottage" | "Deluxe AC Room" | "Standard Room" | "All";

export interface SelectedRoom {
  id: string;
  name: string;
  price: number;
  count: number;
}

export interface AddOn {
  id: string;
  name: string;
  price: number;
}

export interface BookingState {
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  roomType: RoomType;
  roomsNeeded: number;
  extraGuestCharge: number;
  selectedRooms: SelectedRoom[];
  membershipId: string;
  isMembershipVerified: boolean;
  promoCode: string;
  promoDiscount: number;
  addOns: AddOn[];
}
interface BookingContextType {
  state: BookingState;
  setCheckIn: (date: string) => void;
  setCheckOut: (date: string) => void;
  setAdults: (count: number) => void;
  setChildren: (count: number) => void;
  setRoomType: (type: RoomType) => void;
  calculateRoomsAndCharges: (adults: number) => void;
  addRoom: (room: SelectedRoom) => void;
  removeRoom: (id: string) => void;
  toggleAddOn: (addOn: AddOn) => void;
  setMembershipId: (id: string) => void;
  verifyMembership: () => void;
  applyPromoCode: (code: string) => void;
  calculateTotal: () => { 
    subtotal: number; 
    nights: number; 
    membershipDiscount: number; 
    promoDiscountAmount: number; 
    finalTotal: number;
    extraGuestTotal: number;
    addOnsTotal: number;
  };
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<BookingState>({
    checkIn: "",
    checkOut: "",
    adults: 2,
    children: 0,
    roomType: "All",
    roomsNeeded: 1,
    extraGuestCharge: 0,
    selectedRooms: [],
    membershipId: "",
    isMembershipVerified: false,
    promoCode: "",
    promoDiscount: 0,
    addOns: [],
  });

  const calculateRoomsAndCharges = (adults: number) => {
    let rooms = 1;
    let extraCharge = 0;

    if (adults <= 2) {
      rooms = 1;
      extraCharge = 0;
    } else if (adults === 3) {
      rooms = 1;
      extraCharge = 1000;
    } else {
      rooms = Math.ceil(adults / 2);
      extraCharge = 0;
    }

    setState((prev) => ({ ...prev, adults, roomsNeeded: rooms, extraGuestCharge: extraCharge }));
  };

  const calculateTotal = () => {
    let nights = 1;
    if (state.checkIn && state.checkOut) {
      const start = new Date(state.checkIn);
      const end = new Date(state.checkOut);
      const diffTime = Math.abs(end.getTime() - start.getTime());
      nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;
    }

    const roomsTotal = state.selectedRooms.reduce((acc, room) => acc + (room.price * room.count), 0);
    const extraGuestTotal = state.extraGuestCharge * nights;
    const addOnsTotal = state.addOns.reduce((acc, addon) => acc + addon.price, 0);
    const subtotal = (roomsTotal * nights) + extraGuestTotal + addOnsTotal;

    const membershipDiscount = state.isMembershipVerified ? subtotal * 0.1 : 0;
    const promoDiscountAmount = subtotal * (state.promoDiscount / 100);
    
    const finalTotal = subtotal - membershipDiscount - promoDiscountAmount;

    return { subtotal, nights, membershipDiscount, promoDiscountAmount, finalTotal, extraGuestTotal, addOnsTotal };
  };

  const addRoom = (room: SelectedRoom) => {
    setState(prev => {
      const existing = prev.selectedRooms.find(r => r.id === room.id);
      if (existing) {
        return {
          ...prev,
          selectedRooms: prev.selectedRooms.map(r => r.id === room.id ? { ...r, count: r.count + 1 } : r)
        };
      }
      return { ...prev, selectedRooms: [...prev.selectedRooms, { ...room, count: 1 }] };
    });
  };

  const toggleAddOn = (addOn: AddOn) => {
    setState(prev => {
      const exists = prev.addOns.find(a => a.id === addOn.id);
      if (exists) {
        return { ...prev, addOns: prev.addOns.filter(a => a.id !== addOn.id) };
      }
      return { ...prev, addOns: [...prev.addOns, addOn] };
    });
  };

  const removeRoom = (id: string) => {
    setState(prev => ({
      ...prev,
      selectedRooms: prev.selectedRooms.filter(r => r.id !== id)
    }));
  };

  const verifyMembership = () => {
    // Simple simulation: any ID containing 'VANRAI' is valid
    if (state.membershipId.toUpperCase().includes("VANRAI")) {
      setState(prev => ({ ...prev, isMembershipVerified: true }));
    } else {
      setState(prev => ({ ...prev, isMembershipVerified: false }));
    }
  };

  const applyPromoCode = (code: string) => {
    if (code.toUpperCase() === "WELCOME20") {
      setState(prev => ({ ...prev, promoCode: code, promoDiscount: 20 }));
    } else if (code.toUpperCase() === "FLAT500") {
      // For simplicity, we handle percentage in state. In a real app, this would be more complex.
      setState(prev => ({ ...prev, promoCode: code, promoDiscount: 10 }));
    } else {
      setState(prev => ({ ...prev, promoCode: "", promoDiscount: 0 }));
    }
  };

  const setCheckIn = (date: string) => setState((prev) => ({ ...prev, checkIn: date }));
  const setCheckOut = (date: string) => setState((prev) => ({ ...prev, checkOut: date }));
  const setAdults = (count: number) => calculateRoomsAndCharges(count);
  const setChildren = (count: number) => setState((prev) => ({ ...prev, children: count }));
  const setRoomType = (type: RoomType) => setState((prev) => ({ ...prev, roomType: type }));
  const setMembershipId = (id: string) => setState(prev => ({ ...prev, membershipId: id }));

  return (
    <BookingContext.Provider
      value={{
        state,
        setCheckIn,
        setCheckOut,
        setAdults,
        setChildren,
        setRoomType,
        calculateRoomsAndCharges,
        addRoom,
        removeRoom,
        toggleAddOn,
        setMembershipId,
        verifyMembership,
        applyPromoCode,
        calculateTotal,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
};
