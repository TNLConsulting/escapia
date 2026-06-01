import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Forêt Dôme by Escapia",
  description: "Terms of Service for Forêt Dôme glamping retreat in Belgium.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#000", color: "#b8b8b8" }}>
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-serif font-light mb-2" style={{ color: "#9d7e44" }}>
          Terms of Service
        </h1>
        <p className="text-sm" style={{ color: "#666" }}>Last updated: June 2026</p>

        <div className="mt-12 space-y-8" style={{ color: "#a8a8a8", lineHeight: "1.8" }}>
          <section>
            <h2 className="text-2xl font-serif font-light mb-4" style={{ color: "#9d7e44" }}>
              1. Agreement to Terms
            </h2>
            <p>
              By accessing and using the Forêt Dôme website (escapia.be) and making a reservation, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or make a reservation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-light mb-4" style={{ color: "#9d7e44" }}>
              2. Booking & Reservation
            </h2>
            <h3 className="text-lg font-serif mb-2" style={{ color: "#9d7e44" }}>
              2.1 Reservation Process
            </h3>
            <p>
              All reservations are made through our Lodgify booking system. By submitting a reservation, you agree to provide accurate, complete, and current information. Escapia reserves the right to refuse or cancel any reservation that contains false or misleading information.
            </p>

            <h3 className="text-lg font-serif mb-2 mt-4" style={{ color: "#9d7e44" }}>
              2.2 Confirmation
            </h3>
            <p>
              A reservation is only confirmed once payment is received and a confirmation email is sent to the email address provided. Confirmation is a binding contract between you and Escapia.
            </p>

            <h3 className="text-lg font-serif mb-2 mt-4" style={{ color: "#9d7e44" }}>
              2.3 Availability
            </h3>
            <p>
              Availability and pricing are subject to change without notice. Escapia is not responsible for errors in pricing or availability displayed on the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-light mb-4" style={{ color: "#9d7e44" }}>
              3. Cancellation & Refunds
            </h2>
            <h3 className="text-lg font-serif mb-2" style={{ color: "#9d7e44" }}>
              3.1 Cancellation Policy
            </h3>
            <p>
              Cancellations must be submitted in writing to info@escapia.be. The cancellation policy is as follows:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>
                <strong>More than 30 days before check-in:</strong> Full refund minus administrative fee (€25)
              </li>
              <li>
                <strong>15-30 days before check-in:</strong> 50% refund of total booking amount
              </li>
              <li>
                <strong>Less than 15 days before check-in:</strong> No refund
              </li>
            </ul>

            <h3 className="text-lg font-serif mb-2 mt-4" style={{ color: "#9d7e44" }}>
              3.2 Refund Processing
            </h3>
            <p>
              Approved refunds will be processed within 10 business days to the original payment method. Refunds cannot be issued to a different payment method or account.
            </p>

            <h3 className="text-lg font-serif mb-2 mt-4" style={{ color: "#9d7e44" }}>
              3.3 Escapia Cancellation
            </h3>
            <p>
              Escapia reserves the right to cancel any reservation due to unforeseen circumstances (emergency maintenance, natural disasters, etc.). In such cases, guests will receive a full refund or the option to rebook on alternative dates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-light mb-4" style={{ color: "#9d7e44" }}>
              4. Payment Terms
            </h2>
            <h3 className="text-lg font-serif mb-2" style={{ color: "#9d7e44" }}>
              4.1 Payment Method
            </h3>
            <p>
              Payment is processed through Lodgify and Stripe. We accept credit/debit cards and other payment methods available through these platforms.
            </p>

            <h3 className="text-lg font-serif mb-2 mt-4" style={{ color: "#9d7e44" }}>
              4.2 Pricing
            </h3>
            <p>
              All prices are listed in EUR. The total booking amount includes the nightly rate and applicable taxes. No hidden fees are charged.
            </p>

            <h3 className="text-lg font-serif mb-2 mt-4" style={{ color: "#9d7e44" }}>
              4.3 Deposit & Balance
            </h3>
            <p>
              Full payment is required at the time of booking. No partial payments or installments are available.
            </p>

            <h3 className="text-lg font-serif mb-2 mt-4" style={{ color: "#9d7e44" }}>
              4.4 Disputed Charges
            </h3>
            <p>
              If you believe your payment was incorrect or unauthorized, contact us immediately at info@escapia.be. We will investigate and assist in resolving payment disputes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-light mb-4" style={{ color: "#9d7e44" }}>
              5. Guest Responsibilities
            </h2>
            <h3 className="text-lg font-serif mb-2" style={{ color: "#9d7e44" }}>
              5.1 House Rules
            </h3>
            <p>
              Guests agree to respect the property and follow all house rules provided in their reservation confirmation and upon check-in. These include but are not limited to:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>No smoking inside the dome</li>
              <li>No parties or excessive noise (quiet hours: 22:00 - 08:00)</li>
              <li>No additional guests beyond those listed in the reservation</li>
              <li>Respectful use of all facilities and amenities</li>
              <li>Proper disposal of waste</li>
              <li>No pets unless pre-approved</li>
            </ul>

            <h3 className="text-lg font-serif mb-2 mt-4" style={{ color: "#9d7e44" }}>
              5.2 Damage & Loss
            </h3>
            <p>
              Guests are responsible for any damage to the property or furnishings caused by their actions. Escapia reserves the right to charge guests for repair or replacement costs. Normal wear and tear is expected and not subject to charges.
            </p>

            <h3 className="text-lg font-serif mb-2 mt-4" style={{ color: "#9d7e44" }}>
              5.3 Liability
            </h3>
            <p>
              Escapia is not responsible for loss, theft, or damage to personal belongings. Guests are advised to lock valuables or leave them at home. The property is not monitored by security cameras in guest areas.
            </p>

            <h3 className="text-lg font-serif mb-2 mt-4" style={{ color: "#9d7e44" }}>
              5.4 Check-in & Check-out
            </h3>
            <p>
              Standard check-in is 15:00 and check-out is 11:00. Early check-in or late check-out may be available upon request and subject to additional fees.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-light mb-4" style={{ color: "#9d7e44" }}>
              6. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, Escapia shall not be liable for:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Indirect, incidental, or consequential damages</li>
              <li>Loss of profits, revenue, or business opportunities</li>
              <li>Personal injury or property damage (except where prohibited by law)</li>
              <li>Service interruptions or website downtime (except due to our negligence)</li>
              <li>Acts of God or unforeseen circumstances beyond our control</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-light mb-4" style={{ color: "#9d7e44" }}>
              7. Website Use
            </h2>
            <h3 className="text-lg font-serif mb-2" style={{ color: "#9d7e44" }}>
              7.1 Acceptable Use
            </h3>
            <p>
              You agree not to:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Violate any laws or regulations</li>
              <li>Harass, threaten, or defame others</li>
              <li>Transmit malware, viruses, or harmful code</li>
              <li>Scrape, crawl, or systematically download content without permission</li>
              <li>Interfere with the functioning of the website</li>
            </ul>

            <h3 className="text-lg font-serif mb-2 mt-4" style={{ color: "#9d7e44" }}>
              7.2 Intellectual Property
            </h3>
            <p>
              All content on escapia.be, including text, images, logos, and design, is the property of Escapia and protected by copyright law. Unauthorized reproduction or distribution is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-light mb-4" style={{ color: "#9d7e44" }}>
              8. Governing Law & Jurisdiction
            </h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of Belgium. Any disputes shall be resolved in the courts of Belgium, and you agree to submit to the exclusive jurisdiction of these courts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-light mb-4" style={{ color: "#9d7e44" }}>
              9. Changes to Terms
            </h2>
            <p>
              Escapia reserves the right to modify these Terms of Service at any time. Changes become effective immediately upon posting to the website. Your continued use constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-light mb-4" style={{ color: "#9d7e44" }}>
              10. Contact & Dispute Resolution
            </h2>
            <p>
              For disputes or inquiries regarding these terms:
            </p>
            <p className="mt-4">
              <strong>Email:</strong> info@escapia.be<br />
              <strong>Address:</strong> Bosuilweg 19, 2275 Lille, Belgium
            </p>
            <p className="mt-4">
              We will attempt to resolve disputes amicably. If unresolved, disputes may be escalated to legal proceedings as specified in Section 8.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-light mb-4" style={{ color: "#9d7e44" }}>
              11. Severability
            </h2>
            <p>
              If any provision of these Terms is found to be unenforceable, the remaining provisions shall continue in full force and effect.
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
