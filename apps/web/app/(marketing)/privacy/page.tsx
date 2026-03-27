import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Perceptron — how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pt-28 md:pt-36 pb-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-foreground">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-12">
            Last updated: March 27, 2026
          </p>

          <div className="prose-custom space-y-10">
            <Section title="1. Introduction">
              <p>
                Perceptron (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;)
                is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your
                information when you use our AI-powered customer support
                platform, including our website, dashboard, chat widget, voice
                services, and phone integrations (collectively, the
                &quot;Service&quot;).
              </p>
              <p>
                By accessing or using our Service, you agree to the terms of
                this Privacy Policy. If you do not agree, please do not use the
                Service.
              </p>
            </Section>

            <Section title="2. Information We Collect">
              <h4>Account Information</h4>
              <p>
                When you create an account, we collect your name, email address,
                and organization details. Authentication is handled through
                Clerk, our third-party authentication provider. We do not store
                passwords directly.
              </p>
              <h4>Conversation Data</h4>
              <p>
                We store messages exchanged between end users and AI agents
                (chat, voice transcripts, and phone call logs) to provide the
                Service. This includes message content, timestamps, and
                conversation metadata such as status and contact information.
              </p>
              <h4>Knowledge Base Content</h4>
              <p>
                Documents you upload to train your AI assistant are stored
                securely and processed to generate AI responses. This may
                include PDFs, text files, and other supported document formats.
              </p>
              <h4>Usage Data</h4>
              <p>
                We automatically collect technical information such as browser
                type, device information, IP addresses, pages visited, and
                interaction patterns to improve our Service and diagnose
                technical issues.
              </p>
              <h4>Widget Visitor Data</h4>
              <p>
                When end users interact with an embedded Perceptron widget, we
                may collect their name, email (if voluntarily provided), browser
                information, and conversation content.
              </p>
            </Section>

            <Section title="3. How We Use Your Information">
              <ul>
                <li>
                  Provide, operate, and maintain the Service, including AI
                  responses, conversation management, and real-time
                  notifications.
                </li>
                <li>
                  Process and index uploaded documents to power your AI
                  assistant&apos;s knowledge base.
                </li>
                <li>
                  Improve and personalize the Service, including AI response
                  quality and user experience.
                </li>
                <li>
                  Communicate with you about your account, updates, and support
                  inquiries.
                </li>
                <li>
                  Monitor usage to enforce our terms of service and prevent
                  abuse.
                </li>
                <li>
                  Process billing and subscription management through our
                  payment providers.
                </li>
              </ul>
            </Section>

            <Section title="4. Data Sharing & Third Parties">
              <p>
                We do not sell your personal information. We may share data with
                the following categories of third parties, solely to provide and
                improve the Service:
              </p>
              <ul>
                <li>
                  <strong>Clerk</strong> — authentication and user management.
                </li>
                <li>
                  <strong>Convex</strong> — real-time database and backend
                  infrastructure.
                </li>
                <li>
                  <strong>Vapi</strong> — voice and phone AI capabilities (only
                  if you enable the Vapi integration).
                </li>
                <li>
                  <strong>AI Model Providers</strong> — conversation content is
                  sent to AI language model APIs to generate responses. We use
                  providers with enterprise-grade data handling agreements.
                </li>
                <li>
                  <strong>Sentry</strong> — error monitoring and performance
                  tracking (anonymized technical data only).
                </li>
                <li>
                  <strong>Payment Processors</strong> — billing information is
                  handled by our payment provider; we do not store credit card
                  details.
                </li>
              </ul>
            </Section>

            <Section title="5. Data Retention">
              <p>
                We retain your account data and conversation history for as long
                as your account is active. Uploaded knowledge base documents are
                retained until you delete them. When you delete your account, we
                will remove your personal data within 30 days, except where
                retention is required by law.
              </p>
            </Section>

            <Section title="6. Data Security">
              <p>
                We implement industry-standard security measures to protect your
                data, including encryption in transit (TLS/SSL), secure
                infrastructure hosting, and access controls. However, no method
                of electronic storage or transmission is 100% secure, and we
                cannot guarantee absolute security.
              </p>
            </Section>

            <Section title="7. Your Rights">
              <p>Depending on your jurisdiction, you may have the right to:</p>
              <ul>
                <li>Access, correct, or delete your personal data.</li>
                <li>Export your data in a portable format.</li>
                <li>Object to or restrict certain data processing.</li>
                <li>Withdraw consent where processing is based on consent.</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us at the email
                address provided below.
              </p>
            </Section>

            <Section title="8. Cookies">
              <p>
                We use essential cookies and local storage for authentication,
                session management, and theme preferences. We do not use
                third-party advertising or tracking cookies.
              </p>
            </Section>

            <Section title="9. Children's Privacy">
              <p>
                Our Service is not directed to individuals under the age of 13
                (or the applicable age of consent in your jurisdiction). We do
                not knowingly collect personal information from children. If we
                become aware that we have collected data from a child, we will
                take steps to delete it promptly.
              </p>
            </Section>

            <Section title="10. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of material changes by posting the updated policy on
                this page and updating the &quot;Last updated&quot; date. Your
                continued use of the Service after changes constitutes
                acceptance of the revised policy.
              </p>
            </Section>

            <Section title="11. Contact Us">
              <p>
                If you have any questions about this Privacy Policy or our data
                practices, please contact us at:
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:privacy@perceptron.app"
                  className="text-primary hover:underline"
                >
                  privacy@perceptron.app
                </a>
              </p>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h3 className="text-xl font-bold text-foreground mb-4">{title}</h3>
      <div className="text-muted-foreground leading-relaxed space-y-3 [&_h4]:text-foreground [&_h4]:font-semibold [&_h4]:mt-4 [&_h4]:mb-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-primary [&_a]:hover:underline">
        {children}
      </div>
    </section>
  );
}
