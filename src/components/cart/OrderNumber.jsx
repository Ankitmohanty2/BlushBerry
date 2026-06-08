"use client";
import { useId } from "react";

const HASH_PRIME = 31;
const ORDER_RANGE = 900000;
const ORDER_OFFSET = 100000;

export default function OrderNumber({ className = "text-2xl font-mono text-foreground tracking-wider font-semibold" }) {
  const reactId = useId();
  const orderNumber = String(
    Array.from(reactId).reduce(
      (hash, char) =>
        ((hash % ORDER_RANGE) * HASH_PRIME + char.charCodeAt(0)) % ORDER_RANGE,
      0
    ) + ORDER_OFFSET
  );

  return <p className={className}>#BLUSHBERRY-{orderNumber}</p>;
}
