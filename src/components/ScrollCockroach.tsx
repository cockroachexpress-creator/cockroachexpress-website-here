"use client";

import { useEffect, useState, useCallback } from "react";

export default function ScrollCockroach() {
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  const updateProgress = useCallback(() => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight;
    const viewHeight = window.innerHeight;
    const maxScroll = docHeight - viewHeight;

    if (maxScroll <= 0) {
      setProgress(0);
      return;
    }

    const p = Math.min(1, Math.max(0, scrollY / maxScroll));
    setProgress(p);
  }, []);

  useEffect(() => {
    setMounted(true);
    updateProgress();

    const handleLenisScroll = () => updateProgress();
    window.addEventListener("lenis-scroll", handleLenisScroll);

    const handleNativeScroll = () => updateProgress();
    window.addEventListener("scroll", handleNativeScroll, { passive: true });

    const handleResize = () => updateProgress();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("lenis-scroll", handleLenisScroll);
      window.removeEventListener("scroll", handleNativeScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [updateProgress]);

  if (!mounted) return null;

  // Cockroach starts just below navbar and travels down the right edge
  const startY = 0;
  const endY = typeof window !== "undefined" ? window.innerHeight - 100 : 600;
  const travelDistance = Math.max(0, endY - startY - 56);
  const cockroachY = startY + progress * travelDistance;
  const lineHeight = Math.max(0, cockroachY);

  return (
    <div
      className="scroll-cockroach-container hidden md:block"
      aria-hidden="true"
    >
      {/* Vertical trailing line */}
      <div
        className="scroll-cockroach-line"
        style={{ height: `${lineHeight}px` }}
      />

      {/* Cockroach icon — enters from right */}
      <div
        className="scroll-cockroach-icon"
        style={{
          top: `${cockroachY}px`,
        }}
      >
        <svg
          width="48"
          height="60"
          viewBox="0 0 280 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Pronotum (shield behind head) */}
          <path
            d="M115 95 Q140 78 165 95 Q172 115 165 138 Q140 148 115 138 Q108 115 115 95Z"
            fill="#991b1b"
            opacity="0.6"
          />

          {/* Head */}
          <ellipse cx="140" cy="72" rx="28" ry="22" fill="#dc2626" />
          {/* Eyes */}
          <ellipse cx="126" cy="68" rx="6" ry="7" fill="#1a1a1a" />
          <ellipse cx="154" cy="68" rx="6" ry="7" fill="#1a1a1a" />
          {/* Eye highlights */}
          <ellipse cx="124" cy="66" rx="2" ry="2.5" fill="#450a0a" />
          <ellipse cx="152" cy="66" rx="2" ry="2.5" fill="#450a0a" />

          {/* Antennae - left */}
          <path
            d="M124 56 Q105 30 78 18"
            stroke="#dc2626"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M78 18 Q68 12 60 15"
            stroke="#dc2626"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Antennae - right */}
          <path
            d="M156 56 Q175 30 202 18"
            stroke="#dc2626"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M202 18 Q212 12 220 15"
            stroke="#dc2626"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Thorax */}
          <ellipse cx="140" cy="128" rx="38" ry="28" fill="#dc2626" />

          {/* Abdomen */}
          <ellipse cx="140" cy="210" rx="48" ry="72" fill="#dc2626" />
          {/* Abdomen segments */}
          <path
            d="M94 170 Q140 162 186 170"
            stroke="#991b1b"
            strokeWidth="2"
            opacity="0.5"
            fill="none"
          />
          <path
            d="M92 195 Q140 187 188 195"
            stroke="#991b1b"
            strokeWidth="2"
            opacity="0.5"
            fill="none"
          />
          <path
            d="M94 220 Q140 212 186 220"
            stroke="#991b1b"
            strokeWidth="2"
            opacity="0.5"
            fill="none"
          />
          <path
            d="M100 245 Q140 237 180 245"
            stroke="#991b1b"
            strokeWidth="2"
            opacity="0.5"
            fill="none"
          />
          <path
            d="M108 268 Q140 260 172 268"
            stroke="#991b1b"
            strokeWidth="2"
            opacity="0.5"
            fill="none"
          />

          {/* Wing line */}
          <line
            x1="140"
            y1="105"
            x2="140"
            y2="272"
            stroke="#991b1b"
            strokeWidth="2"
            opacity="0.35"
          />

          {/* Left front leg */}
          <path
            d="M106 112 Q72 98 48 80"
            stroke="#dc2626"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M48 80 Q38 72 30 68"
            stroke="#dc2626"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          {/* Left middle leg */}
          <path
            d="M98 140 Q62 132 32 125"
            stroke="#dc2626"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M32 125 Q20 122 12 126"
            stroke="#dc2626"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          {/* Left hind leg */}
          <path
            d="M100 175 Q68 182 42 200"
            stroke="#dc2626"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M42 200 Q32 208 26 215"
            stroke="#dc2626"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />

          {/* Right front leg */}
          <path
            d="M174 112 Q208 98 232 80"
            stroke="#dc2626"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M232 80 Q242 72 250 68"
            stroke="#dc2626"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          {/* Right middle leg */}
          <path
            d="M182 140 Q218 132 248 125"
            stroke="#dc2626"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M248 125 Q260 122 268 126"
            stroke="#dc2626"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          {/* Right hind leg */}
          <path
            d="M180 175 Q212 182 238 200"
            stroke="#dc2626"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M238 200 Q248 208 254 215"
            stroke="#dc2626"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />

          {/* Cerci (tail feelers) */}
          <path
            d="M128 278 Q112 300 100 318"
            stroke="#b91c1c"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M152 278 Q168 300 180 318"
            stroke="#b91c1c"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />

          {/* Subtle body highlight */}
          <ellipse
            cx="130"
            cy="190"
            rx="18"
            ry="50"
            fill="#ef4444"
            opacity="0.2"
          />
        </svg>
      </div>
    </div>
  );
}
