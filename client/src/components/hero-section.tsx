export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-[40px] pr-[40px]">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-neutral mb-8 leading-tight">
            Get 100% Fresh Apollo Leads
            <span className="text-primary"> On Demand</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Stop wasting time on outdated lead databases. We scrape fresh, verified data from Apollo using your filters - delivered within a few hours. Contact us before placing your order for any questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#trial" className="bg-secondary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors shadow-lg">
              <i className="fas fa-gift mr-2"></i>
              Get 100 Free Leads
            </a>
            <a href="#order" className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors shadow-lg">
              <i className="fas fa-rocket mr-2"></i>
              Start Your Order
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <i className="fas fa-clock text-secondary mr-2"></i>
              <span>Few Hours Delivery</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-shield-alt text-secondary mr-2"></i>
              <span>100% Fresh Data</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-money-bill-wave text-secondary mr-2"></i>
              <span>Starting at $5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
