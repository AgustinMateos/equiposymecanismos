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
import ProductosDeHogar from "@/components/ProductosDeHogar";
import ProblemasEnHogar from "@/components/ProblemasEnHogar";
import Link from "next/link";
import IndustriasDondeTrabajamos from "@/components/IndustriasDondeTrabajamos";
import Slider from "@/components/Slider";

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
    text: "Eliminá bacterias y asegurá agua segura para toda tu familia.",
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
const problematicasDelHogar = [
  {
    id: 1,
    icon: "",
    title: "Rotura de cañerías",
    text: "Evitá costosas reparaciones y daños en tus instalaciones con soluciones que protegen tu sistema hidráulico:",
    productosRelacionados: ["Producto 1", "Producto 2", "Producto 3"],
  },
  {
    id: 2,
    icon: "",
    title: "Manchas Blancas en las Tuberías",
    text: "Decile adiós a las manchas y la acumulación de sarro que afectan el rendimiento de tus equipos y tuberías.",
    productosRelacionados: ["Producto 1", "Producto 2", "Producto 3"],
  },
  {
    id: 3,
    icon: "",
    title: "Baja de presión",
    text: "Recuperá el flujo constante de agua con sistemas que optimizan la presión y mejoran el rendimiento en todo tu hogar o industria.",
    productosRelacionados: ["Producto 1", "Producto 2", "Producto 3"],
  },
];

const industrias = [
  {
    id: 1,
    title: "Industria Alimentaria",
    text: "Mejoramos la calidad del agua utilizada en procesos de producción, garantizando estándares higiénicos y eficiencia en equipos.",
  },
  {
    id: 2,
    title: "Sistemas de Calefacción y Climatización",
    text: "Prevenimos la formación de incrustaciones en calderas y sistemas de climatización, asegurando un funcionamiento óptimo y ahorro energético.",
  },
  {
    id: 3,
    title: "Tratamiento de Aguas Residuales",
    text: "Facilitamos la eliminación de impurezas, contribuyendo a procesos más eficientes y sostenibles.",
  },
];

