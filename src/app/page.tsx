import { Metadata } from 'next';
import Hero from '@/components/Hero'
import FeaturedSolutions from '@/components/FeaturedSolutions'
import WorkflowOverview from '@/components/WorkflowOverview'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Home',
  description: 'PinSoft - Enterprise software development studio. We work with you to develop solutions for complex organisational challenges, improving operational efficiency and agility.',
  openGraph: {
    title: 'Home | PinSoft - Complete Software Solutions',
    description: 'PinSoft - Enterprise software development studio. We work with you to develop solutions for complex organisational challenges, improving operational efficiency and agility.',
    type: 'website',
  },
}

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedSolutions />
      <WorkflowOverview />
      <CTASection />
    </div>
  )
}
