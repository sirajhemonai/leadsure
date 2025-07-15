import { useState } from "react";

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How fresh is the data?",
      answer: "All data is scraped fresh from Apollo after you place your order. We don't use pre-existing databases or cached results. Every lead is extracted specifically for your request."
    },
    {
      question: "What format do I receive the leads in?",
      answer: "You'll receive your leads in a clean CSV file with standard fields like name, email, phone, company, title, and any other data available from Apollo based on your filters."
    },
    {
      question: "How do I create an Apollo filter link?",
      answer: "Go to Apollo.io, set up your search criteria (industry, location, company size, etc.), then copy the URL from your browser. This URL contains all your filter parameters."
    },
    {
      question: "What if I need more than 10,000 leads?",
      answer: "For orders over 10,000 leads, contact us directly on WhatsApp for custom pricing and delivery timeframes. We can handle large volume orders efficiently."
    },
    {
      question: "Do you guarantee the data quality?",
      answer: "We extract exactly what's available in Apollo based on your filters. While we can't guarantee 100% email deliverability (as this depends on Apollo's data), we ensure all available fields are captured accurately."
    },
    {
      question: "How do I pay for my order?",
      answer: "After you submit your order, we'll contact you on WhatsApp to collect payment using your preferred method (Wise, Binance, or Bank Transfer). Payment is processed before we start working on your order."
    },
    {
      question: "How long does delivery take?",
      answer: "Most orders are delivered within a few hours. For large orders (10,000+ leads), it may take slightly longer. We'll keep you updated on progress via WhatsApp."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-neutral mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button 
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-neutral">{faq.question}</span>
                <i className={`fas ${openFAQ === index ? 'fa-chevron-up' : 'fa-chevron-down'} text-gray-400`}></i>
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
