import type { LongPage } from '../types';

export const education: LongPage = {
  slug: 'education',
  category: 'industry',
  title: 'Education',
  seoTitle: 'AI for Education in the UAE — Schools and Higher Ed',
  seoDescription:
    'Brocode Solutions builds adaptive learning, Arabic content, and operational AI for UAE schools, universities, and EdTech firms — aligned with MoE expectations.',
  eyebrow: 'Education AI',
  headline: 'AI that helps UAE educators teach better and students learn faster.',
  sub: 'We build adaptive learning, Arabic content, and operational AI for UAE schools, universities, and EdTech firms — engineered around MoE expectations, KHDA and ADEK frameworks, and the MBZUAI ecosystem.',
  heroImage: '/images/industries/education.jpg',
  heroImageAlt: 'University students working with tablets in a bright UAE campus learning space while an instructor supports a small group.',
  heroIcon: 'brain',
  intro:
    'Education in the UAE spans federal schools under the Ministry of Education, the private school estate overseen by KHDA in Dubai and ADEK in Abu Dhabi, a fast-expanding higher education sector, world-leading institutions such as MBZUAI, and a thriving EdTech base serving the wider Arab world. Expectations on outcomes are rising in parallel with class sizes and curriculum complexity. Brocode Solutions builds AI for schools, universities, and EdTech firms from our Abu Dhabi headquarters, with delivery teams comfortable working in bilingual, multi-curriculum environments.',
  sections: [
    {
      heading: 'The pressure on UAE education is rising',
      body: 'The UAE serves an exceptionally diverse student population across MoE, IB, British, American, Indian, and other curricula, in two primary languages and several home languages. National strategies tie education tightly to the broader AI and innovation agenda, and the launch of MBZUAI and continued investment in research universities raise the bar for what graduates and institutions are expected to deliver. Operators face teacher recruitment pressure, tighter inspections under KHDA and ADEK, and parental expectations that grow each year. AI is the practical tool to free teacher time, personalise learning, and run institutions more efficiently without compromising the quality that the regulators and parents expect.'
    },
    {
      heading: 'Where AI moves the needle in education',
      body: 'The highest-value education AI in the UAE focuses on a few areas: adaptive learning that adjusts difficulty and pacing to each student, Arabic and English content generation that helps teachers produce high-quality materials in less time, automated marking and feedback on structured assessments, early-warning models that flag students at risk of falling behind or disengaging, and operational AI for admissions, timetabling, and resource planning. In higher education, research-support copilots help faculty and graduate students with literature review and grant drafting, and student-services AI handles the long tail of administrative queries in two languages.'
    },
    {
      heading: 'Operating and safeguarding reality',
      body: 'Education AI in the UAE operates with safeguarding and content quality as non-negotiable defaults. We design systems with strict handling of student personal data under federal data protection law, age-appropriate guardrails on any generative model, and human-in-the-loop checkpoints for any decision that affects placement or assessment. Curriculum alignment is a first-class concern — content generated or recommended by AI is grounded in the institution\'s curriculum and reviewed by academic leads before reaching students. Where institutions fall under KHDA, ADEK, or MoE inspection cycles, we produce the documentation needed to evidence responsible use of AI.'
    },
    {
      heading: 'Outcomes UAE education clients have shipped',
      body: 'Recent engagements include an Arabic and English adaptive learning module for a school group that improved student progress on weekly formative assessments, a teacher copilot for content and assessment generation grounded in curriculum that materially reduced lesson preparation time, and a student-services conversational agent for a university that handled common admissions, finance, and timetable queries in two languages. In each case, Brocode delivered the model, the integration with the institution\'s LMS and SIS, and the change management — training teachers, faculty, and student-services teams so the AI became a daily tool rather than a one-off experiment.'
    }
  ],
  highlights: [
    { title: 'Curriculum-grounded', description: 'Models retrieve from the institution\'s own curriculum and policies.', icon: 'doc' },
    { title: 'Arabic-first content', description: 'Native Arabic and English generation, assessment, and tutoring.', icon: 'chat' },
    { title: 'Adaptive learning ready', description: 'Difficulty and pacing tuned to individual learners.', icon: 'brain' },
    { title: 'LMS and SIS integrated', description: 'Native integration with Moodle, Canvas, Blackboard, PowerSchool, and SAP SLcM.', icon: 'link' },
    { title: 'Safeguarding-aware', description: 'Age-appropriate guardrails and content review workflows.', icon: 'shield' },
    { title: 'Inspection-ready evidence', description: 'Documentation aligned to KHDA, ADEK, and MoE expectations.', icon: 'gavel' }
  ],
  whyBrocode:
    'We work with schools, universities, and EdTech firms across the UAE, with delivery teams used to working in bilingual, multi-curriculum environments and under KHDA, ADEK, and MoE oversight. Our engineers handle student data carefully, deploy inside the institution\'s perimeter when required, and produce documentation that academic leadership, inspectors, and parents can read with confidence.',
  ourApproach:
    'We start with an academic and operational discovery alongside school or university leadership, prioritising use cases with the clearest impact on student outcomes or staff time. Build proceeds in two-week increments with teachers, faculty, and student-services staff involved in user testing throughout. Hardening covers safeguarding review, bias and fairness assessment, curriculum alignment by academic leads, and integration with LMS, SIS, and student communications. Post go-live, Brocode engineers run the system alongside the institution\'s team under a defined run-phase, transferring operational ownership.',
  stats: [
    { value: 6, label: 'UAE education clients served' },
    { value: 30, suffix: '%', label: 'Average reduction in lesson preparation time' },
    { value: 60, suffix: '%', label: 'Tier-one student query deflection' },
    { value: 8, label: 'Weeks median pilot duration' }
  ],
  primaryCta: { label: 'Talk to our education team', href: '/contact' },
  secondaryCta: { label: 'Review our methodology', href: '/technology/methodology' },
  related: [
    { label: 'Generative AI Development', href: '/services/generative-ai-development', description: 'Curriculum-grounded content and tutoring.' },
    { label: 'Conversational AI & Chatbots', href: '/services/conversational-ai-chatbots', description: 'Bilingual student-services agents.' },
    { label: 'Natural Language Processing', href: '/services/natural-language-processing', description: 'Arabic and English assessment and feedback.' },
    { label: 'Predictive Analytics', href: '/services/predictive-analytics', description: 'Early-warning and retention modelling.' },
    { label: 'Responsible AI & Governance', href: '/services/responsible-ai-governance', description: 'Safeguarding and inspection-ready evidence.' }
  ],
  capabilities: [
    'Adaptive learning across bilingual content',
    'Teacher copilots for content and assessment generation',
    'Automated marking and structured feedback',
    'Early-warning models for student risk and retention',
    'Bilingual student-services and admissions agents',
    'Research-support copilots for higher education'
  ],
  outcomes: [
    'Better student progress on formative assessment',
    'Reduced teacher and faculty preparation time',
    'Higher tier-one resolution on student queries',
    'Earlier intervention on at-risk students',
    'Inspection-ready evidence of responsible AI use'
  ]
};
