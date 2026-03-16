import { motion } from "framer-motion";
import { Shield, FileText, Users, Key, Lock, Eye, UserCheck, AlertTriangle, Globe, Link2, Scale, Gavel, Bell, RefreshCw, Server } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const sectionIcons: Record<number, React.ElementType> = {
  1: FileText,
  2: Key,
  3: Globe,
  4: Users,
  5: Lock,
  6: Shield,
  7: RefreshCw,
  8: Server,
  9: AlertTriangle,
  10: UserCheck,
  11: Eye,
  12: Scale,
  13: Gavel,
  14: Bell,
  15: Link2,
};

const sections = [
  {
    number: 1,
    title: "Subject Matter of This Data Processing Addendum",
    content: [
      "1.1 This Addendum applies exclusively to the processing of personal data that is subject to the Act and other Applicable Laws in the provision of the Data Processor's services (\"Services\") to the Data Principal.",
    ],
  },
  {
    number: 2,
    title: "Definitions",
    content: [
      "2.1 The term \"Act\" shall mean the Digital Personal Data Protection Act, 2023;",
      "2.2 The term \"Applicable Laws\" shall mean the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 (Privacy Rules), and the Digital Personal Data Protection Act, 2023;",
      "2.3 The term \"Company Personal Data\" shall mean any Personal Data related to the Data Principal or the Data Principal's customers or employees which are processed in connection with the Service Agreement, in the instance that the Data Principal is a company;",
      "2.4 The term \"Data Principal\" shall have the meaning ascribed to the term \"Data Controller\" in the GDPR;",
      {
        subtitle: "Definition of \"Incident\"",
        text: "2.5 The term \"incident\" shall be understood to mean in any case:\n\na. a complaint or a request with respect to the exercise of a data subject's rights under Indian Data Protection Laws;\n\nb. an investigation into or seizure of the Personal Data by government officials, or a specific indication that such an investigation or seizure is imminent;\n\nc. any unauthorized or accidental access, processing, deletion, loss or any form of unlawful processing of the Personal Data;\n\nd. any breach of the security and/or confidentiality as set out in Clauses 5 and 6 of this Addendum leading to the accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to, the Personal Data, or any indication of such breach having taken place or being about to take place; and\n\ne. where, in the opinion of the Data Processor, implementing an instruction received from the Data Principal would violate applicable laws to which the Data Principal or the Data Processor are subject;",
      },
      "2.6 The terms \"Processing\", \"Personal Data\", \"Data Principal\", \"Processor\", and \"Data Subject\" shall have the meaning ascribed to them in the Act; and",
      "2.7 The terms used in this Addendum shall have the meanings set forth in this Addendum. Capitalized terms not otherwise defined herein shall have the meaning given to them in the Service Agreement or the Act.",
    ],
  },
  {
    number: 3,
    title: "Details of the Transfer",
    content: [
      "3.1 Insofar as the Data Processor will be processing Personal Data subject to Applicable Laws on behalf of the Data Principal in the course of the performance of the Services to the Data Principal, the terms of this Addendum shall apply.",
    ],
  },
  {
    number: 4,
    title: "Relationship Between the Parties",
    content: [
      "4.1 The Data Principal will determine the scope, purposes, and manner by which the Personal Data may be accessed or processed by the Data Processor. The Data Processor will process the Personal Data only as set forth in Data Principal's written instructions.",
      "4.2 The Data Processor will only process the Personal Data on documented instructions of the Data Principal in such manner as – and to the extent that – this is appropriate for the provision of the Services, except as required to comply with a legal obligation to which the Data Processor is subject. In such an instance, the Data Processor shall inform the Data Principal of such a legal obligation before processing to the extent allowable under Applicable Laws.",
      "4.3 The Data Processor shall not process the Personal Data in a manner inconsistent with the Data Principal's documented instructions. The Data Processor shall immediately inform the Data Principal if, in its opinion, an instruction infringes Applicable Laws or other directions issued by any applicable sectoral regulators.",
      "4.4 The Data Processor shall be allowed to exercise its own discretion in the selection and use of such means as it considers necessary to pursue those purposes, subject to the requirements of this Addendum.",
      "4.5 Data Principal warrants that it has all necessary rights to provide the Personal Data to Data Processor for the Processing to be performed in relation to the Services. To the extent required by Applicable Laws, Data Principal is responsible for ensuring that any necessary data subject consents to this Processing are obtained, and for ensuring that a record of such consents is maintained. Should such a consent be revoked by the data subject, the Data Principal shall be responsible for communicating the fact of such revocation to the Data Processor, and Data Processor shall remain responsible for implementing any Data Principal instruction with respect to the further processing of that Personal Data.",
    ],
  },
  {
    number: 5,
    title: "Confidentiality",
    content: [
      "5.1 Without prejudice to any existing contractual arrangements between the Parties, the Data Processor shall treat all Personal Data as strictly confidential and it shall inform all its employees, agents and/or approved sub-processors engaged in processing the Personal Data of the confidential nature of the Personal Data. The Data Processor shall ensure that all such persons or parties are bound to a duty of confidentiality, or are under an appropriate statutory obligation of confidentiality.",
    ],
  },
  {
    number: 6,
    title: "Security",
    content: [
      {
        subtitle: "Security Measures",
        text: "6.1 Taking into account the costs of implementation and the nature, scope, context and purposes of processing as well as the risk of varying likelihood and severity for the rights and freedoms of natural persons, without prejudice to any other security standards agreed upon by the Parties, the Data Principal and Data Processor shall implement appropriate technical and organizational measures to ensure a level of security of the processing of Personal Data appropriate to the risk. These measures shall include as appropriate:\n\na. measures to ensure that the Personal Data can be accessed only by authorized personnel for the purposes set forth in this Addendum;\n\nb. in assessing the appropriate level of security, an account shall be taken in particular of all the risks that are presented by processing;\n\nc. the pseudonymization and encryption of Personal Data;\n\nd. the ability to ensure the ongoing confidentiality, integrity, availability and resilience of processing systems and services;\n\ne. the ability to restore the availability and access to Personal Data in a timely manner in the event of physical or technical incident;\n\nf. a process for regularly testing, assessing, and evaluating the effectiveness of technical and organizational measures for ensuring the security of the processing of Personal Data; and\n\ng. measures to identify vulnerabilities with regard to the processing of Personal Data in systems used to provide services to the Data Principal.",
      },
      "6.2 At the request of the Data Principal, the Data Processor shall demonstrate the measures it has taken and shall allow the Data Principal to audit and test such measures. The Data Principal shall be entitled on giving at least 14 days' notice to the Data Processor to carry out or have carried out by a third party who has entered into a confidentiality agreement with the Data Processor, audits of the Data Processor's premises and operations as these relate to the Personal Data.",
      "6.3 In accordance with Article 32 (1) of the GDPR, the Data Processor shall implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk, taking into account the state of the art, the costs of implementation, and the nature, scope, context, and purposes of processing.",
      "6.4 The Data Processor shall also assess the risks associated with processing activities and apply measures that are consistent with the requirements set forth in Article 32 (1) GDPR, ensuring the security of Company Personal Data at all times.",
    ],
  },
  {
    number: 7,
    title: "Improvements to Security",
    content: [
      "7.1 The Parties acknowledge that security requirements are constantly changing and that effective security requires frequent evaluation and regular improvements of outdated security measures. The Data Processor will therefore evaluate the measures implemented on an on-going basis and will tighten, supplement, and improve these measures in order to maintain compliance.",
      "7.2 Where an amendment to the Service Agreement is necessary in order to execute a Data Principal instruction to the Data Processor, or to improve security measures as may be required by changes in applicable data protection law from time to time, the Parties shall negotiate an amendment to the Service Agreement in good faith.",
    ],
  },
  {
    number: 8,
    title: "Data Transfers",
    content: [
      "8.1 Except as otherwise provided herein, the Data Processor shall not disclose Personal Data received hereunder to a third party or transfer it to another country without the Data Principal's authorization. The Data Processor shall immediately notify the Data Principal of any (planned) permanent or temporary transfers of Personal Data to a country outside of India and shall only perform such a transfer after obtaining authorization from the Data Principal, which may be refused at its own discretion.",
      "8.2 To the extent that the Data Principal or the Data Processor are relying on a specific statutory mechanism to normalize international data transfers that is subsequently modified, revoked, or held in a court of competent jurisdiction to be invalid, the Data Principal and the Data Processor agree to cooperate in good faith to promptly terminate the transfer or to pursue a suitable alternate mechanism that can lawfully support the transfer.",
    ],
  },
  {
    number: 9,
    title: "Information Obligations and Incident Management",
    content: [
      "9.1 When the Data Processor becomes aware of an incident that impacts the Processing of the Personal Data that is the subject of the Service Agreement, it shall promptly notify the Data Principal about the incident, shall at all times cooperate with the Data Principal, and shall follow the Data Principal's instructions with regard to such incidents.",
      "9.2 The Data Processor shall at all times have in place written procedures which enable it to promptly respond to the Data Principal about an incident. Where an incident is reasonably likely to require a data breach notification by the Data Principal under the Information Technology (Indian Computer Emergency Response Team and Manner of Performing Functions and Duties) Rules, 2013, the Data Processor shall implement its written procedures in such a way that it is in a position to notify the Data Principal no later than 24 hours of having become aware of such an incident.",
      {
        subtitle: "Notification Contents",
        text: "9.3 Any notifications made to the Data Principal pursuant to this Article shall contain:\n\na. a description of the nature of the incident, including where possible the categories and approximate number of data subjects concerned and the categories and approximate number of Personal Data records concerned;\n\nb. the name and contact details of the Data Processor's Grievance Officer or another contact point where more information can be obtained;\n\nc. a description of the likely consequences of the incident; and\n\nd. a description of the measures taken or proposed to be taken by the Data Processor to address the incident including, where appropriate, measures to mitigate its possible adverse effects.",
      },
    ],
  },
  {
    number: 10,
    title: "Contracting with Sub-Processors",
    content: [
      "10.1 The Data Principal authorizes the Data Processor to engage sub-processors in the country locations for the Service-related activities specified as described in Clause 3.1. The Data Processor shall inform the Data Principal of any addition or replacement of such sub-processors giving the Data Principal an opportunity to object to such changes.",
      "10.2 Notwithstanding any authorization by the Data Principal with the meaning of the preceding clause, the Data Processor shall remain fully liable vis-à-vis the Data Principal for the performance of any such sub-processor that fails to fulfill its data protection obligations.",
      "10.3 The consent of the Data Principal pursuant to Clause 10.1 shall not alter the fact that consent is required for the engagement of sub-processors in a country outside India without a suitable level of protection.",
      "10.4 The Data Processor shall ensure that the sub-processor is bound by the same data protection obligations of the Data Processor under this Addendum, shall supervise compliance thereof, and must in particular impose on its sub-processors the obligation to implement appropriate technical and organizational measures in such a manner that the processing will meet the requirements of Indian Data Protection Laws.",
      "10.5 The Data Principal may request that the Data Processor audit a sub-processor or provide confirmation that such an audit has occurred to ensure compliance with its obligations imposed by the Data Processor in conforming with this Addendum.",
    ],
  },
  {
    number: 11,
    title: "Returning or Destruction of Personal Data",
    content: [
      "11.1 Upon termination of the Service Agreement, upon the Data Principal's written request, or upon fulfilment of all purposes agreed in the context of the Services whereby no further processing is required, the Data Processor shall, at the discretion of the Data Principal, either delete, destroy, or return all Personal Data to the Data Principal and destroy or return any existing copies.",
      "11.2 The Data Processor shall notify all third parties supporting its own processing of the Personal Data of the termination of the Service Agreement and shall ensure that all such third parties shall either destroy the Personal Data or return the Personal Data to the Data Principal, at the discretion of the Data Principal.",
    ],
  },
  {
    number: 12,
    title: "Assistance to Data Principal",
    content: [
      "12.1 The Data Processor shall assist the Data Principal by appropriate technical and organizational measures, insofar as this is possible, for the fulfilment of the Data Principal's obligation to respond to a request for exercising the data subject's rights under the Applicable Laws.",
      "12.2 The Data Processor shall assist the Data Principal in ensuring compliance with the obligations pursuant to Clause 6 (Security).",
      "12.3 The Data Processor shall make available to the Data Principal all information necessary to demonstrate compliance with the Data Processor's obligations and to allow for and contribute to audits, including inspections, conducted by the Data Principal or another auditor mandated by the Data Principal.",
    ],
  },
  {
    number: 13,
    title: "Indemnification",
    content: [
      "13.1 The Data Processor indemnifies the Data Principal and holds the Data Principal harmless against all claims, actions, third party claims, losses, damages and expenses incurred by the Data Principal and arising directly or indirectly out of or in connection with a breach of this Addendum and/or the Indian Data Protection Laws by the Data Processor.",
      "The Data Principal indemnifies the Data Processor and holds the Data Processor harmless against all claims, actions, third party claims, losses, damages and expenses incurred by the Data Processor and arising directly or indirectly out of or in connection with a breach of this Addendum and/or the Indian Data Protection Laws by the Data Principal.",
    ],
  },
  {
    number: 14,
    title: "Duration and Termination",
    content: [
      "14.1 This Addendum shall come into effect on the date the Data Principal signs this Addendum, which may be through electronic means.",
      "14.2 Termination or expiration of the Service Agreement shall not discharge the Data Processor from its confidentiality obligations pursuant to Clause 5 (Confidentiality).",
      "14.3 The Data Processor shall process Personal Data until the date of termination of the Service Agreement, unless instructed otherwise by the Data Principal, or until such data is returned or destroyed on instruction of the Data Principal.",
    ],
  },
  {
    number: 15,
    title: "Miscellaneous",
    content: [
      "15.1 In the event of any inconsistency between the provisions of this Addendum and the provisions of the Service Agreement, the provisions of this Addendum shall prevail.",
    ],
  },
];

