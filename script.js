/* 
  Updated script.js
  - 25 scholarship items (editable)
  - Show first 15 cards by default
  - "See more" toggles to reveal remaining 10
  - Search & filter operate across all items and integrate with show/see-more logic
  - Header logo fix and mobile menu behavior included
*/

/* -------------- Site config (editable) -------------- */
const siteConfig = {
  siteName: 'NEG SCHOLARSHIP',
  contactEmail: 'hammedopeyemi2005@gmail.com',
  whatsappNumber: '+2349013866694',
  facebookUrl: 'https://www.facebook.com/share/17azJYGRF4/',
  instagramUrl: 'https://www.instagram.com/opeyemiabimbolahammed?igsh=MW5razE5eGJocnM5bA==',
  whatsappUrl: 'https://wa.me/2349013866694',
};

/* -------------- Scholarship data (25 flashcards) -------------- */
/* Edit these objects to change cards. Keep id unique. */
const scholarships = [
  // 1-15 copied/expanded from previous set
  {
    id: 'innova-1',
    title: 'Airtel Africa Foundation Scholarship 2026 — Fully Funded for Nigerian Undergraduates',
    provider: 'Airtel Africa Foundation',
    field: 'technology',
    shortDescription: `If you’re a 200 or 300-level engineering student in Nigeria, here’s your chance to secure academic support through the InnovaGenius Solutions Scholarship Programme 2025.`,
    description: `The scholarship program provides support to 100 undergraduate students enrolled in selected public universities, beginning from their first year (100 Level) and continuing through graduation, provided they maintain strong academic performance.`,
    eligibility: [
      'Be a Nigerian citizen.',
      'Be enrolled in one of the eligible ICT-related programmes. eg- Computer Science, Software Engineering, Cybersecurity,Artificial Intelligence (AI), and others.',
      'Candidates are required to provide valid academic documents such as O’Level certificates, JAMB results, and their Admission Letter',
      'Not be a recipient of another major scholarship for the same purpose.'
    ],
    deadlineText: 'Not stated, but ealry application is advised',
    howToApply: 'Visit   the application link, fill in your details, and submit the required documents as specified.',
    applicationLink: 'https://candidate.scholastica.ng/schemes/airtelfellowship2025',
    whyApply: [
      'Tech Skill Development: It supports studies in ICT and innovation-driven disciplines.',
      'Career Pathways: Scholarship beneficiaries gain enhanced access to internships, innovation hubs, and mentorship opportunities that strengthen their professional development.',
      'Reduced Financial Stress: The scholarship fully covers tuition fees and living expenses, easing the financial burden on students',
      'Boost to your resume and professional development'
    ]
  },
  {
    id: 'techleap-2',
    title: 'AICA * DATACamp scholarship(fully funded)',
    provider: 'TechLeap Foundation',
    field: 'STEM',
    shortDescription: 'The AICA × DATACamp is offering african students and tech enthusiasts free access to premium learning platform.',
    description: 'The program is program to teach the folloing programme- Data science, Data analysis, Data Engineering, Manchine learning Engineering, AI, Cloud Data tools, python & SQL and manny more.',
    eligibility: ['Current undergraduate (100-400 level)','Minimum 3.0 GPA or equivalent','Demonstrated interest in technology or projects'],
    deadlineText: 'Deadline: 17th January 2026',
    howToApply: 'open the application link, fill your personal and education details, and follow the prompts',
    applicationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfLT527aJae0XJPXEo8Xii_hyeGAsVtBX1RbcHSZOGmMHY9wA/viewform',
    whyApply: ['Mentorship','6 month premium access','certifications and Job board','Real-world projects']
  },
  {
    id: 'creative-3',
    title: 'Charles University Development Scholarship 2027',
    provider: 'Charles university',
    field: 'All fields',
    shortDescription: 'This scholarship is tailored for international students from developing countries, providing financial assistance to those pursuing undergraduate or postgraduate degree programs at Charles University in Prague.',
    description: 'Dreaming of world-class education in the heart of Europe? The Charles University Development Scholarship 2027 opens the door to exceptional academic opportunities in the Czech Republic — a country celebrated for its affordability, cultural richness, and vibrant student life.',
    eligibility: 'All international students from developing countries applying for undergraduate or postgraduate degree programs at Charles University.',
    deadlineText: 'Deadline:  30th april 2026',
    howToApply:['Applications must be submitted via email to admissions@fsv.cuni.cz.',
       'Applications must be submitted in full, including all required documents. All documents must be written in English or accompanied by certified translations',
      'The application has to include the following 2 attachments:',
    'Applicants must submit a completed motivation essay of no more than 1,000 words, outlining their need for financial support and describing the academic and personal goals they hope to achieve through their studies at Charles University.',
  'one letter of recommendation from a Charles University academic who knows you from your studies at the Faculty and is familiar with your situation (in case of current students) or from an academic, who knows you from your previous studies, including confirmation of your financial need (in case of new applicants)'] ,
    applicationLink: 'https://fsv.cuni.cz/en/study/scholarships-funding-and-fees/fsv-uk-scholars-program',
    whyApply: ['A sum award of CZK 75,000 (approx. €3,000)','living expenses support and travel costs','opportunity to live and study in Prague','Access to world-class education and a strong international alumni network']
  },
  {
    id: 'global-4',
    title: 'Idris Ajiboye Foundation Scholarship 2026',
    provider: 'World Scholars',
    field: 'all field',
    shortDescription: 'The Idris Ajiboye Foundation aims to support oustanding Nigerians to achieve thier academic acheivement.',
    description: 'The foundations also seeks to provide assistance for the underprivildged people in support for their support. The foundation will award a sum of ₦100,100 to (10) selected undergraduate student enrolled in accredited indtitutions and living in Nigeria',
    eligibility: ['resides and sschool within Nigeria','be enroll in accredited tertiary institution in Nigeria ','submit all required documents before deadline'],
    deadlineText: 'Deadline: January 31st, 2026',
    howToApply: 'Apply and provide the require documents.',
    applicationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdZV-0vNyV_-6a7vlY_5nYJpf-i4PXuB143iksJ4Gu9U2aXLg/viewform?pli=1',
    whyApply: ['Research funding','Global network','Mentorship & placements']
  },
  {
    id: 'Bridge foundation Scholarship programme for undergraduates',
    title: 'Bridge programme',
    provider: 'AgriPower Initiative',
    field: 'Agriculture',
    shortDescription: 'the bridge foundation scholarship programme is a ₦700m fund that will provide the tution fee as well as monthly stipends to undergraduate students in Nigerian universities.',
    description: 'The Bridge Scholarship Programme is a fully funded initiative in Nigeria that provides tuition, living stipends, and mentorship to indigent or outstanding university students, with the goal of empowering future leaders in STEM and business. It is offered annually and continues to support recipients until graduation, including career development opportunities afterward.',
    eligibility: ['Be 100 and 200 level students from partner universities across Nigeria','Possess and submit academic transcripts (200 Level students)','Submit UTME and Post-UTME score (100 level students)','Pass the Screening Examination','Provide recommendation letters from the department & the university','Have a clean disciplinary record from Students’ Affairs','Submit a 1-minute video expression of interest'],
    deadlineText: 'Deadline: 15th January 2026',
    howToApply: 'Submit Complete Application Form, Academic Transcripts, UTME and Post-UTME Result, Recommendation Letter, 1-minute video for expression of interest.',
    applicationLink: 'https://wealthbridge.com.ng/bridgefoundation',
    whyApply: ['700m Scholarship fund for the winners','tution','accommodation','250k stipends/Yr','internship opportunities']
  },
 {
    id: 'medscholar-6',
    title: 'Credence Nigerian Law School Scholarship 2026.',
    provider: 'Credence Nigerian Law School',
    field: 'Law',
    shortDescription: 'Financial support for law students enrolled in the Nigerian Law School for the 2026 academic session.',
    description: 'The Credence Scholarship is designed to assist high-achieving law students with the costs of their professional legal education, ensuring that financial barriers do not hinder the next generation of legal minds.',
    eligibility: [
      'Law students currently enrolled in the Nigerian Law School with a CGPA of 3.5/4.',
      'Final-year law students & recent graduates awaiting law school admission.',
      'Demonstrated academic excellence and commitment to the legal profession.'
    ],
    deadlineText: 'Deadline: 31st January 2026',
    howToApply: [
      'Visit the application link provided below.',
      'Fill in your personal and academic details in the form.',
      'Submit required documents: academic transcripts, a letter of recommendation, and a character reference.',
      'Ensure submission is completed before 11:59pm on 31st January 2026.'
    ],
    applicationLink: 'https://docs.google.com/forms/d/1i7wCHfCytQPXl9pQxDsPRb7g982JRpz7EdcjAKSYteE/viewform?edit_requested=true',
    whyApply: [
      'Tuition fee support',
      'Recognition of academic merit',
      'Networking opportunities with legal professionals'
    ],
  },
  {
    id: 'bizlead-7',
    title: ' AKISAN 2026 SCHOLARSHIP ',
    provider: 'AKINSA SCHOLARSHIP',
    field: 'All field',
    shortDescription: 'This scholarship initiative demonstrates AKISAN’s dedication to youth empowerment, education, and human capital development across Akwa Ibom State and Nigeria.',
    description: 'The AKISAN Scholarship Program was created to reduce the financial challenges of tertiary education for Akwa Ibom students while encouraging academic excellence and community service. It offers financial support annually to selected undergraduate students in accredited Nigerian and overseas universities, polytechnics, and colleges of education.',
    eligibility: ['Applicants must be indigenes of Akwa Ibom State, Nigeria.','Applicants must be enrolled in an accredited Nigerian tertiary institution.','Applicants must show excellent academic performance.','Applicants must demonstrate financial need', 'Minimum CGPA of 3.0/5 or equivalent.'],
    deadlineText: 'Not sated, apply early',
    howToApply: 'Aplicant needs to upload the following documents to the application portal:A valid student ID card, Proof of Akwa Ibom origin (local government certificate),Recent academic transcripts or results, A short essay or personal statement,Only candidates who meet all requirements and provide accurate information will be considered .',
    applicationLink: 'https://www.akisan.org/scholarship',
    whyApply: ['Successful applicants will receive ₦100,000.','Mentorship','62 recipients ( 2 per local government)']
  },
  {
    id: 'enviro-8',
    title: 'Lafarge Technical Skills Development Programme (TSDP) 2026',
    provider: 'Lafarge',
    field: 'Tech',
    shortDescription: 'The Lafarge Technical Skills Development Programme (TSDP) is a 36-month vocational training initiative by Lafarge Africa Plc, part of the LafargeHolcim Group.',
    description: 'Are you a recent secondary school graduate in Nigeria seeking free vocational training to launch your career? The Lafarge Technical Skills Development Programme (TSDP) 2026 provides young Nigerians with hands-on training in high-demand technical fields.',
    eligibility: ['Age between 17 and 20 years.','Applicants must have at least five credits in WAEC or NECO, including Physics, Chemistry, Mathematics, and one additional subject.','A pass in English Language is required.','Applicants must be Nigerian citizens.','Willingness to undergo a 36-month training program.'],
    deadlineText: 'Deadline: 15th january 2026',
    howToApply: ['Scanned copy of your WAEC or NECO results.','Birth certificate', 'Recent passport photograph.','Secondary school leaving certificate.','Any other proof of eligibility, like a local government identification.'],
    applicationLink: 'https://recruitment.dragnet-solutions.com/portal/apply?d=lafargegtp&details=516',
    whyApply: ['Tuition-Free Education:The program fully covers all lectures and practical sessions.','Hands-On Experience: Develop real-world skills through training at Lafarge’s industrial plants.','Daily Lunch and Residential Support: Participants receive meals and accommodation during the program.','Certification: Earn a Lafarge-recognized certificate to strengthen your resume for Nigerian job markets.','Career Boost: Gain skills for high-demand fields like mechanical engineering, electrical work, and manufacturing—ideal for self-employment or industry jobs.']
  },
  {
    id: 'womentech-9',
    title: 'Women in Tech Scholarship',
    provider: 'TechRise',
    field: 'STEM',
    shortDescription: 'Encourages women entering software engineering and data science with awards and mentorship.',
    description: 'TechRise empowers women in technology through scholarships, internships and networking events.',
    eligibility: ['Self-identified women or non-binary individuals','Pursuing a degree in computing, data science or related fields','Portfolio or coding sample (if available)'],
    deadlineText: 'Deadline: 30th June 2025',
    howToApply: 'Complete online application and include portfolio or GitHub links.',
    applicationLink: 'https://example.org/women-in-tech',
    whyApply: ['Stipend','Internship placements','Mentorship']
  },
  {
    id: 'nglead-10',
    title: 'Tranos Intenship Program',
    provider: 'Tranos company',
    field: 'Tech',
    shortDescription: 'The Tranos Intenship Program 2026 is an exciting oppotunity for undergraduate trying to get hands-on experience in the tech industry.',
    description: 'The Tranos Intenship Program 2026 is an exciting oppotunity for undergraduate trying to get hands-on experience in the tech industry.Designed to provide students in strengthing their technical knowldge and problem-solving capacity ',
    eligibility: ['Enrolled in a university or National Diploma(ND) student ','Have completed at least the second year of study','Hold a minimum of second Class Upper division (CGPA 3.5/5 OR equivalent)', 'be available for a minimum 6 month duration.', 'Note: the program is up to 12 months for ND students'],
    deadlineText: 'Deadline: 30th January 2026',
    howToApply: 'Be ready to submit CV/ Resume, academic transcript, proof of student enrollment(ID card), cover latter expressing intrest and career goals.',
    applicationLink: 'https://tranos.seamlesshiring.com/job/view/7927?utm_source=#/',
    whyApply: ['professional experience','monthly Stipends','research development','soft skill development','conducive working environment']
  },
  {
    id: 'arts-11',
    title: 'TotalEnergies UNDERGRADUATE INTENSHIP PROGRAM',
    provider: 'TotalEnergies',
    field: 'Tech',
    shortDescription: 'The TotalEnergies SIWES intenship program 2026 is a structured trainning opportunity designed for undergraduate students participating in students Industrial Work Experience Scheme(SIWES) ',
    description: 'The program is organized by TotalEnergies and runs from March to Augest 2026, providing students with hand-on industry experience and professional development.',
    eligibility: ['be an undergraduate from a recognised tertiry institution','be eligible for the Industrial Training as require by the individual institution ','be available from March to August for the Training', 'be ready to provide all accurate and acedemic information required.','The required documents include: personal details, academic details, SIWES/IT details(where applicable), résumé/CV, and other additional details'],
    deadlineText: '31st of January, 2026',
    howToApply: ['Access the official TotalEnergies SIWES Intenship application form.', 'carefully read all instructions.',' complete the form with accurate personal and academic information.','submit the apllication(only once - try to get all the required documents ready).', 'print and save a copy of your responses affter submission for refrence.'],
    applicationLink: 'https://forms.office.com/pages/responsepage.aspx?id=sJGeMh_i-0igcUVnF-zCjgirAIp64HtCvEPKtFbSP8NUOUkxSzc3NlNYUllRWkpLMFE1UUpEVElDSi4u&origin=lprLink&route=shorturl',
    whyApply: ['exoposure to professional work environment','pratical work experience','Hands-on training','Enhanced employability']
  },
  {
    id: 'scholar-tech-12',
    title: 'Data Innovators Scholarship',
    provider: 'DataFront',
    field: 'Data Science',
    shortDescription: 'Scholarship for students working on data-driven projects with social impact.',
    description: 'DataFront supports student projects that use data science to solve local problems (health, transport, agriculture).',
    eligibility: ['Undergraduate or graduate students in data-related fields','Project outline and sample code or notebook','Mentor endorsement (if available)'],
    deadlineText: 'Deadline: 28th February 2026',
    howToApply: 'Submit project outline and link to code repository.',
    applicationLink: 'https://example.org/datafront-apply',
    whyApply: ['Project funding','Cloud credits','Mentorship']
  },
  {
    id: 'schol-exchange-13',
    title: 'Seplat Energy Applied Technology Training Program',
    provider: 'Seplat Energy',
    field: 'Tech',
    shortDescription: 'Funding support for semester exchange or short research visits abroad.',
    description: 'Seplat Energy producing Nigeria Unlimitd(SEPNU) is inviting applications from young Nigerians for its 2026 Applied Technology Training Proram. The Seplat Energy Applied Technlogy Training Program offers a hands-on oil and gas learning experience, career growth, and a professinal SEPNU certificate.',
    eligibility: ['Must be Nigerians','Must have graduated with a minimum of upper credit obtained not earlier than 2023','must have a National Diploma(ND) in any of the following deciplines[chemical engineering, electrical and electonic engineering, mechanical engineering, petroleum engineering technology',' require documents include: complete application form, government issued ID card, ND certificate/statement of result, passport photograph'],
    deadlineText: 'Deadline: 30st January 2026',
    howToApply: 'To apply for Seplat Energy Applied Technology Training program, click on the application link to access the portal.',
    applicationLink: 'https://recruitment.dragnet-solutions.com/SEPNUATTP/',
    whyApply: ['Oil and gas training','certification','career Devlepment']
  },
  {
    id: 'sciup-14',
    title: 'Young Scientists Fellowship',
    provider: 'SciUp Foundation',
    field: 'Science',
    shortDescription: 'Fellowship for students conducting lab research in physical or life sciences.',
    description: 'SciUp funds undergraduate research assistants and supports publication-ready projects.',
    eligibility: ['Undergraduate or graduate students involved in lab research','Supervisor letter and research summary','Evidence of academic performance'],
    deadlineText: 'Deadline: 14th July 2025',
    howToApply: 'Upload research summary and supervisor endorsement.',
    applicationLink: 'https://example.org/sciup-apply',
    whyApply: ['Research stipend','Publication support','Conference travel']
  },
  {
    id: 'voc-tech-15',
    title: 'Voc-Tech Skills Scholarship',
    provider: 'SkillsWorks',
    field: 'Vocational',
    shortDescription: 'Funding for vocational and technical training programs (short courses & certifications).',
    description: 'SkillsWorks helps students and young professionals access technical certifications and short-course training.',
    eligibility: ['Applicants seeking vocational or technical certification','Statement of intent and career plan','Proof of enrollment in a recognized training program'],
    deadlineText: 'Deadline: 20th August 2025',
    howToApply: 'Apply with program enrollment details and a short statement of intent.',
    applicationLink: 'https://example.org/skillsworks-apply',
    whyApply: ['Course fees support','Certification sponsorship','Job placement assistance']
  },

  // 16-25 - additional items
  {
    id: 'fintech-16',
    title: 'Fintech Innovators Award',
    provider: 'FinStart',
    field: 'Finance',
    shortDescription: 'Support for students building financial technology projects.',
    description: 'FinStart backs student teams building fintech solutions aimed at financial inclusion.',
    eligibility: ['Student teams or individuals','Prototype or demo required','Business model outline'],
    deadlineText: 'Deadline: 12th October 2025',
    howToApply: 'Submit demo link and business outline on FinStart portal.',
    applicationLink: 'https://example.org/finstart-apply',
    whyApply: ['Seed funding','Mentorship','Demo day access']
  },
  {
    id: 'hrscholar-17',
    title: 'Humanities Research Award',
    provider: 'Librae Fund',
    field: 'Humanities',
    shortDescription: 'Grant to support student research in history, languages and literature.',
    description: 'Librae Fund supports humanities research projects with resources for archives and fieldwork.',
    eligibility: ['Undergraduate/graduate students in humanities','Research proposal','Supervisor endorsement'],
    deadlineText: 'Deadline: 10th January 2026',
    howToApply: 'Upload research proposal and bibliography.',
    applicationLink: 'https://example.org/libraefund',
    whyApply: ['Research funding','Archive access','Publication advisory']
  },
  {
    id: 'law-18',
    title: 'Future Lawyers Scholarship',
    provider: 'LawBridge',
    field: 'Law',
    shortDescription: 'Scholarship for exemplary law students involved in public interest work.',
    description: 'LawBridge awards students pursuing public interest or pro-bono work with financial support and internships.',
    eligibility: ['Law students with public interest focus','Transcript and statement of service','Recommendation letter'],
    deadlineText: 'Deadline: 8th September 2025',
    howToApply: 'Apply with service history and CV.',
    applicationLink: 'https://example.org/lawbridge',
    whyApply: ['Internships','Stipend','Networking']
  },
  {
    id: 'arch-19',
    title: 'Urban Design Grant',
    provider: 'CityLab',
    field: 'Architecture',
    shortDescription: 'Support for student-led urban design and planning projects.',
    description: 'CityLab funds student projects that propose practical urban improvements for local communities.',
    eligibility: ['Students in architecture/planning','Design proposal','Community partner (if available)'],
    deadlineText: 'Deadline: 21st November 2025',
    howToApply: 'Submit design brief and visuals.',
    applicationLink: 'https://example.org/citylab',
    whyApply: ['Project funding','Exhibition','Mentoring']
  },
  {
    id: 'edu-20',
    title: 'Teacher Development Fellowship',
    provider: 'EduRise',
    field: 'Education',
    shortDescription: 'Fellowship for students training as teachers with a focus on underserved communities.',
    description: 'EduRise supports future teachers with placement opportunities and training stipends.',
    eligibility: ['Education students or trainees','Statement of intent','School placement letter (if available)'],
    deadlineText: 'Deadline: 30th November 2025',
    howToApply: 'Complete EduRise application and upload supporting docs.',
    applicationLink: 'https://example.org/edurise',
    whyApply: ['Training stipend','Placement','Teaching resources']
  },
  {
    id: 'media-21',
    title: 'Student Journalism Grant',
    provider: 'PressGrow',
    field: 'Media',
    shortDescription: 'Support for student journalists and media projects with ethical reporting emphasis.',
    description: 'PressGrow funds student reporting projects that hold institutions accountable and highlight community issues.',
    eligibility: ['Student journalists or media groups','Project proposal and sample work','Ethics statement'],
    deadlineText: 'Deadline: 14th December 2025',
    howToApply: 'Submit proposal and samples on PressGrow portal.',
    applicationLink: 'https://example.org/pressgrow',
    whyApply: ['Project funding','Mentorship','Publication opportunities']
  },
  {
    id: 'devops-22',
    title: 'Cloud Scholars Fellowship',
    provider: 'CloudNet',
    field: 'IT',
    shortDescription: 'Cloud credits and training for students building cloud-native projects.',
    description: 'CloudNet provides cloud credits, training and mentorship for student teams building scalable projects.',
    eligibility: ['Students building cloud projects','Project demo or repo link','Brief technical plan'],
    deadlineText: 'Deadline: 6th December 2025',
    howToApply: 'Provide repo/demo and project plan on CloudNet portal.',
    applicationLink: 'https://example.org/cloudnet',
    whyApply: ['Cloud credits','Training','Mentorship']
  },
  {
    id: 'design-23',
    title: 'Design Futures Scholarship',
    provider: 'DesignHub',
    field: 'Design',
    shortDescription: 'Scholarship for product and industrial design students working on inclusive products.',
    description: 'DesignHub supports projects that prioritize accessibility, usability and social impact.',
    eligibility: ['Design students with portfolio','Project brief and prototype images','Statement of impact'],
    deadlineText: 'Deadline: 9th October 2025',
    howToApply: 'Upload portfolio and project brief.',
    applicationLink: 'https://tefconnect.com/login?redirect=%2Fmyprofile',
    whyApply: ['Prototype funding','Mentorship','Exhibitions']
  },
  {
    id: 'math-24',
    title: 'Applied Mathematics Award',
    provider: 'MathWorks Trust',
    field: 'Mathematics',
    shortDescription: 'Grant for math students working on applied problems with real-world datasets.',
    description: 'MathWorks Trust supports student projects applying math to finance, health or engineering problems.',
    eligibility: ['Undergraduate or graduate students in mathematics','Project outline and dataset description','Supervisor support if graduate'],
    deadlineText: 'Deadline: 22nd January 2026',
    howToApply: 'Submit project outline and sample analysis.',
    applicationLink: 'https://example.org/mathworks',
    whyApply: ['Research funding','Tooling support','Mentorship']
  },
  {
    id: 'startup-25',
    title: 'Young Founders Seed Grant',
    provider: 'LaunchPad',
    field: 'Entrepreneurship',
    shortDescription: 'Seed grants and incubation support for student founders.',
    description: 'LaunchPad helps student founders turn prototypes into products through funding and an incubation program.',
    eligibility: ['Student founders','Prototype or working MVP','Team bios and short plan'],
    deadlineText: 'Deadline: 31st December 2025',
    howToApply: 'Apply with MVP link and short pitch.',
    applicationLink: 'https://example.org/launchpad',
    whyApply: ['Seed grant','Incubation','Investor demo day']
  }
];

