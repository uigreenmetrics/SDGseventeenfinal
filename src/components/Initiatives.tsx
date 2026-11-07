import { useEffect, useState } from "react";
import partnershipReportPdf from "@/data/Partnership_CY_2025_spreadsheet_-_Sheet1-BlrlcyAd.pdf";
import sdg1ProgressReportPdf from "@/data/SDG 1. No Poverty Report.pdf";
import sdg2ProgressReportPdf from "@/data/SDG2 cover (2).pdf";
import sdg3ProgressReportPdf from "@/data/SDG3 cover.pdf";
import sdg4ProgressReportPdf from "@/data/SDG 4 Quality Education Report.pdf";
import sdg8ProgressReportPdf from "@/data/SDG 8 Decent Work.pdf";
import sdg6ProgressReportPdf from "@/data/SDG6.pdf";
import sdg7ProgressReportPdf from "@/data/SDG7.pdf";
import sdg9ProgressReportPdf from "@/data/SDG9 cover.pdf";
import sdg10ProgressReportPdf from "@/data/SDG10 cover.pdf";
import sdg11ProgressReportPdf from "@/data/SDG11 cover.pdf";
import sdg12ProgressReportPdf from "@/data/SDG12 cover.pdf";
import sdg13ProgressReportPdf from "@/data/SDG13 cover.pdf";
import sdg14ProgressReportPdf from "@/data/SDG14 cover.pdf";
import sdg15ProgressReportPdf from "@/data/SDG15 cover.pdf";
import sdg16NarrativeWithCoverPdf from "@/data/SDG 16 Narrative with cover.pdf";
import sdg17Pict from "@/data/sdg17 pict.webp";
import sdg17Animation from "@/data/sdg17.gif";
import pict1 from "@/data/pict1.jpg";
import pict2 from "@/data/pict2.jpg";
import pict3 from "@/data/pict3.jpg";
import pict4 from "@/data/pict4.jpg";
import pict6 from "@/data/pict6.jpg";
import pict7 from "@/data/pict7.jpg";
import pict8 from "@/data/pict8.jpg";
import pict9 from "@/data/pict9.jpg";
import pict10 from "@/data/pict10.jpg";
import pict11 from "@/data/pict11.jpg";
import pict12 from "@/data/pict12.jpg";
import pict13 from "@/data/pict13.jpg";
import pict14 from "@/data/pict14.jpg";
import pict15 from "@/data/pict15.jpg";
import pict16 from "@/data/pict16.jpg";
import pict17 from "@/data/pict17.jpg";
import pict18 from "@/data/pict18.jpg";
import pict19 from "@/data/pict19.jpg";
import pict20 from "@/data/pict20.jpg";
import pict21 from "@/data/pict21.jpg";
import pict22 from "@/data/pict22.jpg";
import pict23 from "@/data/pict23.jpg";
import pict24 from "@/data/pict24.jpg";
import pict25 from "@/data/pict25.jpg";
import pict26 from "@/data/pict26.jpg";
import pict27 from "@/data/pict27.jpg";
import pict28 from "@/data/pict28.jpg";
import pict29 from "@/data/pict29.jpg";
import pict30 from "@/data/pict30.jpg";
import pict31 from "@/data/pict31.jpg";
import { initiativeGroups, groupAccent, type Initiative } from "@/data/sdg17";
import { ChevronDown, FileText, ExternalLink, Newspaper } from "lucide-react";

const partnershipReportUrl = partnershipReportPdf;
const sdgNavigationItems = [
  { name: "No Poverty", color: "#e5243b" },
  { name: "Zero Hunger", color: "#dda63a" },
  { name: "Good Health and Well-Being", color: "#4c9f38" },
  { name: "Quality Education", color: "#c5192d" },
  { name: "Gender Equality", color: "#ff3a21" },
  { name: "Clean Water and Sanitation", color: "#26bde2" },
  { name: "Affordable and Clean Energy", color: "#fcc30b" },
  { name: "Decent Work and Economic Growth", color: "#a21942" },
  { name: "Industry, Innovation and Infrastructure", color: "#fd6925" },
  { name: "Reduced Inequalities", color: "#dd1367" },
  { name: "Sustainable Cities and Communities", color: "#fd9d24" },
  { name: "Responsible Consumption and Production", color: "#bf8b2e" },
  { name: "Climate Action", color: "#3f7e44" },
  { name: "Life Below Water", color: "#0a97d9" },
  { name: "Life on Land", color: "#56c02b" },
  { name: "Peace, Justice and Strong Institutions", color: "#00689d" },
  { name: "Partnerships for the Goals", color: "#19486a" },
];
const sdgProgressReports = Array.from({ length: 17 }, (_, index) => ({
  label: `SDG ${index + 1} Progress report`,
  href: index === 0
    ? sdg1ProgressReportPdf
    : index === 1
      ? sdg2ProgressReportPdf
    : index === 2
      ? sdg3ProgressReportPdf
    : index === 3
      ? sdg4ProgressReportPdf
      : index === 5
        ? sdg6ProgressReportPdf
      : index === 6
        ? sdg7ProgressReportPdf
      : index === 7
        ? sdg8ProgressReportPdf
        : index === 8
          ? sdg9ProgressReportPdf
        : index === 9
          ? sdg10ProgressReportPdf
        : index === 10
          ? sdg11ProgressReportPdf
        : index === 11
          ? sdg12ProgressReportPdf
        : index === 12
          ? sdg13ProgressReportPdf
        : index === 13
          ? sdg14ProgressReportPdf
        : index === 14
          ? sdg15ProgressReportPdf
        : index === 15
          ? sdg16NarrativeWithCoverPdf
        : null,
}));

