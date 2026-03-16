import { motion } from "framer-motion";
import { Shield, FileText, Users, Key, Eye, Lock, UserCheck, AlertTriangle, Globe, Link2, Scale, Gavel, Bell, RefreshCw, Zap, Server, Ban, Database, Handshake, XCircle, CloudOff, ScrollText, Mail, Building } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const sectionIcons: Record<number, React.ElementType> = {
  1: RefreshCw,
  2: Users,
  3: Key,
  4: Eye,
  5: Database,
  6: Bell,
  7: UserCheck,
  8: Lock,
  9: AlertTriangle,
  10: Ban,
  11: Server,
  12: Link2,
  13: Scale,
  14: Shield,
  15: Gavel,
  16: Globe,
  17: ScrollText,
  18: FileText,
  19: XCircle,
  20: Handshake,
  21: Mail,
  22: Building,
  23: CloudOff,
  24: Zap,
};

const sections = [
  {
    number: 1,
    title: "Terms of Use Subject to Change",
    content: [
      "The Company may revise these Terms of Use at any time by amending this page and the terms hereof. The revised Website Terms of Use shall be posted on the Website, and you are expected to check the page of the Website from time to time to take note of any changes the Company makes, as they are binding on you. All changes are effective as soon as the Company posts them and by continuing to use the Website and/or availing of the Services, you agree to be bound by the revised terms and conditions of use. Your use of the Website is subject to the most current version of the Terms of Use posted on the Website at the time of such use.",
      "The Company reserves the right to refuse access to use the Services offered on the Website to new Users or to suspend / terminate access granted to existing Users at any time without according any reason for doing so.",
    ],
  },
  {
    number: 2,
    title: "Permitted Users",
    content: [
      "You represent and warrant that you have the legal capacity and authority to agree to and accept these Terms of Use on behalf of yourself and any person you purport to represent. You shall not access and/or use the Website if you are not competent to contract under applicable laws, rules and regulations.",
      "Individuals under the age of 18 should seek the consent of their parents before providing any information about themselves, their parents, or other family members competent to contract, on the Website.",
      "If you are using the Services on behalf of a company or any other entity, then \"you\" shall include you and that entity, and you represent and warrant that: (a) you are an authorized representative of the entity with the authority to bind the entity to these Terms of Use; and (b) you agree to these Terms of Use on the entity's behalf.",
    ],
  },
  {
    number: 3,
    title: "Accessing the Service",
    content: [
      "The User agrees and acknowledges that every User shall, as a pre-requisite to accessing and availing of the Services, undertake the following actions:",
      {
        subtitle: "Account Registration",
        text: "Registering as a User on the Website by providing such information and details as may be requested by the Company from time to time, and setting up a User account in accordance with the instructions provided by the Company (\"Account\").",
      },
      {
        subtitle: "Account Security",
        text: "Customer shall also be responsible for maintaining the security of the Customer account and passwords (including but not limited to administrative and user passwords), and for all uses of Customer' account without Customer's knowledge or consent.",
      },
    ],
  },
  {
    number: 4,
    title: "Ownership",
    content: [
      "All of the content on the Website, including, without limitation, all of the page headers, images, illustrations, graphics, audio clips, video clips or text, reports generated, content provided and/or entered into by the User on the website or in the course of availing the Services, trademarks, trade names uploaded by the Company, including the Website and future applications (\"Website Content\"), are and will remain the exclusive property of the Company and the respective authors of such content.",
      "We respect the intellectual property rights of our content providers, instructors, users, authors, and other third parties and expect our users to do the same when availing the Services. As between the Company and the respective authors, such Website Content is governed by the relevant agreements in place between the Company and the respective authors. We reserve the right to suspend, disable, or terminate the accounts of users who repeatedly infringe or are repeatedly charged with infringing the copyrights, trademarks, or other intellectual property rights of others.",
      "You may access the Website, avail the Services and utilize the Website Content for your personal or internal requirements only. You are not entitled to duplicate, distribute, create derivative works of, display, or commercially exploit the Website Content, features or facilities of the Website, directly or indirectly, without prior written permission of the Company. If you would like to request permission to commercially exploit any particular Website Content, you could contact us at info@kolorowey.co.",
      "The Company, its licensors, if any, and the content authors are the sole owners of the underlying software and source code associated with the Website and all the trademarks, copyright and any other intellectual property rights of any nature on the Website.",
    ],
  },
  {
    number: 5,
    title: "User Content",
    content: [
      "All content including but not limited to: (i) any uploading or entry of content; (ii) submissions or information given in the line of availing the Services; (iv) entry of data; (v) suggestion; (vi) enhancement request; (vii) content provided in the \"Contact Us\" section; (viii) recommendation, correction, or feedback provided; etc. (collectively \"User Content\"), shall be owned absolutely by the Company.",
      "You hereby grant us a worldwide, perpetual, irrevocable, royalty-free license to use and incorporate into our Services, any and all User Content.",
      {
        subtitle: "Content Guidelines",
        text: "You must ensure that any content, in relation to the Services or otherwise, uploaded, posted, entered, shared or submitted by you:\n\n• is not misleading, unlawful, harmful, threatening, abusive, vitriolic, tortious, defamatory, libelous, obscene, pornographic, lewd, lascivious, profane, invasive of another's privacy, or derogatory in any form or manner;\n\n• is not vulgar, sexist, casteist, hateful, or racially, ethnically or otherwise objectionable;\n\n• is not in violation of anyone's copyright or intellectual property rights; and\n\n• is not vindictive of or targets any person individually or personally on the Website.",
      },
      "The Company may be unable to exercise supervisory or editorial control over and/or edit and/or amend all such content that may be inserted or/and made available or transmitted to a third-party in or through the Website and you acknowledge the same. You however understand and agree that we have absolute discretion to refuse to upload, delete and/or amend any such shared User Content with cause, including without limitation so as, in its sole opinion, to comply with applicable law and/or moral obligations as placed on the Website and in order to avoid infringing any third party's rights and/or any other rules and/or standards and/or codes of practices that may be applicable to the content or without cause, and without notice to you.",
      "In addition to the aforesaid, in the event a User shares a live stream or provides casting rights to a third-party in any manner or form during the availing of Services or otherwise, all the rights and restrictions that are attributed to the User by virtue of these Terms of Use shall extend to such third-party and such third-party shall be considered as a User for the purposes thereof. It is hereby explicitly mentioned that at no point in time will the Company be liable for any acts or conduct of such User.",
    ],
  },
  {
    number: 6,
    title: "Automatically Collected Information",
    content: [
      "In addition, the Website/products/Services may collect certain information automatically, including, but not limited to, the type of mobile device or browser you use, your mobile device's unique device ID, the IP address of your mobile device or browser, your mobile or desktop/laptop/tablet operating system, the type of mobile internet browsers you use, and information about the way you use the Website/Services/products. As is true of most mobile applications, we also collect other relevant information as per the permissions that you provide.",
    ],
  },
  {
    number: 7,
    title: "User Account",
    content: [
      {
        subtitle: "Providing Accurate Registration Information",
        text: "You must provide accurate and complete registration information when you create an Account for the Website. By creating an Account, you agree to provide accurate, current, and complete account information about yourself, and to maintain and promptly update as necessary your Account information.",
      },
      {
        subtitle: "Responsibility for Account Security",
        text: "You are solely responsible for the security of your Account and your wallet. You agree to undertake to maintain at all times, adequate security and control of all of your Account details, passwords, personal identification numbers or any other codes that you use to access the Website or the Services. You must ensure that any Account registered under your name will not be used by any other person. You must notify us immediately of any breach of security, loss, theft, or unauthorized use of your username, password or security information at reach@kolorowey.com.",
      },
      {
        subtitle: "Suspension of Hacked Accounts",
        text: "The Company reserves the right to terminate, suspend or restrict your access to any Account if it has reasonable suspicion that the person logged into your Account is not you, or if the Company suspects that the Account has been or will be used for any illegal, fraudulent, or unauthorized purposes. Under no circumstances shall the Company or its affiliates, officers, directors, employees, agents or representatives be responsible or liable for any direct or indirect losses (including loss of profits, business or opportunities), damages or costs suffered by you or any other person or entity due to any such termination, suspension or restriction of access to any Account.",
      },
    ],
  },
  {
    number: 8,
    title: "User Conduct",
    content: [
      "The Company reserves the right to take action, with or without advance notice, if in the Company's view, you have violated these Terms of Use. This includes but is not limited to: removing the ability to view or interact on the Website; disabling the ability to use the Service; disabling your ability to access our Service; and/or other actions as deemed fit at the Company's sole discretion.",
      {
        subtitle: "Prohibited Activities",
        text: "You agree that you will not violate any law, contract, intellectual property or other third-party right, and that you are solely responsible for your conduct and content, while accessing or using the Services. You also agree that you will not:\n\n• use or attempt to use another User's Account without authorization;\n\n• pose as another User, person, or entity;\n\n• distribute spam or use the Services in a manner that may damage, disable, overburden, or impair the functioning of the Services;\n\n• bypass or ignore instructions that control access to the Services;\n\n• use any data mining, robot, spider, crawler, scraper, or other automated means not authorized by us;\n\n• reverse engineer, duplicate, decompile, disassemble, or decode any aspect of the Services;\n\n• sell or resell the Services or attempt to circumvent fees;\n\n• use the Services for money laundering, terrorist financing, or other illicit finance;\n\n• infringe or violate the intellectual property rights or any other rights of others;\n\n• create or display illegal content, or content that promotes suicide, self-harm, or incites hate or violence;\n\n• use the Services for any illegal or unauthorized purpose.",
      },
      "Further, you bear full responsibility for verifying the authenticity, legitimacy, identity, and other details about any information originating from you in conjunction with our Services.",
    ],
  },
  {
    number: 9,
    title: "Login Names and Passwords",
    content: [
      "User accounts on the Website may be accessed only by use of a unique login name and password. The use of a password does not restrict access by the Company to password-protected information. In connection with the creating of accounts and the use thereof, you agree that: (i) you will provide true, accurate, current and complete information while creating your account and maintain and promptly amend and update such information to keep it true, accurate, current and complete; and (ii) you will keep and maintain your login name and password strictly confidential and not share or disclose them to any other person or permit any other person to use them.",
      "All login names and passwords shall be and remain the property of the Company and may be cancelled or suspended at any time by the Company without any notice or liability to you.",
      "The Company is not under any obligation to verify the actual identity or authority of the User of any login name or password. You are solely responsible and liable for any use and misuse of your login name and password and for all activities that occur under your login name and password.",
      "The User acknowledges and agrees that the security and privacy provided by passwords is not complete and can be circumvented in addition to the use of your password being at your own risk.",
    ],
  },
  {
    number: 10,
    title: "Unauthorised Use",
    content: [
      {
        subtitle: "Prohibited Actions",
        text: "As a User, you agree not to:\n\n• use or launch any automated system that sends more request messages to the servers than a human can reasonably produce;\n\n• host, display, upload, modify, publish, transmit, store, update or share any information that is defamatory, obscene, pornographic, pedophilic, invasive of another's privacy, insulting or harassing on the basis of gender, libellous, racially or ethnically objectionable, relating or encouraging money laundering or gambling;\n\n• threaten the unity, integrity, defenses, security or sovereignty of India, friendly relations with foreign States, or public order;\n\n• use the Website Content or Services in any manner that damages, disables, overburdens, or impairs any of our websites;\n\n• attempt to gain unauthorized access to the Services;\n\n• use the Services to store or transmit infringing, libelous, or otherwise unlawful or tortious material;\n\n• use the Services to store or transmit malicious code;\n\n• create derivative works based on the Services unless explicitly authorized by the Company;\n\n• reverse engineer the Services to build a competitive product or copy any features;\n\n• remove any logo, copyright or proprietary notices from the Services;\n\n• use the Services to create a false identity or impersonate any person or organization;\n\n• use the Services for any purpose that is unlawful under applicable laws or prohibited by these Terms of Use.",
      },
    ],
  },
  {
    number: 11,
    title: "System Requirements",
    content: [
      "In order for a User to avail the Services, or use the Website, the requirement of at least one compatible device, an active internet access (at the cost of the User), and certain supporting software (procured by the User), shall be constant. Since the availing of the Services involves requirements of hardware and software, and active and uninterrupted internet access, the User's ability to access and avail of these Services may be affected by the abovementioned factors. You hereby acknowledge and agree that such system requirements, which may be changed from time to time in order to ensure the smooth functioning of the Website, is solely the User's responsibility.",
    ],
  },
  {
    number: 12,
    title: "External Links",
    content: [
      "The Website may include hyperlinks to other websites or resources (collectively, \"External Sites\"), which are provided solely for the convenience of our Users. The Company has no control over any External Sites. You acknowledge and agree that the Company is not responsible for the availability of any External Sites and that it does not endorse any advertising, products, or other materials on or made available from any External Sites. Furthermore, you acknowledge and agree that the Company is not liable for any loss or damage which may be incurred as a result of the availability or unavailability of the External Sites, or as a result of any reliance placed by you upon the completeness, accuracy, or existence of any advertising, products or other materials on, or made available from any External Sites.",
    ],
  },
  {
    number: 13,
    title: "Rights Reserved by the Company",
    content: [
      "The Company has the right to investigate and prosecute violations of these terms and conditions to the fullest extent of the law and may involve and cooperate with law enforcement authorities in prosecuting Users who violate these terms and conditions.",
      "While the Company does not have any obligation to monitor your access to or your use of the Services (or any feature or part of the Services), the Company has the right to do so for the purpose of operating the Website and providing the Services, to ensure your compliance with these terms and conditions, or to comply with applicable law.",
      "Subject to the receipt of a complaint from a User, the Company has the right but not an obligation to pre-screen, review, flag, filter, modify, refuse or remove any or all content from any Service.",
      "In the event you delete your User account on the Website, the Company will delete all such data as are required to be deleted as per applicable laws.",
      "Our performance as per these Terms of Use is subject to existing laws and legal process, and nothing contained in these Terms of Use is in derogation of our obligation to comply with governmental, court and law enforcement requests or requirements relating to your use of this Website, Services, features and facilities or information provided to or gathered by us with respect to such use.",
    ],
  },
  {
    number: 14,
    title: "Representations or Warranties",
    content: [
      "The Company makes no representations or warranties, express or implied, written or oral, made by or on behalf of it in connection therewith, including any representations or warranties of title, non-infringement, functionality, merchantability, usage, security, suitability or fitness for any particular purpose, or software.",
      "Further, the Company shall not be liable to you for contract, tort, or any other types of damages, including indirect, special, incidental, consequential, punitive or exemplary damages arising out of or related to participation in or the outcome of a transaction, irrespective of the Company having been advised of or knowledge of the possibility of such damages.",
    ],
  },
  {
    number: 15,
    title: "Indemnity",
    content: [
      "You agree to indemnify, defend and hold harmless the Company and all other persons related to, associated or connected with the Company, from and against any and all liabilities, losses, damages, costs and expenses, including without limitation, legal fees, incurred by the Indemnified Parties in connection with any claim, demand or other action arising out of, related to, or connected with your use of the Website or your breach of these Terms of Use. This defense and indemnification obligation will survive these Terms.",
    ],
  },
  {
    number: 16,
    title: "Limitation of Liability",
    content: [
      "Access to this Website and its content, including features and facilities provided for herein, are available to use as a matter of convenience. The Company expressly disclaims any claim or liability arising out of uploading of any defamatory, obscene, vulgar or pornographic images, photographs or pictures or on account of anybody altering or distorting the images available in this Website in an obscene, vulgar or pornographic manner.",
      "You agree and acknowledge that you shall be solely responsible for your conduct and that the Company reserves the right to terminate your right to access and avail of the features and facilities immediately, without prejudice to initiating proceedings under the relevant penal provisions under applicable cybersecurity and data protection laws.",
    ],
  },
  {
    number: 17,
    title: "Privacy Policy",
    content: [
      "Access to and use of this Website is subject to the Privacy Policy and the Data Processing Agreement (DPA). We respect your privacy. The Company will not intentionally monitor or disclose any private messages or address information unless required by law, regulation or court order. You agree to respect the privacy and confidentiality of others.",
    ],
  },
  {
    number: 18,
    title: "Disclaimer",
    content: [
      "You agree that you are availing of the features and facilities at your own risk. The Services, features and facilities are provided on an \"AS IS\" basis. The Company expressly disclaims all warranties of any kind, whether express or implied, including, but not limited to the implied warranties of merchantability, fitness for a particular purpose and non-infringement.",
      "The Company hereby clarifies that it has the full power and authority to remove any Website Content from the Website at any point in time without intimating the User of the same.",
      "The Company makes no warranty that the features and facilities shall meet your requirements, that the features and facilities shall be uninterrupted and/or timely and/or secure and/or error free; nor does the Company make any warranty as to the results that may be obtained from the use of the features and facilities or as to the accuracy or reliability of any information obtained from the features and facilities.",
      "The Company does not make any warranties or guarantee as to the functionality and experience of the Website and its Services as the functionality of the same depend on various factors, including but not limited to the device being used by the User, the browser, etc. which is beyond the Company's control.",
      "The Company does not warrant or guarantee that the operation of this Website/Services will be continuously secure. Security and privacy risks cannot be completely eliminated, and the Company disclaims any and all liability in connection therewith.",
      "In the event of the User finding any content as inappropriate, defamatory, lewd, or otherwise objectionable, the User may bring the same to the notice of the Company by writing to us at reach@kolorowey.com.",
    ],
  },
  {
    number: 19,
    title: "Use of Website and Services",
    content: [
      "The Services on the Website are made available to you for your lawful use only. As a condition of your use of the Website, you represent and warrant to the Company that you will not use the Website/Services for any purpose that is unlawful, illegal and/or prohibited by these terms, conditions and notices.",
      {
        subtitle: "Conditions of Use",
        text: "Your use of the Website and the Services must:\n\n• be in accordance with these Terms of Use;\n\n• be lawful and must comply with all applicable domestic and foreign laws, regulations, rules and policies;\n\n• be only for purposes that are consistent with the spirit and intended purpose of the Website;\n\n• not infringe the legal rights of any other person, including but not limited to intellectual property rights, proprietary rights, privacy, publicity and personality rights;\n\n• not be used with any action, device, software or routine that could directly or indirectly, interfere with the proper working of the Website.",
      },
      "The Services provided to you are based on each User's requirement. You shall ensure that the content part of the Services provided to you is not shared or made available to any other person without the prior written consent of the Company.",
      "The Services and any Website Content accessed through the Services are for your personal and non-commercial use only and may not be shared with any other third party. As a registered User, we grant you a limited, non-exclusive, non-transferable right to access the Service and Website Content.",
    ],
  },
  {
    number: 20,
    title: "Security",
    content: [
      "The Company has implemented commercially reasonable technical and organizational measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration or disclosure. However, the Company cannot guarantee that unauthorized third parties will never be able to overcome such measures or use your personal information for improper purposes. You acknowledge that you provide your personal information at your own risk.",
    ],
  },
  {
    number: 21,
    title: "Governing Law and Jurisdiction",
    content: [
      "These Terms of Use shall be governed in all respects by the laws of India without giving effect to any conflicts of law principles that may require the application of the law of a different state or country.",
      "Any action arising from or relating to these Terms of Use must be brought in a competent court of law situated in New Delhi, India. The Company's performance as per these Terms of Use is subject to existing laws and legal process, and nothing contained in these Terms of Use is in derogation of the Company's obligation to comply with governmental, court and law enforcement requests or requirements.",
      "You agree to resolve disputes only on an individual basis, pursuant to the provisions of these Terms of Use. You hereby expressly waive any right to bring any action, lawsuit, or proceeding as a class or collective action.",
    ],
  },
  {
    number: 22,
    title: "Termination",
    content: [
      "The Company may, at any time, in its sole discretion, cease to provide and maintain the Website to any User.",
      "The Company may, in its sole discretion: (i) without cause, suspend or terminate your account and your access to the Website without any notice or liability to you or any other person; and/or (ii) immediately suspend or terminate your account and your access to the Website if you violate or otherwise fail to comply with these Terms of Use.",
      "Notwithstanding the termination of these Terms of Use, you shall continue to be bound by these Terms of Use in respect of your prior use of the Website and all matters connected with, relating to or arising from such use.",
    ],
  },
  {
    number: 23,
    title: "Force Majeure",
    content: [
      "The Company shall not be liable to the User for failure or delay in the performance of the Services for the time and to the extent such failure or delay is caused by force majeure, or reasons beyond the reasonable control of the Company.",
      "Force Majeure shall mean and include any act of God, natural disasters (e.g., fire, flood, earthquake, elements of nature), hostilities, acts of terrorism or crime (including cyber-crime), riot, explosion, sabotage, pandemics, acts of government, lock-outs and/or industrial disputes, or any other cause beyond the reasonable control of the Company.",
    ],
  },
  {
    number: 24,
    title: "Miscellaneous Provisions",
    content: [
      "These Terms of Use constitute the entire agreement between the Company and the User with respect to the subject matter hereof and supersedes and replaces all prior or contemporaneous understandings, agreements or communication, written or oral, regarding such subject matter.",
      "You may not assign or transfer any rights, obligations, or privileges that you have under these Terms of Use. Subject to the foregoing, these Terms of Use will be binding on your successors. Any assignment or transfer in violation of this clause will be deemed null and void. However, the Company shall have the right to assign its rights and obligations under these Terms of Use to any third-party.",
      "If any provision of these Terms of Use is held to be invalid or unenforceable, such provision shall be struck from these Terms of Use and the remaining provisions shall be enforced.",
      "The Company's failure to act with respect to a breach by you or others of these Terms of Use does not waive its right to act with respect to subsequent or similar breaches.",
      {
        subtitle: "Electronic Communication",
        text: "By accepting these Terms of Use, you expressly grant your consent to receive notices and communication electronically from the Company unless expressly intimated to the Company otherwise. Communications shall be posted on the Website and all such communications will be deemed to be in \"writing\" and received by you when posted thereon.",
      },
      {
        subtitle: "Agency",
        text: "Nothing in these Terms of Use is intended to or creates any type of joint venture, employee-employer, partnership, or any fiduciary relationship between you or/and the Company. Neither you nor the Company shall be deemed to be an agent or representative of the other by virtue of these Terms of Use.",
      },
      {
        subtitle: "Validity",
        text: "These Terms of Use shall apply when you access the Website and avail the Services, features and facilities and shall extend to the Website content, if any, for so long as it remains on this Website.",
      },
      "If you should have any suggestions or questions regarding these Terms of Use, please contact the Company at reach@kolorowey.com.",
    ],
  },
];

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Terms of Use - Kolorowey"
        description="Terms of use for Kolorowey Media platform and services. Review our policies on account usage, intellectual property, and user conduct."
        canonical="https://kolorowey.com/terms"
      />
      <Header />

      {/* Hero */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-secondary/50">
        <motion.div
          className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full opacity-[0.07] blur-3xl pointer-events-none"
          style={{ background: 'var(--gradient-brand)' }}
        />
        <motion.div
          className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full opacity-[0.05] blur-3xl pointer-events-none"
          style={{ background: 'linear-gradient(135deg, hsl(var(--highlight)), hsl(var(--accent)))' }}
        />

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-accent mb-6"
            >
              <FileText className="w-4 h-4" />
              Legal
            </motion.span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1]">
              Terms of Use
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Please read these terms carefully before using the Kolorowey Media website and services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TOC + Content */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-20">

            {/* Sticky TOC sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="sticky top-32 max-h-[calc(100vh-10rem)] overflow-y-auto">
                <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-6">
                  On this page
                </p>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <a
                      key={section.number}
                      href={`#section-${section.number}`}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-all duration-200 group"
                    >
                      <span className="text-[11px] font-bold text-accent/60 group-hover:text-accent w-5 text-right tabular-nums">
                        {String(section.number).padStart(2, "0")}
                      </span>
                      <span className="truncate">{section.title}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </motion.aside>

            {/* Main content */}
            <div className="max-w-none">
              {/* Intro */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16 pb-12 border-b border-border"
              >
                <p className="text-base md:text-lg text-muted-foreground leading-[1.8]">
                  This terms of use ("Terms of Use") governs your use of the website{" "}
                  <a href="https://www.kolorowey.com" className="text-accent hover:underline font-medium">
                    www.kolorowey.com
                  </a>{" "}
                  ("Website") which is owned and operated by Kolorowey Media Private Limited ("Company"), a company incorporated under the laws of India, and having its registered office at 5th Floor, Wing-A, Statesman House, Barakhamba Road, Connaught Place, New Delhi - 110001, India. For the purposes of these Terms of Use, "Users" shall mean any person visiting or registered with an account on the Website and uses or accesses the Website on any computer, mobile phone, tablet, console or other device.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-[1.8] mt-6">
                  The Website offers content in the form of images, footage, videos, films, music, sound, graphics, logos, designs, fonts, text, animations, illustrations, program templates, artworks, literary works or any other audio and/or visual representation or impression, or any combination thereof, in any media, format and technology. These Terms of Use apply to Users of the Website to whom the Company intends to impart the aforementioned services, and the Users who are visiting the Website for information or any other purpose ("Services").
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-[1.8] mt-6">
                  The Services on the Website are offered to you conditioned on your acceptance without modification of the terms, conditions and notices contained in these Terms of Use. Your access to the Website and/or use of the Services on the Website constitutes your agreement to all such terms, conditions and notices without limitation or qualification and to be bound by these Terms of Use.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-[1.8] mt-6 font-medium text-foreground">
                  If you do not agree to the terms set forth below, you may not access the Website.
                </p>
              </motion.div>

              {/* Sections */}
              {sections.map((section, sectionIndex) => {
                const Icon = sectionIcons[section.number] || Shield;
                return (
                  <motion.div
                    key={section.number}
                    id={`section-${section.number}`}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: sectionIndex * 0.03 }}
                    className="mb-14 scroll-mt-32"
                  >
                    {/* Section header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mt-0.5">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-accent/50 tracking-widest uppercase">
                          Section {String(section.number).padStart(2, "0")}
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-1">
                          {section.title}
                        </h2>
                      </div>
                    </div>

                    {/* Section body */}
                    <div className="pl-14 space-y-5">
                      {section.content.map((item, i) =>
                        typeof item === "string" ? (
                          <p key={i} className="text-base text-muted-foreground leading-[1.8]">
                            {item}
                          </p>
                        ) : (
                          <div key={i} className="mt-8 p-6 rounded-2xl bg-muted/40 border border-border/60">
                            <h3 className="text-lg font-semibold text-foreground mb-3">
                              {item.subtitle}
                            </h3>
                            {item.text.split("\n\n").map((para, pi) => (
                              <p key={pi} className="text-base text-muted-foreground leading-[1.8] mb-3 last:mb-0">
                                {para}
                              </p>
                            ))}
                          </div>
                        )
                      )}
                    </div>

                    {/* Divider */}
                    {sectionIndex < sections.length - 1 && (
                      <div className="mt-14 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                    )}
                  </motion.div>
                );
              })}

              {/* Contact CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-20 p-10 md:p-14 rounded-3xl bg-secondary/60 border border-border/50 text-center"
              >
                <FileText className="w-10 h-10 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Have questions about our terms?
                </h3>
                <p className="text-muted-foreground mb-5">
                  We're here to help. Reach out to our team anytime.
                </p>
                <a
                  href="mailto:reach@kolorowey.com"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{ background: 'var(--gradient-brand)' }}
                >
                  reach@kolorowey.com
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
