"use client";
import { useId } from "react";

export default function OrderNumber({ className = "text-2xl font-mono text-foreground tracking-wider font-semibold" }) {
  const reactId = useId();
  const orderNumber = String(
    Array.from(reactId).reduce(
      (hash, char) =>
        (hash * 31 + char.charCodeAt(0)) % 900000,
      0
    ) + 100000
  );

  return <p className={className}>#BLUSHBERRY-{orderNumber}</p>;
}
