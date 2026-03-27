"use client";

import Image from "next/image";

export function LoadingScreen({ message }: { message?: string }) {
  return (
    <div className="flex h-full min-h-[60vh] flex-col items-center justify-center gap-6">
      <div className="relative">
        {/* Pulsing glow behind the logo */}
        <div className="absolute inset-0 -m-4 rounded-3xl bg-primary/15 blur-2xl animate-pulse-glow" />

        {/* Logo container */}
        <div className="relative rounded-2xl border border-white/15 bg-white/5 p-4 shadow-xl backdrop-blur-sm">
          <Image
            src="/logo.svg"
            alt="Perceptron"
            width={44}
            height={44}
            className="animate-pulse"
          />
        </div>
      </div>

      {/* Shimmer bar */}
      <div className="h-1 w-28 rounded-full bg-white/5 overflow-hidden">
        <div className="h-full w-1/2 rounded-full bg-linear-to-r from-transparent via-primary/60 to-transparent animate-shimmer" />
      </div>

      {message && (
        <p className="text-sm font-medium text-muted-foreground animate-pulse">
          {message}
        </p>
      )}
    </div>
  );
}
