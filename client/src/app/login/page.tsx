"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function LoginPage(): React.ReactNode {
  const [email, setEmail] = useState<string>("");
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  return (
    <main className="w-full h-screen bg-bg flex flex-col items-center 2xl:flex-row-reverse 2xl:justify-center 2xl:items-start">
      <div className="hidden 2xl:flex justify-center items-center w-[100%] h-full relative">
        <Image
          src="/static_images/login.jpg"
          alt="image"
          layout="fill"
          className="object-cover w-full h-full"
        />
      </div>

      <form className="w-full max-w-[470px] h-full max-h-full flex flex-col 2xl:mx-[5%] 3xl:mx-[10%] 4xl:max-w-[600px] pt-[15vh] pb-[5vh] duration-500 items-center justify-between">
        <div className="w-full flex flex-col items-center gap-y-6 px-4">
          <div className="w-full flex flex-col items-center">
            <h1 className="text-7xl mb-5">📭</h1>
            <h1 className="text-4xl text-white mb-3 font-semibold">
              Your Email
            </h1>
            <h3 className="text-xl text-white">
              Please enter your email address.
            </h3>
          </div>

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
            required
            ref={emailRef}
            aria-label="Email"
            autoComplete="email"
            placeholder="Enter your email"
            className="w-[96%] bg-transparent text-white text-xl placeholder:text-placeholder border-b border-border py-1 px-3 focus:outline-none focus:border-white transition-colors"
          />
        </div>

        <button
          type="button"
          className={`w-[90%] ${
            isInputFocused ? "mb-[50vh]" : "mb-0"
          } mt-[2rem] duration-500 fon mt-t-semibold cursor-pointer bg-white text-black rounded-lg py-3 flex items-center justify-center gap-3 shadow-sm`}
        >
          Continue
        </button>
      </form>
    </main>
  );
}
