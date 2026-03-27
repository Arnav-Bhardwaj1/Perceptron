const icons = {
  chat: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  mic: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  ),
  brain: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a4 4 0 0 1 4 4 4 4 0 0 1 1 7.9V17a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-3.1A4 4 0 0 1 8 6a4 4 0 0 1 4-4z" />
      <path d="M12 2v8" />
      <path d="M8 10h8" />
    </svg>
  ),
  gear: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  lock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  ),
  database: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14a9 3 0 0 0 18 0V5" />
      <path d="M3 12a9 3 0 0 0 18 0" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  plug: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22v-5" />
      <path d="M9 8V2" />
      <path d="M15 8V2" />
      <path d="M18 8v5a6 6 0 0 1-12 0V8z" />
    </svg>
  ),
  waves: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12h2a4 4 0 0 1 4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 1 4-4h2" />
      <path d="M2 8h2a4 4 0 0 1 4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 1 4-4h2" />
    </svg>
  ),
} as const;

type IconKey = keyof typeof icons;

interface FloatingIcon {
  icon: IconKey;
  size: number;
  top: string;
  left?: string;
  right?: string;
  rotate: string;
  delay: string;
  duration: string;
  color: "amber" | "violet";
  blur: string;
}

const floatingIcons: FloatingIcon[] = [
  { icon: "chat", size: 64, top: "6%", left: "7%", rotate: "-15deg", delay: "0s", duration: "22s", color: "amber", blur: "1.5px" },
  { icon: "brain", size: 80, top: "10%", right: "10%", rotate: "10deg", delay: "-4s", duration: "26s", color: "violet", blur: "2px" },
  { icon: "database", size: 52, top: "18%", left: "30%", rotate: "8deg", delay: "-9s", duration: "20s", color: "amber", blur: "1px" },
  { icon: "mic", size: 56, top: "30%", left: "4%", rotate: "-8deg", delay: "-2s", duration: "19s", color: "violet", blur: "1.5px" },
  { icon: "lock", size: 48, top: "22%", right: "5%", rotate: "12deg", delay: "-11s", duration: "24s", color: "amber", blur: "1px" },
  { icon: "gear", size: 70, top: "42%", right: "6%", rotate: "-6deg", delay: "-6s", duration: "28s", color: "violet", blur: "2px" },
  { icon: "globe", size: 60, top: "55%", left: "5%", rotate: "5deg", delay: "-14s", duration: "21s", color: "amber", blur: "1.5px" },
  { icon: "shield", size: 50, top: "65%", right: "12%", rotate: "-10deg", delay: "-8s", duration: "23s", color: "violet", blur: "1px" },
  { icon: "plug", size: 44, top: "72%", left: "14%", rotate: "14deg", delay: "-16s", duration: "18s", color: "amber", blur: "1.5px" },
  { icon: "waves", size: 58, top: "80%", right: "8%", rotate: "7deg", delay: "-3s", duration: "25s", color: "violet", blur: "2px" },
  { icon: "chat", size: 40, top: "85%", left: "8%", rotate: "-5deg", delay: "-12s", duration: "20s", color: "violet", blur: "1px" },
  { icon: "database", size: 46, top: "75%", right: "28%", rotate: "-12deg", delay: "-7s", duration: "22s", color: "amber", blur: "1.5px" },
  { icon: "lock", size: 36, top: "48%", left: "18%", rotate: "9deg", delay: "-18s", duration: "17s", color: "violet", blur: "1px" },
  { icon: "brain", size: 44, top: "90%", left: "32%", rotate: "6deg", delay: "-5s", duration: "24s", color: "amber", blur: "2px" },
];

function FloatingIconEl({ item }: { item: FloatingIcon }) {
  const isAmber = item.color === "amber";
  return (
    <div
      className="absolute pointer-events-none select-none dark:block hidden"
      style={{
        top: item.top,
        left: item.left,
        right: item.right,
        width: item.size,
        height: item.size,
        color: isAmber ? "rgba(217,119,6,0.18)" : "rgba(139,92,246,0.18)",
        filter: `blur(${item.blur})`,
        transform: `rotate(${item.rotate})`,
        animation: `auth-icon-float ${item.duration} ease-in-out infinite`,
        animationDelay: item.delay,
      }}
    >
      {icons[item.icon]}
    </div>
  );
}

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen min-w-screen h-full flex flex-col items-center justify-center bg-background relative overflow-hidden">
      {/* Base gradient backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(160deg,#07070f_0%,#0d0d1a_40%,#110d1f_60%,#0f0f22_100%)] dark:block hidden" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:block hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Ambient orbs */}
      <div
        className="absolute top-[-15%] right-[-10%] w-[800px] h-[800px] rounded-full blur-3xl pointer-events-none dark:block hidden"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 55%)",
          animation: "auth-orb-drift 20s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-[-10%] left-[-15%] w-[700px] h-[700px] rounded-full blur-3xl pointer-events-none dark:block hidden"
        style={{
          background: "radial-gradient(circle, rgba(217,119,6,0.08) 0%, transparent 55%)",
          animation: "auth-orb-drift 25s ease-in-out infinite",
          animationDelay: "-8s",
        }}
      />

      {/* Floating translucent icons */}
      {floatingIcons.map((item, i) => (
        <FloatingIconEl key={i} item={item} />
      ))}

      {/* Back to home */}
      <a
        href="/"
        className="absolute top-5 left-5 z-20 flex items-center gap-1.5 text-xs font-medium text-white/60 hover:text-white/90 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] hover:border-white/[0.15] backdrop-blur-md rounded-full px-4 py-2 transition-all duration-200"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-3.5">
          <path d="m15 18-6-6 6-6" />
        </svg>
        Back to Home
      </a>

      {/* Card content */}
      <div className="relative z-10">
        {children}
      </div>

      <style>{`
        @keyframes auth-orb-drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -25px) scale(1.05); }
          66% { transform: translate(-20px, 15px) scale(0.96); }
        }
        @keyframes auth-icon-float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.6; }
          25% { transform: translateY(-20px) translateX(8px); opacity: 0.85; }
          50% { transform: translateY(-10px) translateX(-6px); opacity: 0.5; }
          75% { transform: translateY(-25px) translateX(4px); opacity: 0.75; }
        }
      `}</style>
    </div>
  );
};