const DPA = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Data Processing Addendum - Kolorowey"
        description="Kolorowey's Data Processing Addendum (DPA) covering GDPR compliance, data security, sub-processor management, and incident response procedures."
        canonical="https://kolorowey.com/dpa"
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
              <Shield className="w-4 h-4" />
              Legal
            </motion.span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1]">
              Data Processing Agreement
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              This Data Processing Agreement forms part of the Terms of Use and governs how Kolorowey Media processes personal data on behalf of its partners.
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
              <div className="sticky top-32">
                <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-6">
                  On this page
                </p>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <a
                      key={section.number}
                      href={`#section-${section.number}`}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-all duration-200 group"
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
                  This Data Processing Agreement, including any Appendices ("Addendum"), forms part of the{" "}
                  <Link to="/terms" className="text-accent hover:underline font-medium">Terms of Use</Link>,
                  Master Services Agreement ("Service Agreement"), or any other written or electronic agreement between Kolorowey Media Private Limited, having its principal place of business at 5th Floor, Wing-A, Statesman House, Barakhamba Road, Connaught Place, New Delhi - 110001, India ("Data Processor") and the company/individual whose information has been provided ("Data Principal").
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-[1.8] mt-4">
                  The Data Processor and Data Principal are collectively referred to as the "Parties", and individually as a "Party".
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-[1.8] mt-4">
                  In consideration of the mutual obligations set out herein, the Parties hereby agree that the terms and conditions set out below shall form part of the Service Agreement. Except where the context requires otherwise, references in this Addendum to the Service Agreement are to the Service Agreement as amended by, and including, this Addendum.
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
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mt-0.5">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-accent/50 tracking-widest uppercase">
                          Clause {String(section.number).padStart(2, "0")}
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-1">
                          {section.title}
                        </h2>
                      </div>
                    </div>

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
                <Shield className="w-10 h-10 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Have questions about data processing?
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

export default DPA;
