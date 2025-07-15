export default function PainPointsSection() {
  const painPoints = [
    {
      icon: "fas fa-exclamation-triangle",
      title: "Outdated Contact Data",
      description: "Purchased lead lists with 60-80% invalid emails and phone numbers, wasting your time and money."
    },
    {
      icon: "fas fa-hourglass-half",
      title: "Time-Consuming Manual Research",
      description: "Spending hours manually searching Apollo, LinkedIn, and other platforms for qualified prospects."
    },
    {
      icon: "fas fa-ban",
      title: "Generic, Untargeted Lists",
      description: "Getting broad, untargeted lead lists that don't match your specific ideal customer profile."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-neutral mb-12">
          Tired of These Common Lead Generation Problems?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div key={index} className="text-center p-6 bg-red-50 rounded-lg">
              <i className={`${point.icon} text-red-500 text-4xl mb-4`}></i>
              <h3 className="text-xl font-semibold text-neutral mb-3">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
