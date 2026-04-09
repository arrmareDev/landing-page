/**
 * units.js — ARRMARE GROUP
 * Gestiona: Transición entre la vista de sectores y el detalle con las empresas.
 */

document.addEventListener('DOMContentLoaded', () => {
  const gridView = document.getElementById('units-grid-view');
  const detailView = document.getElementById('unit-detail-view');
  const btnBack = document.getElementById('btn-back-units');
  
  const unitCards = document.querySelectorAll('.units-grid .unit-card[data-target]');
  const companyCards = document.querySelectorAll('.unit-detail-view .company-card');
  
  const detailTitle = document.getElementById('detail-title');
  const detailText = document.getElementById('detail-text');

  // Textos formales redactados
  const sectorData = {
    floricultura: {
      title: "Floricultura y Regalos de Lujo",
      text: "Desarrollamos un ecosistema especializado en flores y regalos de lujo, donde cada marca refleja sofisticación, detalle y una propuesta de valor única orientada a experiencias premium. Nuestras empresas están enfocadas en elevar el estándar del sector, integrando diseño, calidad de producto y presentación como pilares fundamentales."
    },
    tecnologia: {
      title: "Tecnología",
      text: "Desarrollamos y comercializamos soluciones tecnológicas diseñadas estratégicamente para responder a las necesidades actuales del mercado, con un enfoque altamente especializado en el sector de la floricultura y el rubro gastronómico. Nuestra propuesta tecnológica no se limita a herramientas digitales, sino que está orientada a la creación de sistemas integrales que optimizan la operación, mejoran la trazabilidad y potencian la rentabilidad de los negocios."
    },
    imprenta: {
      title: "Imprenta, Diseño & Packaging",
      text: "Concebimos la impresión, el diseño y el packaging como elementos estratégicos dentro de la construcción de marca, especialmente en sectores donde la percepción, la estética y la experiencia del cliente son determinantes. Nos especializamos en el desarrollo de soluciones integrales orientadas a la floricultura, los regalos de lujo y el rubro gastronómico."
    },
    rosas: {
      title: "Rosas Ecuatorianas Premium",
      text: "Contamos con una unidad especializada en la producción y distribución de rosas ecuatorianas de alta gama, reconocidas a nivel internacional por su calidad superior, tamaño, intensidad de color y durabilidad. Nuestra operación está orientada a garantizar un estándar premium en cada etapa de la cadena de valor, desde el cultivo hasta la entrega final."
    },
    salud: {
      title: "Salud y Bienestar",
      text: "Desarrollamos una línea especializada en salud y bienestar orientada a ofrecer soluciones integrales que promuevan el equilibrio físico, mental y emocional. A través de nuestros centros de terapias alternativas y tiendas especializadas, brindamos experiencias enfocadas en el cuidado personal, la prevención y el bienestar consciente."
    }
  };

  // 1. Abrir detalle de sector
  unitCards.forEach(card => {
    card.addEventListener('click', () => {
      const target = card.getAttribute('data-target');
      
      if(sectorData[target]) {
        // Actualizar textos
        detailTitle.textContent = sectorData[target].title;
        detailText.textContent = sectorData[target].text;

        // Mostrar solo empresas asociadas
        companyCards.forEach(compCard => {
          if(compCard.getAttribute('data-category') === target) {
            compCard.classList.remove('hide');
          } else {
            compCard.classList.add('hide');
          }
        });

        // Transición: Ocultar Grid, Mostrar Detalle
        gridView.style.display = 'none';
        detailView.style.display = 'block';
        
        // Scroll suave al inicio de la sección
        document.getElementById('unidades').scrollIntoView({ behavior: 'smooth' });
        
        gridView.style.display = 'none';
        detailView.style.display = 'block';
        
        // Scroll suave al inicio de la sección
        document.getElementById('unidades').scrollIntoView({ behavior: 'smooth' });

        // NUEVO: Fuerza al navegador a recalcular el scroll
        setTimeout(() => {
           window.scrollBy(0, 1);
           window.scrollBy(0, -1);
        }, 100);
      }
      
    });
  });

  // 2. Botón Volver
  if(btnBack) {
    btnBack.addEventListener('click', () => {
      detailView.style.display = 'none';
      gridView.style.display = 'grid'; 
      document.getElementById('unidades').scrollIntoView({ behavior: 'smooth' });
    });
  }
});

