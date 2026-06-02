import type { LegalDocuments } from "./legal-types";

const CONTACT_EMAIL = "connect@hillchoi.com";

export const legalEn: LegalDocuments = {
  terms: {
    title: "Terms & Conditions",
    intro:
      "Please read these terms before using this website or submitting an enquiry.",
    sections: [
      {
        title: "1. Acceptance of terms",
        paragraphs: [
          'By accessing this portfolio website ("Site"), you agree to these Terms and Conditions. If you do not agree, please discontinue use of the Site.',
          "These terms apply to all visitors, including prospective clients reviewing work samples.",
        ],
      },
      {
        title: "2. Portfolio content",
        paragraphs: [
          "Case studies, visuals, and copy on this Site are presented for demonstration purposes. Some projects may include anonymised or simulated data.",
          "You may not reproduce, distribute, or commercially exploit any materials without prior written permission from the designer.",
        ],
      },
      {
        title: "3. Enquiries & engagements",
        paragraphs: [
          "Submitting a contact form does not create a binding contract. Project scope, fees, and deliverables are agreed separately in writing.",
          "The designer reserves the right to decline engagements that conflict with existing commitments or ethical standards.",
        ],
      },
      {
        title: "4. Limitation of liability",
        paragraphs: [
          'The Site is provided "as is" without warranties of any kind. To the fullest extent permitted by law, the designer is not liable for indirect or consequential damages arising from use of the Site.',
        ],
      },
      {
        title: "5. Changes",
        paragraphs: [
          "These terms may be updated periodically. Continued use after changes are posted constitutes acceptance of the revised terms.",
        ],
      },
    ],
    lastUpdated: "Last updated: JUN 2026",
  },
  privacy: {
    title: "Privacy Policy",
    intro:
      "We respect your privacy. This policy explains what data we collect and why.",
    sections: [
      {
        title: "1. Who we are",
        paragraphs: [
          `This Site is operated by Hill Choi, an independent UI/UX designer based in Hong Kong ("we", "us"). For privacy enquiries, email ${CONTACT_EMAIL}.`,
        ],
      },
      {
        title: "2. Data we collect",
        paragraphs: [
          "We may collect the following when you interact with the Site:",
        ],
        list: [
          "Contact form: name, email, message content, and optional project details you provide.",
          "Technical data: IP address, browser type, device type, and pages visited (via analytics, if enabled).",
          "Cookie preferences stored locally in your browser.",
        ],
      },
      {
        title: "3. How we use your data",
        paragraphs: [
          "We use personal data to respond to enquiries, improve the Site, and comply with legal obligations. We do not sell your personal data.",
        ],
      },
      {
        title: "4. Retention",
        paragraphs: [
          "Contact messages are retained for up to 24 months unless you request earlier deletion. Analytics data is aggregated and anonymised where possible.",
        ],
      },
      {
        title: "5. Your rights",
        paragraphs: [
          "Depending on your location, you may have rights to access, correct, delete, or restrict processing of your personal data. Contact us to exercise these rights.",
        ],
      },
      {
        title: "6. International transfers",
        paragraphs: [
          "If you contact us from outside Hong Kong, your data may be processed in jurisdictions where our email or hosting providers operate. We use providers with appropriate safeguards.",
        ],
      },
    ],
    lastUpdated: "Last updated: JUN 2026",
  },
  cookies: {
    title: "Cookie Policy",
    intro:
      "This site uses a small number of cookies. You control optional analytics via the consent banner.",
    sections: [
      {
        title: "1. What are cookies?",
        paragraphs: [
          "Cookies are small text files stored on your device. They help the Site remember preferences and understand how visitors use pages.",
        ],
      },
      {
        title: "2. Cookies we use",
        paragraphs: ["We categorise cookies as follows:"],
        list: [
          "Essential: required for basic Site functionality (e.g. cookie consent choice). Always active.",
          "Analytics (optional): help us understand traffic patterns. Only loaded if you accept analytics cookies.",
        ],
      },
      {
        title: "3. Managing preferences",
        paragraphs: [
          "Use the cookie banner on first visit, or clear your browser storage and revisit to reset choices. You can also block cookies in your browser settings—some features may not work correctly.",
        ],
      },
      {
        title: "4. Retention",
        paragraphs: [
          "Consent preferences are stored for 12 months. Session cookies expire when you close your browser.",
        ],
      },
    ],
    lastUpdated: "Last updated: JUN 2026",
  },
};
