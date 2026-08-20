import { cn } from "@/lib/utils"

export function DownloadBackground({
  className,
}: {
  className?: string
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed inset-0 z-0 overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 bg-[#050505]" />

      <div className="absolute inset-0 overflow-hidden opacity-[0.055]">

        <div className="absolute left-[-100%] top-[15%] flex whitespace-nowrap animate-[argoluzy-slide_35s_linear_infinite]">
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="
                mx-8
                text-[clamp(80px,10vw,180px)]
                font-black
                tracking-[-0.06em]
                text-white
              "
            >
              ArgoLuzy
            </span>
          ))}
        </div>

        <div className="absolute left-[-100%] top-[47%] flex whitespace-nowrap animate-[argoluzy-slide-reverse_45s_linear_infinite]">
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="
                mx-8
                text-[clamp(60px,8vw,140px)]
                font-black
                tracking-[-0.06em]
                text-white
              "
            >
              ArgoLuzy
            </span>
          ))}
        </div>

        <div className="absolute left-[-100%] top-[79%] flex whitespace-nowrap animate-[argoluzy-slide_40s_linear_infinite]">
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="
                mx-8
                text-[clamp(70px,9vw,160px)]
                font-black
                tracking-[-0.06em]
                text-white
              "
            >
              ArgoLuzy
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
