import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "1. Information We Collect Our Service",
    content: [
      "We may collect personally identifiable information about you through our Service when you register for an account, such as your full name, phone number, and email address. If you choose to purchase a product from us, we or our third-party payment processors will collect your payment information also. We also collect data through our partners (customers) who use our Service (including by embedding our code on their websites) to analyze usage of their websites. When you use our Service or if you visit such websites, your browser may send us certain information about you as described below. We do not send any promotional emails; however, we may send you service-related emails related to your account. If you no longer wish to receive these emails, you may opt out of them by canceling your account.",
      {
        subtitle: "Cookies and Tracking Technologies",
        text: "Technologies such as cookies, beacons, tags, and scripts are used by Kolorowey Media and our partners (such as advertising, marketing, and analytics), affiliates, or analytics or service providers. These technologies are used in analyzing trends, administering the site, tracking users' movements around the site, and to gather demographic information about our user base as a whole. We may receive reports based on the use of these technologies by these companies on an individual as well as aggregated basis. Our partners may also use such technologies to deliver advertisements to you as described below.\n\nWe use cookies to remember users' settings, authentication, preferences, and analytics. Users can control the use of cookies at the individual browser level. If you reject cookies, you may still use our site, but your ability to use some features, ads, or areas of our site may be limited.",
      },
      {
        subtitle: "Log File Information",
        text: "Log file information is automatically reported by your browser each time you access a web page on our Service. When you access the Service, our servers automatically record certain information that your web browser sends whenever you visit any website. These server logs may include information such as your web request, Internet Protocol (\"IP\") address, browser type, referring/exit pages and URLs, number of clicks, domain names, landing pages, pages viewed, and other such information. We do not link this automatically-collected data to personally identifiable information.",
      },
      {
        subtitle: "Flash LSOs",
        text: "We use Local Storage Objects (LSOs) such as HTML5 to store content information and preferences. Third parties with whom we partner to provide certain features on our site or to display advertising based upon your Web browsing activity use LSOs such as HTML 5 and Flash to collect and store information.",
      },
      {
        subtitle: "Information Related to Data Collected for our Clients",
        text: "Kolorowey Media collects information under the direction of its Clients and has no direct relationship with the individuals whose personal data it processes. If you are a customer of one of our Clients and would no longer like to be contacted by one of our Clients that use our service, please contact the Client that you interact with directly. We may transfer personal information to companies that help us provide our service. Transfers to subsequent third parties are covered by the service agreements with our Clients.",
      },
      {
        subtitle: "Access and Retention of Data Controlled by our Clients",
        text: "An individual who seeks access, or who seeks to correct, amend, or delete inaccurate data should direct his query to the Kolorowey Media's Client (the data controller). If requested to remove data, we will respond within 30 days.\n\nWe will retain personal data we process on behalf of our Clients for as long as needed to provide our services. Kolorowey Media will retain this personal information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.",
      },
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "We use the information that we collect to operate and maintain our Service, send you marketing communications, respond to your questions and concerns, and to help our partners improve their online offerings.",
    ],
  },
  {
    title: "3. How We Share Your Information",
    content: [
      {
        subtitle: "Personally Identifiable Information",
        text: "Kolorowey Media will not rent or sell your personally identifiable information to others. We may store personal information in locations outside the direct control of Kolorowey Media (for instance, on servers or databases co-located with hosting providers or third party cloud infrastructure). Any personally identifiable information you elect to make publicly available on the Service, such as posting comments on our blog page, will be available to other Users. If you remove information that you have made public on the Service, copies may remain viewable in cached and archived pages of the Service, or if other Users have copied or saved that information.",
      },
      {
        subtitle: "Non-Personally Identifiable Information",
        text: "We may share non-personally identifiable information (such as anonymous usage data, referring/exit pages and URLs, platform types, number of clicks, etc.) with interested third parties to help them understand the usage patterns for certain Kolorowey Media services and those of our partners. Non-personally identifiable information may be stored indefinitely.",
      },
      {
        subtitle: "Instances where we are required to share your information",
        text: "Kolorowey Media will disclose your information where required to do so by law or subpoena or if we reasonably believe that such action is necessary to (a) comply with the law and the reasonable requests of law enforcement; (b) to enforce our Terms of Service or to protect the security or integrity of our Service; and/or (c) to exercise or protect the rights, property, or personal safety of Kolorowey Media, our Users, or others.",
      },
      {
        subtitle: "What happens in the event of a change of control",
        text: "We may buy or sell/divest/transfer the company (including any shares in the company), or any combination of its products, services, assets and/or businesses. Your information such as customer names and email addresses, and other User information related to the Service may be among the items sold or otherwise transferred in these types of transactions. You will be notified via email and/or a prominent notice on our Web site of any change in ownership or uses of your personal information, as well as any choices you may have regarding your personal information.",
      },
      {
        subtitle: "Behavioral Targeting / Re-Targeting",
        text: "We partner with a third party to either display advertising on our Web site or to manage our advertising on other sites. Our third party partner may use technologies such as cookies to gather information about your activities on this site and other sites in order to provide you advertising based upon your browsing activities and interests. If you wish to not have this information used for the purpose of serving you interest-based ads, you may opt-out. Please note this does not opt you out of being served ads. You will continue to receive generic ads.\n\nThe Kolorowey Media Privacy Policy does not apply to, and we cannot control the activities of, third-party ad servers and ad networks. Please contact or consult the respective privacy policies of such ad servers or ad networks for more information.",
      },
      {
        subtitle: "Testimonials",
        text: "We display personal testimonials of satisfied customers on our site in addition to other endorsements. With your consent we may post your testimonial along with your name. If you wish to update or delete your testimonial, you can contact us at reach@kolorowey.com.",
      },
    ],
  },
  {
    title: "4. Storage and Processing",
    content: [
      "Your information collected through the Service may be stored and processed in the United States or any other country in which Kolorowey Media or its subsidiaries, affiliates, or service providers maintain facilities. Kolorowey Media may transfer information that we collect about you, including personal information, to affiliated entities, or to other third parties across borders and from your country or jurisdiction to other countries or jurisdictions around the world. If you are located in the European Union or other regions with laws governing data collection and use that may differ from U.S. law, please note that we may transfer information, including personal information, to a country and jurisdiction that does not have the same data protection laws as your jurisdiction, and you consent to the transfer of information to the U.S. or any other country in which Kolorowey Media or its parent, subsidiaries, affiliates or service providers maintain facilities and the use and disclosure of information about you as described in this Privacy Policy.",
    ],
  },
  {
    title: "5. How We Protect Your Information",
    content: [
      "Kolorowey Media is concerned with protecting your privacy and data, but we cannot ensure or warrant the security of any information you transmit to Kolorowey Media or guarantee that your information on the Service may not be accessed, disclosed, altered, or destroyed by breach of any of our industry-standard physical, technical, or managerial safeguards. When you enter sensitive information (such as a credit card number or log in credentials) on our registration or order forms, we encrypt that information using secure socket layer technology (SSL). No method of transmission over the Internet, or method of electronic storage, is 100% secure, however. Therefore, we cannot guarantee its absolute security. If you have any questions about security on our Website, you can contact us at reach@kolorowey.com.",
      "We use an outside help platform, and a credit card processing company to bill you if you purchase services. These companies do not retain, share, store or use personally identifiable information for any other purposes.",
    ],
  },
  {
    title: "6. Compromise of Personal Information",
    content: [
      "In the event that personal information is compromised as a result of a breach of security, Kolorowey Media will promptly notify those persons whose personal information has been compromised, in accordance with the notification procedures set forth in this Privacy Policy, or as otherwise required by applicable law.",
    ],
  },
  {
    title: "7. Your Choices About Your Information",
    content: [
      "You can review, correct, update or delete inaccuracies to the information about you that Kolorowey Media keeps on file by logging into your account to update your password and billing information. Alternatively, you can contact us directly at reach@kolorowey.com. We will respond to your request to access within 30 days.",
      "We will retain your information for as long as your account is active or as needed to provide you services. We will retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.",
    ],
  },
  {
    title: "8. Children's Privacy",
    content: [
      "Protecting the privacy of young children is especially important. For that reason, Kolorowey Media does not knowingly collect or solicit personal information from anyone under the age of 13. If you are under 13, please do not send any information about yourself to us, including your name, address, telephone number, or email address. No one under age 13 is allowed to access or use the Service or to provide any personal information to Kolorowey Media. In the event that we learn that we have collected personal information from a child under age 13, we will delete that information as quickly as possible. If you believe that we might have any information from or about a child under 13, please contact us at reach@kolorowey.com.",
    ],
  },
  {
    title: "9. Notification Procedures",
    content: [
      "It is our policy to provide notifications, whether such notifications are required by law or are for marketing or other business related purposes, to you via email notice, written or hard copy notice, or through conspicuous posting of such notice on the Service, as determined by Kolorowey Media in its sole discretion. We reserve the right to determine the form and means of providing notifications to you, provided that you may opt out of certain means of notification as described in this Privacy Policy.",
    ],
  },
  {
    title: "10. Links to Other Websites",
    content: [
      "We are not responsible for the practices employed by websites or services linked to or from the Service, including the information or content contained therein. Please remember that when you use a link to go from the Service to another website, our Privacy Policy does not apply to third-party websites or services. Your browsing and interaction on any third-party website or service, including those that have a link or advertisement on our website, are subject to that third party's own rules and policies.",
      {
        subtitle: "Social Media Widgets",
        text: "Our Web site includes Social Media Features, such as the Facebook Like button and Widgets, such as the Share this button or interactive mini-programs that run on our site. These Features may collect your IP address, which page you are visiting on our site, and may set a cookie to enable the Feature to function properly. Social Media Features and Widgets are either hosted by a third party or hosted directly on our Site. Your interactions with these Features are governed by the privacy policy of the company providing it.",
      },
    ],
  },
  {
    title: "11. Changes to Our Privacy Policy",
    content: [
      "If we change our privacy policies and procedures materially, we will post those changes on the Service to keep you aware of what information we collect, how we use it and under what circumstances we may disclose it. Changes to this Privacy Policy are effective when they are posted on this page. When we change the policy in a material manner we will let you know via email and/or a prominent notice on our Website, prior to the change becoming effective and update the 'effective date' at the top of this page.",
      "If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this website, please contact us at reach@kolorowey.com.",
    ],
  },
];

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden" style={{ background: 'var(--gradient-navy)' }}>
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl pointer-events-none"
          style={{ background: 'var(--gradient-brand)' }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-white/60 leading-relaxed">
              Your privacy matters to us. Learn how Kolorowey Media collects, uses, and protects your information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 pb-10 border-b border-border"
          >
            <p className="text-muted-foreground leading-relaxed">
              This privacy policy applies to{" "}
              <a href="https://www.kolorowey.com" className="text-accent hover:underline">
                www.kolorowey.com
              </a>
              , owned and operated by Kolorowey Media ("Kolorowey," "we," or "us"). We understand the importance of privacy and are committed to protecting the personal information of our users. This Privacy Policy explains what information of yours will be collected by Kolorowey when you access the Kolorowey Media Service (including through the website), how the information will be used, and how you can control the collection, correction, and/or deletion of information. We will not use or share your information with anyone except as described in this Privacy Policy. This Privacy Policy does not apply to information we collect by other means (including offline) or from other sources. Capitalized terms that are not defined in this Privacy Policy have the meaning given them in our Terms of Service. The use of information collected through our website shall be limited to the purposes under this Privacy Policy and our Terms of Service to customers.
            </p>
          </motion.div>

          {/* Sections */}
          {sections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.05 }}
              className="mb-10 pb-10 border-b border-border last:border-b-0"
            >
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-5">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.content.map((item, i) =>
                  typeof item === "string" ? (
                    <p key={i} className="text-muted-foreground leading-relaxed">
                      {item}
                    </p>
                  ) : (
                    <div key={i} className="mt-6">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {item.subtitle}
                      </h3>
                      {item.text.split("\n\n").map((para, pi) => (
                        <p key={pi} className="text-muted-foreground leading-relaxed mb-3">
                          {para}
                        </p>
                      ))}
                    </div>
                  )
                )}
              </div>
            </motion.div>
          ))}

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-8 rounded-2xl bg-muted/50 border border-border text-center"
          >
            <p className="text-muted-foreground mb-2">
              Have questions about our privacy practices?
            </p>
            <a
              href="mailto:reach@kolorowey.com"
              className="text-accent font-semibold hover:underline"
            >
              reach@kolorowey.com
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
