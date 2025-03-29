"use client";
import Link from "next/link";
import React from "react";

export default function ProductSliderCard({ imagen, titulo, subtitulo, link }) {
  return (
    <div className="p-4 rounded-md producto-destacado-card">
      <div className="flex flex-col">
        <img src={imagen} alt="" />
        <h3>{titulo}</h3>
        <h4>{subtitulo}</h4>
        <Link href={link}>Detalles</Link>
      </div>
    </div>
  );
}
