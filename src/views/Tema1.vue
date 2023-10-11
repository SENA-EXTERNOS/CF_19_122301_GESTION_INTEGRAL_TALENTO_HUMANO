<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo2
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Técnicas de investigación, metodología de análisis y estrategia
    .row.justify-content-center.align-items-start.mb-4           
      .col-lg-2.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/3.svg', alt='')    
      .col-lg-10.my-3
        p(data-aos="fade-down") Para poder construir el plan de bienestar, es necesario tener claro el norte de las acciones a desarrollar. Una forma de reconocer las actividades que se ejecutarán, se fundamenta a través del plan estratégico planteado por la compañía; sin embargo, también es necesario realizar una investigación a nivel interno, para llevar a cabo un diagnóstico con la población trabajadora. Es así como las técnicas de investigación, permiten identificar un problema y recolectar información y datos para construir un plan de acción, según los hallazgos encontrados.     

    p(data-aos="fade-down").mb-5 Principalmente existen dos tipos de técnicas de investigación: 

    .row.justify-content-center.align-items-start.mb-4
      .col-lg-8.my-3 
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg6")
          .row.justify-content-center.align-items-center(titulo="Cuantitativas")
            .col-10
              p Se caracterizan por ser instrumentos o encuestas estandarizadas, están construidas de forma cerrada y arrojan información numérica y medible (datos). Esta técnica es utilizada cuando el objetivo es obtener información a través de la Escala de #[em Likert] (conformada por preguntas concretas y de elección múltiple que se responden con facilidad, y que originan datos sencillos de interpretar por procedimientos estadísticos), y así poder analizar el insumo obtenido para construir el programa de bienestar y determinar el plan de acción. Una característica sumamente importante es la objetividad del proceso, porque el resultado final es la interpretación de los datos.
          .row.justify-content-center.align-items-center(titulo="Cualitativas ")
            .col-10
              p Su objetivo es indagar a profundidad y conocer el problema de raíz a través de la exploración. Se podrá realizar a través de la observación, grupos focales, entrevistas, encuestas abiertas (descriptivas) o estudios de casos. Para este caso, el resultado final se fundamenta en comentarios o interpretaciones del evaluador, quien construirá un informe para poder determinar el plan de acción. Debido a que una persona interfiere en la construcción de los hallazgos, hay un ítem sumamente importante que es la subjetividad que tiene el documento final, por lo cual es necesario que la persona que desarrolle el proceso se encuentre capacitada para hacerlo y tenga el conocimiento y la claridad necesarios sobre el proceso.             
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/4.svg', alt='')  

    .row.justify-content-center.align-items-start.mb-4          
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/5.png', alt='')    
      .col-lg-8.my-3 
        p(data-aos="fade-down") Es necesario precisar que ambas metodologías deben apuntar a diagnosticar el clima laboral: cómo se sienten los colaboradores, para poder, de esta manera, construir el plan de bienestar al final del resultado. Por este motivo, las preguntas (sean cerradas o abiertas), deben permitir, al concluir, construir el plan de bienestar; es importante tener un norte claro, según el tipo de compañía, porque llegar a hacer preguntas o indagar sin un objetivo esclarecido, no será funcional y los colaboradores podrán perder confianza en el proceso.   
        .cajon.color-primario.p-4.mb-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Indicar que una técnica es mejor que la otra no es posible, porque ambas son complementarias y necesarias. Mientras que una se realiza a escala, abordando mayor población, de forma sistemática y precisa, la otra permite profundizar, generando confianza con los colaboradores, para obtener información desde su sentir o su percepción. Al final, lo que debe suceder es que, cuando se tengan ambos informes, deben coincidir con puntos en común, para construir un único plan de acción.

    .bg1 
      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-10.up(data-aos="fade-left")
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/7.png')})`}"
            )
            .bloque-texto-g__texto.p-4.py-5
              p.mb-0 Luego, establecer una metodología para analizar los diferentes resultados, permite tener un norte al momento de su interpretación y, por ende, en los planes de acción que se establezcan, orientado en este caso a la investigación que se desarrolle para construir el plan de bienestar. Será de suma importancia el planteamiento de la situación problema y contemplar todas sus partes y elementos para poder generar un análisis de forma global. 

      p(data-aos="fade-down").mb-5 El cómo desarrollarlo va a depender de porqué fue planteado inicialmente. A continuación, se describen algunos tipos de análisis de la información:
      img.img-a.img-t.mb-5(data-aos="zoom-in")(src='@/assets/curso/temas/8.svg', alt='')    

      .row.justify-content-center.align-items-start.mb-4           
        .col-lg-2.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/9.svg', alt='')    
        .col-lg-10.my-3
          p(data-aos="fade-down") Una vez que se ha seleccionado el cómo se va a analizar la información, también es importante definir las unidades de análisis; para el caso del entendimiento del plan de bienestar, se hace referencia a quiénes participarán en el diagnóstico que se desarrollará y que serán las personas objetivo que se van a evaluar. La decisión de cuáles, dependerá de la estrategia de la compañía y el momento cultural por el cual se encuentre atravesando la organización. 
      p(data-aos="fade-down").mb-5 La técnica para llegar a adquirir la información puede variar y, como se ha mencionado anteriormente, su elección dependerá de la necesidad y el uso que se requiera. Algunas de estas técnicas son: 

      .row.justify-content-center.align-items-center    
        .col-lg-12.up
          SlyderF.custom.mb-5(columnas="col-lg-4 col-md-4")(data-aos="fade-left")
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/10.svg", alt="alt").img100.m-auto
              .text-center
                h4.mb-3 La observación 
                p.mb-0 Es reconocida por la manera en que se registran comportamientos o conductas, de forma sistemática y confiable.       
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/11.svg", alt="alt").img100.m-auto
              .text-center
                h4.mb-3 La entrevista 
                p.mb-0 Es la técnica que permite acceder a los datos, a través de una conversación, haciendo uso de un instrumento semiestructurado. 
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/12.svg", alt="alt").img100.m-auto
              .text-center
                h4.mb-3 Grupos focales 
                p.mb-0 Es una conversación que se lleva a cabo con varias personas al mismo tiempo, la cual tiene como objetivo conocer actitudes y opiniones sobre una situación en particular.  
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/13.svg", alt="alt").img100.m-auto
              .text-center
                h4.mb-3 La encuesta 
                p.mb-0 Su objetivo es el de obtener datos con mayor alcance, de forma simultánea, a varias personas. Se utilizan preguntas cerradas y bajo respuestas de escala tipo #[em Likert].

    p(data-aos="fade-down").mb-5 Es importante, en este tema, entender los siguientes conceptos:

    .row.justify-content-center.align-items-start.mb-4 
      .col-lg-8.up.my-3
        TabsA.color-acento-contenido.mb-5(data-aos="fade-left")
          .tarjeta.color-acento-contenido--borde.p-4(titulo="Fiabilidad")
            .row.justify-content-center.align-items-start
              .col-lg-12
                p Realizar todo el ejercicio de investigación, a través del tipo de análisis y técnica implementada, debe garantizar el resultado del concepto de fiabilidad. Una forma de validar si los instrumentos aplicados, son fidedignos o no, es utilizar el mismo instrumento, en el momento exacto, a un grupo con condiciones socioculturales similares y, por tal razón, los resultados deberían mantener una tendencia. Es decir, si se determina realizar una investigación a un grupo de líderes, para una organización ubicada en la misma zona geográfica y con las mismas condiciones laborales (siempre que no haya ningún factor que los altere), los resultados deberían ser muy parecidos.  
          .tarjeta.color-acento-contenido--borde.p-4(titulo="Validez")
            .row.justify-content-center.align-items-start
              .col-lg-12
                p Se refiere al grado en que un instrumento, realmente mide lo que se pretende medir. Este concepto se divide en validez de contenido, construcción y criterio. Como lo indican Prieto y Delgado (2010), la validez de criterio es la correlación entre las puntuaciones del test y las puntuaciones del criterio. Para el caso de validez de contenido, hace referencia a la justificación que dice que, los ítems para medir el criterio, son una muestra representativa del contenido a evaluar. Y para el caso de construcción, indica que no se podrá justificar la calidad de las medidas, si los ítems no representan de forma suficiente, las diferentes facetas de las manifestaciones del constructo.                  
      .col-lg-4.up.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/14.png', alt='')

    .row.justify-content-center.align-items-start.mb-4           
      .col-lg-2.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/3.svg', alt='')    
      .col-lg-10.my-3
        p(data-aos="fade-down") Es de suma importancia, después de reconocer la metodología de análisis de información, tener claro hacia dónde apunta la estrategia y cómo está compuesta. En este sentido, primero es necesario reconocer qué significa estrategia organizacional; para entenderlo de una manera sencilla y práctica, se refiere a ese mapa o plan que tiene la empresa para alcanzar sus metas y objetivos, incluyendo los recursos, la tecnología, las personas, el presupuesto, analizando la competencia y el valor agregado, que se pretenden brindar. 

    p(data-aos="fade-down").mb-5 Dentro de sus características se puede resaltar que la estrategia debe ser:

    .row.justify-content-center.align-items-center    
      .col-lg-12.up
        SlyderF.custom.mb-5(columnas="col-lg-4 col-md-4")(data-aos="fade-left")
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/16.svg", alt="alt").img100.m-auto
            .text-center
              h4.mb-3 Medible 
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/17.svg", alt="alt").img100.m-auto
            .text-center
              h4.mb-3 Realista 
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/18.svg", alt="alt").img100.m-auto
            .text-center
              h4.mb-3 Coherente con la organización 
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/19.svg", alt="alt").img100.m-auto
            .text-center
              h4.mb-3 Impactar a todos los procesos
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/20.svg", alt="alt").img100.m-auto
            .text-center
              h4.mb-3 Específica 
    .row.justify-content-center.align-items-start.mb-4          
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/20.png', alt='')    
      .col-lg-8.my-3 
        p(data-aos="fade-down") Es así como en cualquier proyecto, actividad o plan de trabajo que se vaya a realizar en una organización, es necesario que se encuentre alineado con la estrategia organizacional, para garantizar que cada acción apunte a lograr las diferentes metas establecidas. La estrategia, por lo general, es planteada a mediano plazo (2-5 años), sin embargo, es necesario estar monitoreando sus avances y validar qué modificaciones se deben ir ajustando para garantizar el cumplimiento 
        .cajon.color-primario.p-4.mb-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 También es importante que la estrategia sea comunicada y entendida por todos los miembros de la organización, sin importar rol o cargo; esta será la única manera para llegar a su cumplimiento. Es necesario entender que construir la estrategia será un documento que posiblemente se convierta en misión, visión, objetivos, pero garantizar que se cumpla, dependerá de las actividades que ejecuten día a día los colaboradores.
        p(data-aos="fade-down") Dentro del concepto de estrategia, se podrán encontrar algunas clasificaciones o tipos, dependiendo de la literatura y el enfoque que se le quiera dar. 

    p(data-aos="fade-down").mb-5 A continuación, se expondrán algunas de estas clasificaciones:  

    ImagenInfograficaC.color-acento-botones.mb-5(data-aos="zoom-in")
      template(v-slot:imagen)
        figure
          img.img-a.img-t(src='@/assets/curso/temas/21.svg', alt='')

      .tarjeta.color-primario.p-3(x="50%" y="32%" numero="+")
        p.mb-0 Consiste en seleccionar un nicho del mercado y ser especialista y líder en el mismo. Un ejemplo podría ser una marca de ropa deportiva, para atletas de alto rendimiento.  
      .tarjeta.color-primario.p-3(x="58%" y="44%" numero="+")
        p.mb-0 Cuenta con un objetivo, y se aplica cuando la empresa pretende expandirse, ya sea en ventas, cantidad de clientes, de productos o de servicios. Un ejemplo podría ser una empresa de venta de celulares, que decide innovar al incluir, en el portafolio, relojes inteligentes.   
      .tarjeta.color-primario.p-3(x="55%" y="63%" numero="+")
        p.mb-0 Hace referencia a cuando una compañía plantea su diferencia competitiva en el precio del producto, ofreciendo el más barato del mercado.    
      .tarjeta.color-primario.p-3(x="45%" y="63%" numero="+")
        p.mb-0 Se aplica con más frecuencia, cuando se desea reducir el personal, los productos o los servicios, o terminar o agrupar áreas de la organización; es decir, se alinea con un cambio organizacional. 
      .tarjeta.color-primario.p-3(x="42%" y="44%" numero="+")
        p.mb-0 Hace referencia a la estrategia que determina cada proceso, de acuerdo con la estrategia macro planteada. Es decir, la estrategia de logística, de producción, de recursos humanos, financiera, de #[em marketing], entre otros.                                                     
</template>

<script>
import ImagenInfograficaC from '../components/ImagenInfograficaC.vue'
export default {
  name: 'Tema1',
  components: {
    ImagenInfograficaC,
  },
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
