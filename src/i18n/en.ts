import type { Content } from './es'

// English content. Must keep exactly the same shape as `es.ts`.
export const en: Content = {
  lang: 'en',
  locale: 'en_US',

  meta: {
    title: 'ARRMARE GROUP — Order that Transcends',
    description:
      'ARRMARE GROUP is a Peruvian business holding that integrates and manages a portfolio of its own companies in floriculture, technology, printing, roses, health and consulting.',
  },

  common: {
    newTab: ' (opens in a new tab)',
    visitSite: 'Visit website',
    comingSoon: 'Coming soon',
    companies: (n: number) => `${n} ${n === 1 ? 'company' : 'companies'}`,
    privacy: 'Privacy policy',
    backHome: 'Back to home',
  },

  nav: {
    links: [
      { id: 'nosotros', label: 'About' },
      { id: 'esencia', label: 'Essence' },
      { id: 'unidades', label: 'Business units' },
      { id: 'compromiso', label: 'Commitment' },
      { id: 'contacto', label: 'Contact' },
    ],
    homeAria: 'ARRMARE GROUP, home',
    main: 'Main',
    mobile: 'Mobile menu',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
    switchTo: 'Cambiar a Español',
  },

  hero: {
    tag: 'Peruvian Business Holding',
    titleA: 'Order that',
    titleB: 'Transcends',
    desc: 'We integrate and manage a portfolio of our own companies, united by innovation, design and operational excellence.',
    ctaGroup: 'Discover the group',
    ctaUnits: 'Our business units',
    stat1: 'Strategic sectors',
    stat2: 'Own companies',
    barsAria: 'Hero images',
    image: (n: number) => `Image ${n}`,
  },

  partners: {
    label: 'Our brands',
    brand: (n: number) => `Brand ${n}`,
  },

  about: {
    label: '01 — Who we are',
    titleA: 'A Peruvian holding with ',
    titleB: 'strategic vision',
    p1a: 'At ',
    p1b: ' we are a Peruvian business holding that integrates and manages a portfolio of its own companies, united by a clear vision: to create order that transcends through innovation, design and operational excellence.',
    p2: 'We create value by developing brands with a solid identity, long-term vision and high quality standards, building experiences that connect, make an impact and endure over time.',
    p3: 'Our holding model lets us optimize resources, strengthen synergies among our business units and ensure sustainable growth.',
    cta: 'View business units',
    imageAlt: 'ARRMARE GROUP Holding',
  },

  essence: {
    label: '02 — Our essence',
    titleA: 'The purpose that ',
    titleB: 'unites us',
    tabsAria: 'Essence',
    items: [
      {
        id: 'vision', tab: 'Vision', title: 'Where we are heading',
        text: 'To be a leading business holding in the national and international market, recognized for integrating high-value businesses across diverse sectors, with modern, ethical management focused on sustained growth and excellence.',
        list: [] as string[],
      },
      {
        id: 'mision', tab: 'Mission', title: 'What we do',
        text: 'To develop, manage and consolidate our own companies within ARRMARE GROUP, creating solid, profitable brands through innovation, operational efficiency and a comprehensive strategy that generates sustainable value for our customers, employees and partners.',
        list: [] as string[],
      },
      {
        id: 'valores', tab: 'Values', title: 'How we do it',
        text: '',
        list: ['Strategic vision', 'Operational excellence', 'Constant innovation', 'Integrity and ethics', 'Teamwork', 'Results orientation'],
      },
    ],
  },

  units: {
    label: '03 — Business units',
    titleA: 'Sectors where ',
    titleB: 'we operate',
    intro: 'Six units, one standard. Choose one to get to know its companies and visit their websites.',
    open: (name: string) => `${name}: view companies`,
    cta: 'View companies',
    pause: 'Pause rotation',
    play: 'Resume rotation',
    drawerLabel: 'Business unit',
    drawerCompanies: 'Group companies',
    close: 'Close',
    logoAlt: (name: string) => `${name} logo`,
    soonAria: 'Website coming soon',
    items: [
      {
        shortTitle: 'Floriculture',
        title: 'Floriculture and Luxury Gifts',
        detailTitle: '',
        summary: 'A specialized ecosystem where each brand reflects sophistication, detail and a unique value proposition...',
        detail: 'We are building a specialized ecosystem in flowers and luxury gifts, where each brand reflects sophistication, detail and a unique value proposition focused on premium experiences. Our companies are dedicated to raising the standard of the sector, with design, product quality and presentation as fundamental pillars.',
        companies: [
          { tag: 'Floriculture', description: 'Flowers and luxury gifts. A unique value proposition focused on premium, sophisticated experiences.' },
          { tag: 'Floriculture', description: 'Premium floral arrangements and exclusive experiences with a strong focus on botanical design.' },
          { tag: 'Floriculture', description: 'Gifts for men and women with a focus on quality and design.' },
        ],
      },
      {
        shortTitle: 'Technology',
        title: 'Technology',
        detailTitle: '',
        summary: 'Strategic technology solutions for floriculture and gastronomy: integrated systems that optimize operations...',
        detail: 'We develop and market technology solutions strategically designed to meet current market needs, with a highly specialized focus on the floriculture sector and the food service industry. Our technology offering goes beyond digital tools: it is aimed at creating integrated systems that optimize operations, improve traceability and boost business profitability.',
        companies: [
          { tag: 'Technology', description: 'Integrated strategic technology solutions that optimize operations, traceability and profitability.' },
        ],
      },
      {
        shortTitle: 'Printing & Packaging',
        title: 'Printing, Design & Packaging',
        detailTitle: '',
        summary: 'Comprehensive solutions that strengthen brand identity, combining visual concept, structure and production...',
        detail: 'We see printing, design and packaging as strategic elements in building a brand, especially in sectors where perception, aesthetics and customer experience are decisive. We specialize in developing comprehensive solutions for floriculture, luxury gifts and the food service industry.',
        companies: [
          { tag: 'Printing & Packaging', description: 'Visual concept, brand design and high-standard packaging production.' },
        ],
      },
      {
        shortTitle: 'Premium Roses',
        title: 'Producer and Distributor of Ecuadorian Roses',
        detailTitle: 'Premium Ecuadorian Roses',
        summary: 'Production and distribution of high-end Ecuadorian roses with a premium standard at every stage...',
        detail: 'We have a unit specialized in the production and distribution of high-end Ecuadorian roses, recognized worldwide for their superior quality, size, color intensity and durability. Our operation is built to guarantee a premium standard at every stage of the value chain, from cultivation to final delivery.',
        companies: [
          { tag: 'Premium Roses', description: 'Production and distribution of high-end Ecuadorian roses with an international premium standard.' },
        ],
      },
      {
        shortTitle: 'Health & Wellness',
        title: 'Health and Wellness',
        detailTitle: '',
        summary: 'Alternative therapy centers and specialized stores with a holistic approach: physical and mental balance...',
        detail: 'We are developing a specialized health and wellness line focused on offering comprehensive solutions that promote physical, mental and emotional balance. Through our alternative therapy centers and specialized stores, we provide experiences centered on personal care, prevention and mindful well-being.',
        companies: [
          { tag: 'Health', description: 'Physiotherapy.' },
        ],
      },
      {
        shortTitle: 'Consulting',
        title: 'Consulting and Business Management',
        detailTitle: '',
        summary: 'Comprehensive solutions that connect strategy, administration, finance and professional management to organize and grow companies...',
        detail: 'We drive the development and strengthening of companies through comprehensive consulting and business management solutions, aimed at optimizing their operations, improving their performance and boosting their growth. We combine strategic, administrative, financial, accounting and legal expertise to provide professional support tailored to each organization.',
        companies: [
          { tag: 'Consulting', description: 'We drive companies forward. We build opportunities. Strategy, finance, corporate management, legal and business support in a single partner.' },
        ],
      },
    ],
  },

  commitment: {
    label: '04 — Our commitment',
    titleA: 'We build with ',
    titleB: 'purpose',
    quote: '"Creating order that transcends."',
    imageAlt: 'ARRMARE GROUP',
    p1: 'At ARRMARE GROUP we are committed to building and managing companies with purpose, where each business unit responds to a shared strategic vision.',
    p2: 'Through our holding model, we integrate capabilities, optimize resources and strengthen synergies to create real, sustainable value. We focus on developing solid brands, efficient processes and high-impact experiences.',
    p3: 'Our commitment is to grow in a structured, conscious and sustainable way, establishing ourselves as a reliable, innovative and results-driven business group.',
    pillars: [
      { t: 'Structured growth', d: 'We expand with method, not on impulse.' },
      { t: 'Conscious management', d: 'Measured decisions with long-term impact.' },
      { t: 'Sustainable value', d: 'Results that last over time.' },
    ],
  },

  contact: {
    label: '05 — Contact',
    titleA: "Let's work ",
    titleB: 'together',
    lead: 'We are at your disposal for high-impact projects and strategic partnerships.',
    email: 'Email',
    phone: 'Phone',
    whatsapp: 'WhatsApp',
    whatsappCta: 'Message us now',
    location: 'Location',
    whatsappMessage: 'Hello ARRMARE GROUP, I would like more information.',
    formTitle: 'Write to us',
    name: 'Name *',
    emailField: 'Email *',
    interest: 'Company of interest',
    interestDefault: 'General information about the group',
    message: 'Message *',
    honeypot: 'Leave empty',
    legalPre: 'By sending this you agree that we use your data only to answer your inquiry. More information in our ',
    legalPost: '.',
    errName: 'Please enter your name.',
    errEmail: 'Please enter a valid email.',
    errMessage: 'Tell us a bit more (at least 10 characters).',
    errorPre: "We couldn't send your message. Please try again or write to us at ",
    send: 'Send message',
    sending: 'Sending…',
    doneSentTitle: 'Message sent',
    doneSentText: 'Thank you for writing to us. We will reply soon at the email address you provided.',
    doneMailTitle: 'Check your email',
    doneMailText: 'We opened your email app with the message ready. You just need to press send.',
    again: 'Send another message',
    mailSubject: 'Website inquiry — ',
    mailName: 'Name',
    mailEmail: 'Email',
    mailInterest: 'Interest',
  },

  footer: {
    tagline: 'Peruvian business holding.',
    group: 'Group',
    ourCompanies: 'Our companies',
    aria: 'Footer',
    companiesAria: 'Websites of our companies',
    rights: 'All rights reserved',
  },

  socials: { aria: 'Social media' },
  fab: { aria: 'Message us on WhatsApp', label: 'WhatsApp' },
  top: { aria: 'Back to top' },

  notFound: {
    metaTitle: 'Page not found — ARRMARE GROUP',
    code: '404',
    title: "This page doesn't exist",
    text: 'The link may be misspelled or the page may have moved.',
    cta: 'Back to home',
  },

  privacy: {
    metaTitle: 'Privacy policy — ARRMARE GROUP',
    metaDescription: 'How ARRMARE GROUP handles the personal data it receives through its website.',
    label: 'Legal',
    title: 'Privacy policy',
    updated: 'Last updated: November 2026',
    controller: { name: 'Controller', ruc: 'Tax ID (RUC)', address: 'Address', email: 'Contact email' },
    sections: [
      {
        h: '1. Data controller',
        p: ['ARRMARE GROUP is the controller of the personal data collected through this website. Its contact details are:'],
        controller: true,
      },
      {
        h: '2. Data we collect',
        p: [],
        ul: [
          'What you give us in the contact form: name, email address, the company you are interested in and the content of your message.',
          'Basic technical data, such as your IP address, which the server processes to limit repeated submissions and protect the site against abuse.',
        ],
      },
      {
        h: '3. What we use it for',
        p: ['We use your data to answer your inquiry and, where applicable, forward it to the group company you mentioned. We also use it for site security and spam prevention.'],
        ul: [],
      },
      {
        h: '4. Legal basis',
        p: ['We process your data with your consent, which you give by submitting the form, in accordance with Peru’s Personal Data Protection Law (Law No. 29733) and its regulations.'],
        ul: [],
      },
      {
        h: '5. Who we share it with',
        p: ['We may share your inquiry with the ARRMARE group company it is addressed to and with the providers that supply our web hosting and email services, who process the data only on our behalf. We do not sell your data.'],
        ul: [],
      },
      {
        h: '6. How long we keep it',
        p: ['We keep your data for as long as needed to handle your inquiry and meet applicable legal obligations. After that we delete or anonymize it.'],
        ul: [],
      },
      {
        h: '7. Your rights',
        p: [
          'You can exercise your rights of information, access, rectification, cancellation and objection, as well as any others recognized by law, by writing to {email} with the subject “Personal data” and stating your name and what you are requesting.',
          'If you believe we have not addressed your request, you can contact Peru’s National Authority for Personal Data Protection (Ministry of Justice and Human Rights).',
        ],
        ul: [],
      },
      {
        h: '8. Cookies and third-party links',
        p: ['This site does not use tracking cookies or analytics or advertising tools. Links to third-party sites (social media, our companies’ websites, WhatsApp) are governed by their own policies.'],
        ul: [],
      },
      {
        h: '9. Security',
        p: ['We apply reasonable technical and organizational measures to protect your information, such as an encrypted connection (HTTPS), data validation and a limit on submissions.'],
        ul: [],
      },
      {
        h: '10. Changes to this policy',
        p: ['We may update this policy. The current version will always be on this page, with its update date.'],
        ul: [],
      },
    ],
  },
}
