"use client";
import { useEffect, useState } from "react";

export default function OrderNumber({ className = "text-2xl font-mono text-foreground tracking-wider font-semibold" }) {
  const [orderNumber, setOrderNumber] = useState(null);

  useEffect(() => {
    const num = Math.floor(100000 + Math.random() * 900000);
    setOrderNumber(num);
  }, []);

  if (orderNumber === null) return <p className={className}>#BLUSHBERRY-—</p>;

  return <p className={className}>#BLUSHBERRY-{orderNumber}</p>;
}
