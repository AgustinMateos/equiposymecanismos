//Local Components
import PrimerComponente from "@/components/PrimerComponente";

import SolucionesGrales from "@/components/SolucionesGrales";
import TratamientosHogar from "@/components/TratamientosHogar";
import TratamientosIndustria from "@/components/TratamientosIndustria";
import SobreNosotros from "@/components/SobreNosotros";
import PreguntasFrecuentesComponent from "@/components/PreguntasFrecuentesComponent";
import DondeEncontrarnos from "@/components/DondeEncontrarnos";

import HistoriaComponent from "@/components/HistoriaComponent";
import ProductosComponent from "@/components/ProductosComponent";
import ProblemasEnHogar from "@/components/ProblemasEnHogar";
import Link from "next/link";
import IndustriasDondeTrabajamos from "@/components/IndustriasDondeTrabajamos";
import Slider from "@/components/Slider";
import montserrat from "./fonts/fonts";

//Imagenes

//Data
{
  /*--Soluciones Grales Data*/
}
const solucionesGrales = [
  {
    id: 1,
    icon: "/icons/solucionesGenerales/1.png",
    title: "Acumulación de sarro",
    text: "Protegé tus cañerías y electrodomésticos de obstrucciones y daños por sarro.",
    link: "",
  },
  {
    id: 2,
    icon: "/icons/solucionesGenerales/2.png",
    title: "Exceso de cloro",
    text: "Eliminá el olor y sabor a cloro para un agua más pura y saludable.",
    link: "",
  },
  {
    id: 3,
    icon: "/icons/solucionesGenerales/3.png",
    title: "Contaminantes y toxinas",
    text: "Agua libre de arsénico, metales pesados y otras sustancias nocivas.",
    link: "",
  },
  {
    id: 4,
    icon: "/icons/solucionesGenerales/4.png",
    title: "Turbidez y partículas",
    text: "Disfrutá de agua cristalina eliminando sedimentos y partículas en suspensión.",
    link: "",
  },
  {
    id: 5,
    icon: "/icons/solucionesGenerales/5.png",
    title: "Bacterias",
    text: "Eliminá bacterias y asegurá agua segura para todos los usos.",
    link: "",
  },
];
{
  /*--Preguntas Frecuentes Data--*/
}

const preguntasFrecuentesData = [
  {
    id: 1,
    pregunta: "¿Qué es el sarro en el agua?",
    respuesta:
      "El calcio y el magnesio presentes en el agua, se unen (carbonatacion) y provocan la formación de fijaciones, roturas y deterioro de las cañerias y gritería.",
  },
  {
    id: 2,
    pregunta: "¿Qué daños provoca a la salud consumir agua dura o sarrosa?",
    respuesta:
      "El sarro del agua puede crear cálculos en el riñón.También provoca daños en nuestra dentadura, debido a la proliferación de bacterias presentes en el.",
  },
  {
    id: 3,
    pregunta: "¿Por qué instalar un ablandador de agua?",
    respuesta:
      "El ablandador de agua por resinas de intercambio, es el único sistema capaz de retirar Calcio y Magnesio del agua, en tiempo real y en grandes caudales. Eso garantiza la provisión de agua totalmente blanda, con ausencia de Calcio,Magnesio y Hierro.",
  },
  {
    id: 4,
    pregunta: "¿Qué modelo de ablandador me conviene comprar?",
    respuesta:
      "Nuestros vendedores técnicos podrán asesorarte acerca del equipo ideal, considerando la prestación requerida y el tipo de agua a tratar.",
  },
  {
    id: 5,
    pregunta:
      "¿Cuál es la diferencia entre la Sal de Polifosfato y el Ablandador de agua?",
    respuesta:
      "Las sales de polifosfato actuan como un pasivamente químico para calmar la acción de esos minerales nocivos. En cambio el Ablandador de agua, elimina por secuestro los minerales agresivos antes de su ingreso a tu instalación.",
  },
  {
    id: 6,
    pregunta: "¿Cómo puedo abonar mi compra?",
    respuesta:
      "Podes abonar por depósito bancario, transferencia directa o efectivo al retirar tu producto.",
  },
  {
    id: 7,
    pregunta: "¿Pueden enviar mi compra a domicilio?",
    respuesta:
      "Enviamos por ViaCargo a todo el pais,  tanto a domicilio, sucursal ViaCargo o a terminal de ómnibus más cercana.",
  },
  {
    id: 8,
    pregunta: "¿El arsénico es malo para mi salud?",
    respuesta:
      "Las aguas de perforación de nuestro país, pueden mostrar contenidos altos de Arsénico y otora metales pesados. El cuerpo humano no tiene la capacidad de eliminar esos contaminantes, por lo cual, su ingesta prolongada puede derivar en tumores de diferente tipo, enfermedades de la piel y problemas neurológicos. ( Ver HACRE ).Sus máximos permitidos en agua potable figuran en el Código Alimentario Argentino ( Ley 18.284 )",
  },
];

