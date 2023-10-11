<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo4
    .bloque-fondo3 
      .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
        .titulo-principal__numero
          span 2
        h1 Programa de bienestar laboral
      .row.justify-content-center.align-items-start.mb-4           
        .col-lg-2.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/24.svg', alt='')    
        .col-lg-10.my-3
          p(data-aos="fade-down") Una vez se tiene clara la estrategia, tanto de la empresa como del área de recursos humanos, se llega a la construcción del programa de bienestar laboral, documento donde se consolidan las diferentes actividades que se van a realizar durante el transcurso del año o semestre (según sea la metodología), fechas, recursos necesarios, responsables, y todo el seguimiento de cada mes. 

      p(data-aos="fade-down").mb-5 Para comenzar a construir este documento, se deben tener en cuenta algunas variables como:  

      .row.justify-content-center.align-items-start.mb-4
        .col-lg-8.my-3 
          AcordionA(tipo="a" clase-tarjeta="tarjeta bg6")
            .row.justify-content-center.align-items-center(titulo="No es un documento suelto")
              .col-10
                p Partiendo de lo macro a lo micro, lo primero que hay que tener en cuenta es que el plan de bienestar no puede ser un documento o actividades sueltas a ejecutar; por el contrario, todas las actividades deben estar alineadas con la estrategia de la compañía, de recursos humanos, y que tengan sentido con la cultura organizacional. La importancia de esta unión, quiere decir que cada empresa tiene necesidades y objetivos diferentes, por lo que cada actividad debe responder y cubrir sus propias brechas.    
            .row.justify-content-center.align-items-center(titulo="Debe estar alineado con la cultura organizacional")
              .col-10
                p La cultura organizacional hace referencia a todos los comportamientos, estilos de comunicación y reglas “invisibles” que están inmersas en cada una de las compañías. La cultura es definida por la estrategia, el estilo de liderazgo, la misión, el sector económico, entre otros. Por lo tanto, para el caso del programa de bienestar, es necesario conocer la cultura de la organización para garantizar que las actividades propuestas sean bien recibidas y acogidas por los colaboradores.   

        .col-lg-4.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/25.png', alt='')  

    .row.justify-content-center.align-items-start.mb-4           
      .col-lg-2.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/26.svg', alt='')    
      .col-lg-10.my-3
        p(data-aos="fade-down") En este orden de ideas, es necesario precisar que el plan de bienestar se refiere a todas las actividades, recursos, beneficios, prácticas e incentivos, en el marco del salario emocional que reciben los colaboradores, para promover la salud física, mental y social del colaborador, garantizando un equilibrio entre su vida laboral y la personal. Así mismo, facilitará sus labores diarias, aunque posiblemente generen estrés, o que al momento de sobrellevar una situación difícil o retadora en el contexto laboral, no generen un impacto negativo en su vida. 

    .row.justify-content-center.align-items-start.mb-4          
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/27.svg', alt='')    
      .col-lg-8.my-3 
        .cajon.color-primario.p-4.mb-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Integrar tanto la estrategia como la cultura en la construcción del plan de bienestar, va a permitir que cada una de las actividades tengan un objetivo claro, que apunte a las necesidades reales, fortalezca la marca empleadora y la reputación organizacional y, por supuesto, apalanque los resultados de desempeño.   
        p(data-aos="fade-down") Sin duda, la situación propiciada por el Covid-19, mostró la importancia y el valor que agregan todas las actividades que se implementan, desde bienestar, sistema de gestión de seguridad y salud, y clima laboral. Trascendiendo de ser un rubro de gasto, o actividades sueltas de “felicidad”, o simplemente celebrar los cumpleaños, a contar con todo un programa integral que impacte y aporte a la vida del colaborador, permeando los resultados de desempeño y los organizacionales. 
    p(data-aos="fade-down").mb-5 Por lo tanto, el objetivo general de contar con un plan de bienestar, más allá del cumplimiento legal, es el de implementar acciones que promuevan un ambiente sano y saludable para que los colaboradores desarrollen sus actividades, sin generar afectación en su salud física o mental. Sin embargo, también se encontrarán objetivos específicos como: 

    .row.justify-content-center.mb-5           
      .col-lg-3.col-md-6.col-sm-8.my-3(data-aos="fade-left")
        .tarjeta-avatar
          img.img-a.img-t.img-w2(src='@/assets/curso/temas/28.svg' alt='')
          div.text-center.bg2.p-4.pt-5.h-100
            p.mb-0 Contar con un clima de trabajo sano.   
      .col-lg-3.col-md-6.col-sm-8.my-3(data-aos="fade-right")
        .tarjeta-avatar
          img.img-a.img-t.img-w2(src='@/assets/curso/temas/29.svg' alt='')
          div.text-center.bg2.p-4.pt-5.h-100
            p.mb-0 Fortalecer la marca empleadora. 
      .col-lg-3.col-md-6.col-sm-8.my-3(data-aos="fade-left")
        .tarjeta-avatar
          img.img-a.img-t.img-w2(src='@/assets/curso/temas/30.svg' alt='')
          div.text-center.bg2.p-4.pt-5.h-100
            p.mb-0 Controlar la rotación. 
      .col-lg-3.col-md-6.col-sm-8.my-3(data-aos="fade-right")
        .tarjeta-avatar
          img.img-a.img-t.img-w2(src='@/assets/curso/temas/31.svg' alt='')
          div.text-center.bg2.p-4.pt-5.h-100
            p.mb-0 Mitigar cualquier afectación a nivel psicosocial.                                                     
    p(data-aos="fade-down").my-5 Por otra parte, el alcance del programa de bienestar, va a ser determinado por dos criterios:     

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="La estrategia corporativa")
        .row.justify-content-center.align-items-start
          .col-lg-6.col-md-10.my-3
            p Este criterio hace que se cuestione qué espera la alta dirección en términos de bienestar, porque en el marco del proceso de selección, juega un papel sumamente importante la marca empleadora, compuesta por el salario emocional que impacta el bienestar, como por ejemplo un tiempo extra, días adicionales de vacaciones, flexibilidad de horarios, acceso a pólizas de salud, beneficios para estudios, entre otros. Es así como se construye una marca empleadora que posiciona a la compañía en un lugar sano, llamativo, agradable y que piensa en el trabajador y en su familia, más allá de los resultados organizacionales.             
          .col-lg-4.col-md-10.my-3
            img.img-a.img-t(src='@/assets/curso/temas/32.png', alt='')    
      .py-3.py-md-4(titulo="Los diagnósticos aplicados")
        .row.justify-content-center.align-items-start
          .col-lg-6.col-md-10.my-3
            p Los diagnósticos determinarán la ruta de trabajo. Hay un diagnóstico que es obligatorio en las compañías colombianas y es la batería de riesgo psicosocial. Esta se implementa con el objetivo de entender cómo se encuentran los colaboradores bajo las dimensiones extra laborales, intra laborales y el estrés. Su análisis y entrega de resultados debe realizarlo un personal calificado, que garantice la reserva anónima de resultados. Otra forma de determinar las necesidades será a través de la medición del clima laboral; aunque no hace parte de ninguna norma, sí es sumamente recomendada su aplicación para identificar cómo se encuentran las diferentes percepciones de los colaboradores en términos de relacionamiento. Otro canal que permitirá delimitar el alcance de la gestión, será la solicitud o las novedades que reciba el comité de convivencia el cual, sí es legal y debe coexistir en las empresas. Finalmente, la compañía puede contar con metodologías como: buzón de sugerencias, grupos focales o atención al colaborador, donde también se podrán recibir solicitudes y escuchar a los colaboradores, para poder tocar polo a tierra y aterrizar los requerimientos.              
          .col-lg-4.col-md-10.my-3
            img.img-a.img-t(src='@/assets/curso/temas/33.png', alt='') 

    .row.justify-content-center.align-items-start.mb-4          
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/34.png', alt='')    
      .col-lg-8.my-3    
        p(data-aos="fade-down") Lo importante de todas las herramientas legales y de gestión con las que cuente la empresa para determinar el alcance, es poder integrar la gestión y unificar el plan de trabajo, porque en ciertas ocasiones, la información de cada herramienta la reciben diferentes subprocesos de gestión de talento humano y puede ocurrir que no se presente comunicación y, posiblemente, cada uno intervenga en una misma necesidad desde diferentes puntos de vista, generando sobrecostos, desgaste e ineficiencia. 
        .cajon.color-primario.p-4.mt-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Una vez consolidadas todas las necesidades y planteado el alcance que se espera impactar, es necesario construir el plan de trabajo, siendo este la hoja de ruta, donde se tendrán las actividades, su intensidad, a qué objetivo apuntan los recursos requeridos, presupuesto necesario, indicadores, fechas de ejecución, responsables y si interviene algún ente externo.   
    .row.justify-content-center.align-items-start.mb-4           
      .col-lg-2.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/35.svg', alt='')    
      .col-lg-10.my-3
        p(data-aos="fade-down") Este plan de trabajo debe ser monitoreado de forma constante, a través de la medición de sus indicadores, garantizando su cumplimiento e involucrando a los líderes de la organización, porque muchas veces se concibe que la gestión es responsabilidad del departamento de talento humano y, sin embargo, aunque juega un rol importante de construcción, gestión y acompañamiento, es responsabilidad del líder permitir la ejecución de las diferentes actividades y acompañar el cambio de cultura organizacional, en pro del colaborador.  

    .row.justify-content-center.align-items-start.mb-4
      .col-lg-8.my-3 
        .cajon.color-primario.p-4.mb-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 También es probable que, a raíz de los diferentes diagnósticos realizados, se determine instaurar algunos beneficios o medidas en la cultura que impactará el bienestar del colaborador, como son los días remunerados libres, tiempo extra, trabajo remoto, descuentos para entidades, entre otros.            
        p(data-aos="fade-down") Es de suma importancia que el plan de trabajo y las acciones que se implementen, sean comunicados y reforzados de forma constante, incluyendo el plan de inducción para el personal nuevo. Esto permitirá involucrar al colaborador, hacerle saber que su opinión es tenida en cuenta (aunque todas las solicitudes no se gestionan, lo que es probable), cumplir normatividad y así impactar el bienestar del colaborador. El refuerzo debe hacerse a través de los canales de comunicación que tenga establecidos la compañía y sean de visualización constante (carteleras físicas y/o electrónicas, correo electrónico, intranet, medios electrónicos); así como también, a través de los líderes, esto permitirá permear la cultura y garantizar que las acciones implementadas sean vistas con utilidad, porque lastimosamente se encuentran colaboradores que reportan no conocer o no tienen recordación de los beneficios, por lo que consideran que su empresa no trabaja en pro de su bienestar. 

      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/36.png', alt='')     

    .row.justify-content-start.align-items-center.mb-5           
      .col-auto
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Normatividad del programa de bienestar 

    p(data-aos="fade-down") Es importante reconocer que, en el desarrollo y aprendizaje del programa de bienestar corporativo, existe una normatividad legal que lo regula de forma indirecta o directa. 
    p(data-aos="fade-down").mb-5 A continuación, se mencionan las principales leyes o decretos; sin embargo, cada compañía tendrá políticas internas que también marquen la pauta, en términos de la gestión del bienestar de los colaboradores.

    .row.justify-content-center.align-items-start.mb-4 
      .col-lg-4.up.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/37.png', alt='')        
      .col-lg-8.up.my-3
        TabsA.color-acento-contenido.mb-5(data-aos="fade-left")
          .tarjeta.color-acento-contenido--borde.p-4(titulo="Decreto 1567<br> de 1998")
            .row.justify-content-center.align-items-start
              .col-lg-12
                p #[b Capítulo 1. Artículo 13.] Sistema de estímulo para los empleados del Estado: se determinan planes y disposiciones legales y programas de bienestar e incentivos que interactúan con el propósito de elevar los niveles de eficiencia, satisfacción, desarrollo y bienestar de los empleados del Estado, en el desempeño de su labor y de contribuir al cumplimiento efectivo de los resultados institucionales. 

                p #[b Artículo 14.] Finalidades del sistema de estímulos: “Garantizar que la gestión institucional y los procesos de administración del talento humano, se manejen integralmente en función del bienestar social y del desempeño eficiente y eficaz de los empleados”. 
          .tarjeta.color-acento-contenido--borde.p-4(titulo="Ley 1010 de<br> 2006")
            .row.justify-content-center.align-items-start
              .col-lg-12
                p “Por medio de la cual se adoptan medidas para prevenir, corregir y sancionar el acoso laboral y otros hostigamientos en el marco de las relaciones de trabajo”. Esta ley es sumamente importante reconocerla, entenderla y aplicarla, porque es a través de la cual se regula todo en materia de acoso laboral, garantizando las condiciones justas y dignas, y la armonía entre los colaboradores de una misma organización. Acá mismo regula la conformación y funcionamiento del comité de convivencia, el cual tiene como objetivo ser un garante de las relaciones sanas laborales y, así mismo, atender y gestionar cualquier queja en materia de acoso laboral.  
          .tarjeta.color-acento-contenido--borde.p-4(titulo="Decreto 1072<br> de 2015")
            .row.justify-content-center.align-items-start
              .col-lg-12
                p Capítulo 6. Sistema de seguridad y salud en el trabajo. En todo este capítulo, se definen las directrices para que las compañías públicas o privadas puedan implementar todas las acciones para garantizar el cuidado de la salud y la seguridad de los trabajadores, garantizando así su bienestar y velando por contar con las condiciones óptimas para el desarrollo de sus actividades. 
          .tarjeta.color-acento-contenido--borde.p-4(titulo="Resolución<br> 2446 de 2008")
            .row.justify-content-center.align-items-start
              .col-lg-12
                p “Por la cual se establecen disposiciones y se definen responsabilidades para la identificación, evaluación, prevención, intervención y monitoreo permanente de la exposición a factores de riesgo psicosocial en el trabajo, y para la determinación del origen de las patologías causadas por el estrés ocupacional”. Esta normatividad es de suma importancia y tiene un rol muy importante en lo referente a la identificación de riesgos en materia de cómo se siente la persona en un contexto intralaboral, extralaboral y estrés, marcando la pauta respecto a cómo y determina la frecuencia con que se debe medir, prevenir, intervención y monitoreo, según los hallazgos identificados.
          .tarjeta.color-acento-contenido--borde.p-4(titulo="Ley 1857 de<br> 2017")
            .row.justify-content-center.align-items-start
              .col-lg-12
                p  “La presente ley tiene por objeto fortalecer y garantizar el desarrollo integral de la familia, como núcleo fundamental de la sociedad”. Esta normativa promueve varias acciones en pro de acompañar y estar para alguna necesidad de un familiar; adicionalmente, un ítem de suma importancia es la obligación de las empresas de otorgar dos días al año libres remunerados (uno por semestre), para que el colaborador pueda compartir tiempo con su familia.                                                

    .row.justify-content-start.align-items-center.mb-5           
      .col-auto
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Recursos

    p(data-aos="fade-down") Una vez abordado el plan de bienestar y sus diferentes componentes, es necesario reconocer que el programa necesita recursos para su desarrollo, es decir, todos los elementos que se requieren para alcanzar los objetivos planteados en términos de bienestar organizacional.
    p(data-aos="fade-down").mb-5 Para ampliar la información, lo invitamos a ver el siguiente video:

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/taseFIUONjE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)    

    .row.justify-content-start.align-items-center.mb-5           
      .col-auto
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Alianzas  

    .row.justify-content-center.align-items-start.mb-4          
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/38.png', alt='')    
      .col-lg-8.my-3    
        p(data-aos="fade-down") Al momento de llegar a presentar el programa de bienestar a la alta dirección, uno de los obstáculos que se puede presentar para su implementación, hace referencia al presupuesto necesario para cada actividad planteada. Y, aunque sería mentir, decir que no se necesita dinero para la gestión, una forma de mitigar o generar ahorro es, a través de las alianzas que se construyen con los diferentes aliados, en la gestión del talento humano. En esta temática, hablaremos de la Caja de Compensación Familiar, la Administradora de Riesgos Laborales (ARL), las Entidades Promotoras de Salud (EPS), IPS que suministra exámenes médicos ocupacionales y cualquier otro aliado con el cual se tenga un vínculo.
        .cajon.color-primario.p-4.mt-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 En cuanto a lo que se refiere a la Caja de Compensación Familiar y la ARL, hay una obligación en materia normativa, la cual indica que deben aportar al bienestar del colaborador. 

    p(data-aos="fade-down").mb-5 Ampliemos la información sobre las alianzas: 

    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-start 
          .col-lg-6
            p Para el caso de la Caja de Compensación Familiar, la Ley 21 de 1982, aclara que el subsidio familiar es una prestación social pagadera en dinero, especie (alimentos, vestidos, becas de estudio, texto escolares, medicamentos), y aunque estas entregas tienen ciertas condiciones en términos de la población trabajadora que la puede recibir, sin duda alguna, la cuota mensual que se otorga es un gran beneficio, porque no constituye salario y es para uso de los beneficiarios, al igual que el apoyo en útiles escolares o los beneficios para acceder a la compra de vivienda. 

            p Además de lo anteriormente mencionado, de acuerdo con los lineamientos legales, también es necesario construir una relación cercana, para que esta entidad pueda apoyar otras actividades propuestas en el plan de trabajo y sea un movilizador de la estrategia de bienestar organizacional. En este apartado juegan un rol protagónico las estrategias de comunicación de la compañía, para que los colaboradores conozcan la información que ofrece la caja de compensación, y no suceda una situación que es muy común y es el desconocimiento, por el cual se tiene la sensación que no existen beneficios en pro del bienestar.
          .col-lg-5
            img.img-a.img-t(src='@/assets/curso/temas/39.png', alt='')    
        .row.justify-content-center.align-items-start 
          .col-lg-6
            p Por otro lado, se encuentran los beneficios y apoyos que brinda la ARL, siendo esta entidad la que cubre todo tipo de riesgos en el entorno laboral. Como su objetivo principal está enmarcado de cara a accidentes o enfermedades laborales, serán aliados para realizar diferentes campañas de prevención y evitar que el colaborador sufra algún accidente o su salud mental tenga una afectación negativa. 

            p Es de suma importancia involucrar a la entidad en el plan de bienestar que se construya, para, de esta manera, poder contar ellos en su implementación y que su aporte se encuentre ligado al bienestar del colaborador. Sus intervenciones pueden ser capacitaciones, charlas, o diferentes actividades.
          .col-lg-5
            img.img-a.img-t(src='@/assets/curso/temas/40.png', alt='')
        .row.justify-content-center.align-items-start 
          .col-lg-6
            p Otras alianzas que se podrán construir, y que ya no son parte del marco del desarrollo legal, hacen referencia a los proveedores que impactan la salud del colaborador. Por ejemplo, la IPS de exámenes médicos ocupacionales, las EPS, corredores de seguros, empresas de servicios temporales. 

            p En particular, para el caso de las EPS, aunque no tienen ninguna obligación, usualmente solicitan poder impactar el bienestar del colaborador, y así captar más afiliados; en este orden de ideas, este sería su beneficio. Y en lo que respecta a la empresa de servicios temporales, funcionará solamente si la compañía cuenta con estos servicios y estarán obligadas a mejorar el bienestar de sus trabajadores en misión, pero la mayoría de las veces, también apoyan para beneficiar, al resto de colaboradores. 
          .col-lg-5
            img.img-a.img-t(src='@/assets/curso/temas/41.png', alt='')            
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