const relatedPosts = [
  {
    title: "TESO strengthens community partnerships through stakeholders' meeting and launch of DOST-funded extension programs",
    href: "https://www.facebook.com/story.php?story_fbid=1136912691790329&id=100064148258416&rdid=5cdbcGFzsSXFjiwr",
  },
  {
    title: "Congressional committee convenes national education leaders to advance legislative reforms for tertiary institutions",
    href: "https://www.facebook.com/share/p/1J1E5LvdrA/",
  },
  {
    title: "University leadership operationalizes national labor directives to secure non-regular workforce employment continuity",
    href: "https://www.facebook.com/share/p/1K7s23E6gF/",
  },
  {
    title: "DOST audits smart innovation center to validate regional development impacts | 13 November 2025",
    href: "https://www.facebook.com/share/p/1FdaahuYPT/",
  },
  {
    title: "State university executes scheduled disaster preparedness protocols linked to national security readiness drill",
    href: "https://www.facebook.com/share/p/1Bcg33HPXq/",
  },
  {
    title: "Regional Higher Education Commission issues mandatory directives for TES implementation | 05 November 2025",
    href: "https://www.facebook.com/share/p/1Dmf46RJRp/",
  },
  {
    title: "DBM collaborates with ESSU to operationalize national procurement reforms",
    href: "https://www.facebook.com/share/p/182zqccRF6/",
  },
  {
    title: "ESSU-DILG Governance Center Initiative advances through partnership and consultative meeting",
    href: "https://www.facebook.com/story.php?story_fbid=1204396818385034&id=100064441822228&rdid=eF6cKV4chScCILeR",
  },
  {
    title: "DSWD renews strategic anti-poverty partnership with ESSU",
    href: "https://www.facebook.com/share/p/1CerG19oDk/",
  },
  {
    title: "NAP trains ESSU record officers on systematic document disposition",
    href: "https://www.facebook.com/share/p/19s4YRCXQH/",
  },
  {
    title: "Provincial government and higher education commission officers align with ESSU to honor academic faculty",
    href: "https://www.facebook.com/share/p/1HRLWj83up/",
  },
  {
    title: "ESSU recalibrates strategic roadmap to institutionalize higher education commission policy reforms",
    href: "https://www.facebook.com/share/p/1GrBoeGiGC/",
  },
];

const evidenceArticles: Record<string, { title: string; href: string }[]> = {
  "17.2.2": [relatedPosts[0]],
  "17.2.3": [
    {
      title: "Global research convergence drives academic data exchange for climate and disaster resilience | 05 December 2025",
      href: "https://www.facebook.com/share/p/1CGRLSu5TF/",
    },
    {
      title: "ESSU students secure top awards in regional community-based monitoring data conventions",
      href: "https://www.facebook.com/share/p/1K4dYhJQpK/",
    },
  ],
  "17.2.4": [
    {
      title: "Cross-border hospitality internships yield global industry performance and skill development data",
      href: "https://www.facebook.com/share/p/19dcMeA5hZ/",
    },
  ],
  "17.2.5": [
    {
      title: "DSWD integrates multi-agency employment support services for university beneficiaries",
      href: "https://www.facebook.com/share/p/1C4AhNWunk/",
    },
    {
      title: "ESSU and local high school partner to deliver environmental governance and conservation education",
      href: "https://www.facebook.com/share/p/1JHRwnXHEr/",
    },
  ],
  "17.4.1": [
    {
      title: "Institutional strategic planning formalizes long-term development agenda for sustainable governance and innovation",
      href: "https://www.facebook.com/share/p/1KCqEgGG19/",
    },
    {
      title: "ESSU Main Library deploys virtual services and digital repositories to support flexible academic continuity",
      href: "https://www.facebook.com/share/p/1CGUJYVYy5/",
    },
    {
      title: "ESSU guidance center deploys virtual psychological support infrastructure for institutional well-being",
      href: "https://www.facebook.com/share/p/1FESx9HEia/",
    },
    {
      title: "ESSU concludes charter week by integrating campus-wide ecological protection and waste management drives",
      href: "https://www.facebook.com/share/p/1PZL6oYccm/",
    },
  ],
  "17.4.2": [
    {
      title: "ESSU joins multi-agency CSC for provincial climate resilience initiative",
      href: "https://www.facebook.com/share/p/1GXoVPfT5P/",
    },
    {
      title: "ESSU operationalizes DBM health allowance election through democratic civil service consultation",
      href: "https://www.facebook.com/share/p/19bphppEbU/",
    },
  ],
  "17.4.3": [
    {
      title: "State University and Department of Education launch joint research capacity building program for provincial teachers",
      href: "https://www.facebook.com/share/p/1DNTedtbFs/",
    },
    {
      title: "ESSU-DepEd partnership builds research capacity among educators through Project TUL-Id",
      href: "https://www.facebook.com/story.php?story_fbid=1136909858457279&id=100064148258416&rdid=cR7lNrLUlKwmH9bn",
    },
    {
      title: "ESSU launches free NMAT review program for aspiring physicians",
      href: "https://www.facebook.com/share/p/1HYJFmfKug/",
    },
  ],
};

const alwaysVisibleEvidenceIds = new Set([
  "17.2.1",
  "17.2.2",
  "17.2.3",
  "17.2.4",
  "17.2.5",
  "17.4.1",
  "17.4.2",
  "17.4.3",
]);

