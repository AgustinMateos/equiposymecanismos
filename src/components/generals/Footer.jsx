import Link from "next/link";
import React from "react";

const Footer = ({}) => {
  return (
    <footer className="w-full flex flex-col bg-[black]">
      <div className="flex gap-[25px] w-full justify-start items-center">
        <div className="w-[20%] flex flex-col justify-center items-center">
          <div>
            <p>Logo</p>
          </div>
          <div>
            <p>Slogan</p>
          </div>
        </div>
        <div className="flex gap-[10px] justify-center items-center w-[60%]">
          <div>
            <ul>
              <li>Menu 1</li>
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Menu 2</li>
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul>
          </div>
        </div>
        <div>
          <h4>Redes</h4>
          <ul className="flex gap-[5px] justfy-center items-center">
            <li>Red 1</li>
            <li>Red 2</li>
            <li>Red 3</li>
            <li>Red 4</li>
          </ul>
        </div>
      </div>
      <div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
