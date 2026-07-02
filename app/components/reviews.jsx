"use client"

import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const reviews = [
  {
    name: "Amira Belkacem",
    role: "Verified Buyer",
    initials: "AB",
    rating: 5,
    quote: "The quality completely exceeded what I expected for the price. Shipping was fast and everything arrived exactly as pictured.",
  },
  {
    name: "Sofia Martinez",
    role: "Verified Buyer",
    initials: "SM",
    rating: 5,
    quote: "My third order from Shiny Boutique and every single piece has been a favorite. Customer service is genuinely lovely too.",
  },
  {
    name: "Jade Thompson",
    role: "Verified Buyer",
    initials: "JT",
    rating: 4,
    quote: "Really happy with my purchase. The only reason it's not five stars is I wish there were more size options.",
  },
];

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`size-4 ${i < rating ? "fill-third" : "fill-muted"}`}
          viewBox="0 0 20 20"
        >
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1 1 5.8L10 14.9l-5.21 2.62 1-5.8-4.21-4.1 5.82-.85L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="bg-white">
      <div className="max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-third mb-2">
            Testimonials
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-bluec">
            Loved by our customers
          </h1>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="flex flex-col justify-between p-6 rounded-2xl bg-muted border border-bluec shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <Stars rating={review.rating} />
                <p className="mt-4 text-muted-foreground-2 leading-relaxed">
                  "{review.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-line-2">
                <div className="flex justify-center items-center size-10 rounded-full bg-third text-white text-sm font-semibold shrink-0">
                  {review.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground-2">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}