function InitiativeCard({ item }: { item: Initiative }) {
  const [expanded, setExpanded] = useState(false);
  const itemKey = item.id.split(" ")[0];
  const isLong = item.body.length > 320;
  const display = expanded || !isLong ? item.body : `${item.body.slice(0, 320).trimEnd()}…`;
  const visibleRelatedPosts = evidenceArticles[itemKey]
    ?? (itemKey === "17.4.4"
                  ? [
                      {
                        title: "State university extension project delivers community literacy programs to local elementary pupils",
                        href: "https://www.facebook.com/share/p/1F6N41ftfo/",
                      },
                      {
                        title: "Regional economic development director joins ESSU executives to align provincial extension policies",
                        href: "https://www.facebook.com/share/p/1HjqxDyhMw/",
                      },
                    ]
                  : relatedPosts);

  return (
    <article className="group rounded-2xl bg-white ring-1 ring-emerald-900/8 hover:ring-emerald-300/40 transition-all duration-300 overflow-hidden flex flex-col">
      <div className="p-6 flex flex-col flex-1">
        <span className="font-serif-display text-sm font-bold text-amber-600 tabular-nums tracking-wide">
          {item.id}
        </span>
        <h4 className="mt-3 font-serif-display text-lg sm:text-xl font-semibold text-emerald-950 leading-snug">
          {item.title}
        </h4>
        <p className="mt-3 text-sm leading-relaxed text-emerald-900 flex-1">{display}</p>
        {isLong && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-emerald-700 hover:text-emerald-900 transition-colors self-start"
          >
            {expanded ? "Show less" : "Read more"}
            <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
          </button>
        )}
        {(itemKey === "17.2.1" || itemKey === "17.2.2" || itemKey === "17.2.3" || itemKey === "17.2.4" || itemKey === "17.2.5" || itemKey === "17.3.1" || itemKey === "17.4.1" || itemKey === "17.4.2" || itemKey === "17.4.3" || itemKey === "17.4.4") && (
          <div className="mt-6 space-y-4">
            {(itemKey === "17.2.1" || itemKey === "17.3.1") && (
              <div className="rounded-xl bg-emerald-50/80 p-4 ring-1 ring-emerald-200/80">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-lg bg-white p-2 text-emerald-700 ring-1 ring-emerald-200">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-700/70">Evidence</p>
                    <p className="mt-1 text-sm font-bold leading-snug text-emerald-950">
                      {itemKey === "17.2.1"
                        ? "Institutional linkages and partnerships development report"
                        : "SDG 1 to SDG 17 Progress report"}
                    </p>
                    {itemKey === "17.2.1" ? (
                      partnershipReportUrl ? (
                        <a
                          href={partnershipReportUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-950 transition-colors"
                        >
                          View report
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      ) : (
                        <p className="mt-2 text-xs font-medium text-emerald-700/70">PDF report unavailable</p>
                      )
                    ) : (
                      <div className="mt-2 grid grid-cols-3 gap-3">
                        {sdgProgressReports.map((report, index) => (
                          report.href ? (
                            <a
                              key={report.label}
                              id={`sdg-report-${index + 1}`}
                              href={report.href}
                              target="_blank"
                              rel="noreferrer"
                              aria-label={`Open ${report.label} PDF`}
                              className="block scroll-mt-24 overflow-hidden rounded-xl bg-white ring-1 ring-emerald-200 transition hover:ring-emerald-400 hover:shadow-md"
                            >
                              <div className="relative mx-auto aspect-[8.5/11] w-full max-w-[12rem] overflow-hidden bg-slate-100">
                                <iframe
                                  src={`${report.href}#page=1&view=Fit&toolbar=0&navpanes=0`}
                                  title={`${report.label} first-page preview`}
                                  className="pointer-events-none h-full w-full border-0"
                                />
                                <div className="absolute inset-0" />
                              </div>
                              <div className="flex items-center justify-between gap-3 p-3">
                                <span className="text-xs font-bold text-emerald-800">{report.label}</span>
                                <ExternalLink className="h-4 w-4 shrink-0 text-emerald-700" />
                              </div>
                            </a>
                          ) : (
                            <p
                              key={report.label}
                              id={`sdg-report-${index + 1}`}
                              className="scroll-mt-24 rounded-xl bg-white/70 p-3 text-xs font-medium text-emerald-700/70 ring-1 ring-emerald-100"
                            >
                              {report.label} — PDF to be uploaded later
                            </p>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {itemKey !== "17.3.1" && (
              <div className="rounded-2xl bg-slate-100/80 p-4 ring-1 ring-slate-200">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-1.5 w-9 rounded-full bg-emerald-700" />
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-700/80">
                    Related Articles
                  </p>
                </div>

                <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                  {visibleRelatedPosts.map((post, index) => {
                  const isFirstArticle = index === 0;
                  const isSecondArticle = index === 1;
                  const isThirdArticle = index === 2;
                  const isFourthArticle = index === 3;
                  const isSixthArticle = index === 4;
                  const isSeventhArticle = index === 5;
                  const isEighthArticle = index === 6;
                  const isNinthArticle = index === 7;
                  const isTenthArticle = index === 8;
                  const isEleventhArticle = index === 9;
                  const isTwelfthArticle = index === 10;
                  const isThirteenthArticle = index === 11;
                  const summary =
                    itemKey === "17.2.2" && isFirstArticle
                      ? "During the TESO stakeholders' meeting and the launch of DOST-funded extension programs, Eastern Samar State University (ESSU) brought together academic leaders, community partners, and local stakeholders to align extension priorities with the needs of partner communities. The activity highlighted ESSU's participatory approach to development, strengthening community-based collaboration while promoting science-driven programs that support sustainable and responsive local initiatives."
                      : itemKey === "17.4.2" && isFirstArticle
                        ? "Eastern Samar State University (ESSU) Main Campus formalized its dedication to environmental preservation and sustainability reporting through a unified tree-planting and environmental grooming initiative that concluded its 2025 Charter Week celebrations. Spearheaded by Vice President for Administration Dr. Rhodora C. Mendoza alongside college deans, administrative unit heads, and faculty members, the institutional conservation framework mobilized the university community despite sustained regional rainfall. Parallel to the tree-planting operations, student cohorts from distinct academic colleges synchronized efforts with non-teaching personnel to execute a systematic waste management and cleaning sweep across all campus structures and designated peripheral grounds. This organized ecological mobilization transforms institutional milestones into actionable sustainable development exercises, effectively upgrading the campus's carbon sequestration potential and reinforcing practical environmental stewardship within the student body."
                        : itemKey === "17.4.2" && isSecondArticle
                          ? "Eastern Samar State University (ESSU) mobilized its permanent multi-campus workforce to execute a democratic health insurance selection process, directly operationalizing Department of Budget and Management (DBM) Circular No. 2024-6. Held at Teatro Ibabawnon and streamed via remote communication networks to all external campuses, the administrative exercise structured product presentations from seven private health maintenance organizations. Each insurance provider calibrated healthcare coverage models against the state-mandated 7,000 Philippine Peso annual medical allowance per civilian government employee. Administrative data collection compiled 578 electronic employee ballots by the close of the voting period, confirming that Kaiser International Healthgroup, Inc. secured the majority preference with 348 votes. This fiscal execution framework successfully links state budget policies with private sector health resources, upgrading institutional employee welfare tracking and securing statutory healthcare benefits for public sector personnel."
                          : itemKey === "17.2.2" && isSecondArticle
                        ? "The Congressional Committee on Higher and Technical Education (CHTE), under the leadership of Chairperson Representative Jude Acidre, convened its 3rd Regular Meeting to deliberate on critical national legislative measures aimed at upgrading the regulatory framework of Philippine tertiary education. Commission on Higher Education (CHED) Chairperson Dr. Shirley C. Agrupis participated directly in the high-level policy dialogue alongside key sectoral stakeholders to advocate for comprehensive operational reforms across local universities and colleges. The structural agenda focused heavily on establishing inclusive administrative policies governing the appointment protocols for academic faculty, researchers, and institutional administrators. This legislative collaboration also targeted the modernization of the Technical Education and Skills Development Authority (TESDA), driving cohesive state-level policy integration to enhance national academic standards and human resource development frameworks."
                        : itemKey === "17.2.3" && isFirstArticle
                          ? "ESSU advanced disaster risk research collaboration through the 12th International Conference on Integrative Disaster Risk Reduction Management (ICIDRRM), bringing together academic institutions from across Luzon, Visayas, and Mindanao to exchange data and strengthen climate resilience planning."
                          : itemKey === "17.2.3" && isSecondArticle
                            ? "ESSU student-researchers showcased high-level data analysis and community-based monitoring skills at the 2025 Regional CBMS Convention and Data Festival, strengthening evidence-based planning and local resilience strategies."
                            : itemKey === "17.2.4" && isFirstArticle
                              ? "ESSU strengthened international industry mobility by connecting student interns with global hospitality and training opportunities through SIAP and OBEI, enabling them to gain practical experience and benchmark professional standards abroad."
                              : itemKey === "17.2.5" && isFirstArticle
                                ? "ESSU expanded NGO and agency partnerships to strengthen livelihood support, workforce transition, and environmental education for underserved communities across Eastern Samar."
                                : itemKey === "17.2.5" && isSecondArticle
                                  ? "ESSU deepened community engagement through environmental and youth-focused partnerships that strengthen local ecological stewardship, education, and socio-economic resilience."
                                  : itemKey === "17.4.1" && isFirstArticle
                                    ? "Demonstrating a formalized commitment to systemic sustainability and progressive institutional governance, Eastern Samar State University (ESSU) convened its top management on 14 November 2025, followed by a general workforce forum on 28 November 2025, to operationalize its 2025–2030 Development Plan. Officially ratified under Board of Regents (BOR) Resolution 207, series of 2025, University President Dr. Andres C. Pagatpatan, Jr., alongside Vice President for Research, Innovation, and Extension Dr. Aris A. Lapada, presented a comprehensive 7-point development agenda to university administrators, faculty, and staff. This strategic blueprint embeds meaningful sustainability into the university's core operations through prioritizing green architecture, upgrading faculty and staff learning frameworks, enhancing research innovation, and upholding transparent governance. Active engagement with the campus workforce at Canuctan Hall gathered crucial operational inputs, successfully aligning internal administrative infrastructure and educational vision with long-term socio-ecological responsibility."
                                    : itemKey === "17.4.1" && isSecondArticle
                                      ? "The Eastern Samar State University (ESSU) Main Library officially rolled out its comprehensive online services and electronic resource portals to reinforce asynchronous learning and independent study across the academic community. To ensure continuous access beyond regular classroom hours, the institutional repository provides students, faculty, and administrative staff with remote entry to premier digital databases, including Gale Research Complete, Tritech Digital Media, Bibliotex E-books, and the Philippine E-Journals framework. Access activation requires users to complete a mandatory pre-registration screening form, after which university librarians securely transmit localized login details via email. The library's digital framework also features real-time virtual research assistance through its chat-based reference support alongside an academic document delivery service for scanned materials. This coordinated educational infrastructure directly strengthens the university’s capacity to maintain high-quality instruction and scholarly equity within flexible learning environments."
                                      : itemKey === "17.4.1" && isThirdArticle
                                        ? "The Guidance and Counseling Services Center of Eastern Samar State University (ESSU) activated a multi-tiered virtual psychological support services framework across all campuses to secure the mental health and emotional resilience of its students and workforce. Designed to navigate academic stress, personal crises, and emotional difficulties, the institutional wellness program delivers remote access to Psychological First Aid (PFA), structured stress debriefing sessions, and professional one-on-one or group counseling. All clinical interactions are transitioned to a fully online mode to ensure personal privacy and convenience, with complete data security guaranteed under the statutory protections of the Data Privacy Act of 2012 and Republic Act No. 9258. Individuals seeking specialized intervention must complete an electronic appointment scheduling tracker, enabling licensed guidance counselors to audit wellness requests and establish confirmed clinical sessions via secure communication channels."
                                        : itemKey === "17.4.3" && isFirstArticle
                                          ? "The Eastern Samar State University (ESSU) Main Campus Graduate School, in a formalized partnership with the Department of Education (DepEd) Eastern Samar Division, successfully launched the maiden edition of its Seminar-Workshop on Crafting Action and Basic Research under Project TUL-ID. Held from 11 to 13 November 2025, the three-day intensive capability-building extension program gathered school research coordinators, district coordinators, and master teachers from the province's southern school districts. Conceptualized by core faculty member Dr. Riomar G. Obliopas in response to research productivity gaps identified at the Eastern Samar Basic Education Research Forum, the initiative delivered structured instruction on research methodologies, theoretical frameworks, and data analysis techniques. Collaborative lectures from DepEd officials and ESSU Graduate School faculty enabled participants to develop complete drafts of basic research proposals aimed at resolving classroom-level issues. This strategic educational outreach provides sustainable technical upskilling to basic education professionals, establishing continuous academic support to translate scholarly data into impactful community and school policies across Eastern Samar."
                                          : itemKey === "17.4.3" && isSecondArticle
                                            ? "BORONGAN CITY, EASTERN SAMAR, PHILIPPINES – Eastern Samar State University (ESSU), through its Graduate School and Training and Extension Services Office (TESO), partnered with the Department of Education (DepEd) to officially launch Project TUL-id, an initiative designed to strengthen the research capabilities of teachers and school heads across the province. Project TUL-id aims to provide technical upskilling opportunities in research writing, academic publishing, and the application of research findings to educational practice and policy. The initiative recognizes the important role of educators as knowledge producers and change agents capable of developing evidence-based solutions to address challenges within the basic education sector. The partnership brings together the expertise of ESSU in graduate education, research, and extension services and the extensive educational network of DepEd. Through a series of capacity-building activities, mentoring sessions, and technical assistance programs, participating teachers and school leaders will gain enhanced competencies in conducting research, disseminating scholarly work, and translating research outputs into practical interventions that improve teaching and learning outcomes. Discussions during the project launch emphasized the value of collaborative action in strengthening educational systems and promoting a culture of continuous learning and innovation. The initiative also seeks to bridge research and practice by equipping education professionals with the skills necessary to generate data-driven insights that can inform school improvement efforts, instructional strategies, and educational decision-making processes. Project TUL-id advances Sustainable Development Goal 4 by supporting inclusive, equitable, and quality education through professional development opportunities for educators. The initiative also reflects the principles of Sustainable Development Goal 17 by demonstrating how partnerships between higher education institutions and government agencies can create sustainable pathways for educational transformation and community development. Through this collaboration, ESSU and DepEd reaffirm their shared commitment to strengthening educational excellence, expanding access to research-based knowledge, and developing a community of education professionals equipped to contribute to meaningful and lasting improvements in the learning environment."
                                            : itemKey === "17.4.3" && isThirdArticle
                                              ? "Eastern Samar State University (ESSU) officially launched an inclusive educational outreach initiative providing a Free Online National Medical Admission Test (NMAT) Review Program for its current students and alumni. Organized as part of the university's institutional commitment to advanced career pathing, the specialized preparation course equips aspiring medical professionals with the necessary analytical skills and knowledge to pass the national medical boards. Interested applicants must complete a comprehensive electronic registration screening form, with total class enrollment strictly capped at 100 participants to guarantee optimal instructional quality. This strategic community-based education program removes financial barriers to high-level professional test preparation, effectively expanding access to medical education and strengthening regional healthcare workforce development."
                                              : itemKey === "17.4.4" && isFirstArticle
                                                ? "The Bachelor of Elementary Education (BEED) faculty of Eastern Samar State University (ESSU) Guiuan Campus successfully deployed its grassroots literacy outreach initiative under the institutional extension framework \"BEED LINE.\" Executed across multiple localized zones, the community program commenced with morning educational sessions at the St. Genevieve Covered Court serving 20 elementary pupils, followed by an afternoon replication in Barangay Sapao that reached 10 additional youth participants. University faculty facilitators Sheralyn Lacay and Ma. Christine P. Daganio led structured instructional tracks focusing on primary reading and writing literacy development, supported by Dr. Cenby Eppie Gaytos, Lorelin Dagale, and pre-service BEED student volunteers. This targeted community outreach bridges regional learning gaps by providing marginalized primary school students with essential academic skills, operationalizing the university’s mandate to deliver inclusive educational resources to the wider community."
                                                : itemKey === "17.4.4" && isSecondArticle
                                                  ? "Eastern Samar State University (ESSU) Main Campus hosted a strategic coordination meeting and facility visit with the Department of Economy, Planning, and Development (DEPDev) Regional Office VIII Director and concurrent ESSU Board Member, Meylene C. Rosales. University Vice Presidents Dr. Rhodora C. Mendoza, Dr. Aris A. Lapada, Dr. Vicente A. Agda, Jr., and Dr. Jocelyn S. Castro led academic deans and administrative directors in receiving the government planning delegation at the President’s Conference Room. The high-level dialogue centered on structuring institutional coordination pathways, specifically focusing on securing state planning support for the university’s localized community extension programs. This formalized regional partnership aims to directly counter economic vulnerabilities within the province, utilizing collaborative government policy frameworks to translate academic research into actionable livelihood interventions for vulnerable communities across Eastern Samar."
                                                  : isFirstArticle
                              ? "Under the framework of regional government collaboration for sustainable policy development, Eastern Samar State University (ESSU) and the Social Security System (SSS) officially entered into a landmark partnership through a Memorandum of Agreement (MOA) signed at the ESSU Main Campus Faculty Lounge. This institutional alignment directly addresses the social protection gap for the university’s non-regular workforce, specifically targeting Contract of Service (COS) and Job Order (JO) personnel who are structurally excluded from the Government Service Insurance System (GSIS). By integrating these workers into the SSS Self-Employed Program, the initiative operationalizes national mandates set forth by Republic Act No. 11199, also known as the Social Security Act of 2018. Executed by SSS Acting Branch Head Troy Ian A. Baclay and ESSU University President Dr. Andres C. Pagatpatan, Jr., the agreement establishes permanent administrative safety nets that guarantee critical workforce coverage against sickness, maternity, disability, old age, and death."
                              : isSecondArticle
                                ? "The Congressional Committee on Higher and Technical Education (CHTE), under the leadership of Chairperson Representative Jude Acidre, convened its 3rd Regular Meeting to deliberate on critical national legislative measures aimed at upgrading the regulatory framework of Philippine tertiary education. Commission on Higher Education (CHED) Chairperson Dr. Shirley C. Agrupis participated directly in the high-level policy dialogue alongside key sectoral stakeholders to advocate for comprehensive operational reforms across local universities and colleges. The structural agenda focused heavily on establishing inclusive administrative policies governing the appointment protocols for academic faculty, researchers, and institutional administrators. This legislative collaboration also targeted the modernization of the Technical Education and Skills Development Authority (TESDA), driving cohesive state-level policy integration to enhance national academic standards and human resource development frameworks."
                                : isThirdArticle
                                  ? "The university leadership operationalized the national labor directives through a coordinated policy response aimed at strengthening institutional stability, employee welfare, and workforce continuity across academic operations. By translating regulatory mandates into actionable administrative measures, ESSU aligned its internal systems with the broader national agenda for labor protection, workforce inclusion, and service continuity. The initiative reflects the university’s commitment to institutional adaptability and governance reform, ensuring that non-regular and contract-based personnel are supported by transparent, accountable, and sustainable employment practices."
                                      : itemKey === "17.4.1" && isFourthArticle
                                        ? "Eastern Samar State University (ESSU) Main Campus formalized its dedication to environmental preservation and sustainability reporting through a unified tree-planting and environmental grooming initiative that concluded its 2025 Charter Week celebrations. Spearheaded by Vice President for Administration Dr. Rhodora C. Mendoza alongside college deans, administrative unit heads, and faculty members, the institutional conservation framework mobilized the university community despite sustained regional rainfall. Parallel to the tree-planting operations, student cohorts from distinct academic colleges synchronized efforts with non-teaching personnel to execute a systematic waste management and cleaning sweep across all campus structures and designated peripheral grounds. This organized ecological mobilization transforms institutional milestones into actionable sustainable development exercises, effectively upgrading the campus's carbon sequestration potential and reinforcing practical environmental stewardship within the student body."
                                        : isFourthArticle
                                          ? "The Department of Science and Technology (DOST) audit of the Smart Innovation Center validated the university’s regional development interventions by examining the quality, accountability, and operational effectiveness of its technology-oriented programs. The review assessed how the innovation hub supports applied research, technology transfer, and community-based solutions aligned with broader national priorities. The audit reaffirmed the institution’s commitment to evidence-based development, institutional accountability, and sustainable productivity models that contribute to regional innovation ecosystems and public-sector responsiveness."
                                          : isSixthArticle
                                      ? "The university executed scheduled disaster preparedness protocols in alignment with national security readiness and institutional resilience planning. The initiative highlighted the importance of coordinated emergency response systems, staff readiness, and continuity measures designed to protect the academic community during operational disruptions. By institutionalizing these procedures, ESSU strengthened its capacity to respond effectively to hazards while reinforcing public confidence in the university’s preparedness and governance standards."
                                      : isSeventhArticle
                                        ? "The Regional Higher Education Commission issued mandatory directives for TES implementation to strengthen delivery standards, program accountability, and institutional alignment across regional higher education stakeholders. The policy guidance reinforced the need for cohesive planning, operational consistency, and evidence-based reforms that support quality assurance and responsive academic governance in local universities."
                                        : isEighthArticle
                                          ? "The DBM partnership with ESSU advanced procurement and governance reforms by aligning institutional planning with transparent, accountable public-sector procedures. The collaboration supports the university’s efforts to strengthen operational efficiency, fiscal discipline, and administrative readiness across programs and project implementation mechanisms."
                                          : isNinthArticle
                                            ? "The ESSU-DILG Governance Center Initiative advanced through a consultative partnership focused on strengthening institutional governance, policy coordination, and local development planning. The collaboration brought together academic, administrative, and local government stakeholders to create stronger mechanisms for accountable, inclusive, and evidence-driven governance practice."
                                            : isTenthArticle
                                              ? "The DSWD renewed its strategic anti-poverty partnership with ESSU to strengthen social protection policies, community-based support systems, and sustainable welfare interventions across underserved communities. The collaboration underscores the university’s role in translating social welfare priorities into actionable programs that improve resilience, inclusion, and service delivery."
                                              : isEleventhArticle
                                                ? "The National Archives of the Philippines, through the NAP, trained ESSU record officers to strengthen records management systems, archival compliance, and institutional documentation standards. The initiative supported the university’s efforts to improve transparency, continuity, and evidence preservation across administrative and academic operations."
                                                : isTwelfthArticle
                                                  ? "The provincial government and higher education commission officers aligned with ESSU to honor academic faculty and strengthen local governance collaboration. The partnership highlighted the value of institutional recognition, public-sector coordination, and sustained support for academic excellence and community development."
                                                  : isThirteenthArticle
                                                    ? "ESSU recalibrated its strategic roadmap to institutionalize higher education commission policy reforms and improve alignment with national academic governance standards. The initiative strengthened the university’s internal planning systems, policy coherence, and operational readiness for a more responsive, evidence-based institutional future."
                                                    : "";

                  return (
                    <div key={post.title} className="h-full">
                      <div className="group flex h-full flex-col rounded-xl bg-white p-3 ring-1 ring-emerald-900/8 shadow-sm transition-all hover:-translate-y-0.5 hover:ring-emerald-300/40">
                        {item.id === "17.2.2" && isFirstArticle ? (
                          <img
                            src={pict24}
                            alt="TESO strengthens community partnerships through stakeholders' meeting and launch of DOST-funded extension programs cover"
                            className="mb-3 h-40 w-full rounded-lg object-cover object-center"
                          />
                        ) : item.id === "17.2.3" && isFirstArticle ? (
                          <img
                            src={pict15}
                            alt="Global research convergence drives academic data exchange for climate and disaster resilience cover"
                            className="mb-3 h-40 w-full rounded-lg object-cover object-center"
                          />
                        ) : item.id === "17.2.3" && isSecondArticle ? (
                          <img
                            src={pict16}
                            alt="ESSU students secure top awards in regional community-based monitoring data conventions cover"
                            className="mb-3 h-40 w-full rounded-lg object-cover object-center"
                          />
                        ) : item.id === "17.2.4" && isFirstArticle ? (
                          <img
                            src={pict17}
                            alt="Cross-border hospitality internships yield global industry performance and skill development data cover"
                            className="mb-3 h-40 w-full rounded-lg object-cover object-center"
                          />
                        ) : item.id === "17.2.5" && isFirstArticle ? (
                          <img
                            src={pict18}
                            alt="DSWD integrates multi-agency employment support services for university beneficiaries cover"
                            className="mb-3 h-40 w-full rounded-lg object-cover object-center"
                          />
                        ) : item.id === "17.2.5" && isSecondArticle ? (
                          <img
                            src={pict19}
                            alt="ESSU and local high school partner to deliver environmental governance and conservation education cover"
                            className="mb-3 h-40 w-full rounded-lg object-cover object-center"
                          />
                        ) : item.id === "17.4.1" && isFirstArticle ? (
                          <img
                            src={pict20}
                            alt="Institutional strategic planning formalizes long-term development agenda for sustainable governance and innovation cover"
                            className="mb-3 h-40 w-full rounded-lg object-cover object-center"
                          />
                        ) : item.id === "17.4.1" && isSecondArticle ? (
                          <img
                            src={pict21}
                            alt="ESSU Main Library deploys virtual services and digital repositories to support flexible academic continuity cover"
                            className="mb-3 h-40 w-full rounded-lg object-cover object-center"
                          />
                        ) : item.id === "17.4.1" && isThirdArticle ? (
                          <img
                            src={pict22}
                            alt="ESSU guidance center deploys virtual psychological support infrastructure for institutional well-being cover"
                            className="mb-3 h-40 w-full rounded-lg object-cover object-center"
                          />
                        ) : item.id === "17.4.1" && isFourthArticle ? (
                          <img
                            src={pict23}
                            alt="ESSU concludes charter week by integrating campus-wide ecological protection and waste management drives cover"
                            className="mb-3 h-40 w-full rounded-lg object-cover object-center"
                          />
                        ) : item.id === "17.4.2" && isFirstArticle ? (
                          <img
                            src={pict25}
                            alt="ESSU joins multi-agency CSC for provincial climate resilience initiative cover"
                            className="mb-3 h-40 w-full rounded-lg object-cover object-center"
                          />
                        ) : item.id === "17.4.2" && isSecondArticle ? (
                          <img
                            src={pict26}
                            alt="ESSU operationalizes DBM health allowance election through democratic civil service consultation cover"
                            className="mb-3 h-40 w-full rounded-lg object-cover object-center"
                          />
                        ) : itemKey === "17.4.3" && isFirstArticle ? (
                          <img
                            src={pict27}
                            alt="State University and Department of Education launch joint research capacity building program cover"
                            className="mb-3 h-40 w-full rounded-lg object-cover object-center"
                          />
                        ) : itemKey === "17.4.3" && isSecondArticle ? (
                          <img
                            src={pict28}
                            alt="ESSU-DepEd partnership builds research capacity among educators through Project TUL-Id cover"
                            className="mb-3 h-40 w-full rounded-lg object-cover object-center"
                          />
                        ) : itemKey === "17.4.3" && isThirdArticle ? (
                          <img
                            src={pict29}
                            alt="ESSU launches free NMAT review program for aspiring physicians cover"
                            className="mb-3 h-40 w-full rounded-lg object-cover object-center"
                          />
                        ) : itemKey === "17.4.4" && isFirstArticle ? (
                          <img
                            src={pict30}
                            alt="State university extension project delivers community literacy programs to local elementary pupils cover"
                            className="mb-3 h-40 w-full rounded-lg object-cover object-center"
                          />
                        ) : itemKey === "17.4.4" && isSecondArticle ? (
                          <img
                            src={pict31}
                            alt="Regional economic development director joins ESSU executives to align provincial extension policies cover"
                            className="mb-3 h-40 w-full rounded-lg object-cover object-center"
                          />
                        ) : isFirstArticle ? (
                          <img
                            src={pict1}
                            alt="ESSU and SSS partnership cover"
                            className="mb-3 h-40 w-full rounded-lg object-cover object-center"
                          />
                        ) : isSecondArticle ? (
                          <img
                            src={pict2}
                            alt="Congressional committee cover"
                            className="mb-3 h-40 w-full rounded-lg object-cover object-center"
                          />
                        ) : isThirdArticle ? (
                          <img
                            src={pict3}
                            alt="University leadership cover"
                            className="mb-3 h-40 w-full rounded-lg object-cover object-center"
                          />
                        ) : isFourthArticle ? (
                          <img
                            src={pict4}
                            alt="DOST audits smart innovation center cover"
                            className="mb-3 h-40 w-full rounded-lg object-cover object-center"
                          />
                        ) : isSixthArticle ? (
                          <img
                            src={pict6}
                            alt="State university executes disaster preparedness protocols cover"
                            className="mb-3 h-40 w-full rounded-lg object-cover object-center"
                          />
                        ) : isSeventhArticle ? (
                          <img
                            src={pict7}
                            alt="Regional Higher Education Commission cover"
                            className="mb-3 h-40 w-full rounded-lg object-cover object-center"
                          />
                        ) : isEighthArticle ? (
                          <img
                            src={pict8}
                            alt="DBM collaborates with ESSU cover"
                            className="mb-3 h-40 w-full rounded-lg object-cover object-center"
                          />
                        ) : isNinthArticle ? (
                          <img
                            src={pict9}
                            alt="ESSU-DILG Governance Center cover"
                            className="mb-3 h-40 w-full rounded-lg object-cover object-center"
                          />
                        ) : isTenthArticle ? (
                          <img
                            src={pict10}
                            alt="DSWD renews strategic anti-poverty partnership cover"
                            className="mb-3 h-40 w-full rounded-lg object-cover object-center"
                          />
                        ) : isEleventhArticle ? (
                          <img
                            src={pict11}
                            alt="NAP trains ESSU record officers cover"
                            className="mb-3 h-40 w-full rounded-lg object-cover object-center"
                          />
                        ) : isTwelfthArticle ? (
                          <img
                            src={pict12}
                            alt="Provincial government and higher education commission cover"
                            className="mb-3 h-40 w-full rounded-lg object-cover object-center"
                          />
                        ) : isThirteenthArticle ? (
                          <img
                            src={pict13}
                            alt="ESSU recalibrates strategic roadmap cover"
                            className="mb-3 h-40 w-full rounded-lg object-cover object-center"
                          />
                        ) : (
                          <div className="mb-3 h-24 rounded-lg bg-gradient-to-br from-emerald-700 via-emerald-500 to-teal-300" />
                        )}

                        <div className="flex items-start justify-between gap-2">
                          <p className="text-sm font-bold leading-snug text-emerald-950">
                            {post.title}
                          </p>
                          <ExternalLink className="mt-1 h-3.5 w-3.5 shrink-0 text-emerald-700" />
                        </div>

                        {summary && (
                          <div className="mt-3 rounded-xl bg-emerald-50/80 p-3 text-sm leading-relaxed text-emerald-900 ring-1 ring-emerald-200 min-h-[110px]">
                            {summary.length > 220 ? `${summary.slice(0, 220).trimEnd()}…` : summary}
                          </div>
                        )}

                        <div className="mt-auto flex items-center justify-between gap-2 border-t border-emerald-100 pt-2">
                          <p className="text-[11px] font-medium text-emerald-800/80">Source: Eastern Samar State University</p>
                          <a
                            href={post.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 hover:text-emerald-950 transition-colors"
                          >
                            Read more
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                    );
                  })}
                </div>
              </div>
            )}

          </div>
        )}
      </div>
      <div className="h-1 bg-gradient-to-r from-amber-400 via-emerald-500 to-amber-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
    </article>
  );
}

export default function Initiatives() {
  const visibleGroups = initiativeGroups.filter((group) =>
    ["17.2", "17.3", "17.4"].some((prefix) => group.name.startsWith(prefix))
  );
  const reportsGroup = initiativeGroups.find((group) => group.name.startsWith("17.3"));
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({
    "17.2 Relationship to Support the Goals": true,
  });
  const [pendingSdgNavigation, setPendingSdgNavigation] = useState<number | null>(null);
  const [sdgNavigatorOpen, setSdgNavigatorOpen] = useState(false);

  useEffect(() => {
    if (pendingSdgNavigation === null || !reportsGroup || !expandedGroups[reportsGroup.name]) {
      return;
    }

    document.getElementById(`sdg-report-${pendingSdgNavigation}`)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    setPendingSdgNavigation(null);
  }, [expandedGroups, pendingSdgNavigation, reportsGroup]);

  const toggleGroup = (groupName: string) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [groupName]: !prev[groupName],
    }));
  };

  const navigateToSdgReport = (goalNumber: number) => {
    if (reportsGroup) {
      setExpandedGroups((prev) => ({ ...prev, [reportsGroup.name]: true }));
      setPendingSdgNavigation(goalNumber);
    }
    setSdgNavigatorOpen(false);
  };

  return (
    <section id="initiatives" className="py-24 sm:py-32 px-5 sm:px-8 bg-white relative">
      <aside
        aria-label="Sustainable Development Goals navigation"
        onMouseEnter={() => setSdgNavigatorOpen(true)}
        onMouseLeave={() => setSdgNavigatorOpen(false)}
        className={`fixed right-3 top-1/2 z-50 h-[min(34rem,80vh)] -translate-y-1/2 transition-[width] duration-300 ${
          sdgNavigatorOpen ? "w-[min(19rem,calc(100vw-1.5rem))]" : "w-11"
        }`}
      >
        {sdgNavigatorOpen && (
          <nav
            aria-label="Navigate to an SDG progress report"
            className="absolute inset-y-0 left-0 right-10 overflow-y-auto rounded-l-2xl bg-white/95 p-3 shadow-lift ring-1 ring-emerald-900/10 backdrop-blur"
          >
            <div className="grid grid-cols-2 gap-2">
              {sdgNavigationItems.map((goal, index) => (
                <button
                  key={goal.name}
                  type="button"
                  onClick={() => navigateToSdgReport(index + 1)}
                  className="flex min-h-11 items-center gap-2 rounded-lg p-1.5 text-left text-[11px] font-semibold leading-tight text-emerald-950 transition hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                  aria-label={`Go to SDG ${index + 1}: ${goal.name}`}
                >
                  <span
                    className="grid h-8 w-8 shrink-0 place-items-center rounded text-sm font-extrabold text-white"
                    style={{ backgroundColor: goal.color }}
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <span>{goal.name}</span>
                </button>
              ))}
            </div>
          </nav>
        )}
        <button
          type="button"
          onClick={() => setSdgNavigatorOpen((open) => !open)}
          aria-expanded={sdgNavigatorOpen}
          aria-label={sdgNavigatorOpen ? "Close SDG navigation" : "Open SDG navigation"}
          className="absolute right-0 top-1/2 flex h-28 w-10 -translate-y-1/2 flex-col items-center justify-center gap-2 rounded-l-xl bg-emerald-800 px-2 text-white shadow-lift transition hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
        >
          <span className="text-xs font-extrabold">SDGs</span>
          <span aria-hidden="true" className="text-lg leading-none">{sdgNavigatorOpen ? "›" : "‹"}</span>
        </button>
      </aside>

      <div className="relative left-1/2 -mt-24 mb-12 flex h-24 w-screen -translate-x-1/2 justify-center overflow-hidden bg-[#1d3c6b] sm:-mt-32 sm:mb-16 sm:h-28">
        <img
          src={sdg17Animation}
          alt="Sustainable Development Goal 17: Partnerships for the Goals"
          className="h-full w-auto max-w-full object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider">
            Initiatives in Action
          </span>
          <h2 className="mt-5 font-serif-display text-3xl sm:text-5xl font-semibold text-emerald-950 leading-[1.1] text-balance">
            Driving partnership-led development across three pillars
          </h2>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-emerald-900">
            Each initiative reflects ESSU's commitment to cross-sector collaboration — from regional
            policy partnerships and SDG reporting to meaningful education for sustainable development.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {visibleGroups.map((group, gi) => {
            const accent = groupAccent[gi] ?? groupAccent[0];
            const isExpanded = !!expandedGroups[group.name];
            const groupContentId = `initiative-group-${gi}`;
            const alwaysVisibleRelationshipItems = group.subcategories
              .flatMap((sub) => sub.initiatives)
              .filter((item) => alwaysVisibleEvidenceIds.has(item.id));

            return (
              <div key={group.name}>
                <button
                  type="button"
                  onClick={() => toggleGroup(group.name)}
                  aria-expanded={isExpanded}
                  aria-controls={groupContentId}
                  className="w-full flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pb-8 border-b border-emerald-900/10 text-left"
                >
                  <div className="w-14 h-14 grid place-items-center">
                    <img src={sdg17Pict} alt="" className="w-10 h-10 object-contain" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="mt-1.5 font-serif-display text-2xl sm:text-3xl font-semibold text-emerald-950 leading-tight">
                        {group.name}
                      </h3>
                      <span className="text-xl font-bold text-emerald-700">{isExpanded ? "−" : "+"}</span>
                    </div>
                  </div>
                </button>

                <div id={groupContentId}>
                  {!isExpanded && alwaysVisibleRelationshipItems.length > 0 && (
                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                      {alwaysVisibleRelationshipItems.map((item) => {
                        const subcategory = group.subcategories.find((sub) =>
                          sub.initiatives.some((initiative) => initiative.id === item.id)
                        );

                        return (
                        <article key={item.id} className="rounded-2xl bg-emerald-50/70 p-5 ring-1 ring-emerald-200/80">
                          <span className="font-serif-display text-sm font-bold text-amber-700 tabular-nums tracking-wide">
                            {item.id}
                          </span>
                          <h4 className="mt-2 font-serif-display text-lg font-semibold leading-snug text-emerald-950">
                            {subcategory?.name}
                          </h4>
                          <div className="mt-4 border-t border-emerald-200/80 pt-3">
                            <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-700/70">
                              Evidence
                            </p>
                            {item.id === "17.2.1" ? (
                              <a
                                href={partnershipReportUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800 hover:text-emerald-950"
                              >
                                Institutional linkages and partnerships development report
                                <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                              </a>
                            ) : (
                              <ul className="mt-2 space-y-2">
                                {evidenceArticles[item.id].map((evidence) => (
                                  <li key={evidence.href}>
                                    <a
                                      href={evidence.href}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="inline-flex items-start gap-1.5 text-sm font-semibold text-emerald-800 hover:text-emerald-950"
                                    >
                                      <span>{evidence.title}</span>
                                      <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </article>
                        );
                      })}
                    </div>
                  )}

                  {isExpanded && (
                    <div className="mt-10 space-y-12">
                      {group.subcategories.map((sub) => (
                        <div key={sub.name}>
                          <div className="flex items-center gap-3 mb-5">
                            <div className={`h-px w-8 bg-gradient-to-r ${accent.bar}`} />
                            <h4 className="text-sm sm:text-base font-bold text-emerald-800">{sub.name}</h4>
                          </div>
                          <div className={`grid gap-5 ${sub.initiatives.length === 1 ? "grid-cols-1" : "md:grid-cols-2"}`}>
                            {sub.initiatives.map((item) => (
                              <InitiativeCard key={item.id} item={item} />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
