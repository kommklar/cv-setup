// ===== Nav scroll effect =====
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// ===== Mobile menu toggle =====
const toggle = document.querySelector('.nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');

toggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ===== Reveal on scroll =====
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ===== Trigger hero reveals immediately =====
document.querySelectorAll('.hero .reveal').forEach((el, i) => {
  setTimeout(() => el.classList.add('visible'), 100 + i * 120);
});

// ===== Project detail drawer =====
const projects = {
  trading: {
    icon: '📈',
    title: 'Modular Trading Platform',
    company: 'financial.com',
    period: '2023 — Present',
    accent: '#c8a84a',
    images: [
      { src: 'https://placehold.co/760x420/1a1710/c8a84a?text=Trading+Platform+UI', alt: 'Trading platform interface' },
      { src: 'https://placehold.co/760x420/1a1710/c8a84a?text=Broker+Onboarding+Flow', alt: 'Broker onboarding flow' },
    ],
    tags: ['FinTech', 'FIX Protocol', 'Compliance', 'B2C', 'Multi-venue'],
    overview: `financial.com is a financial data and technology provider. As Product Owner, I led the zero-to-one build of a fully modular broker platform — an end-to-end system covering everything from onboarding to live trading.`,
    sections: [
      {
        heading: 'The Product',
        body: `A white-label, modular trading platform designed for brokers entering regulated markets. The platform integrates account management, compliance workflows, and a real-time trading engine — all built to be licensable and configurable for different market participants.`
      },
      {
        heading: 'What I did',
        items: [
          'Defined the product vision and roadmap from a blank slate, working directly with CTO and stakeholders',
          'Owned the broker onboarding flow: KYC/AML compliance, document verification, and account approval pipelines',
          'Shaped requirements for the trading engine built on FIX protocol, supporting connectivity to multiple trading venues',
          'Managed a cross-functional team of 12+ engineers, QA, UX designers, and legal/compliance advisors',
          'Established a monthly release cadence with structured sprint reviews and stakeholder demos'
        ]
      },
      {
        heading: 'Outcome',
        body: `Delivered the first working version of the platform within the initial roadmap timeline, enabling the company to onboard its first broker clients into regulated markets.`
      }
    ]
  },
  swr: {
    icon: '📰',
    title: 'SWR Aktuell App',
    company: 'Südwestrundfunk (SWR)',
    period: '2020 — 2023',
    accent: '#a07828',
    images: [
      { src: 'https://placehold.co/760x420/1a1710/a07828?text=SWR+Aktuell+Home+Screen', alt: 'SWR Aktuell home screen' },
      { src: 'https://placehold.co/760x420/1a1710/a07828?text=SWR+Aktuell+Article+View', alt: 'SWR Aktuell article view' },
    ],
    tags: ['Flutter', 'Mobile', 'iOS', 'Android', 'Public Media', 'News'],
    overview: `SWR (Südwestrundfunk) is one of Germany's major public broadcasters. As Product Owner, I led the full revamp of the SWR Aktuell news app — the primary digital news product for millions of users in Baden-Württemberg and Rhineland-Palatinate.`,
    sections: [
      {
        heading: 'The Product',
        body: `SWR Aktuell is a regional news app delivering breaking news, live streams, and editorial content to users across southwestern Germany. The app serves a broad audience ranging from daily commuters to public media enthusiasts.`
      },
      {
        heading: 'What I did',
        items: [
          'Led the complete product revamp — from discovery and user research through to launch on iOS and Android',
          'Drove the architectural decision to adopt Flutter as the cross-platform framework, replacing separate native codebases',
          'Coordinated between editorial, design, engineering, and broadcasting teams across multiple locations',
          'Defined and prioritised the feature backlog across multiple release cycles',
          'Reduced time-to-market for new features significantly by unifying the codebase under Flutter'
        ]
      },
      {
        heading: 'Outcome',
        body: `The revamped app launched successfully on both platforms with a unified codebase, reducing maintenance overhead and enabling faster feature delivery. The Flutter migration became a reference project within SWR's digital division.`
      }
    ]
  },
  dfl: {
    icon: '🏆',
    title: 'DFL Interactive Feed SDK',
    company: 'TeraVolt GmbH',
    period: '2018 — 2020',
    accent: '#e2c97e',
    images: [
      { src: 'https://placehold.co/760x420/1a1710/e2c97e?text=DFL+Interactive+Feed+TV+App', alt: 'DFL Interactive Feed TV app' },
      { src: 'https://placehold.co/760x420/1a1710/e2c97e?text=Bundesliga+Live+Stats+SDK', alt: 'Bundesliga live stats overlay' },
    ],
    tags: ['SaaS', 'SDK', 'Bundesliga', 'DFL', 'Sky Germany', 'Broadcast'],
    overview: `TeraVolt is a media technology company specialising in broadcast and streaming products. As Product Owner, I bootstrapped and shipped a SaaS TV application platform delivered as a cross-platform SDK — in direct partnership with the Deutsche Fußball Liga (DFL).`,
    sections: [
      {
        heading: 'The Product',
        body: `An interactive TV application SDK enabling broadcasters and rights holders to deliver second-screen and connected TV experiences. The platform was built to integrate with the DFL's official data feed, enabling live match statistics, line-ups, and interactive overlays in broadcast apps.`
      },
      {
        heading: 'What I did',
        items: [
          'Bootstrapped the product from idea to licensable SDK, covering both mobile (iOS/Android) and web targets',
          'Managed the partnership with DFL to integrate the official Bundesliga Interactive Feed',
          'Led production rollouts for multiple German TV market customers',
          'Acted as Consultant & Project Manager for Sky Germany\'s new CMS tooling project',
          'Defined the commercial and technical packaging of the SDK for B2B licensing'
        ]
      },
      {
        heading: 'Outcome',
        body: `The SDK was successfully licensed to multiple German broadcasters and became the foundation for TeraVolt's B2B product portfolio. The Sky Germany CMS project was delivered on time and within scope.`
      }
    ]
  }
};

