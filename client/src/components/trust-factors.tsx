export default function TrustFactors() {
  const trustFactors = [
    {
      icon: "fas fa-clock",
      title: "Fast Delivery",
      description: "Get your leads within a few hours, not days",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: "fas fa-sync-alt",
      title: "100% Fresh Data",
      description: "Every lead is scraped fresh after your order",
      color: "bg-secondary/10 text-secondary"
    },
    {
      icon: "fas fa-target",
      title: "Precise Targeting",
      description: "Use your exact Apollo filters for perfect matches",
      color: "bg-accent/10 text-accent"
    },
    {
      icon: "fas fa-headset",
      title: "Direct Support",
      description: "WhatsApp support for immediate assistance",
      color: "bg-primary/10 text-primary"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-neutral mb-12">Why Choose LeadSure?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustFactors.map((factor, index) => (
            <div key={index} className="text-center">
              <div className={`${factor.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                <i className={`${factor.icon} text-2xl`}></i>
              </div>
              <h3 className="text-lg font-semibold text-neutral mb-2">{factor.title}</h3>
              <p className="text-gray-600">{factor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
