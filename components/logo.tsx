import { Shield } from "lucide-react"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
          <Shield className="w-5 h-5 text-primary" />
        </div>
        <div className="absolute inset-0 rounded-full glow-purple opacity-50" />
      </div>
      <span className="text-xl font-bold tracking-tight text-foreground">Nelkai</span>
    </div>
  )
}