function buildDrawerContent(project) {
  const tagsHtml = project.tags.map(t => `<span class="tag tag-sm">${t}</span>`).join('');

  const imagesHtml = project.images && project.images.length
    ? `<div class="drawer-gallery">
        ${project.images.map((img, i) => `
          <figure class="drawer-figure ${i > 0 ? 'drawer-figure-secondary' : ''}">
            <img src="${img.src}" alt="${img.alt}" loading="lazy">
          </figure>`).join('')}
      </div>`
    : '';

  const sectionsHtml = project.sections.map(s => {
    if (s.items) {
      const items = s.items.map(i => `<li>${i}</li>`).join('');
      return `<div class="drawer-section">
        <h4 class="drawer-section-title">${s.heading}</h4>
        <ul class="drawer-list">${items}</ul>
      </div>`;
    }
    return `<div class="drawer-section">
      <h4 class="drawer-section-title">${s.heading}</h4>
      <p class="drawer-text">${s.body}</p>
    </div>`;
  }).join('');

  return `
    <div class="drawer-header" style="--project-accent: ${project.accent}">
      <span class="drawer-icon">${project.icon}</span>
      <div>
        <h2 class="drawer-title">${project.title}</h2>
        <span class="drawer-meta">${project.company} &nbsp;·&nbsp; ${project.period}</span>
      </div>
    </div>
    <p class="drawer-overview">${project.overview}</p>
    <div class="drawer-tags">${tagsHtml}</div>
    ${imagesHtml}
    ${sectionsHtml}
  `;
}

const drawer = document.getElementById('drawer');
const drawerOverlay = document.getElementById('drawer-overlay');
const drawerContent = document.getElementById('drawer-content');
const drawerClose = document.getElementById('drawer-close');

function openDrawer(projectKey) {
  const project = projects[projectKey];
  if (!project) return;
  drawerContent.innerHTML = buildDrawerContent(project);
  drawer.classList.add('open');
  drawerOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  drawerClose.focus();
}

function closeDrawer() {
  drawer.classList.remove('open');
  drawerOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.project-detail-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    openDrawer(btn.dataset.project);
  });
});

drawerClose.addEventListener('click', closeDrawer);
drawerOverlay.addEventListener('click', closeDrawer);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeDrawer();
});
