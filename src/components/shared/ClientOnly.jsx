"use client";

import { useEffect, useState } from "react";

export default function ClientOnly({
  children,
}) {

  const [mounted] = useState(() => typeof window !== "undefined");

  if (!mounted) return null;

  return children;
}