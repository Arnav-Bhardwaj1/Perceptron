"use client";

import * as React from "react";
import { useRouter, usePathname } from "next/navigation";
import { type VariantProps } from "class-variance-authority";

import { Button, buttonVariants } from "./button";
import { Spinner } from "./spinner";

interface ButtonLinkProps
  extends Omit<React.ComponentProps<"button">, "onClick">,
    VariantProps<typeof buttonVariants> {
  href: string;
}

function ButtonLink({
  href,
  children,
  disabled,
  ...props
}: ButtonLinkProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = React.useState(false);
  const targetRef = React.useRef(href);

  React.useEffect(() => {
    setIsLoading(false);
  }, [pathname]);

  const isHashLink = href.startsWith("#") || href.includes("/#");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isLoading) return;

    if (isHashLink) {
      window.location.href = href;
      return;
    }

    targetRef.current = href;
    setIsLoading(true);
    router.push(href);
  };

  return (
    <Button
      disabled={disabled || isLoading}
      onClick={handleClick}
      {...props}
    >
      {isLoading && <Spinner />}
      {children}
    </Button>
  );
}

export { ButtonLink };
