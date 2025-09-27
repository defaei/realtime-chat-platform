"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import MinionPicture from "./minion.jpg";

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState<boolean>(() =>
    typeof window === "undefined" ? false : window.matchMedia(query).matches
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia(query);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);

    if (mql.addEventListener) mql.addEventListener("change", handler);
    else mql.addListener(handler);

    setMatches(mql.matches);

    return () => {
      if (mql.removeEventListener) mql.removeEventListener("change", handler);
      else mql.removeListener(handler);
    };
  }, [query]);

  return matches;
}

export default function LoginPage(): React.ReactNode {
  const [email, setEmail] = useState("");

  let xlBreakPointSize;
  if (typeof window !== "undefined")
    xlBreakPointSize = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--breakpoint-xl");

  const isLarge = useMediaQuery(`(min-width: ${xlBreakPointSize})`);

  return (
    <main className="w-full min-h-screen bg-bg flex flex-col items-center xl:w-full">
      {isLarge && (
        <Image src={MinionPicture} alt="image" width={500} height={500} />
      )}
      <div className="w-full max-w-md mx-auto flex flex-col items-center gap-y-6 px-4 pt-20">
        <div className="w-full flex flex-col items-center">
          <h1 className="text-7xl mb-5">📭</h1>
          <h1 className="text-4xl text-white mb-3 font-semibold">Your Email</h1>
          <h3 className="text-xl text-white">
            Please enter your email address.
          </h3>
        </div>

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
          aria-label="Email"
          autoComplete="email"
          placeholder="Enter your email"
          className="w-[96%] bg-transparent text-text text-xl placeholder:text-placeholder border-b border-border py-1 px-3 focus:outline-none focus:border-red-500 transition-colors"
        />
      </div>

      <div className="fixed left-0 right-0 bottom-6 w-full pointer-events-auto">
        <div
          className="max-w-md mx-auto px-4 pb-4"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <button
            type="button"
            className="w-full bg-white text-black rounded-lg py-3 flex items-center justify-center gap-3 shadow-sm"
          >
            <span className="font-semibold">Continue</span>
          </button>
        </div>
      </div>
    </main>
  );
}
