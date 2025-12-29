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
  contactEmail: 'info@negscholarship.ng',
  whatsappNumber: '+2348000000000',
  facebookUrl: 'https://facebook.com/yourpage',
  instagramUrl: 'https://instagram.com/yourpage',
  whatsappUrl: 'https://wa.me/2348000000000',
};

/* -------------- Scholarship data (25 flashcards) -------------- */
/* Edit these objects to change cards. Keep id unique. */
const scholarships = [
  // 1-15 copied/expanded from previous set
  {
    id: 'innova-1',
    title: 'InnovaGenius Solutions Engineering Scholarship',
    provider: 'InnovaGenius Solutions',
    field: 'Engineering',
    shortDescription: `If you’re a 200 or 300-level engineering student in Nigeria, here’s your chance to secure academic support through the InnovaGenius Solutions Scholarship Programme 2025.`,
    description: `The program recognizes students who demonstrate strong academic performance, leadership qualities, and commitment to innovation in engineering.`,
    eligibility: [
      'Completed InnovaGenius Scholarship Application Form',
      'A recent academic transcript or result slip',
      'A statement of purpose (briefly explaining academic goals and how the scholarship will help)',
      'Any additional documents requested in the online form'
    ],
    deadlineText: 'Deadline: 25th December 2025\nApplications received after this date will not be considered.',
    howToApply: `All applications must be submitted online via the official Google Form link below. Click the link, fill in your details, and upload all required documents.`,
    applicationLink: 'https://forms.gle/your-google-form-id-here',
    whyApply: [
      'Financial support for engineering students',
      'Opportunity to connect with industry professionals',
      'Recognition for your academic excellence',
      'Boost to your resume and professional development'
    ]
  },
  {
    id: 'techleap-2',
    title: 'TechLeap Undergraduate Award',
    provider: 'TechLeap Foundation',
    field: 'STEM',
    shortDescription: 'Support for outstanding STEM undergraduates with mentorship and a cash award.',
    description: 'TechLeap awards talented undergraduates pursuing computing, electronics or AI who show leadership and innovation.',
    eligibility: ['Current undergraduate (100-400 level)','Minimum 3.0 GPA or equivalent','Demonstrated interest in technology or projects'],
    deadlineText: 'Deadline: 30th September 2025',
    howToApply: 'Submit the online form and upload a short project portfolio.',
    applicationLink: 'https://example.org/techleap-apply',
    whyApply: ['Mentorship','Stipend','Industry internship opportunities']
  },
  {
    id: 'creative-3',
    title: 'Creative Minds Arts Grant',
    provider: 'Creative Minds',
    field: 'Arts',
    shortDescription: 'Funding for student-led arts and community projects (portfolio-based).',
    description: 'Creative Minds supports students in visual and performing arts to run community projects and exhibitions.',
    eligibility: ['Undergraduate or diploma student in the arts','Portfolio of recent work','Project proposal describing impact and budget'],
    deadlineText: 'Deadline: 15th October 2025',
    howToApply: 'Complete the online application and upload your portfolio (images or PDF).',
    applicationLink: 'https://example.org/creative-apply',
    whyApply: ['Project funding','Exhibition support','Networking with curators']
  },
  {
    id: 'global-4',
    title: 'Global Leaders Fellowship',
    provider: 'World Scholars',
    field: 'International Studies',
    shortDescription: 'Graduate fellowship for students pursuing international development and leadership studies.',
    description: 'World Scholars awards fellowships to graduates with strong leadership potential and a commitment to global development.',
    eligibility: ['Graduate applicants (Masters or PhD)','Proven leadership experience','Research or project proposal aligned with global development'],
    deadlineText: 'Deadline: 1st November 2025',
    howToApply: 'Apply via the World Scholars portal and provide references.',
    applicationLink: 'https://example.org/global-fellowship',
    whyApply: ['Research funding','Global network','Mentorship & placements']
  },
  {
    id: 'agripower-5',
    title: 'AgriPower Student Award',
    provider: 'AgriPower Initiative',
    field: 'Agriculture',
    shortDescription: 'Grant and mentorship for students with sustainable agriculture projects.',
    description: 'AgriPower funds student projects focused on sustainable farming, agri-tech and rural development.',
    eligibility: ['Undergraduate students with a proposed project','Project proposal and budget','Local community engagement plan'],
    deadlineText: 'Deadline: 10th August 2025',
    howToApply: 'Submit project proposal via the AgriPower portal.',
    applicationLink: 'https://example.org/agripower-apply',
    whyApply: ['Project funding','Field mentorship','Pilot opportunities']
  },
  {
    id: 'medscholar-6',
    title: 'HealthFuture Medical Scholarship',
    provider: 'HealthFuture Trust',
    field: 'Medicine',
    shortDescription: 'Support for medical students with demonstrated academic excellence and community service.',
    description: 'HealthFuture Trust supports promising medical undergraduates who excel academically and volunteer in community health programs.',
    eligibility: ['Medical students (MBBS/MBChB)','Minimum 3.2 GPA or equivalent','Evidence of community health involvement'],
    deadlineText: 'Deadline: 20th November 2025',
    howToApply: 'Apply through HealthFuture’s online form and attach transcript and statement of purpose.',
    applicationLink: 'https://example.org/healthfuture-apply',
    whyApply: ['Tuition support','Clinical mentorship','Networking']
  },
  {
    id: 'bizlead-7',
    title: 'BizLead Entrepreneurship Grant',
    provider: 'BizLead Foundation',
    field: 'Business',
    shortDescription: 'Seed grants for student-led startups and business ideas.',
    description: 'BizLead awards seed funding, training and mentorship to early-stage student entrepreneurs.',
    eligibility: ['Student founders or teams','Business plan and pitch deck','Clear plan for use of funds'],
    deadlineText: 'Deadline: 5th October 2025',
    howToApply: 'Register and upload your business plan on the BizLead portal.',
    applicationLink: 'https://example.org/bizlead-apply',
    whyApply: ['Seed funding','Mentorship','Investor introductions']
  },
  {
    id: 'enviro-8',
    title: 'GreenFuture Environmental Scholarship',
    provider: 'GreenFuture NGO',
    field: 'Environment',
    shortDescription: 'Scholarship for students working on climate action and environmental science projects.',
    description: 'GreenFuture supports students researching climate resilience, conservation and sustainable technologies.',
    eligibility: ['Undergraduate or graduate students in environment-related fields','Research proposal or project plan','Evidence of academic standing'],
    deadlineText: 'Deadline: 12th September 2025',
    howToApply: 'Submit application with research outline and supervisor details.',
    applicationLink: 'https://example.org/greenfuture-apply',
    whyApply: ['Research funding','Fieldwork support','Publication guidance']
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
    title: 'NG Leadership Scholarship',
    provider: 'NG Leadership Trust',
    field: 'Leadership',
    shortDescription: 'Scholarship for students demonstrating leadership in campus or community initiatives.',
    description: 'NG Leadership supports students with proven leadership and a plan to scale community impact.',
    eligibility: ['Active leadership role in student groups or community projects','Statement of leadership achievements','Two referee contacts'],
    deadlineText: 'Deadline: 18th November 2025',
    howToApply: 'Submit leadership statement and references via the NG Leadership portal.',
    applicationLink: 'https://example.org/nglead-apply',
    whyApply: ['Leadership training','Small grant','Networking']
  },
  {
    id: 'arts-11',
    title: 'Screen & Stage Student Bursary',
    provider: 'StageWorks',
    field: 'Performing Arts',
    shortDescription: 'Bursary to support performing arts students staging shows or attending festivals.',
    description: 'StageWorks supports emerging performers with funding and mentorship to present work locally and regionally.',
    eligibility: ['Performing arts students or recent graduates','Project proposal or festival invitation','Budget and CV'],
    deadlineText: 'Deadline: 2nd December 2025',
    howToApply: 'Upload show proposal and rehearsal plan on the StageWorks portal.',
    applicationLink: 'https://example.org/stageworks-apply',
    whyApply: ['Production funding','Mentorship','Showcase opportunities']
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
    title: 'International Exchange Grant',
    provider: 'GlobalExchange',
    field: 'International',
    shortDescription: 'Funding support for semester exchange or short research visits abroad.',
    description: 'GlobalExchange helps students access short-term international academic experiences with travel support.',
    eligibility: ['Accepted to a partner exchange program or research host','Letter of invitation or acceptance','Academic transcript'],
    deadlineText: 'Deadline: 31st March 2026',
    howToApply: 'Provide acceptance letter and personal statement on the GlobalExchange portal.',
    applicationLink: 'https://example.org/globalexchange',
    whyApply: ['Travel stipend','Housing support','Advisor connections']
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
    applicationLink: 'https://example.org/designhub',
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
          <button class="btn outline details-btn" data-id="${s.id}" aria-controls="modal">View details</button>
          <a class="btn primary" href="${escapeAttr(s.applicationLink || '#')}" target="_blank" rel="noopener">Apply</a>
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