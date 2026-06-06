"use client";

import { useEffect } from "react";

export default function InteractiveEffects() {
  useEffect(() => {
    const cards = document.querySelectorAll(".brutalist-border");

    function handleDown(this: HTMLElement) {
      this.style.transform = "translate(2px, 2px)";
    }

    function handleUp(this: HTMLElement) {
      this.style.transform = "translate(0px, 0px)";
    }

    cards.forEach((card) => {
      const el = card as HTMLElement;
      el.addEventListener("mousedown", handleDown);
      el.addEventListener("mouseup", handleUp);
      el.addEventListener("mouseleave", handleUp);
    });

    return () => {
      cards.forEach((card) => {
        const el = card as HTMLElement;
        el.removeEventListener("mousedown", handleDown);
        el.removeEventListener("mouseup", handleUp);
        el.removeEventListener("mouseleave", handleUp);
      });
    };
  }, []);

  return null;
}
