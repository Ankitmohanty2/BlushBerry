"use client";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { useDispatch } from "react-redux";
import { clearCart } from "@/redux/features/cartSlice";

export default function ThankYouGuard({ children }) {
  const dispatch = useDispatch();
  const [isAuthorized] = useState(() => {
    try {
      return typeof window !== "undefined" && !!sessionStorage.getItem("justCheckedOut");
    } catch (e) {
      return false;
    }
  });

  if (typeof window !== "undefined" && !isAuthorized) {
    redirect("/cart");
  }

  useEffect(() => {
    if (isAuthorized) {
      sessionStorage.removeItem("justCheckedOut");
      dispatch(clearCart());
    }
  }, [isAuthorized, dispatch]);

  if (!isAuthorized) return null; 

  return <>{children}</>;
}
