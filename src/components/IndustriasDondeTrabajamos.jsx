"use client";
import React, { useEffect, useRef, useState } from "react";

export default function IndustriasDondeTrabajamos({
  sectionTitle,
  spanTitle,
  data,
  closureText,
}) {
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

  console.log("DATA: ", data);

  return (
    <>
      <h3 className="px-10 sm:px-20 xl:px-40 2xl:px-60 w-full text-left font-bold mb-2 text-2xl sm:text-3xl text-[black]">
        {sectionTitle} <span className="text-[#3066BE]">{spanTitle}</span>
      </h3>
      <section
        ref={sectionRef}
        className="w-full flex justify-center items-center py-10 sm:px-20 px-10 2xl:px-60 xl:px-40 bg-[#3066BE]"
      >
        <div className="w-full h-full flex flex-col justify-start items-start py-10">
          <div className="w-full flex flex-col md:flex-row sm:gap-[15px] gap-[5px] justify-between items-start mb-10">
            {data.map((item, i) => (
              <div
                className={`md:w-[30%] w-full flex flex-col justify-start items-start text-white mb-10 ${
                  isVisible ? "fade-in" : "opacity-0"
                }`}
                key={item.id}
                style={{ animationDelay: `${i * 0.2}s` }} 
              >
                <div className="flex justify-center gap-[5px] items-center mb-5">
                  <img
                    className="w-[30px] h-[30px] mr-5"
                    src="/icons/Industrias/industrias-like-icon.png"
                    alt=""
                  />
                  <h4 className="w-full h-full text-left font-bold text-[18px]">
                    {item.title}
                  </h4>
                </div>
                <p className="w-full text-left text-[14px] text-black">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          {/* <div className="w-full flex justify-center items-center">
            <p className="w-[60%] text-center">{closureText}</p>
          </div> */}
        </div>
      </section>
    </>
  );
}