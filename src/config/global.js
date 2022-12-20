export default {
  global: {
    componenteFormativo:
      'Construcción y ejecución del programa de bienestar laboral',
    descripcionCurso:
      'En este componente formativo, se abordará la importancia del programa de bienestar laboral. Este proceso, en el marco de la gestión humana, es de suma importancia, porque las organizaciones tienen la responsabilidad de garantizar y propiciar espacios de trabajo sanos y agradables para el trabajador, a través de una cultura de cohesión y un estilo de liderazgo acorde.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/5.png'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/6.png'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/7.svg'),
      },
      {
        clases: ['banner-principal-decorativo-8'],
        imagen: require('@/assets/curso/portada/8.svg'),
      },
      {
        clases: ['banner-principal-decorativo-9'],
        imagen: require('@/assets/curso/portada/9.svg'),
      },
      {
        clases: ['banner-principal-decorativo-11'],
        imagen: require('@/assets/curso/portada/11.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Técnicas de investigación, metodología de análisis y estrategia',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Programa de bienestar laboral',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Indicadores de gestión',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Programa de bienestar laboral',
      referencia:
        'Factoral HR España. (2022) <i>Employee engagement como herramienta contra la rotación con Gianluca Rosania</i>.',
      tipo: 'Video',
      link: 'https://youtu.be/3iRoVf-zztQ',
    },
    {
      tema: 'Programa de bienestar laboral',
      referencia:
        'Factoral HR España. (2019). <i>Gestión del TALENTO [8+1 estrategias]</i>.',
      tipo: 'Video',
      link: 'https://youtu.be/m1ovBrkFaF8',
    },
    {
      tema: 'Programa de bienestar laboral',
      referencia:
        'Vásquez L. (2018). <i>El bienestar laboral como ventaja competitiva en las organizaciones en Colombia: una revisión documental</i>. Universidad de Antioquia.',
      tipo: 'Artículo',
      link:
        'https://bibliotecadigital.udea.edu.co/bitstream/10495/9950/1/VasquezLuis_2018_BienestarLaboralVentaja.pdf',
    },
    {
      tema: 'Programa de bienestar laboral',
      referencia:
        'Tedx Talks. (2018). <i>Cómo motivar a los profesionales de tu empresa en 10 minutos</i>.',
      tipo: 'Video',
      link: 'https://youtu.be/OF_rEVrQHvI',
    },
  ],
  glosario: [
    {
      termino: 'Clima de trabajo',
      significado:
        'ambiente que determina qué tan agradable o no es trabajar en cierta compañía.',
    },
    {
      termino: 'Cualitativo',
      significado:
        'referente a investigación es la forma de conocer situaciones, hechos de forma objetiva a través de datos, encuestas.',
    },
    {
      termino: 'Cuantitativo',
      significado:
        'referente a la investigación es la forma de indagar al respecto a través de observaciones, grupos focales, conversaciones.',
    },
    {
      termino: 'Cultura organizacional',
      significado:
        'son los comportamientos y parámetros que identifican a cada compañía y regulan su modo de actuar.',
    },
    {
      termino: 'Estrategia',
      significado:
        'serie de acciones organizadas de tal forma que permite alcanzar un objetivo.',
    },
    {
      termino: 'Marca empleadora',
      significado:
        'es la reputación que tiene una compañía como empleador. Es decir que tan llamativa es su empresa/marca en términos para trabajar allí.',
    },
    {
      termino: 'Presupuesto',
      significado:
        'es un plan donde se evalúan los recursos necesarios para llevar a cabo cierta actividad o programa.',
    },
    {
      termino: 'Proveedores',
      significado:
        'persona o empresa que provee o entrega un producto o servicio, según necesidad.',
    },
    {
      termino: 'Salario emocional',
      significado:
        'es todos los beneficios o retribuciones no económicas que tiene una compañía para sus colaboradores.',
    },
    {
      termino: 'Salud mental',
      significado:
        'determina el bienestar a nivel mental de la persona, incluyendo manejo de estrés y situaciones difíciles.',
    },
  ],
  referencias: [
    {
      referencia:
        'Decreto 1072 de 2015. Por medio del cual se expide el Decreto Único Reglamentario del Sector Trabajo. 26 de mayo de 2015. D.O. No 49523.',
    },
    {
      referencia:
        'Decreto 1567 de 1998 [con fuerza de Ley]. Por el cual se crea el sistema nacional de capacitación y el sistema de estímulos para los empleados del Estado. 5 de agosto de 1998. D.O. No 43358.',
    },
    {
      referencia:
        'Ley 1010 de 2006. Por medio de la cual se adoptan medidas para prevenir, corregir y sancionar el acoso laboral y otros hostigamientos en el marco de las relaciones de trabajo. 23 de enero de 2006. D.O No 46160.',
    },
    {
      referencia:
        'Ley 1857 de 2017. Por medio de la cual se modifica la Ley 1361 de 2009 para adicionar y complementar las medidas de protección de la familia y se dictan otras disposiciones. 26 de julio de 2017.D.O: No 50306.',
    },
    {
      referencia:
        'Prieto, G. y Delgado, A. (2010). <i>Fiabilidad y Validez. Papeles del psicólogo 31</i>(1), p. 67-74.',
      link: 'https://www.redalyc.org/pdf/778/77812441007.pdf',
    },
    {
      referencia:
        'Rincón, D. (1998). Los indicadores de gestión organizacional: Una guía para su definición. <i>Revista Universidad Eafit</i>.',
    },
    {
      referencia:
        'Universidad nacional de educación a distancia. (2014). <i>Técnicas e instrumentos de recogida y análisis de datos</i>. UNED',
      link:
        'https://books.google.com.co/books?hl=es&lr=&id=iiTHAwAAQBAJ&oi=fnd&pg=PA7&dq=tecnicas+de+analisis+de+datos&ots=GXJXeTyvUY&sig=ZVtmvcLmEC8ynsxFLMff0pbScvI#v=onepage&q&f=false',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
