"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function OTPForm(): React.ReactNode {
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
  const [authState, setAuthState] = useState({
    status: "idle",
    error: null,
    otp: Array(6).fill("") as string[],
  });

  const otpRefs = useRef<Array<HTMLInputElement | null>>([]);

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleOTPChange = (index: number, value: string) => {
    const digit = value.replace(/\D/g, "").slice(0, 1);

    setAuthState((prev) => {
      const newOtp = [...prev.otp];
      newOtp[index] = digit;
      return {
        ...prev,
        otp: newOtp,
        error: null,
        status: prev.status === "error" ? "sent" : prev.status,
      };
    });

    if (digit && index < otpRefs.current.length - 1) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOTPKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    const key = e.key;

    if (key === "Backspace") {
      if (authState.otp[index]) {
        setAuthState((prev) => {
          const newOtp = [...prev.otp];
          newOtp[index] = "";
          return { ...prev, otp: newOtp };
        });
      } else if (index > 0) {
        otpRefs.current[index - 1]?.focus();
        setAuthState((prev) => {
          const newOtp = [...prev.otp];
          newOtp[index - 1] = "";
          return { ...prev, otp: newOtp };
        });
      }
    } else if (key === "ArrowLeft" && index > 0) {
      otpRefs.current[index - 1]?.focus();
    } else if (key === "ArrowRight" && index < otpRefs.current.length - 1) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  return (
    <main className="w-full h-screen bg-bg flex flex-col items-center 2xl:flex-row-reverse 2xl:justify-center 2xl:items-start">
      <div className="hidden 2xl:flex justify-center items-center w-[100%] h-full relative">
        <Image
          src="/static_images/login.jpg"
          alt="image"
          fill
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

          <div className="text-sm font-medium text-white space-x-3 text-center flex gap-3">
            {authState.otp.map((digit, index) => (
              <input
                key={index}
                ref={(element) => (otpRefs.current[index] = element)}
                value={digit}
                onChange={(e) => handleOTPChange(index, e.target.value)}
                onKeyDown={(e) => handleOTPKeyDown(index, e)}
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={1}
                className="w-12 h-12 text-center text-lg font-semibold border rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/20"
                aria-label={`OTP digit ${index + 1}`}
                autoComplete={index === 0 ? "one-time-code" : "off"}
              />
            ))}
          </div>
        </div>

        <button
          type="button"
          className={`w-[90%] ${
            isInputFocused ? "mb-[50vh]" : "mb-0"
          } mt-[2rem] duration-500 font-semibold cursor-pointer bg-white text-black rounded-lg py-3 flex items-center justify-center gap-3 shadow-sm`}
        >
          Continue
        </button>
      </form>
    </main>
  );
}
