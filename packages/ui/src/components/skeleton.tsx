import { cn } from "@workspace/ui/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "relative overflow-hidden rounded-md bg-accent isolate",
        "before:absolute before:inset-0 before:-translate-x-full before:bg-linear-to-r before:from-transparent before:via-white/10 before:to-transparent before:animate-shimmer",
        "dark:bg-white/5 dark:before:via-white/[0.07]",
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }
