import leadsureLogo from "@/assets/LeadSure_1752589628551.png";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <img src={leadsureLogo} alt="LeadSure" className="h-8 mr-4" />
            <h1 className="text-2xl font-bold text-gray-900">Privacy Policy</h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Effective Date:</strong> January 15, 2025<br />
              <strong>Last Updated:</strong> January 15, 2025
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              We collect information you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Name and contact information (email, WhatsApp number)</li>
              <li>Business information and lead requirements</li>
              <li>Payment information (processed through secure third-party providers)</li>
              <li>Apollo filter links and lead specifications</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Provide lead generation services</li>
              <li>Process orders and payments</li>
              <li>Communicate with you via WhatsApp about your orders</li>
              <li>Improve our services and customer experience</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Information Sharing</h2>
            <p className="mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties except:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>With your explicit consent</li>
              <li>To service providers who assist in our operations</li>
              <li>When required by law or legal process</li>
              <li>To protect our rights and prevent fraud</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
            <p className="mb-6">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All data is encrypted in transit and at rest.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Data Retention</h2>
            <p className="mb-6">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy, comply with legal obligations, and resolve disputes.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Data portability</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Cookies and Tracking</h2>
            <p className="mb-6">
              We use essential cookies for website functionality. We do not use tracking cookies for advertising purposes.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">8. International Transfers</h2>
            <p className="mb-6">
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Contact Information</h2>
            <p className="mb-6">
              If you have questions about this privacy policy, please contact us:<br />
              <strong>WhatsApp:</strong> +01919201192<br />
              <strong>Website:</strong> leadsure.uk
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Changes to This Policy</h2>
            <p className="mb-6">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated effective date.
            </p>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <a href="/" className="text-blue-600 hover:text-blue-800 font-medium">
                ← Back to Home
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}