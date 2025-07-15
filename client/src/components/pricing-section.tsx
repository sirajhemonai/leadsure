import { useState } from "react";

export default function PricingSection() {
  const [leadQuantity, setLeadQuantity] = useState(1000);

  const calculatePrice = (quantity: number) => {
    return Math.max(1, Math.ceil(quantity / 1000)) * 5;
  };

  const totalPrice = calculatePrice(leadQuantity);

  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600">Pay only for what you need. No monthly subscriptions or hidden fees.</p>
        </div>
        
        {/* Pricing Calculator */}
        <div className="bg-gray-50 rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-semibold text-neutral mb-6 text-center">Pricing Calculator</h3>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="flex items-center space-x-3">
              <label className="text-lg font-medium text-neutral">Number of Leads:</label>
              <input 
                type="number" 
                value={leadQuantity}
                onChange={(e) => setLeadQuantity(Math.max(1000, parseInt(e.target.value) || 1000))}
                min="1000" 
                step="1000" 
                className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="text-2xl font-bold text-primary">
              × $5 = ${totalPrice}
            </div>
          </div>
          <div className="text-center mt-4 text-sm text-gray-600">
            <p>Base rate: $5 per 1,000 leads • Minimum order: 1,000 leads</p>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-neutral mb-4">Accepted Payment Methods</h3>
          <div className="flex justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <i className="fas fa-university text-primary text-xl"></i>
              <span className="text-gray-700">Wise</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fab fa-bitcoin text-primary text-xl"></i>
              <span className="text-gray-700">Binance</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-building text-primary text-xl"></i>
              <span className="text-gray-700">Bank Transfer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
