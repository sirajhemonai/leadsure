import leadsureLogo from "@/assets/LeadSure_1752589628551.png";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <img src={leadsureLogo} alt="LeadSure" className="h-8 mr-4" />
            <h1 className="text-2xl font-bold text-gray-900">Impressum</h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Legal Information</h2>
            
            <h3 className="text-lg font-medium text-gray-900 mb-3">Service Provider</h3>
            <p className="mb-6">
              <strong>LeadSure</strong><br />
              Lead Generation Services<br />
              Website: leadsure.uk<br />
              Contact: +01919201192 (WhatsApp)
            </p>

            <h3 className="text-lg font-medium text-gray-900 mb-3">Nature of Business</h3>
            <p className="mb-6">
              LeadSure provides professional lead generation services by scraping fresh, verified data from Apollo using customer-provided filters and specifications. We deliver high-quality leads within hours of order placement.
            </p>

            <h3 className="text-lg font-medium text-gray-900 mb-3">Responsible for Content</h3>
            <p className="mb-6">
              The content of this website is created and maintained by LeadSure. We are responsible for all content published on this platform in accordance with applicable laws.
            </p>

            <h3 className="text-lg font-medium text-gray-900 mb-3">Disclaimer</h3>
            <p className="mb-6">
              Despite careful content control, we assume no liability for the content of external links. The operators of linked pages are solely responsible for their content. We reserve the right to make changes or updates to the information on this website at any time without notice.
            </p>

            <h3 className="text-lg font-medium text-gray-900 mb-3">Intellectual Property</h3>
            <p className="mb-6">
              All content on this website, including text, graphics, logos, and software, is the property of LeadSure or its licensors and is protected by copyright and other intellectual property laws.
            </p>

            <h3 className="text-lg font-medium text-gray-900 mb-3">Data Protection</h3>
            <p className="mb-6">
              We take the protection of your personal data seriously. For detailed information about how we collect, use, and protect your data, please refer to our <a href="/privacy" className="text-blue-600 hover:text-blue-800">Privacy Policy</a>.
            </p>

            <h3 className="text-lg font-medium text-gray-900 mb-3">Dispute Resolution</h3>
            <p className="mb-6">
              Any disputes arising from the use of our services will be resolved through direct communication via WhatsApp. We are committed to addressing customer concerns promptly and fairly.
            </p>

            <h3 className="text-lg font-medium text-gray-900 mb-3">Applicable Law</h3>
            <p className="mb-6">
              This website and our services are governed by the laws of the United Kingdom. Any legal disputes will be subject to the jurisdiction of UK courts.
            </p>

            <h3 className="text-lg font-medium text-gray-900 mb-3">Contact Information</h3>
            <p className="mb-6">
              For legal inquiries, service questions, or general information:<br />
              <strong>WhatsApp:</strong> +01919201192<br />
              <strong>Website:</strong> leadsure.uk
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