// Populate any missing `applicationLink` with a unique placeholder URL
// These are safe to replace later with real provider links before deployment.
scholarships.forEach(s => {
  if (!s.applicationLink) {
    const rand = Math.random().toString(36).slice(2,9);
    const key = encodeURIComponent(s.id || rand);
    s.applicationLink = `https://example.com/apply/${key}?ref=${rand}`;
  }
});

/* -------------- App state -------------- */
const SHOW_INITIAL = 15; // show 15 first, "See more" reveals rest
let currentFiltered = []; // filtered list based on search/filter
let isExpanded = false;    // whether "see more" expanded

/* ---------- DOM and behaviour ---------- */
document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const cardsEl = document.getElementById('cards');
  const searchEl = document.getElementById('search');
  const fieldFilter = document.getElementById('filter-field');
  const noResults = document.getElementById('no-results');
  const countSch = document.getElementById('count-sch');
  const countFields = document.getElementById('count-fields');
  const countBoards = document.getElementById('count-boards');
  const searchClear = document.getElementById('search-clear');
  const seeMoreBtn = document.getElementById('see-more-btn');

  const modal = document.getElementById('modal');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalClose = document.getElementById('modal-close');
  const modalTitle = document.getElementById('modal-title');
  const modalProvider = document.getElementById('modal-provider');
  const modalDeadline = document.getElementById('modal-deadline');
  const modalDesc = document.getElementById('modal-desc');
  const modalElig = document.getElementById('modal-elig');
  const modalHow = document.getElementById('modal-how');
  const modalWhy = document.getElementById('modal-why');
  const modalApply = document.getElementById('modal-apply');

  const contactForm = document.getElementById('contact-form');
  const contactMsg = document.getElementById('contact-msg');

  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  // header/site config links
  const contactEmailEl = document.getElementById('contact-email');
  const contactWhatsappEl = document.getElementById('contact-whatsapp');
  const socialFacebook = document.getElementById('social-facebook');
  const socialWhatsapp = document.getElementById('social-whatsapp');
  const socialInstagram = document.getElementById('social-instagram');
  document.querySelectorAll('.site-name').forEach(el => el.textContent = siteConfig.siteName);
  if (contactEmailEl) contactEmailEl.href = `mailto:${siteConfig.contactEmail}`;
  if (contactWhatsappEl) contactWhatsappEl.href = siteConfig.whatsappUrl;
  if (socialFacebook) socialFacebook.href = siteConfig.facebookUrl;
  if (socialWhatsapp) socialWhatsapp.href = siteConfig.whatsappUrl;
  if (socialInstagram) socialInstagram.href = siteConfig.instagramUrl;

  // populate field filter
  const fields = Array.from(new Set(scholarships.map(s => (s.field || '').trim()).filter(Boolean))).sort();
  fields.forEach(f => {
    const opt = document.createElement('option');
    opt.value = f;
    opt.textContent = f;
    fieldFilter.appendChild(opt);
  });

  // counts
  countSch.textContent = scholarships.length;
  countFields.textContent = fields.length || '—';
  countBoards.textContent = Array.from(new Set(scholarships.map(s => s.provider))).length;

  // initial filter state
  currentFiltered = scholarships.slice();

  // render helper (shows first SHOW_INITIAL unless expanded)
  function renderCardsFromFiltered() {
    const visibleCount = isExpanded ? currentFiltered.length : Math.min(SHOW_INITIAL, currentFiltered.length);
    cardsEl.innerHTML = '';
    if (!currentFiltered.length) {
      noResults.hidden = false;
      seeMoreBtn.style.display = 'none';
      return;
    }
    noResults.hidden = true;

    currentFiltered.slice(0, visibleCount).forEach((s, i) => {
      const article = document.createElement('article');
      article.className = 'card card--hidden';
      article.innerHTML = `
        <div>
          <div class="card-meta"><span class="badge">${escapeHtml(s.field || 'General')}</span> <span class="muted">&middot; ${escapeHtml(s.provider)}</span></div>
          <h3>${escapeHtml(s.title)}</h3>
          <p class="muted">${escapeHtml(truncate(s.shortDescription || s.description || '', 140))}</p>
        </div>
        <div class="card-actions">
          <button type="button" class="btn outline details-btn" data-id="${s.id}" aria-controls="modal">View details</button>
          <a class="btn primary" href="${escapeAttr(s.applicationLink || '#') }" target="_blank" rel="noopener">Apply</a>
        </div>
      `;
      cardsEl.appendChild(article);

      // animate reveal unless user prefers reduced motion
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) {
        article.classList.add('card--show');
        article.classList.remove('card--hidden');
      } else {
        setTimeout(() => {
          article.classList.add('card--show');
          article.classList.remove('card--hidden');
        }, 40 * i);
      }
    });

    // Show/hide see more button
    if (currentFiltered.length > SHOW_INITIAL) {
      seeMoreBtn.style.display = 'inline-block';
      seeMoreBtn.textContent = isExpanded ? 'Show less' : `See more (${currentFiltered.length - SHOW_INITIAL})`;
    } else {
      seeMoreBtn.style.display = 'none';
    }

    // wire up detail buttons
    cardsEl.querySelectorAll('.details-btn').forEach(btn => {
      btn.addEventListener('click', ev => openModal(ev.currentTarget.dataset.id));
    });
  }

  // initial render
  renderCardsFromFiltered();

  // apply filter/search across all scholarships, then render (but show only first N unless expanded)
  function applyFilter() {
    const q = (searchEl.value || '').trim().toLowerCase();
    const f = (fieldFilter.value || '').trim().toLowerCase();
    currentFiltered = scholarships.filter(s => {
      const hay = (s.title + ' ' + s.provider + ' ' + (s.field||'') + ' ' + (s.shortDescription||'') + ' ' + (s.description||'')).toLowerCase();
      const matchQ = !q || hay.includes(q);
      const matchF = !f || (s.field || '').toLowerCase() === f;
      return matchQ && matchF;
    });
    // when searching or filtering, collapse to initial view
    isExpanded = false;
    renderCardsFromFiltered();
  }

  searchEl.addEventListener('input', debounce(applyFilter, 180));
  fieldFilter.addEventListener('change', applyFilter);
  searchClear.addEventListener('click', () => { searchEl.value = ''; fieldFilter.value = ''; applyFilter(); });

  // see more toggle
  seeMoreBtn.addEventListener('click', () => {
    isExpanded = !isExpanded;
    renderCardsFromFiltered();
    // smooth scroll to keep context when collapsing
    if (!isExpanded) {
      document.getElementById('featured').scrollIntoView({ behavior: 'smooth' });
    }
  });

  // mobile menu helpers
  function openMobileMenu() {
    mobileMenu.hidden = false;
    requestAnimationFrame(() => mobileMenu.classList.add('open'));
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
  }
  function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    const onEnd = (e) => {
      if (e && e.target !== mobileMenu) return;
      mobileMenu.hidden = true;
      mobileMenu.removeEventListener('transitionend', onEnd);
    };
    mobileMenu.addEventListener('transitionend', onEnd);
    setTimeout(() => { if (!mobileMenu.classList.contains('open')) mobileMenu.hidden = true; }, 260);
  }
  mobileMenuBtn.addEventListener('click', () => {
    const expanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
    if (expanded) closeMobileMenu(); else openMobileMenu();
  });
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobileMenu));
  window.addEventListener('resize', () => { if (window.innerWidth > 720 && !mobileMenu.hidden) closeMobileMenu(); });

  // modal handling
  function openModal(id) {
    const s = scholarships.find(x => x.id === id);
    if (!s) return;
    modal.setAttribute('aria-hidden', 'false');
    modal.querySelector('.modal-panel').setAttribute('aria-hidden', 'false');

    modalTitle.textContent = s.title || '';
    modalProvider.textContent = s.provider || '';
    modalDeadline.textContent = (s.deadlineText || '').split('\n')[0] || '';
    modalDesc.innerHTML = s.description ? `<p>${escapeHtmlMultiLine(s.description)}</p>` : '';
    modalElig.innerHTML = renderBullets(s.eligibility);
    modalHow.innerHTML = s.howToApply ? `<p>${escapeHtmlMultiLine(s.howToApply)}</p>` : '';
    modalWhy.innerHTML = renderBullets(s.whyApply);
    modalApply.href = s.applicationLink || '#';
    modalApply.textContent = s.applicationLink ? 'Open Application Portal' : 'Application link not provided';

    modalClose.focus();
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    modal.setAttribute('aria-hidden', 'true');
    modal.querySelector('.modal-panel').setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  modalClose.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (modal.getAttribute('aria-hidden') === 'false') closeModal();
      if (!mobileMenu.hidden && mobileMenu.classList.contains('open')) closeMobileMenu();
    }
  });

  // contact form (mailto fallback)
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    contactMsg.textContent = '';
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email-input').value.trim();
    const message = document.getElementById('contact-message').value.trim();
    if (!name || !email || !message) {
      contactMsg.textContent = 'Please complete all fields.';
      return;
    }
    const subject = encodeURIComponent(`Contact from ${siteConfig.siteName} — ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    const mailto = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
    window.location.href = mailto;
    contactMsg.textContent = 'Your email client should open. If it does not, email us at ' + siteConfig.contactEmail;
    contactForm.reset();
  });

  // small utilities
  function renderBullets(arr) {
    if (!Array.isArray(arr) || !arr.length) return '<p class="muted">Not specified</p>';
    const ul = document.createElement('ul');
    ul.className = 'bullets';
    arr.forEach(it => {
      const li = document.createElement('li');
      li.innerHTML = escapeHtmlMultiLine(it);
      ul.appendChild(li);
    });
    return ul.outerHTML;
  }
  function truncate(s, n) {
    if (!s) return '';
    return s.length > n ? s.slice(0, n - 1) + '…' : s;
  }
  function escapeHtml(s) {
    if (!s) return '';
    return String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  }
  function escapeAttr(s) {
    return escapeHtml(s).replace(/"/g, '&quot;');
  }
  function escapeHtmlMultiLine(str) {
    if (!str) return '';
    const escaped = escapeHtml(str);
    return escaped.replace(/\n/g, '<br>');
  }
  function debounce(fn, wait) {
    let t;
    return function () { clearTimeout(t); t = setTimeout(() => fn.apply(this, arguments), wait); };
  }

  // count-up helper (simple)
  function animateCount(el, target, duration = 800) {
    if (!el) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { el.textContent = String(target); return; }
    const start = 0;
    const startTime = performance.now();
    function step(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;
      const value = Math.round(start + (target - start) * ease);
      el.textContent = String(value);
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  // animate counts
  animateCount(countSch, scholarships.length, 900);
  animateCount(countFields, fields.length || 0, 900);
  animateCount(countBoards, Array.from(new Set(scholarships.map(s => s.provider))).length, 900);

  // ensure hero/content entrance
  document.querySelectorAll('.animate-entrance').forEach(el => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { el.classList.add('is-visible'); return; }
    const delay = parseInt(el.getAttribute('data-delay') || '0', 10);
    setTimeout(() => el.classList.add('is-visible'), delay);
  });

  // smooth anchor linking: close mobile menu on click
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (ev) => {
      const href = a.getAttribute('href');
      const target = document.querySelector(href);
      if (target) {
        ev.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (!mobileMenu.hidden && mobileMenu.classList.contains('open')) closeMobileMenu();
      }
    });
  });

  // footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});