"use client";

import Carousel from "../components/ui/carousel";
export default function Collections() {
  const slideData = [
    {
      title: "Skin Cares",
      button: "Explore Component",
      src: "/pic1.png",
    },
    {
      title: "Moisturizing lotions",
      button: "Explore Component",
      src: "/pic2.png",
    },
    {
      title: "Hair creamss",
      button: "Explore Component",
      src: "/pic3.png",
    },
    {
      title: "Shampoos ",
      button: "",
      src: "/pic4.png",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20 bg-bluec">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-third mb-2">
            Collections
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Care that makes you shine
          </h1>
        </div>
      <Carousel slides={slideData} />
    </div>
  );
}