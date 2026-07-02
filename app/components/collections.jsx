"use client";

import Carousel from "../components/ui/carousel";
import { useTranslation } from "react-i18next";

export default function Collections() {
  const { t } = useTranslation();

  const slideData = [
    {
      title: t("collections.slides.skinCare"),
      button: t("collections.exploreButton"),
      src: "/pic1.png",
    },
    {
      title: t("collections.slides.moisturizing"),
      button: t("collections.exploreButton"),
      src: "/pic2.png",
    },
    {
      title: t("collections.slides.hairCare"),
      button: t("collections.exploreButton"),
      src: "/pic3.png",
    },
    {
      title: t("collections.slides.shampoos"),
      button: "",
      src: "/pic4.png",
    },
  ];

  return (
    <div className="relative overflow-hidden w-full h-full py-20 bg-bluec">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-third mb-2">
            {t("collections.eyebrow")}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            {t("collections.title")}
          </h1>
        </div>
      <Carousel slides={slideData} />
    </div>
  );
}