import { Metadata } from 'next';
import GlassCard from '@/components/GlassCard'

export const metadata: Metadata = {
  title: 'About',
  description: 'PinSoft - Enterprise software development studio. We work with you to develop solutions for complex organisational challenges, improving operational efficiency and agility.',
  openGraph: {
    title: 'About | PinSoft - Complete Software Solutions',
    description: 'PinSoft - Enterprise software development studio. We work with you to develop solutions for complex organisational challenges, improving operational efficiency and agility.',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <div className="pt-24 px-4 pb-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 text-center">About PinSoft</h1>
        <p className="text-xl text-gray-600 text-center mb-16">
          Enterprise Software Development Studio
        </p>
        <GlassCard className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-4">
            PinSoft is an enterprise software development studio focused on solving complex 
            organisational challenges. We work with you to develop solutions that improve 
            operational efficiency and business agility.
          </p>
          <p className="text-lg text-gray-700">
            Our approach combines deep technical expertise with business acumen to deliver 
            solutions that drive real results. We specialize in transforming complex requirements 
            into elegant, scalable software solutions.
          </p>
        </GlassCard>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <GlassCard className="text-center">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="text-xl font-semibold mb-2">Enterprise Focus</h3>
            <p className="text-gray-600">Solving complex challenges</p>
          </GlassCard>
          <GlassCard className="text-center">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Efficiency</h3>
            <p className="text-gray-600">Improving operations</p>
          </GlassCard>
          <GlassCard className="text-center">
            <div className="text-4xl mb-3">🔄</div>
            <h3 className="text-xl font-semibold mb-2">Agility</h3>
            <p className="text-gray-600">Enhancing adaptability</p>
          </GlassCard>
        </div>
      </div>
    </div>
  )
}
