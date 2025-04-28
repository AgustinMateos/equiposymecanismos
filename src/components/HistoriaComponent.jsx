"use client";
import montserrat from "@/app/fonts/fonts";
import React, { useEffect, useRef, useState } from "react";

export default function HistoriaComponent({ items }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="mision"
      ref={sectionRef}
      className="relative bg-[#60AFFF] flex flex-col justify-center items-center px-10 sm:px-20 2xl:px-60 py-20 2xl:py-30 text-white overflow-hidden h-[1100px] md:h-[680px]"
    >
      {/* Bottom Wave */}
      <svg
        className="absolute bottom-0 left-0 w-full rotate-180"
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
      >
        <path
          d="M0,30 C150,90 300,0 450,60 C600,120 750,30 900,90 C1050,150 1200,60 1350,90 L1440,120 L1440,0 L0,0 Z"
          fill="#ffffff"
        />
      </svg>

      {/* Content */}
      <h3
        className={`w-full text-center mb-10 text-3xl ${montserrat.className} font-bold`}
      >
        ¿Por qué elegirnos?
      </h3>

      <div className="w-full flex flex-col md:flex-row justify-center items-center sm:gap-[30px] gap-[15px]">
        {items.map((item, i) => (
          <div
            key={item.id}
            className={`flex flex-col justify-center items-center ${
              montserrat.className
            } ${isVisible ? "fade-in" : "opacity-0"}`}
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            <img className="w-[50px] h-[50px] mb-5" src={item.icon} alt="" />
            <h4 className="w-full text-center text-[18px] font-bold mb-5">
              {item.title}
            </h4>
            <p className="md:w-full sm:w-[60%] w-[85%] text-center text-[12px] text-black">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* Top Wave */}
      <svg
        className="absolute top-0 left-0 w-full rotate-0"
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
      >
        <path
          d="M0,30 C150,90 300,0 450,60 C600,120 750,30 900,90 C1050,150 1200,60 1350,90 L1440,120 L1440,0 L0,0 Z"
          fill="#ffffff"
        />
      </svg>
    </section>
  );
}
// export default function HistoriaComponent({ items }) {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const [entry] = entries;
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.disconnect();
//         }
//       },
//       {
//         threshold: 0.1,
//       }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <section
//       id="mision"
//       ref={sectionRef}
//       className="bg-[#60AFFF] flex flex-col justify-center items-center px-10 sm:px-20 2xl:px-60 py-20 2xl:py-30 text-[white]"
//     >
//       <h3
//         className={`w-full text-center mb-10 text-3xl ${montserrat.className} font-bold"`}
//       >
//         ¿Por qué elegirnos?
//       </h3>
//       <div className="w-full flex flex-col md:flex-row justify-center items-center sm:gap-[30px] gap-[15px]">
//         {items.map((item, i) => (
//           <div
//             key={item.id}
//             className={`${
//               montserrat.className
//             } flex flex-col justify-center items-center ${
//               isVisible ? "fade-in" : "opacity-0"
//             }`}
//             style={{ animationDelay: `${i * 0.2}s` }}
//           >
//             <img className="w-[50px] h-[50px] mb-5" src={item.icon} alt="" />
//             <h4 className="w-full text-center text-[18px] font-bold mb-5">
//               {item.title}
//             </h4>
//             <p className="md:w-full sm:w-[60%] w-[85%] text-center text-[12px] text-black">
//               {item.text}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
