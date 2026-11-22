// Contenido en español (idioma base). `en.ts` debe tener exactamente la misma forma.
export const es = {
  lang: 'es',
  locale: 'es_PE',

  meta: {
    title: 'ARRMARE GROUP — Orden que Trasciende',
    description:
      'ARRMARE GROUP es un holding empresarial peruano que integra y gestiona un portafolio de empresas propias en floricultura, tecnología, imprenta, rosas, salud y consultoría.',
  },

  common: {
    newTab: ' (se abre en una pestaña nueva)',
    visitSite: 'Visitar sitio web',
    comingSoon: 'Próximamente',
    companies: (n: number) => `${n} ${n === 1 ? 'empresa' : 'empresas'}`,
    privacy: 'Política de privacidad',
    backHome: 'Volver al inicio',
  },

  nav: {
    links: [
      { id: 'nosotros', label: 'Nosotros' },
      { id: 'esencia', label: 'Esencia' },
      { id: 'unidades', label: 'Unidades' },
      { id: 'compromiso', label: 'Compromiso' },
      { id: 'contacto', label: 'Contacto' },
    ],
    homeAria: 'ARRMARE GROUP, inicio',
    main: 'Principal',
    mobile: 'Menú móvil',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    language: 'Idioma',
    switchTo: 'Cambiar a English',
  },

  hero: {
    tag: 'Holding Empresarial Peruano',
    titleA: 'Orden que',
    titleB: 'Trasciende',
    desc: 'Integramos y gestionamos un portafolio de empresas propias, unidas por innovación, diseño y excelencia operativa.',
    ctaGroup: 'Conoce el grupo',
    ctaUnits: 'Nuestras unidades',
    stat1: 'Sectores estratégicos',
    stat2: 'Empresas propias',
    barsAria: 'Imágenes del hero',
    image: (n: number) => `Imagen ${n}`,
  },

  partners: {
    label: 'Nuestras marcas',
    brand: (n: number) => `Marca ${n}`,
  },

  about: {
    label: '01 — Quiénes somos',
    titleA: 'Un holding peruano con ',
    titleB: 'visión estratégica',
    p1a: 'En ',
    p1b: ' somos un holding empresarial peruano que integra y gestiona un portafolio de empresas propias, unidas por una visión clara: generar orden que trasciende a través de la innovación, el diseño y la excelencia operativa.',
    p2: 'Creamos valor desarrollando marcas con identidad sólida, visión a largo plazo y altos estándares de calidad, construyendo experiencias que conectan, impactan y perduran en el tiempo.',
    p3: 'Nuestro modelo de holding nos permite optimizar recursos, potenciar sinergias entre nuestras unidades de negocio y asegurar un crecimiento sostenible.',
    cta: 'Ver unidades de negocio',
    imageAlt: 'ARRMARE GROUP Holding',
  },

  essence: {
    label: '02 — Nuestra esencia',
    titleA: 'El propósito que ',
    titleB: 'nos une',
    tabsAria: 'Esencia',
    items: [
      {
        id: 'vision', tab: 'Visión', title: 'Hacia dónde vamos',
        text: 'Ser un holding empresarial referente en el mercado nacional e internacional, reconocido por integrar negocios de alto valor en diversos sectores, con una gestión moderna, ética y orientada al crecimiento sostenido y la excelencia.',
        list: [] as string[],
      },
      {
        id: 'mision', tab: 'Misión', title: 'Qué hacemos',
        text: 'Desarrollar, gestionar y consolidar empresas propias dentro de ARRMARE GROUP, creando marcas sólidas y rentables mediante la innovación, la eficiencia operativa y una estrategia integral que genere valor sostenible para nuestros clientes, colaboradores y aliados.',
        list: [] as string[],
      },
      {
        id: 'valores', tab: 'Valores', title: 'Cómo lo hacemos',
        text: '',
        list: ['Visión estratégica', 'Excelencia operativa', 'Innovación constante', 'Integridad y ética', 'Trabajo en equipo', 'Orientación a resultados'],
      },
    ],
  },

  units: {
    label: '03 — Unidades de negocio',
    titleA: 'Sectores donde ',
    titleB: 'operamos',
    intro: 'Seis unidades, un mismo estándar. Elige una para conocer sus empresas y visitar su sitio web.',
    open: (name: string) => `${name}: ver empresas`,
    cta: 'Ver empresas',
    pause: 'Pausar rotación',
    play: 'Reanudar rotación',
    drawerLabel: 'Unidad de negocio',
    drawerCompanies: 'Empresas del grupo',
    close: 'Cerrar',
    logoAlt: (name: string) => `Logotipo de ${name}`,
    soonAria: 'Sitio web próximamente',
    // Mismo orden que `unitMeta` (src/data/units.ts)
    items: [
      {
        shortTitle: 'Floricultura',
        title: 'Floricultura y Regalos de Lujo',
        detailTitle: '',
        summary: 'Un ecosistema especializado donde cada marca refleja sofisticación, detalle y una propuesta de valor única...',
        detail: 'Desarrollamos un ecosistema especializado en flores y regalos de lujo, donde cada marca refleja sofisticación, detalle y una propuesta de valor única orientada a experiencias premium. Nuestras empresas están enfocadas en elevar el estándar del sector, integrando diseño, calidad de producto y presentación como pilares fundamentales.',
        companies: [
          { tag: 'Floricultura', description: 'Flores y regalos de lujo. Una propuesta de valor única orientada a experiencias premium y sofisticadas.' },
          { tag: 'Floricultura', description: 'Arreglos florales premium y experiencias exclusivas con un alto enfoque en el diseño botánico.' },
          { tag: 'Floricultura', description: 'Regalos para hombres y mujeres con un enfoque en la calidad y el diseño.' },
        ],
      },
      {
        shortTitle: 'Tecnología',
        title: 'Tecnología',
        detailTitle: '',
        summary: 'Soluciones tecnológicas estratégicas para floricultura y gastronomía: sistemas integrales que optimizan operación...',
        detail: 'Desarrollamos y comercializamos soluciones tecnológicas diseñadas estratégicamente para responder a las necesidades actuales del mercado, con un enfoque altamente especializado en el sector de la floricultura y el rubro gastronómico. Nuestra propuesta tecnológica no se limita a herramientas digitales, sino que está orientada a la creación de sistemas integrales que optimizan la operación, mejoran la trazabilidad y potencian la rentabilidad de los negocios.',
        companies: [
          { tag: 'Tecnología', description: 'Soluciones tecnológicas estratégicas integrales que optimizan la operación, trazabilidad y rentabilidad.' },
        ],
      },
      {
        shortTitle: 'Imprenta & Packaging',
        title: 'Imprenta, Diseño & Packaging',
        detailTitle: '',
        summary: 'Soluciones integrales que fortalecen la identidad de marca, combinando concepto visual, estructura y producción...',
        detail: 'Concebimos la impresión, el diseño y el packaging como elementos estratégicos dentro de la construcción de marca, especialmente en sectores donde la percepción, la estética y la experiencia del cliente son determinantes. Nos especializamos en el desarrollo de soluciones integrales orientadas a la floricultura, los regalos de lujo y el rubro gastronómico.',
        companies: [
          { tag: 'Imprenta & Packaging', description: 'Concepto visual, diseño de marca y producción de packaging de alto estándar.' },
        ],
      },
      {
        shortTitle: 'Rosas Premium',
        title: 'Productora y Distribuidora de Rosas Ecuatorianas',
        detailTitle: 'Rosas Ecuatorianas Premium',
        summary: 'Producción y distribución de rosas ecuatorianas de alta gama con estándar premium en cada etapa...',
        detail: 'Contamos con una unidad especializada en la producción y distribución de rosas ecuatorianas de alta gama, reconocidas a nivel internacional por su calidad superior, tamaño, intensidad de color y durabilidad. Nuestra operación está orientada a garantizar un estándar premium en cada etapa de la cadena de valor, desde el cultivo hasta la entrega final.',
        companies: [
          { tag: 'Rosas Premium', description: 'Producción y distribución de rosas ecuatorianas de alta gama con estándar premium internacional.' },
        ],
      },
      {
        shortTitle: 'Salud y Bienestar',
        title: 'Salud y Bienestar',
        detailTitle: '',
        summary: 'Centros de terapias alternativas y tiendas especializadas con enfoque holístico: equilibrio físico, mental...',
        detail: 'Desarrollamos una línea especializada en salud y bienestar orientada a ofrecer soluciones integrales que promuevan el equilibrio físico, mental y emocional. A través de nuestros centros de terapias alternativas y tiendas especializadas, brindamos experiencias enfocadas en el cuidado personal, la prevención y el bienestar consciente.',
        companies: [
          { tag: 'Salud', description: 'Fisioterapia.' },
        ],
      },
      {
        shortTitle: 'Consultoría',
        title: 'Consultoría y Gestión Empresarial',
        detailTitle: '',
        summary: 'Soluciones integrales que conectan estrategia, administración, finanzas y gestión profesional para organizar y hacer crecer empresas...',
        detail: 'Impulsamos el desarrollo y fortalecimiento de empresas mediante soluciones integrales de consultoría y gestión empresarial, orientadas a optimizar sus operaciones, mejorar su desempeño y potenciar su crecimiento. Integramos conocimientos estratégicos, administrativos, financieros, contables y legales para brindar un acompañamiento profesional adaptado a cada organización.',
        companies: [
          { tag: 'Consultoría', description: 'Impulsamos empresas. Construimos oportunidades. Estrategia, finanzas, gestión corporativa, legal y soporte empresarial en un solo aliado.' },
        ],
      },
    ],
  },

  commitment: {
    label: '04 — Nuestro compromiso',
    titleA: 'Construimos con ',
    titleB: 'propósito',
    quote: '"Generar orden que trasciende."',
    imageAlt: 'ARRMARE GROUP',
    p1: 'En ARRMARE GROUP asumimos el compromiso de construir y gestionar empresas con propósito, donde cada unidad de negocio responde a una visión estratégica común.',
    p2: 'A través de nuestro modelo de holding, integramos capacidades, optimizamos recursos y potenciamos sinergias para crear valor real y sostenible. Nos enfocamos en desarrollar marcas sólidas, procesos eficientes y experiencias de alto impacto.',
    p3: 'Nuestro compromiso es crecer de manera estructurada, consciente y sostenible, consolidándonos como un grupo empresarial confiable, innovador y orientado a resultados.',
    pillars: [
      { t: 'Crecimiento estructurado', d: 'Expandimos con método, no por impulso.' },
      { t: 'Gestión consciente', d: 'Decisiones medidas, con impacto a largo plazo.' },
      { t: 'Valor sostenible', d: 'Resultados que perduran en el tiempo.' },
    ],
  },

  contact: {
    label: '05 — Contacto',
    titleA: 'Trabajemos ',
    titleB: 'juntos',
    lead: 'Estamos a tu disposición para proyectos de alto impacto y alianzas estratégicas.',
    email: 'Email',
    phone: 'Teléfono',
    whatsapp: 'WhatsApp',
    whatsappCta: 'Escríbenos ahora',
    location: 'Ubicación',
    whatsappMessage: 'Hola ARRMARE GROUP, quisiera más información.',
    formTitle: 'Escríbenos',
    name: 'Nombre *',
    emailField: 'Correo *',
    interest: 'Empresa de interés',
    interestDefault: 'Información general del grupo',
    message: 'Mensaje *',
    honeypot: 'No llenar',
    legalPre: 'Al enviar aceptas que usemos tus datos solo para responder tu consulta. Más información en nuestra ',
    legalPost: '.',
    errName: 'Escribe tu nombre.',
    errEmail: 'Escribe un correo válido.',
    errMessage: 'Cuéntanos un poco más (mínimo 10 caracteres).',
    errorPre: 'No pudimos enviar tu mensaje. Inténtalo de nuevo o escríbenos a ',
    send: 'Enviar mensaje',
    sending: 'Enviando…',
    doneSentTitle: 'Mensaje enviado',
    doneSentText: 'Gracias por escribirnos. Te responderemos pronto al correo que nos indicaste.',
    doneMailTitle: 'Revisa tu correo',
    doneMailText: 'Abrimos tu aplicación de correo con el mensaje listo. Solo falta que pulses enviar.',
    again: 'Enviar otro mensaje',
    mailSubject: 'Consulta web — ',
    mailName: 'Nombre',
    mailEmail: 'Correo',
    mailInterest: 'Interés',
  },

  footer: {
    tagline: 'Holding empresarial peruano.',
    group: 'Grupo',
    ourCompanies: 'Nuestras empresas',
    aria: 'Pie de página',
    companiesAria: 'Sitios de nuestras empresas',
    rights: 'Todos los derechos reservados',
  },

  socials: { aria: 'Redes sociales' },
  fab: { aria: 'Escríbenos por WhatsApp', label: 'WhatsApp' },
  top: { aria: 'Volver arriba' },

  notFound: {
    metaTitle: 'Página no encontrada — ARRMARE GROUP',
    code: '404',
    title: 'Esta página no existe',
    text: 'Es posible que el enlace esté mal escrito o que la página se haya movido.',
    cta: 'Volver al inicio',
  },

  privacy: {
    metaTitle: 'Política de privacidad — ARRMARE GROUP',
    metaDescription: 'Cómo ARRMARE GROUP trata los datos personales que recibe a través de su sitio web.',
    label: 'Legal',
    title: 'Política de privacidad',
    updated: 'Última actualización: noviembre de 2026',
    controller: { name: 'Responsable', ruc: 'RUC', address: 'Domicilio', email: 'Correo de contacto' },
    sections: [
      {
        h: '1. Responsable del tratamiento',
        p: ['ARRMARE GROUP es el responsable del tratamiento de los datos personales recopilados a través de este sitio web. Sus datos de contacto son:'],
        controller: true,
      },
      {
        h: '2. Datos que recopilamos',
        p: [],
        ul: [
          'Los que tú nos entregas en el formulario de contacto: nombre, correo electrónico, empresa de tu interés y el contenido de tu mensaje.',
          'Datos técnicos básicos, como tu dirección IP, que el servidor procesa para limitar envíos repetidos y proteger el sitio contra abuso.',
        ],
      },
      {
        h: '3. Para qué los usamos',
        p: ['Usamos tus datos para responder tu consulta y, si corresponde, derivarla a la empresa del grupo que mencionaste. También para la seguridad del sitio y la prevención de spam.'],
        ul: [],
      },
      {
        h: '4. Base legal',
        p: ['Tratamos tus datos con tu consentimiento, que nos das al enviar el formulario, conforme a la Ley N.° 29733, Ley de Protección de Datos Personales, y su reglamento.'],
        ul: [],
      },
      {
        h: '5. Con quién los compartimos',
        p: ['Podemos compartir tu consulta con la empresa del grupo ARRMARE a la que va dirigida y con los proveedores que nos prestan servicios de alojamiento web y correo electrónico, que tratan los datos solo por encargo nuestro. No vendemos tus datos.'],
        ul: [],
      },
      {
        h: '6. Cuánto tiempo los conservamos',
        p: ['Conservamos tus datos durante el tiempo necesario para atender tu consulta y cumplir las obligaciones legales aplicables. Después los eliminamos o anonimizamos.'],
        ul: [],
      },
      {
        h: '7. Tus derechos',
        p: [
          'Puedes ejercer tus derechos de información, acceso, rectificación, cancelación y oposición, así como los demás reconocidos por la ley, escribiéndonos a {email} con el asunto «Datos personales» e indicando tu nombre y lo que solicitas.',
          'Si consideras que no atendimos tu solicitud, puedes acudir a la Autoridad Nacional de Protección de Datos Personales del Ministerio de Justicia y Derechos Humanos.',
        ],
        ul: [],
      },
      {
        h: '8. Cookies y enlaces a terceros',
        p: ['Este sitio no utiliza cookies de seguimiento ni herramientas de analítica o publicidad. Los enlaces a sitios de terceros (redes sociales, sitios de nuestras empresas, WhatsApp) se rigen por sus propias políticas.'],
        ul: [],
      },
      {
        h: '9. Seguridad',
        p: ['Aplicamos medidas técnicas y organizativas razonables para proteger tu información, como la conexión cifrada (HTTPS), la validación de los datos y el límite de envíos.'],
        ul: [],
      },
      {
        h: '10. Cambios en esta política',
        p: ['Podemos actualizar esta política. La versión vigente estará siempre en esta página, con su fecha de actualización.'],
        ul: [],
      },
    ],
  },
}

export type Content = typeof es
