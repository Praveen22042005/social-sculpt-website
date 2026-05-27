"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface Photo {
  id: number;
  src: string;
  title: string;
  category: string;
  desc: string;
  // desc1: string;
  // desc2: string;
}

const photos: Photo[] = [
  {
    id: 1,
    src: "/slider/customer.png",
    title: "Customer",
    category: "Rural Service",
    desc: "We know your audience before you ask"
  },
  {
    id: 2,
    src: "/slider/creativity.png",
    title: "Creativity",
    category: "Rural Service",
    desc: "Ideas that stop the scroll, every time"
  },
  {
    id: 3,
    src: "/slider/change.png",
    title: "Change",
    category: "Rural Service",
    desc: "Trends shift. We shift faster",
  },

  {
    id: 5,
    src: "/slider/consistency.png",
    title: "Consistency",
    category: "Rural Service",
    desc: "Always present. Always relevant",
  },
  {
    id: 6,
    src: "/slider/culture.png",
    title: "Culture",
    category: "Rural Service",
    desc: "We speak their language - literally and culturally",
  },
  {
    id: 4,
    src: "/slider/communication.png",
    title: "Communication",
    category: "Rural Service",
    desc: "No fluff. Just messaging that lands",
  },

];



export default function Gallery() {
  const targetRef = useRef<HTMLDivElement | null>(null);

  function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
      const media = window.matchMedia(query);

      const listener = () => setMatches(media.matches);

      listener();

      media.addEventListener("change", listener);
      return () => media.removeEventListener("change", listener);
    }, [query]);

    return matches;
  }

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const isSmallMobile = useMediaQuery("(max-width: 430px)");
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const issmallesktop = useMediaQuery("(max-width: 1300px)");
  const isDesktop = useMediaQuery("(min-width: 1300px)");

  let end = "-65%";

  if (isSmallMobile) end = "-490%";
  else if (isMobile) end = "-400%";
  else if (isTablet) end = "-250%";
  else if (issmallesktop) end = "-80%";
  else if (isDesktop) end = "-75%";

  const x = useTransform(scrollYProgress, [0, 1], ["0%", end]);

  return (
    <section
      ref={targetRef}
      className="relative h-[200vh] vertical-scroll-section"
    >
      <div className="sticky top-0 overflow-hidden flex flex-col justify-center">

        <div className="container mb-17">
          <div className="vertical-scroll-container">
            <span className="text-[#d97706] font-bold tracking-widest uppercase text-xs md:text-sm mb-2 block" data-aos="fade-left">
              Our 6 C's
            </span>
            <h2 className="common-heading text-2xl md:text-4xl" data-aos="fade-right">
              We thrive on the  <br className="break-tag" /><span className="contact-back-span">6 C’s of marketing brilliance</span>
            </h2>
          </div>
        </div>

        <div className="verticalscroll-card-parent">
          <motion.div
            style={{ x }}
            className="flex gap-6 md:gap-12 px-6 md:px-16"
          >
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="group relative h-[55vh] w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[25vw] shrink-0 overflow-hidden rounded-3xl bg-zinc-900 shadow-xl transition-transform duration-500"
              >
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-cover transition-transform duration-700 "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="mb-2">{photo.title}</h3>
                  <p>{photo.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}