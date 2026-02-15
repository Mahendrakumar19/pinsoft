interface GlassCardProps {
  children: React.ReactNode
  className?: string
}

export default function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div className={`glass glass-hover rounded-2xl p-6 ${className}`}>
      {children}
    </div>
  )
}
