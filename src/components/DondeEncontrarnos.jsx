import montserrat from "@/app/fonts/fonts";
import React from "react";

const DondeEncontrarnos = () => {
  return (
    <section
      id="dondeEncontrarnos"
      className="w-full flex flex-col justify-center items-center py-10 max-w-[1500px]"
    >
      <div className="w-[90%] flex justify-center items-center mb-5">
        <h3
          className={`font-bold w-full text-left text-4xl ${montserrat.className}`}
        >
          Dónde Encontrarnos
        </h3>
      </div>
      <div className="w-full flex justify-center items-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.55383558598!2d-58.47845052468313!3d-34.53953017297743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb6bb6097ee79%3A0x1759395203deb65d!2sAv.%20Gral.%20Paz%201106%20Piso%2016%20C%2C%20C1429%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1743158420636!5m2!1ses!2sar"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default DondeEncontrarnos;
