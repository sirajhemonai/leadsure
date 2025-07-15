export default function SolutionSection() {
  const steps = [
    {
      number: "1",
      title: "You Create Apollo Filter",
      description: "Set up your precise targeting criteria in Apollo with your ideal customer profile and filters.",
      color: "bg-primary"
    },
    {
      number: "2",
      title: "Share the Link With Us",
      description: "Simply copy and paste your Apollo filtered results link - no complex setup or explanations needed.",
      color: "bg-secondary"
    },
    {
      number: "3",
      title: "Get Fresh Data Delivered",
      description: "We scrape your filtered data fresh and deliver it in CSV format within a few hours.",
      color: "bg-accent"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral mb-4">Here's How We Solve It</h2>
          <p className="text-xl text-gray-600">Our streamlined process delivers exactly what you need, when you need it.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className={`${step.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                <span className="text-2xl font-bold">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
