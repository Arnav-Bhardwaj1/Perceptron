export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen min-w-screen h-full w-full flex flex-col items-center justify-center bg-background dark:bg-[#050508] relative overflow-hidden selection:bg-primary/30">

      {/* Dynamic Aurora Base */}
      <div className="absolute inset-0 z-0 dark:block hidden">
        {/* Deep Violet Center Sweep */}
        <div
          className="absolute top-[-10%] left-[-15%] w-[55%] h-[55%] rounded-full mix-blend-screen filter blur-[100px] opacity-35 animate-aurora-1"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.7) 0%, rgba(76,29,149,0) 70%)' }}
        />
        {/* Bright Orange/Amber Core Accent */}
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-aurora-2"
          style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.7) 0%, rgba(194,65,12,0) 70%)' }}
        />
        {/* Teal Ambient Glow for contrast */}
        <div
          className="absolute top-[30%] right-[-5%] w-[40%] h-[40%] rounded-full mix-blend-screen filter blur-[90px] opacity-20 animate-aurora-3"
          style={{ background: 'radial-gradient(circle, rgba(3,218,197,0.5) 0%, rgba(0,180,160,0) 70%)' }}
        />
        {/* Soft Pink/Fuchsia Overlay */}
        <div
          className="absolute bottom-[10%] left-[10%] w-[40%] h-[40%] rounded-full mix-blend-screen filter blur-[80px] opacity-15 animate-aurora-4"
          style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.5) 0%, rgba(190,24,93,0) 70%)' }}
        />
      </div>

      {/* SVG Noise Overlay for premium matte look */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.25] mix-blend-overlay pointer-events-none dark:block hidden"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}
      />

      {/* Refined Perspective Grid */}
      <div
        className="absolute inset-0 z-[2] opacity-[0.06] pointer-events-none dark:block hidden"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
        }}
      />

      {/* Light Mode Fallback Base */}
      <div className="absolute inset-0 z-0 block dark:hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-100 via-background to-background opacity-80" />

      {/* Back to Home Button */}
      <a
        href="/"
        className="absolute top-6 left-6 z-20 flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white bg-black/20 hover:bg-black/40 border border-white/10 hover:border-white/20 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.5)] backdrop-blur-xl rounded-full px-5 py-2.5 transition-all duration-300 group"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 group-hover:-translate-x-1 transition-transform duration-300">
          <path d="m15 18-6-6 6-6" />
        </svg>
        Back to Home
      </a>

      {/* Content wrapper with elevation drop-shadow to separate from intense bg */}
      <div className="relative z-10 w-full max-w-md mx-auto p-4 flex flex-col items-center justify-center">
        {/* A subtle glowing pedestal beneath the card */}
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 blur-[80px] -z-10 rounded-full dark:block hidden" />

        {children}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes aurora-1 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(12%, 8%) scale(1.1) rotate(5deg); }
          66% { transform: translate(-8%, 5%) scale(0.95) rotate(-5deg); }
        }
        @keyframes aurora-2 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(-10%, -15%) scale(1.05) rotate(-3deg); }
          66% { transform: translate(8%, -5%) scale(1.15) rotate(4deg); }
        }
        @keyframes aurora-3 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(-15%, 10%) scale(1.1) rotate(6deg); }
          66% { transform: translate(10%, -12%) scale(0.9) rotate(-4deg); }
        }
        @keyframes aurora-4 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(10%, -10%) scale(0.95) rotate(-5deg); }
          66% { transform: translate(-12%, 15%) scale(1.05) rotate(5deg); }
        }
        
        .animate-aurora-1 { animation: aurora-1 25s ease-in-out infinite alternate; }
        .animate-aurora-2 { animation: aurora-2 28s ease-in-out infinite alternate-reverse; }
        .animate-aurora-3 { animation: aurora-3 32s ease-in-out infinite alternate; }
        .animate-aurora-4 { animation: aurora-4 35s ease-in-out infinite alternate-reverse; }
      `}</style>
    </div>
  );
};
