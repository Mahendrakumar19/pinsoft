export default function WorkflowOverview() {
  const steps = [
    { number: '01', title: 'Consultation', description: 'Understand your needs and goals' },
    { number: '02', title: 'Design', description: 'Create scalable architecture' },
    { number: '03', title: 'Development', description: 'Build with best practices' },
    { number: '04', title: 'Deployment', description: 'Launch and maintain' },
  ]

  return (
    <section className="py-20 px-4 glass-blue">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">How We Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold text-primary mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
