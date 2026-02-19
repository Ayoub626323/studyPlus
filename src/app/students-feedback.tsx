"use client";

import React, { useRef, useState } from "react";

const StarIcon = () => (
  <span className="inline-block size-6 shrink-0">
    <svg className="size-6 text-warning" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  </span>
);

const StarHalfIcon = () => (
  <span className="inline-block size-6 shrink-0">
    <svg className="size-6 text-warning" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77V2z" />
    </svg>
  </span>
);

const ArrowLeftIcon = () => (
  <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const FEEDBACKS = [
  {
    feedback:
      "Les professeurs sont excellents et l'approche pratique avec les exercices corrigés est très efficace pour assimiler les notions.",
    client: "Fatima Bennani",
    title: "Étudiante en CPGE @ Lycée Mohammed V",
    img: "https://cdn.flyonui.com/fy-assets/avatar/avatar-17.png",
    stars: 5,
    halfStar: false,
  },
  {
    feedback:
      "J'ai considérablement progressé grâce aux cours de soutien. J'ai réussi mes examens d'analyse et d'algèbre avec d'excellentes notes.",
    client: "Youssef El Amrani",
    title: "Étudiant @ FST - Marrakech",
    img: "https://cdn.flyonui.com/fy-assets/avatar/avatar-5.png",
    stars: 5,
    halfStar: true,
  },
  {
    feedback:
      "Les cours sont bien structurés et le suivi personnalisé m'a permis de consolider mes bases en maths et physique.",
    client: "Amal Idrissi",
    title: "Étudiante @ ENSA",
    img: "https://cdn.flyonui.com/fy-assets/avatar/avatar-3.png",
    stars: 5,
    halfStar: false,
  },
  {
    feedback:
      "CPGE Horizon m'a accompagné jusqu'à la réussite de mon concours. Une équipe à l'écoute et des cours de qualité.",
    client: "Karim Tazi",
    title: "Étudiant @ CPGE",
    img: "https://cdn.flyonui.com/fy-assets/avatar/avatar-12.png",
    stars: 5,
    halfStar: false,
  },
];

export function StudentsFeedback() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateScrollState = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollPrev(scrollLeft > 0);
    setCanScrollNext(scrollLeft < scrollWidth - clientWidth - 1);
  };

  const scroll = (direction: "prev" | "next") => {
    if (!carouselRef.current) return;
    const containerWidth = carouselRef.current.offsetWidth;
    const scrollAmount = Math.min(containerWidth * 0.8, 400);
    carouselRef.current.scrollBy({
      left: direction === "prev" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
    setTimeout(updateScrollState, 350);
  };

  React.useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          id="multi-slide"
          data-carousel='{ "loadingClasses": "opacity-0", "slidesQty": { "xs": 1, "md": 2 } }'
          className="relative flex w-full max-lg:flex-col gap-12 md:gap-16 lg:items-center lg:gap-24"
        >
          <div>
            <div className="space-y-4">
              <p className="text-primary text-sm font-medium uppercase">Témoignages</p>
              <h2 className="text-base-content text-2xl font-semibold md:text-3xl lg:text-4xl">
                Ce que disent nos étudiants
              </h2>
              <p className="text-base-content/80 text-xl">
                De la progression aux concours réussis, découvrez comment CPGE Horizon accompagne les étudiants.
              </p>
            </div>
            <div className="mt-10 flex gap-4">
              <button
                type="button"
                onClick={() => scroll("prev")}
                disabled={!canScrollPrev}
                className="btn btn-square btn-sm carousel-prev btn-primary carousel-disabled:opacity-100 carousel-disabled:btn-outline relative hover:text-white disabled:btn-outline disabled:opacity-70"
                aria-label="Précédent"
              >
                <ArrowLeftIcon />
              </button>
              <button
                type="button"
                onClick={() => scroll("next")}
                disabled={!canScrollNext}
                className="btn btn-square btn-sm carousel-next btn-primary carousel-disabled:opacity-100 carousel-disabled:btn-outline relative hover:text-white disabled:btn-outline disabled:opacity-70"
                aria-label="Suivant"
              >
                <ArrowRightIcon />
              </button>
            </div>
          </div>

          <div className="carousel rounded-box">
            <div
              ref={carouselRef}
              className="carousel-body flex gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-8"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {FEEDBACKS.map((item, idx) => (
                <div
                  key={idx}
                  className="carousel-slide shrink-0 min-w-[calc(100%-1.5rem)] md:min-w-[calc(50%-1rem)]"
                  style={{ scrollSnapAlign: "start" }}
                >
                  <div className="card card-bordered h-full w-full min-w-0 shadow-none transition-[border-color] duration-300 hover:border-primary">
                    <div className="card-body gap-5">
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="size-10 rounded-full overflow-hidden">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={item.img} alt={item.client} className="h-full w-full object-cover" />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-base-content font-medium">{item.client}</h4>
                          <p className="text-base-content/80 text-sm">{item.title}</p>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(item.stars)].map((_, i) =>
                          item.halfStar && i === item.stars - 1 ? (
                            <StarHalfIcon key={i} />
                          ) : (
                            <StarIcon key={i} />
                          )
                        )}
                      </div>
                      <p className="text-base-content/80">{item.feedback}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentsFeedback;
