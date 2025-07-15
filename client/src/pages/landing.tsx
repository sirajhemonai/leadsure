import { useState } from "react";
import HeroSection from "@/components/hero-section";
import PainPointsSection from "@/components/pain-points-section";
import SolutionSection from "@/components/solution-section";
import PricingSection from "@/components/pricing-section";
import OrderForm from "@/components/order-form";
import TrialForm from "@/components/trial-form";
import TrustFactors from "@/components/trust-factors";
import FAQSection from "@/components/faq-section";
import ContactSection from "@/components/contact-section";
import FloatingWhatsApp from "@/components/floating-whatsapp";
import leadsureLogo from "@/assets/LeadSure_1752589628551.png";

export default function Landing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gray-50 font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src={leadsureLogo} alt="LeadSure" className="h-10 md:h-12" />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#how-it-works" className="text-gray-600 hover:text-primary transition-colors">How It Works</a>
              <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">Pricing</a>
              <a href="#faq" className="text-gray-600 hover:text-primary transition-colors">FAQ</a>
              <a href="#order" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">Get Started</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 hover:text-primary p-2"
              >
                <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#how-it-works" className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
                <a href="#pricing" className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
                <a href="#faq" className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
                <a href="#order" className="block mx-3 my-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-center" onClick={() => setMobileMenuOpen(false)}>Get Started</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <HeroSection />
      <PainPointsSection />
      <SolutionSection />
      <PricingSection />
      <OrderForm />
      <TrialForm />
      <TrustFactors />
      <FAQSection />
      <ContactSection />
      <FloatingWhatsApp />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <img src={leadsureLogo} alt="LeadSure" className="h-10 md:h-12" />
            </div>
            <p className="text-gray-400 mb-4">Professional lead generation service delivering fresh Apollo data on demand</p>
            <div className="flex justify-center space-x-6">
              <a href="#order" className="text-gray-400 hover:text-white transition-colors">Order Now</a>
              <a href="#trial" className="text-gray-400 hover:text-white transition-colors">Free Trial</a>
              <a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
              <a href="https://wa.me/8801919201192" target="_blank" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-700 text-sm text-gray-400">
              <p>&copy; 2025 LeadSure. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
