export default function ContactSection() {
  return (
    <section className="py-16 bg-neutral text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">Contact us directly for any questions or custom requirements</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/8801919201192" target="_blank" 
               className="bg-secondary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors inline-flex items-center justify-center">
              <i className="fab fa-whatsapp mr-3 text-2xl"></i>
              WhatsApp: 01919201192
            </a>
            <a href="#trial" className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors inline-flex items-center justify-center">
              <i className="fas fa-gift mr-3"></i>
              Get Free Trial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
