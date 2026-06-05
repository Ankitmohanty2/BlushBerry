"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { clearCart } from "@/redux/features/cartSlice";

export default function ThankYouGuard({ children }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isAuthorized, setIsAuthorized] = useState(() => {
    try {
      return typeof window !== "undefined" && !!sessionStorage.getItem("justCheckedOut");
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    if (!isAuthorized) {
      router.replace("/cart");
      return;
    }

    sessionStorage.removeItem("justCheckedOut");
    dispatch(clearCart());
  }, [isAuthorized, router, dispatch]);

  if (!isAuthorized) return null; 

  return <>{children}</>;
}
