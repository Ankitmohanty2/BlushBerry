"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { clearCart } from "@/redux/features/cartSlice";

export default function ThankYouGuard({ children }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const justCheckedOut = sessionStorage.getItem("justCheckedOut");
    
    if (!justCheckedOut) {
      router.replace("/cart");
    } else {
      // Clear the flag so they can't refresh and see it again
      sessionStorage.removeItem("justCheckedOut");
      dispatch(clearCart());
      setIsAuthorized(true);
    }
  }, [router, dispatch]);

  if (!isAuthorized) {
    return null; // Render nothing while checking authorization
  }

  return <>{children}</>;
}