const productosDestacados = [
  {
    id: 1,
    image: "/images/productosDestacados/ablandador-de-agua.jpg",
    title: "Ablandadores de agua",
    path: "/productos/ablandadores-automaticos-de-agua",
  },
  {
    id: 2,
    image: "/images/Productos/valvula-de-control-para-ablandamiento.png",
    title: "Válvulas de control",
    path: "/productos/valvula-de-control-para-ablandamiento",
  },
  {
    id: 3,
    image:
      "/images/Productos/tanques-de-plastico-reforzado-con-fibra-de-vidrio.png",
    title: "Tanques PRFV",
    path: "/productos/tanques-con-plastico-reforzado-con-fibra-de-vidrio",
  },
  {
    id: 4,
    image: "/images/Productos/portamembranas-de-4-de-agua-dulce.png",
    title: 'Portamembranas de 4"- Agua dulce',
    path: "/productos/portamembranas-de-4-agua-dulce",
  },
  {
    id: 5,
    image: "/images/Productos/bomba-dosificadora-automatica.png",
    title: "Bombas Dosificadoras automáticas",
    path: "/productos/bombas-dosificadoras-automaticas",
  },
  {
    id: 6,
    image: "/images/Productos/carcasa.jpg",
    title: "Carcasas",
    path: "/productos/carcasas",
  },
  {
    id: 7,
    image: "/images/Productos/filtro-bolsa-inox.png",
    title: "Filtro bolsa Inox",
    path: "/productos/filtro-bolsa-inox",
  },
  // {
  //   id: 8,
  //   image: "/images/productosDestacados/purificador-de-agua-sobremesada.png",
  //   title: "Purificador sobremesada",
  //   path: "/productos/purificador-sobremesada",
  // },
  {
    id: 9,
    image: "/images/productosDestacados/boya-antisarro.jpeg",
    title: "Boya Antisarro",
    path: "/productos/boya-antisarro",
  },
];

const diferencialesDeLaEmpresa = [
  {
    id: 1,
    icon: "/icons/diferencialesDeServicio/importacion-directa-icono.png",
    title: "Importación directa",
    text: "Ofrecemos productos a precios competitivos, sin intermediarios, garantizando el precio más bajo del mercado.",
  },
  {
    id: 2,
    icon: "/icons/diferencialesDeServicio/equipo-capacitado-icono.png",
    title: "Profesionales capacitados",
    text: "Nuestro equipo está formado por expertos altamente capacitados por el INTI, lo que respalda nuestra experiencia y compromiso con la calidad.",
  },
  {
    id: 3,
    icon: "/icons/diferencialesDeServicio/atencion-personalizada-icono.png",
    title: "Atención personalizada",
    text: "Nos preocupamos por entender las necesidades de cada cliente para ofrecer la mejor solución, adaptada a sus requerimientos específicos.",
  },
  {
    id: 4,
    icon: "/icons/diferencialesDeServicio/equipos-con-garantia-icono.png",
    title: "Equipos con garantía",
    text: "Todos nuestros productos están respaldados por garantía, asegurando calidad y tranquilidad en cada compra.",
  },
];
const problematicas = [
  {
    id: 1,
    icon: "",
    title: "Rotura de cañerías y accesorios",
    text: "Evitá costosas reparaciones y daños en tus instalaciones con soluciones que protegen tu sistema hidráulico.",
    productosRelacionados: ["Boya Antisarro", "Carcasas"],
  },
  {
    id: 2,
    icon: "",
    title: "Obstrucción de cañerias",
    text: "Decile adiós a la acumulación de sarro que afecta el rendimiento de tus equipos y tuberías.",
    productosRelacionados: ["Ablandador de agua", "Sal de Polifosfato"],
  },
  {
    id: 3,
    icon: "",
    title: "Baja de presión",
    text: "Recuperá el flujo constante de agua con sistemas que optimizan la presión y mejoran el rendimiento en toda tu instalación.",
    productosRelacionados: [],
  },
];

