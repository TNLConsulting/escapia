import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Forêt Dôme by Escapia",
  description: "Privacy Policy for Forêt Dôme glamping retreat in Belgium.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#000", color: "#b8b8b8" }}>
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-serif font-light mb-2" style={{ color: "#9d7e44" }}>
          Privacy Policy
        </h1>
        <p className="text-sm" style={{ color: "#666" }}>Last updated: June 2026</p>

        <div className="mt-12 space-y-8" style={{ color: "#a8a8a8", lineHeight: "1.8" }}>
          <section>
            <h2 className="text-2xl font-serif font-light mb-4" style={{ color: "#9d7e44" }}>
              1. Introduction
            </h2>
            <p>
              Escapia ("we," "us," "our," or "Company") operates the Forêt Dôme glamping retreat. This Privacy Policy explains how we collect, use, disclose, and otherwise process personal data in connection with our website and reservation services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-light mb-4" style={{ color: "#9d7e44" }}>
              2. Data Controller
            </h2>
            <p>
              Escapia<br />
              Bosuilweg 19<br />
              2275 Lille, Belgium<br />
              Email: info@escapia.be
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-light mb-4" style={{ color: "#9d7e44" }}>
              3. Legal Basis
            </h2>
            <p>
              We process your personal data based on the following legal grounds under GDPR (General Data Protection Regulation):
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>
                <strong>Contractual necessity:</strong> Processing data to fulfill our contract with you (booking, reservation, payment)
              </li>
              <li>
                <strong>Legal obligation:</strong> Processing required by Belgian and EU law (invoicing, tax compliance)
              </li>
              <li>
                <strong>Legitimate interest:</strong> Improving our services, marketing (only with your consent), fraud prevention
              </li>
              <li>
                <strong>Consent:</strong> For marketing communications, analytics, and non-essential cookies
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-light mb-4" style={{ color: "#9d7e44" }}>
              4. Personal Data We Collect
            </h2>
            <p className="mb-4">We may collect the following categories of personal data:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Contact Information:</strong> Name, email address, phone number, postal address
              </li>
              <li>
                <strong>Booking Details:</strong> Check-in/check-out dates, number of guests, special requests
              </li>
              <li>
                <strong>Payment Information:</strong> Payment method, transaction history (processed by Lodgify/Stripe)
              </li>
              <li>
                <strong>Communication:</strong> Messages, inquiries, and feedback
              </li>
              <li>
                <strong>Technical Data:</strong> IP address, browser type, pages visited, device information (via Google Analytics with consent)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-light mb-4" style={{ color: "#9d7e44" }}>
              5. How We Use Your Data
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Process and confirm your reservation</li>
              <li>Send booking confirmations and updates</li>
              <li>Process payments securely</li>
              <li>Communicate about your stay and special requests</li>
              <li>Comply with legal obligations (invoicing, tax)</li>
              <li>Improve our website and services (analytics)</li>
              <li>Prevent fraud and ensure security</li>
              <li>Send marketing communications (only with consent)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-light mb-4" style={{ color: "#9d7e44" }}>
              6. Data Sharing
            </h2>
            <p>
              We do not sell your personal data. We may share your data with:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>
                <strong>Lodgify:</strong> Our booking and property management platform (processes reservations and payments)
              </li>
              <li>
                <strong>Payment Processors:</strong> Stripe and other payment providers (for secure payment processing)
              </li>
              <li>
                <strong>Legal Requirements:</strong> Belgian authorities or law enforcement if required by law
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-light mb-4" style={{ color: "#9d7e44" }}>
              7. Cookies & Tracking
            </h2>
            <p>
              We use cookies and tracking technologies for:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>
                <strong>Essential Cookies:</strong> Required for website functionality
              </li>
              <li>
                <strong>Analytics:</strong> Google Analytics (only with consent) to understand user behavior
              </li>
              <li>
                <strong>Marketing:</strong> To show relevant content and measure campaign effectiveness
              </li>
            </ul>
            <p className="mt-4">
              You can control cookie preferences via our cookie consent banner. See our full Cookie Policy below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-light mb-4" style={{ color: "#9d7e44" }}>
              8. Data Retention
            </h2>
            <p>
              We retain personal data for:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>
                <strong>Booking Information:</strong> For the duration of your stay + 5 years (legal/tax obligations)
              </li>
              <li>
                <strong>Communication:</strong> Until your inquiry is resolved + 1 year
              </li>
              <li>
                <strong>Marketing:</strong> Until you unsubscribe
              </li>
              <li>
                <strong>Analytics:</strong> Aggregated data retained for service improvement
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-light mb-4" style={{ color: "#9d7e44" }}>
              9. Your Rights (GDPR)
            </h2>
            <p>
              As a resident of Belgium/EU, you have the following rights:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>
                <strong>Right of Access:</strong> Request what data we hold about you
              </li>
              <li>
                <strong>Right of Rectification:</strong> Correct inaccurate data
              </li>
              <li>
                <strong>Right of Erasure ("Right to be Forgotten"):</strong> Request deletion of your data
              </li>
              <li>
                <strong>Right to Restrict Processing:</strong> Limit how we use your data
              </li>
              <li>
                <strong>Right to Data Portability:</strong> Receive your data in a portable format
              </li>
              <li>
                <strong>Right to Object:</strong> Opt-out of marketing and certain processing
              </li>
              <li>
                <strong>Right to Withdraw Consent:</strong> Revoke consent at any time
              </li>
            </ul>
            <p className="mt-4">
              To exercise these rights, contact us at info@escapia.be with your request.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-light mb-4" style={{ color: "#9d7e44" }}>
              10. Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, and destruction. However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-light mb-4" style={{ color: "#9d7e44" }}>
              11. Third-Party Links
            </h2>
            <p>
              Our website may contain links to external sites. We are not responsible for the privacy practices of third parties. Please review their privacy policies before sharing your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-light mb-4" style={{ color: "#9d7e44" }}>
              12. Policy Updates
            </h2>
            <p>
              We may update this Privacy Policy periodically. Changes will be posted on this page with an updated "Last Modified" date. Your continued use of our website constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-light mb-4" style={{ color: "#9d7e44" }}>
              13. Contact Us
            </h2>
            <p>
              For privacy inquiries, data requests, or to exercise your rights:
            </p>
            <p className="mt-4">
              <strong>Email:</strong> info@escapia.be<br />
              <strong>Address:</strong> Bosuilweg 19, 2275 Lille, Belgium
            </p>
            <p className="mt-4">
              If you believe we have violated your privacy rights, you may lodge a complaint with the Belgian Data Protection Authority (APD/GBA).
            </p>
          </section>
        </div>

        {/* Back to Home */}
        <div className="mt-16 pt-8" style={{ borderTop: "1px solid rgba(157, 126, 68, 0.1)" }}>
          <a href="/" className="text-sm" style={{ color: "#9d7e44" }}>
            ← Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}
