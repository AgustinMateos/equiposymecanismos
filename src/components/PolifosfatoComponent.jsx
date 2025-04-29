"use client";

import {
  Droplets,
  ShieldCheck,
  Heart,
  Wrench,
  CheckCircle,
  MapPin,
  ArrowRight,
  Info,
} from "lucide-react";
import Link from "next/link";

export default function PolifosfatoComponent() {
  return (
    <div className="w-full max-w-5xl mx-auto bg-white">
      {/* Encabezado */}
      <div className="w-full bg-transparent p-8 md:p-12 mb-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#60AFFF] text-center">
          Polifosfato de Sodio
        </h1>
        <p className="text-center mt-4 max-w-3xl mx-auto opacity-90 text-[#1B1B1B]">
          Solución efectiva para prevenir el sarro y la corrosión en sistemas de
          agua
        </p>
      </div>

      {/* Contenido principal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {/* ¿Qué es? */}
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#0077b6] hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-[#e6f3f8] p-3 rounded-full mr-4">
              <Droplets className="h-6 w-6 text-[#0077b6]" />
            </div>
            <h2 className="text-xl font-bold text-gray-800">
              ¿Qué es el Polifosfato de Sodio?
            </h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            El polifosfato de sodio es un compuesto químico soluble en agua,
            utilizado como agente secuestrante, es decir, que captura minerales
            como el calcio y el magnesio, responsables de la dureza del agua. Su
            aplicación principal en el tratamiento del agua es prevenir la
            formación de sarro y la corrosión en cañerías y electrodomésticos.
          </p>
        </div>

        {/* ¿Para qué sirve? */}
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#0096c7] hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-[#e6f3f8] p-3 rounded-full mr-4">
              <ShieldCheck className="h-6 w-6 text-[#0096c7]" />
            </div>
            <h2 className="text-xl font-bold text-gray-800">
              ¿Para qué sirve?
            </h2>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <span className="text-[#0096c7] mr-2">•</span>
              <span>
                <strong>Ablandamiento del agua:</strong> Reduce la dureza del
                agua al inactivar los minerales que producen sarro.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#0096c7] mr-2">•</span>
              <span>
                <strong>Prevención de incrustaciones:</strong> Protege cañerías,
                termotanques, calefones, calderas y electrodomésticos.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#0096c7] mr-2">•</span>
              <span>
                <strong>Protección contra la corrosión:</strong> Forma una capa
                protectora en el interior de las tuberías, alargando su vida
                útil.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#0096c7] mr-2">•</span>
              <span>
                <strong>Mejora la eficiencia:</strong> Al reducir la dureza,
                evita que los filtros se saturen prematuramente.
              </span>
            </li>
          </ul>
        </div>

        {/* Beneficios para la salud */}
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#00b4d8] hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-[#e6f3f8] p-3 rounded-full mr-4">
              <Heart className="h-6 w-6 text-[#00b4d8]" />
            </div>
            <h2 className="text-xl font-bold text-gray-800">
              Beneficios para la salud
            </h2>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <span className="text-[#00b4d8] mr-2">•</span>
              <span>
                Agua más segura para el consumo en sistemas domésticos e
                industriales.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#00b4d8] mr-2">•</span>
              <span>
                Previene la liberación de metales pesados (como plomo o cobre)
                desde las tuberías corroídas.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#00b4d8] mr-2">•</span>
              <span>
                Menor uso de productos químicos agresivos para la limpieza de
                sarro o incrustaciones.
              </span>
            </li>
          </ul>
        </div>

        {/* Modos de empleo */}
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#48cae4] hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-[#e6f3f8] p-3 rounded-full mr-4">
              <Wrench className="h-6 w-6 text-[#48cae4]" />
            </div>
            <h2 className="text-xl font-bold text-gray-800">Modos de empleo</h2>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <span className="text-[#48cae4] mr-2">•</span>
              <span>
                Se utiliza dentro de dosificadores o cartuchos instalados en la
                entrada de agua de la red, o directamente en sistemas de
                filtración.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#48cae4] mr-2">•</span>
              <span>
                Ideal para calderas, sistemas de calefacción, máquinas
                industriales, lavarropas, lavavajillas y redes domiciliarias.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#48cae4] mr-2">•</span>
              <span>
                El reemplazo del cartucho o recarga se recomienda cada 3 a 6
                meses según el uso y la dureza del agua.
              </span>
            </li>
          </ul>
        </div>

        {/* Ventajas */}
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#0077b6] hover:shadow-lg transition-shadow md:col-span-2">
          <div className="flex items-center mb-4">
            <div className="bg-[#e6f3f8] p-3 rounded-full mr-4">
              <CheckCircle className="h-6 w-6 text-[#0077b6]" />
            </div>
            <h2 className="text-xl font-bold text-gray-800">
              Ventajas de utilizar polifosfato de sodio
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-[#0077b6] mr-2 flex-shrink-0 mt-0.5" />
              <span>
                Previene el sarro sin necesidad de sal o electricidad.
              </span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-[#0077b6] mr-2 flex-shrink-0 mt-0.5" />
              <span>Es económico y fácil de instalar.</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-[#0077b6] mr-2 flex-shrink-0 mt-0.5" />
              <span>Compatible con otros sistemas de filtrado.</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-[#0077b6] mr-2 flex-shrink-0 mt-0.5" />
              <span>
                Prolonga la vida útil de electrodomésticos y cañerías.
              </span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-[#0077b6] mr-2 flex-shrink-0 mt-0.5" />
              <span>
                Mejora la eficiencia energética de sistemas de calefacción.
              </span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-[#0077b6] mr-2 flex-shrink-0 mt-0.5" />
              <span>No altera el sabor ni el olor del agua.</span>
            </div>
          </div>
        </div>

        {/* Recomendado para */}
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#0096c7] hover:shadow-lg transition-shadow md:col-span-2">
          <div className="flex items-center mb-4">
            <div className="bg-[#e6f3f8] p-3 rounded-full mr-4">
              <MapPin className="h-6 w-6 text-[#0096c7]" />
            </div>
            <h2 className="text-xl font-bold text-gray-800">
              Recomendado para
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-[#f0f9ff] p-4 rounded-lg text-center">
              <p className="font-medium text-gray-700">Viviendas familiares</p>
            </div>
            <div className="bg-[#f0f9ff] p-4 rounded-lg text-center">
              <p className="font-medium text-gray-700">
                Hoteles y cocinas industriales
              </p>
            </div>
            <div className="bg-[#f0f9ff] p-4 rounded-lg text-center">
              <p className="font-medium text-gray-700">
                Lavaderos, cervecerías, panaderías
              </p>
            </div>
            <div className="bg-[#f0f9ff] p-4 rounded-lg text-center">
              <p className="font-medium text-gray-700">
                Equipos industriales que requieren agua blanda
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 mb-8 flex flex-col md:flex-row justify-center gap-4 px-4">
        <Link
          href="https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20saber%20más%20acerca%20del%20Polifosfato%20de%20Sodio."
          className="btn-terciario flex justify-center items-center gap-[5px]"
        >
          <Info className="mr-2 h-5 w-5" />
          Solicitar información
        </Link>
        <Link
          href="https://wa.me/541158085500?text=¡Hola!%20Me%20encuentro%20interesado%20en%20el%20producto:%20Polifosfato%20de%20Sodio,%20cuál%20es%20el%20precio?%20Gracias."
          className="btn-principal comprar-ahora-link flex justify-center items-center gap-[5px]"
        >
          Comprar ahora
          <ArrowRight className="ml-2 h-5 w-5 comprar-ahora-arrow" />
        </Link>
      </div>

      {/* Nota informativa */}
      <div className="bg-[#f0f9ff] p-4 rounded-lg mx-4 mb-8 text-sm text-gray-600 text-center">
        <p>
          Para más información sobre nuestros productos de tratamiento de agua,
          no dude en contactarnos.
        </p>
      </div>
    </div>
  );
}
