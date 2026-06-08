"use client";
import { useId } from "react";

export default function OrderNumber({ className = "text-2xl font-mono text-foreground tracking-wider font-semibold" }) {
  const reactId = useId();
  const orderNumber = reactId.replace(/\D/g, "").slice(-6).padStart(6, "0");

  return <p className={className}>#BLUSHBERRY-{orderNumber}</p>;
}
