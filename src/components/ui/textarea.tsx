import * as React from "react"
import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      suppressHydrationWarning
      data-slot="textarea"
      className={cn(
        "flex min-h-[80px] w-full rounded-lg border border-input bg-card/40 px-3 py-2 text-sm shadow-sm transition-all placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-primary-gold focus-visible:ring-1 focus-visible:ring-primary-gold disabled:cursor-not-allowed disabled:opacity-50 hover:border-primary-gold/40 duration-200 glass-panel",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