const productosHogar = [
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
    imagen: "/images/Productos/carcasa.jpg",
    categoria: "Filtración",
    subcategoria: "Carbón Activado",
    titulo: "Carbón activado en bloque",
    linkHref: "/productos/carbon-activado",
  },
  {
    id: 3,
    imagen: "/images/Productos/carcasa.jpg",
    categoria: "Filtración",
    subcategoria: "Cartuchos de polipropileno",
    titulo: "Cartuchos de polipropieno",
    linkHref: "/productos/cartuchos-de-polipropileno",
  },
  {
    id: 4,
    imagen: "/images/Productos/carcasa.jpg",
    categoria: "Filtración",
    subcategoria: "Filtro bolsa Inox",
    titulo: "Filtro bolsa Inox",
    linkHref: "/productos/filtro-bolsa-inox",
  },
  {
    id: 5,
    imagen: "/images/Productos/carcasa.jpg",
    categoria: "Filtración",
    subcategoria: "Respuestos de filtro bolsa",
    titulo: "Respuestos de filtro bolsa",
    linkHref: "/productos/respuestos-de-filtro-bolsa",
  },
  {
    id: 6,
    imagen: "/images/Productos/carcasa.jpg",
    categoria: "Filtración",
    subcategoria: "Carbón activado granular in-line",
    titulo: "Carbón activado granular in-line",
    linkHref: "/productos/carbon-activado-granular-in-line",
  },
  {
    id: 7,
    imagen: "/images/Productos/carcasa.jpg",
    categoria: "Filtración",
    subcategoria: "Cartuchos recargables",
    titulo: "Cartuchos recargables",
    linkHref: "/productos/cartuchos-recargables",
  },
  {
    id: 8,
    imagen: "/images/Productos/carcasa.jpg",
    categoria: "Filtración",
    subcategoria: "Repuesto carcasas",
    titulo: "Repuestos de carcasas",
    linkHref: "respuesto-de-carcasas",
  },
  {
    id: 9,
    imagen: "/images/Productos/carcasa.jpg",
    categoria: "Ablandadores de agua",
    subcategoria: "Ablandadores automáticos de agua",
    titulo: "Ablandadores automáticos de agua",
    linkHref: "/productos/ablandadores-automaticos-de-agua",
  },
  {
    id: 10,
    imagen: "/images/Productos/carcasa.jpg",
    categoria: "Válvulas",
    subcategoria: "Válvula de control para ablandamiento",
    titulo: "Válvula de control para ablandamiento",
    linkHref: "/productos/válvulas-de-control-para-ablandamiento",
  },
  {
    id: 11,
    imagen: "/images/Productos/carcasa.jpg",
    categoria: "Válvulas",
    subcategoria: "Distribuidores y Toberas",
    titulo: "Distribuidores/Toberas",
    linkHref: "/productos/distribuidores-y-toberas",
  },
  {
    id: 12,
    imagen: "/images/Productos/carcasa.jpg",
    categoria: "Válvulas",
    subcategoria: "Repuestos para válvula F116",
    titulo: "Repuestos para válvula F116",
    linkHref: "/productos/repuestos-para-valvula-f116",
  },
  {
    id: 13,
    imagen: "/images/Productos/carcasa.jpg",
    categoria: "Válvulas",
    subcategoria: "Repuestos para válvula F63",
    titulo: "Repuestos para válvula F63",
    linkHref: "/productos/válvulas-de-control-para-ablandamiento",
  },
  {
    id: 14,
    imagen: "/images/Productos/carcasa.jpg",
    categoria: "Válvulas",
    subcategoria: "Válvula de control para ablandamiento",
    titulo: "Válvula de control para ablandamiento",
    linkHref: "/productos/válvulas-de-control-para-ablandamiento",
  },
  {
    id: 15,
    imagen: "/images/Productos/carcasa.jpg",
    categoria: "Válvulas",
    subcategoria: "Válvula de control para ablandamiento",
    titulo: "Válvula de control para ablandamiento",
    linkHref: "/productos/válvulas-de-control-para-ablandamiento",
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
      <Slider />
      <TratamientosHogar
        titulo="Soluciones eficientes para el tratamiento de agua en el hogar"
        subtitulo="Agua pura para tu hogar, bienestar para tu familia"
        texto="Nos enfocamos en ofrecerte productos que mejoran la calidad del agua que consumís a diario. Nuestro tratamiento de agua no solo elimina impurezas, sino que también cuida de tu salud, optimiza el rendimiento de tus electrodomésticos y reduce tus costos. Porque el agua pura no es solo una necesidad, es un bienestar para vos y los tuyos."
        btnText="Ver línea hogar"
      />
      <ProblemasEnHogar items={problematicasDelHogar} />
      <ProductosDeHogar
        title="Productos para el "
        spanTitle="hogar"
        subTitle="Encontrá la solución que "
        spanSubtitle="estas buscando"
        data={productosHogar}
      />
      <TratamientosIndustria
        titulo="Protege tus equipos y optimiza tu producción"
        subtitulo="Soluciones industriales para agua de calidad"
        texto="Ofrecemos soluciones para evitar la acumulación de sarro, mejorar la eficiencia de tus sistemas de agua y reducir los costos de mantenimiento. Protegé tus equipos industriales de la corrosión y obstrucciones, asegurando un flujo constante y optimizando tu producción."
        btnText="Ver línea hogar"
      />
      <ProductosDeHogar
        title="Productos para la "
        spanTitle="industria"
        subTitle="Optimiza tus "
        spanSubtitle="procesos industriales"
        data={productosHogar}
      />
      <IndustriasDondeTrabajamos
        sectionTitle=" Industrias dónde "
        spanTitle="trabajamos"
        data={industrias}
        closureText="La implementación de polifosfato de sodio en tus procesos industriales representa una inversión en eficiencia, ahorro y durabilidad. Contáctanos para conocer cómo podemos ayudarte a optimizar tus operaciones."
      />
      <SobreNosotros
        titulo="Elegís Confianza."
        texto="Con más de 30 años en el mercado estamos listos para ayudarte a mejorar la calidad del agua en tu hogar o industria, ofreciéndote confianza, tecnología y un servicio profesional que te respalda en todo momento. Nos dedicamos exclusivamente al tratamiento de agua, lo que nos ha permitido convertirnos en especialistas del sector, brindando atención cercana y adaptada a las necesidades de cada cliente."
      />
      <HistoriaComponent items={diferencialesDeLaEmpresa} />
      <PreguntasFrecuentesComponent faqs={preguntasFrecuentesData} />
      <DondeEncontrarnos />
      <Link
        href="https://wa.me/5731335678"
        className="fixed bottom-5 right-5 flex justify-center items-center"
      >
        <img
          className="w-[55px] h-[55px] whatsapp-icon"
          src="/icons/whatsapp-icon.webp"
          alt=""
        />
      </Link>
      <Footer />
    </div>
  );
}
