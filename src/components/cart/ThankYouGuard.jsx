"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ThankYouGuard({ children }) {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const justCheckedOut = sessionStorage.getItem("justCheckedOut");
    
    if (!justCheckedOut) {
      router.replace("/cart");
    } else {
      // Clear the flag so they can't refresh and see it again
      sessionStorage.removeItem("justCheckedOut");
      setIsAuthorized(true);
    }
  }, [router]);

  if (!isAuthorized) {
    return null; // Render nothing while checking authorization
  }

  return <>{children}</>;
}