const industrias = [
  {
    id: 1,
    title: "Industria Alimentaria",
    text: "Mejoramos la calidad del agua utilizada en procesos de producción, garantizando estándares higiénicos y eficiencia en equipos. Trabajamos con empresas lacteas para refriferar los intercambiadores de calor en los procesos productivos y también en la inyección de plásticos.",
  },
  {
    id: 2,
    title: "Sistemas de Calefacción y Climatización",
    text: "Prevenimos la formación de incrustaciones en calderas de todo tipo y sistemas de climatización, asegurando un funcionamiento óptimo y ahorro energético.",
  },
  // {
  //   id: 3,
  //   title: "Tratamiento de Aguas Residuales",
  //   text: "Facilitamos la eliminación de impurezas, contribuyendo a procesos más eficientes y sostenibles.",
  // },
];

const productos = [
  {
    id: 1,
    imagen: "/images/Productos/carcasa.jpg",
    categoria: "Filtración",
    subcategoria: "Carcasas",
    titulo: "Carcasas",
    linkHref: "/productos/carcasas",
  },
  {
    id: 2,
    imagen: "/images/Productos/carbon-activado-en-bloque.png",
    categoria: "Filtración",
    subcategoria: "Carbón Activado",
    titulo: "Carbón activado en bloque",
    linkHref: "/productos/carbon-activado-en-bloque",
  },
  {
    id: 3,
    imagen: "/images/Productos/cartuchos-de-polipropileno.png",
    categoria: "Filtración",
    subcategoria: "Cartuchos de polipropileno",
    titulo: "Cartuchos de polipropieno",
    linkHref: "/productos/cartuchos-de-polipropileno",
  },
  {
    id: 4,
    imagen: "/images/Productos/filtro-bolsa-inox.png",
    categoria: "Filtración",
    subcategoria: "Filtro bolsa Inox",
    titulo: "Filtro bolsa Inox",
    linkHref: "/productos/filtro-bolsa-inox",
  },
  // {
  //   id: 5,
  //   imagen: "/images/Productos/carcasa.jpg",
  //   categoria: "Filtración",
  //   subcategoria: "Carbón activado granular in-line",
  //   titulo: "Carbón activado granular in-line",
  //   linkHref: "/productos/carbon-activado-granular-in-line",
  // },
  {
    id: 6,
    imagen: "/images/Productos/cartuchos-recargables.png",
    categoria: "Filtración",
    subcategoria: "Cartuchos recargables",
    titulo: "Cartuchos recargables",
    linkHref: "/productos/cartuchos-recargables",
  },
  {
    id: 8,
    imagen: "/images/Productos/repuestos-para-carcasas.png",
    categoria: "Filtración",
    subcategoria: "Repuesto carcasas",
    titulo: "Repuestos de carcasas",
    linkHref: "/productos/respuestos-para-carcasas",
  },
  {
    id: 9,
    imagen: "/images/Productos/ablandador-automatico-de-agua.png",
    categoria: "Ablandadores de agua",
    subcategoria: "Ablandadores automáticos de agua",
    titulo: "Ablandadores automáticos de agua",
    linkHref: "/productos/ablandadores-automaticos-de-agua",
  },
  {
    id: 10,
    imagen: "/images/Productos/valvula-de-control-para-ablandamiento.png",
    categoria: "Válvulas de control",
    subcategoria: "Válvula de control para ablandamiento",
    titulo: "Válvula de control para ablandamiento",
    linkHref: "/productos/valvula-de-control-para-ablandamiento",
  },
  {
    id: 11,
    imagen: "/images/Productos/valvula-de-control-para-filtracion.png",
    categoria: "Válvulas de control",
    subcategoria: "Válvula de control para filtración",
    titulo: "Válvula de control para filtración",
    linkHref: "/productos/valvulas-de-control-para-filtracion",
  },
  {
    id: 12,
    imagen: "/images/Productos/tobera.png",
    categoria: "Válvulas de control",
    subcategoria: "Distribuidores y Toberas",
    titulo: "Distribuidores/Toberas",
    linkHref: "/productos/toberas",
  },
  {
    id: 13,
    imagen: "/images/Productos/valvula-de-salmuera.png",
    categoria: "Válvulas de control",
    subcategoria: "Válvulas de salmuera",
    titulo: "Válvulas de salmuera",
    linkHref: "/productos/valvulas-de-salmuera",
  },
  {
    id: 14,
    imagen: "/images/Productos/repuestos-para-valvula-f116.png",
    categoria: "Válvulas de control",
    subcategoria: "Repuestos para válvula F116",
    titulo: "Repuestos para válvula F116",
    linkHref: "/productos/repuestos-para-valvula-f116",
  },
  {
    id: 15,
    imagen: "/images/Productos/repuestos-para-valvula-f63.png",
    categoria: "Válvulas de control",
    subcategoria: "Repuestos para válvula F63",
    titulo: "Repuestos para válvula F63",
    linkHref: "/productos/repuestos-para-valvula-f63",
  },
  {
    id: 16,
    imagen:
      "/images/Productos/tanques-de-plastico-reforzado-con-fibra-de-vidrio.png",
    categoria: "Tanques",
    subcategoria: "Tanques de plástico reforzado con fibra de vidrio (PRFV)",
    titulo: "Tanques de plástico reforzado con fibra de vidrio (PRFV)",
    linkHref: "/productos/tanques-con-plastico-reforzado-con-fibra-de-vidrio",
  },
  {
    id: 17,
    imagen: "/images/Productos/repuestos-base-de-tanque.png",
    categoria: "Tanques",
    subcategoria: "Repuestos base de tanque",
    titulo: "Repuestos base de tanque",
    linkHref: "/productos/repuestos-base-de-tanque",
  },
  {
    id: 18,
    imagen: "/images/Productos/tanque-de-rotomoldeo.png",
    categoria: "Tanques",
    subcategoria: "Tanque de Rotomoldeo",
    titulo: "Tanques de Rotomoldeo",
    linkHref: "/productos/tanques-de-rotomoldeo",
  },
  {
    id: 19,
    imagen: "/images/Productos/tanque-salero.png",
    categoria: "Tanques",
    subcategoria: "Tanque Salero",
    titulo: "Tanque Salero",
    linkHref: "/productos/tanque-salero",
  },
  {
    id: 20,
    imagen: "/images/Productos/resinas-de-intercambio-ionico.png",
    categoria: "Resinas y lechos",
    subcategoria: "Resinas de intercambio  iónico",
    titulo: "Resinas de intercambio iónico",
    linkHref: "/productos/resinas-de-intercambio-ionico",
  },
  {
    id: 21,
    imagen: "/images/Productos/carbon-activado-zeolita-y-green-sand.png",
    categoria: "Resinas y lechos",
    subcategoria: "Carbón activado, Zeolita y Greensand",
    titulo: "Carbón activado, Zeolita y Green Sand",
    linkHref: "/productos/carbon-activado-zeolita-y-green-sand",
  },
  {
    id: 22,
    imagen: "/images/Productos/portamembranas-de-4-de-agua-dulce.png",
    categoria: "Membranas y portamembranas",
    subcategoria: 'Portamembranas de 4"- Agua dulce',
    titulo: 'Portamembranas de 4"- Agua dulce',
    linkHref: "/productos/portamembranas-de-4-agua-dulce",
  },
  {
    id: 23,
    imagen: "/images/Productos/portamembranas-de-4-de-agua-de-mar.png",
    categoria: "Membranas y portamembranas",
    subcategoria: 'Portamembranas de 4"-Agua de Mar',
    titulo: 'Portamembranas de 4"-Agua de Mar',
    linkHref: "/productos/portamembranas-de-4-de-agua-de-mar",
  },
  {
    id: 24,
    imagen: "/images/Productos/portamembranas-de-8-de-agua-dulce.png",
    categoria: "Membranas y portamembranas",
    subcategoria: 'Portamembranas de 8"- Agua dulce',
    titulo: 'Portamembranas de 8"- Agua dulce',
    linkHref: "/productos/portamembranas-de-8-agua-dulce",
  },
  {
    id: 25,
    imagen: "/images/Productos/repuestos-tapas-de-portamembranas.png",
    categoria: "Membranas y portamembranas",
    subcategoria: "Repuestos tapas de poratmembranas",
    titulo: "Repuestos tapas de poratmembranas",
    linkHref: "/productos/repuestos-tapas-de-portamembranas",
  },
  {
    id: 26,
    imagen: "/images/Productos/membranas-de-ultrafiltracion.png",
    categoria: "Membranas y portamembranas",
    subcategoria: "Membranas de ultrafiltración",
    titulo: "Membranas de ultrafiltración",
    linkHref: "/productos/membranas-de-ultrafiltracion",
  },
  {
    id: 27,
    imagen: "/images/Productos/membrana-ro-lg.png",
    categoria: "Membranas y portamembranas",
    subcategoria: "Membranas Ro LG",
    titulo: "Membranas Ro LG",
    linkHref: "/productos/membranas-ro-lg",
  },
  {
    id: 28,
    imagen: "/images/Productos/caudalimetro-en-linea.png",
    categoria: "Instrumentación y control",
    subcategoria: "Caudalímetros en línea",
    titulo: "Caudalímetros en línea",
    linkHref: "/productos/caudalimetros-en-linea",
  },
  {
    id: 29,
    imagen: "/images/Productos/caudalimetro-para-panel.png",
    categoria: "Instrumentación y control",
    subcategoria: "Caudalímetros para panel",
    titulo: "Caudalímetros para panel",
    linkHref: "/productos/caudalimetros-para-panel",
  },
  {
    id: 30,
    imagen: "/images/Productos/manometro-posterior.png",
    categoria: "Instrumentación y control",
    subcategoria: "Manómetro posterior",
    titulo: "Manómetro posterior",
    linkHref: "/productos/manometro-posterior",
  },
  {
    id: 31,
    imagen: "/images/Productos/manometro-inferior.png",
    categoria: "Instrumentación y control",
    subcategoria: "Manómetro inferior",
    titulo: "Manómetro inferior",
    linkHref: "/productos/manometro-inferior",
  },
  {
    id: 32,
    imagen: "/images/Productos/electrovalvula-de-acero-inoxidable.png",
    categoria: "Instrumentación y control",
    subcategoria: "Electroválvula de acero inoxidable",
    titulo: "Electroválvulas de acero inoxidable",
    linkHref: "/productos/electrovalvulas-de-acero-inoxidable",
  },
  {
    id: 33,
    imagen: "/images/Productos/flow-switch.png",
    categoria: "Instrumentación y control",
    subcategoria: "Flow switch",
    titulo: "Flow switch",
    linkHref: "/productos/flow-switch",
  },
  {
    id: 34,
    imagen: "/images/Productos/presostatos-y-switch-press.png",
    categoria: "Instrumentación y control",
    subcategoria: "Presostatos y switch press",
    titulo: "Presostatos y switch press",
    linkHref: "/productos/presostatus-y-switch-press",
  },
  {
    id: 35,
    imagen: "/images/Productos/valvula-reductora-de-presion.png",
    categoria: "Instrumentación y control",
    subcategoria: "Válvulas reductoras de presión(Inoxidable)",
    titulo: "Válvulas reductoras de presión(Inoxidable)",
    linkHref: "/productos/valvulas-reductoras-de-presion",
  },
  {
    id: 36,
    imagen: "/images/Productos/conducimetro.png",
    categoria: "Instrumentación y control",
    subcategoria: "Conductímetros",
    titulo: "Conductímetros",
    linkHref: "/productos/conductimetros",
  },
  {
    id: 37,
    imagen: "/images/Productos/ph-metro-portatil.png",
    categoria: "Instrumentación y control",
    subcategoria: "pH-metro portátil",
    titulo: "pH-metro portátil",
    linkHref: "/productos/ph-metro-portatil",
  },
  {
    id: 38,
    imagen: "/images/Productos/controlador-para-osmosis-inversa.png",
    categoria: "Instrumentación y control",
    subcategoria: "Controladores para ósmosis inversa",
    titulo: "Controladores para ósmosis inversa",
    linkHref: "/productos/controladores-para-osmosis-inversa",
  },
  {
    id: 39,
    imagen: "/images/Productos/controlador-para-ultrafiltracion.png",
    categoria: "Instrumentación y control",
    subcategoria: "Controladores para ultra filtración",
    titulo: "Controladores para ultra filtración",
    linkHref: "/productos/controladores-para-ultrafiltracion",
  },
  {
    id: 40,
    imagen: "/images/Productos/bomba-dosificadora-automatica.png",
    categoria: "Dosificación",
    subcategoria: "Bombas Dosificadoras automáticas",
    titulo: "Bombas Dosificadoras automáticas",
    linkHref: "/productos/bombas-dosificadoras-automaticas",
  },
  {
    id: 41,
    imagen: "/images/Productos/repuestos-bomba-dosificadora.png",
    categoria: "Dosificación",
    subcategoria: "Repuestos bomba dosificadora",
    titulo: "Repuestos bomba dosificadora",
    linkHref: "/productos/repuestos-bombas-dosificadoras",
  },
  {
    id: 42,
    imagen: "/images/Productos/antiincrustante-eversafe-11.png",
    categoria: "Soluciones Químicas",
    subcategoria: "Antiincrustante Eversafe 11",
    titulo: "Antiincrustante Eversafe 11",
    linkHref: "/productos/antiincrustante-eversafe-11",
  },
  {
    id: 43,
    imagen: "/images/Productos/esterilizadores-uv.png",
    categoria: "Desinfección",
    subcategoria: "Esterilizadores UV",
    titulo: "Esterilizadores UV",
    linkHref: "/productos/esterilizadores-uv",
  },
  {
    id: 44,
    imagen: "/images/Productos/repuestos-de-esterilizadores-uv.png",
    categoria: "Desinfección",
    subcategoria: "Repuestos de esterilizadores UV",
    titulo: "Repuestos de esterilizadores UV",
    linkHref: "/productos/repuestos-de-esterilizadores-uv",
  },
  {
    id: 45,
    imagen: "/images/Productos/generador-de-ozono.png",
    categoria: "Desinfección",
    subcategoria: "Generadores de Ozono O3",
    titulo: "Generadores de Ozono O3",
    linkHref: "/productos/generadores-de-ozono",
  },
  {
    id: 46,
    imagen: "/images/Productos/manguera.png",
    categoria: "Conectores y mangueras",
    subcategoria: "Mangueras",
    titulo: "Mangueras",
    linkHref: "/productos/mangueras",
  },
  {
    id: 47,
    imagen: "/images/Productos/conectores-rapidos.png",
    categoria: "Conectores y mangueras",
    subcategoria: "Conectores rápidos",
    titulo: "Conectores rápidos",
    linkHref: "/productos/conectores-rapidos",
  },
  {
    id: 48,
    imagen: "/images/Productos/equipo-cerrado-sin-tanque.png",
    categoria: "Osmosis Inversa",
    subcategoria: "Equipo cerrado sin tanque",
    titulo: "Equipo cerrado sin tanque",
    linkHref: "/productos/equipo-cerrado-sin-tanque",
  },
  {
    id: 49,
    imagen: "/images/Productos/equipo-abierto-con-tanque.jpeg",
    categoria: "Osmosis Inversa",
    subcategoria: "Equipo abierto con tanque",
    titulo: "Equipo abierto con tanque",
    linkHref: "/productos/equipo-abierto-con-tanque",
  },
  {
    id: 50,
    imagen: "/images/Productos/polifosfato-de-sodio.jpeg",
    categoria: "Ablandadores de agua",
    subcategoria: "Polifosfato de sodio",
    titulo: "Polifosfato de sodio",
    linkHref: "/productos/polifosfato-de-sodio",
  },
];
export default function Home() {
  return (
    <div>
      <PrimerComponente />
      <SolucionesGrales solutions={solucionesGrales} />
      <div
        id="productos-destacados"
        className="w-full flex flex-col justify-center items-center pt-10 pb-0 mb-20"
      >
        <h2
          className={`${montserrat.className} home-primerComponente-title font-bold w-full text-center text-3xl text-[#60AFFF]`}
        >
          Productos Destacados
        </h2>
        <Slider cards={productosDestacados} />
        <div className="w-full flex justify-center items-center px-10">
          <button
            className={`btn-principal ${montserrat.className} w-[75%] h-[50px] sm:w-[50%] lg:w-[25%] home-productosDestacados-generalBtn`}
          >
            <Link
              className="w-full h-full flex justify-center items-center "
              href="/#productos"
            >
              Todos nuestros productos
            </Link>
          </button>
        </div>
      </div>

      {/* <TratamientosHogar
        titulo="Soluciones eficientes para el tratamiento de agua en el hogar"
        subtitulo="Agua pura para tu hogar, bienestar para tu familia"
        texto="Nos enfocamos en ofrecerte productos que mejoran la calidad del agua que consumís a diario. Nuestro tratamiento de agua no solo elimina impurezas, sino que también cuida de tu salud, optimiza el rendimiento de tus electrodomésticos y reduce tus costos. Porque el agua pura no es solo una necesidad, es un bienestar para vos y los tuyos."
        btnText="Nuestras soluciones"
      /> */}
      <ProblemasEnHogar items={problematicas} />
      <TratamientosIndustria
        titulo="Protege tus equipos y optimiza tu producción"
        subtitulo="Soluciones industriales para agua de calidad"
        texto="Ofrecemos soluciones para evitar la acumulación de sarro, mejorar la eficiencia de tus sistemas de agua y reducir los costos de mantenimiento. Protegé tus equipos industriales de la corrosión y obstrucciones, asegurando un flujo constante y optimizando tu producción."
        btnText="Nuestras soluciones"
      />
      <IndustriasDondeTrabajamos
        sectionTitle=" Industrias dónde "
        spanTitle="trabajamos"
        data={industrias}
        closureText="La implementación de polifosfato de sodio en tus procesos industriales representa una inversión en eficiencia, ahorro y durabilidad. Contáctanos para conocer cómo podemos ayudarte a optimizar tus operaciones."
      />
      <ProductosComponent
        title="Productos para "
        spanTitle="la industria"
        subTitle="Encontrá la solución que "
        spanSubtitle="estás buscando,"
        data={productos}
      />
      {/* <PolifosfatoComponent /> */}
      <HistoriaComponent items={diferencialesDeLaEmpresa} />
      <SobreNosotros
        titulo="Elegís Confianza."
        texto="Con más de 30 años en el mercado estamos listos para ayudarte a mejorar la calidad del agua que usas, ofreciéndote confianza, tecnología y un servicio profesional que te respalda en todo momento. Nos dedicamos exclusivamente al tratamiento de agua, lo que nos ha permitido convertirnos en especialistas del sector, brindando atención cercana y adaptada a las necesidades de cada cliente."
      />
      <PreguntasFrecuentesComponent faqs={preguntasFrecuentesData} />
      <div className="flex justify-center items-center w-full">
        <DondeEncontrarnos />
      </div>

      <Link
        href="https://wa.me/541158085500"
        className="fixed bottom-5 right-5 flex justify-center items-center"
      >
        <img
          className="w-[55px] h-[55px] whatsapp-icon"
          src="/icons/whatsapp-icon.webp"
          alt=""
        />
      </Link>
    </div>
  );
}
