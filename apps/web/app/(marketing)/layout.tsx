import Image from "next/image";
import Link from "next/link";
import { BookOpenIcon } from "lucide-react";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { ButtonLink } from "@workspace/ui/components/button-link";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-background/80 backdrop-blur-xl border-b border-white/5">
        <div className="absolute top-full left-0 right-0 h-60 overflow-hidden pointer-events-none -z-10 flex justify-center">
          <div className="absolute top-0 w-160 h-px bg-linear-to-r from-transparent via-primary to-transparent" />
          <div className="absolute top-0 w-[24rem] h-[2px] bg-primary/80 blur-[2px]" />
          <div
            className="absolute top-0 w-240 h-48 opacity-30 blur-[20px]"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 50% 100% at 50% 0%, var(--color-primary) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute top-0 w-120 h-24 opacity-40 blur-[10px]"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 50% 100% at 50% 0%, var(--color-primary) 0%, transparent 80%)",
            }}
          />
        </div>

        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="rounded-xl border border-white/15 bg-white/5 p-1.5 group-hover:border-primary/40 group-hover:shadow-[0_0_12px_-3px_rgba(249,115,22,0.3)] transition-all duration-300">
            <Image
              src="/logo.svg"
              alt="Perceptron"
              width={28}
              height={28}
              className="group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <span className="font-semibold text-xl tracking-tight text-foreground">
            Perceptron
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="/#features"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </a>
          <a
            href="/#how-it-works"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            How It Works
          </a>
          <a
            href="/#pricing"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Pricing
          </a>
          <a
            href="/#stats"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Performance
          </a>
          <Link
            href="/docs"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
          >
            <BookOpenIcon className="size-3.5" />
            Docs
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <SignedOut>
            <ButtonLink
              href="/sign-in"
              variant="ghost"
              className="hidden sm:inline-flex text-sm"
            >
              Sign In
            </ButtonLink>
          </SignedOut>
          <SignedIn>
            <ButtonLink
              href="/conversations"
              variant="ghost"
              className="hidden sm:inline-flex text-sm"
            >
              Dashboard
            </ButtonLink>
          </SignedIn>
          <ButtonLink
            href="/#pricing"
            className="rounded-full shadow-md bg-primary text-primary-foreground min-w-[140px]"
          >
            Get Started Free
          </ButtonLink>
        </div>
      </nav>
      {children}
    </>
  );
}
