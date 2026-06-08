"use client";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Container from "@/components/layout/Container";
import CartItem from "@/components/cart/CartItem";
import EmptyCart from "@/components/cart/EmptyCart";
import CartSummary from "@/components/cart/CartSummary";

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);

  const [mounted] = useState(() => typeof window !== "undefined");
  if (!mounted) return null;

  return (
    <section className="pt-16 md:pt-20 pb-16 md:pb-20">
      <Container>
        <div className="mb-10 md:mb-14">
          <p className="uppercase tracking-[2px] md:tracking-[4px] text-sm text-muted-foreground mb-3">
            Shopping Cart
          </p>

          <h1 className="text-3xl md:text-5xl tracking-tight font-semibold">
            Your Cart
          </h1>
        </div>

        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="grid xl:grid-cols-[1fr_380px] gap-8 xl:gap-12 items-start">
            <div className="space-y-4 md:space-y-6">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <div className="xl:sticky xl:top-28">
              <CartSummary items={cartItems} />
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
