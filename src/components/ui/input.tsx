import * as React from "react"
import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      suppressHydrationWarning
      type={type}
      data-slot="input"
      className={cn(
        "flex h-10 w-full rounded-lg border border-input bg-card/40 px-3 py-2 text-sm shadow-sm transition-all file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-primary-gold focus-visible:ring-1 focus-visible:ring-primary-gold disabled:cursor-not-allowed disabled:opacity-50 hover:border-primary-gold/40 duration-200 glass-panel",
        className
      )}
      {...props}
    />
  )
}

export { Input }
