interface GlassCardProps {
  children: React.ReactNode
  className?: string
}

export default function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div className={`glass glass-hover rounded-2xl p-6 backdrop-blur-md transition-all duration-300 hover:shadow-xl dark:bg-white/5 dark:border-white/10 ${className}`}>
      {children}
    </div>
  )
}
