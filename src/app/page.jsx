//Local Components
import PrimerComponente from "@/components/PrimerComponente";
import Navbar from "@/components/generals/Navbar";
import SolucionesGrales from "@/components/SolucionesGrales";
import TratamientosHogar from "@/components/TratamientosHogar";
import TratamientosIndustria from "@/components/TratamientosIndustria";
import SobreNosotros from "@/components/SobreNosotros";
import PreguntasFrecuentesComponent from "@/components/PreguntasFrecuentesComponent";
import DondeEncontrarnos from "@/components/DondeEncontrarnos";
import Footer from "@/components/generals/Footer";
import HistoriaComponent from "@/components/HistoriaComponent";
import ProductosDeHogar from "@/components/generals/ProductosDeHogar";

//Imagenes

//Data
{
  /*--Soluciones Grales Data*/
}
const solucionesGrales = [
  {
    id: 1,
    icon: "/icons/solucionesGenerales/1.png",
    title: "CLORO",
    text: "Evitas el olor y sabor del cloro en tus bebidas y alimentos.",
    link: "",
  },
  {
    id: 2,
    icon: "/icons/solucionesGenerales/2.png",
    title: "SARRO",
    text: "Grifería, cañerias y artefactos libres de manchas e incrustaciones.",
    link: "",
  },
  {
    id: 3,
    icon: "/icons/solucionesGenerales/3.png",
    title: "TOXINAS",
    text: "Tener la tranquilidad de consumir agua sin ars´nico y otro tóxicos.",
    link: "",
  },
  {
    id: 4,
    icon: "/icons/solucionesGenerales/4.png",
    title: "SUCIEDAD",
    text: "La ventaja de contar con agua cristalina desde el tanque hacia todas las canillas.",
    link: "",
  },
  {
    id: 5,
    icon: "/icons/solucionesGenerales/5.png",
    title: "BACTERIAS",
    text: "Agua segura para utilzar libre de microorganismo.",
    link: "",
  },
];
{
  /*--Preguntas Frecuentes Data--*/
}
const preguntasFrecuentesData = [
  {
    id: 1,
    pregunta: "¿Cómo funciona la publicidad móvil en vehículos?",
    respuesta: "Lorem Ipsum",
  },
  {
    id: 2,
    pregunta: "¿Cómo puedo medir el éxito de mi campaña en su plataforma?",
    respuesta: "Lorem Ipsum",
  },
  {
    id: 3,
    pregunta:
      "¿Puedo personalizar la ubicación y el público objetivo de mi anuncio?",
    respuesta: "Lorem Ipsum",
  },
  {
    id: 4,
    pregunta:
      "¿Cuál es el proceso para comenzar a anunciarse con su plataforma?",
    respuesta: "Lorem Ipsums",
  },
];

const productosDestacados = [
  {
    id: 1,
    imagen: "",
    titulo: "Titulo Producto 1",
    subtitulo: "Subtitulo Producto 1",
    link: "Link Producto 1",
  },
  {
    id: 2,
    imagen: "",
    titulo: "Titulo Producto 1",
    subtitulo: "Subtitulo Producto 1",
    link: "Link Producto 1",
  },
  {
    id: 3,
    imagen: "",
    titulo: "Titulo Producto 1",
    subtitulo: "Subtitulo Producto 1",
    link: "Link Producto 1",
  },
  {
    id: 4,
    imagen: "",
    titulo: "Titulo Producto 1",
    subtitulo: "Subtitulo Producto 1",
    link: "Link Producto 1",
  },
  {
    id: 5,
    imagen: "",
    titulo: "Titulo Producto 1",
    subtitulo: "Subtitulo Producto 1",
    link: "Link Producto 1",
  },
  {
    id: 6,
    imagen: "",
    titulo: "Titulo Producto 1",
    subtitulo: "Subtitulo Producto 1",
    link: "Link Producto 1",
  },
  {
    id: 7,
    imagen: "",
    titulo: "Titulo Producto 1",
    subtitulo: "Subtitulo Producto 1",
    link: "Link Producto 1",
  },
  {
    id: 8,
    imagen: "",
    titulo: "Titulo Producto 1",
    subtitulo: "Subtitulo Producto 1",
    link: "Link Producto 1",
  },
  {
    id: 9,
    imagen: "",
    titulo: "Titulo Producto 1",
    subtitulo: "Subtitulo Producto 1",
    link: "Link Producto 1",
  },
  {
    id: 10,
    imagen: "",
    titulo: "Titulo Producto 1",
    subtitulo: "Subtitulo Producto 1",
    link: "Link Producto 1",
  },
  {
    id: 11,
    imagen: "",
    titulo: "Titulo Producto 1",
    subtitulo: "Subtitulo Producto 1",
    link: "Link Producto 1",
  },
  {
    id: 12,
    imagen: "",
    titulo: "Titulo Producto 1",
    subtitulo: "Subtitulo Producto 1",
    link: "Link Producto 1",
  },
];

const diferencialesDeLaEmpresa = [
  {
    id: 1,
    icon: "",
    title: "Diferencial 1",
    text: "Aca iria la descripción del diferencial 1",
  },
  {
    id: 2,
    icon: "",
    title: "Diferencial 2",
    text: "Aca iria la descripción del diferencial 2",
  },
  {
    id: 3,
    icon: "",
    title: "Diferencial 3",
    text: "Aca iria la descripción del diferencial 3",
  },
];
export default function Home() {
  return (
    <div>
      <Navbar />
      <PrimerComponente />
      <SolucionesGrales solutions={solucionesGrales} />
      {/* <div className="w-full px-10 py-10 h-[450px]">
        <ProductsSlider data={productosDestacados} />
      </div> */}

      <TratamientosHogar
        titulo="Tratamiento y Purificación de agua para tu hogar "
        subtitulo="Ingeniería en aguas para el hogar"
        texto="Ofrecemos una gama variada de productos para brindarte más
              seguridad, ahorro y salud para vos y tu familia gracias al
              tratamiento y purificación del agua en tu hogar"
        btnText="Ver línea hogar"
      />
      <ProductosDeHogar />
      <TratamientosIndustria
        titulo="Tratamiento y Purificación de Agua para la Industria "
        subtitulo="Ingeniería en aguas para la industria"
        texto="Ofrecemos una gama variada de productos para brindarte más
              seguridad, ahorro y salud para vos y tu familia gracias al
              tratamiento y purificación del agua en tu hogar"
        btnText="Ver línea hogar"
      />
      <SobreNosotros
        titulo="Elegís Confianza."
        texto="Verellen Hnos construye hogares únicos en toda la Argentina hace más de 7 décadas, brindando una experiencia completa desde el diseño personalizado hasta una gestión llave en mano. Somos especialistas en hormigón premoldeado y casas Estilo ANVERS. Con nuestro equipo de arquitectos vamos a hacer realidad tu proyecto. Podes visitarnos en nuestro Showroom en Capilla del Señor."
      />
      <HistoriaComponent items={diferencialesDeLaEmpresa} />
      <PreguntasFrecuentesComponent faqs={preguntasFrecuentesData} />
      <DondeEncontrarnos />
      <Footer />
    </div>
  );
}
