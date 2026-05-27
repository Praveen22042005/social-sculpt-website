"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const productItems = [
    { title: "Personal Branding", link: "/services/personal-branding" },
    { title: "Growth Marketing", link: "/services/growth-marketing" },
    { title: "Consulting", link: "/services/consulting" },
  ];

  const OurIniatives = [
    { title: "Academy", link: "/academy" },
    // { title: "Podcast", link: "/podcast" },
    { title: "Digital marketing with ai ", link: "/digital-marketing-with-ai-course-chennai" },
    { title: "personal branding with ai ", link: "/digital-marketing-with-ai-course-chennai" },
    // { title: "Consulting", link: "/consulting" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/90 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur"
        : "bg-white"
        }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 ${isScrolled ? "py-7" : "py-7"
          }`}
      >
        <div className="flex items-center gap-3">
          <div className="flex  items-center justify-center">
            <a className="" href="/">
              <img src="/logos.png" alt="Logo" className="brand-logo shrink-0" />
            </a>
          </div>
        </div>

        <nav className="relative hidden items-center gap-8 text-sm font-semibold text-slate-700 lg:flex">

          <button className="text-lg hover:text-slate-900 cursor-pointer"><a href="/whoweare">About Us</a></button>

          <div className="group relative">

            <button className="flex items-center gap-2 text-lg text-slate-900 cursor-pointer">
              Services
              <svg viewBox="0 0 20 20" className="h-4 w-4 text-slate-400">
                <path
                  d="M5 7l5 5 5-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="pointer-events-none absolute left-1/2 top-full w-[300px] -translate-x-1/2 rounded-xl border border-slate-100 bg-white shadow-lg opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
              <div className="flex flex-col gap-2 p-4">
                {productItems.map((item, index) => (
                  <a
                    key={`${item.title}-${index}`}
                    href={item.link}
                    className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>


          </div>



          {/* <div className="group relative">

            <button className="flex items-center gap-2 text-lg text-slate-900 cursor-pointer">
              Academy
              <svg viewBox="0 0 20 20" className="h-4 w-4 text-slate-400">
                <path
                  d="M5 7l5 5 5-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>


            <div className="pointer-events-none absolute left-1/2 top-full w-[300px] -translate-x-1/2 rounded-xl border border-slate-100 bg-white shadow-lg opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
              <div className="flex flex-col gap-2 p-4">
                {OurIniatives.map((item, index) => (
                  <a
                    key={`${item.title}-${index}`}
                    href={item.link}
                    className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>


          </div> */}

          {/* <button className="text-lg hover:text-slate-900 cursor-pointer"><a href="/ss-academy">Academy</a></button> */}
          {/* <button className="text-lg hover:text-slate-900 cursor-pointer"><a href="/academy">Ai Academy</a></button> */}
          <button className="text-lg hover:text-slate-900 cursor-pointer"><a href="https://academy.socialsculpt.in/" target="_blank">Academy</a></button>


          <button className="text-lg hover:text-slate-900 cursor-pointer"><a href="/podcast">Podcast</a></button>
          <button className="text-lg hover:text-slate-900 cursor-pointer"><a href="/blog">Blog</a></button>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden items-center cursor-pointer gap-2 text-base font-semibold text-slate-700 hover:text-slate-900 lg:flex banner-button-cta">
            <a href="/contact-us">Contact Us</a>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-slate-300 hover:text-slate-900 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5">
              <path
                d={
                  isMenuOpen
                    ? "M6 6l12 12M18 6L6 18"
                    : "M4 7h16M4 12h16M4 17h16"
                }
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-slate-100 bg-white/95 transition-all duration-300 lg:hidden ${isMenuOpen ? "max-h-[620px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-3 text-sm font-semibold text-slate-700">
          <button className="flex items-center justify-between rounded-2xl px-3 py-3 text-left hover:bg-slate-50">

            <a
              key=""
              href="/whoweare"
            >
              About Us
            </a>
            <span className="text-lg">→</span>
          </button>

          <div className="rounded-2xl bg-slate-50 p-3">
            <p className="px-2 pb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Services
            </p>
            <div className="grid grid-cols-2 gap-2">
              {productItems.map((item, index) => (
                <button
                  key={`${item.title}-mobile-${index}`}
                  className="rounded-xl bg-white px-3 py-2 text-left text-sm font-semibold text-slate-900 shadow-[0_10px_20px_rgba(15,23,42,0.04)]"
                >
                  <a
                    key=""
                    href={`${item.link}`}
                  >
                    {item.title}
                  </a>
                </button>
              ))}
            </div>
          </div>

          <button className="flex items-center justify-between rounded-2xl px-3 py-3 text-left hover:bg-slate-50">
            <a
              key=""
              href="https://academy.socialsculpt.in/" target="_blank"
            >
              Academy
            </a>
            <span className="text-lg">→</span>
          </button>
          <button className="flex items-center justify-between rounded-2xl px-3 py-3 text-left hover:bg-slate-50">
            <a
              key=""
              href="/podcast"
            >
              Podcast
            </a>
            <span className="text-lg">→</span>
          </button>
          <button className="flex items-center justify-between rounded-2xl px-3 py-3 text-left hover:bg-slate-50">
            <a
              key=""
              href="/blog"
            >
              Blog
            </a>
            <span className="text-lg">→</span>
          </button>
          <button className="mt-2 flex items-center justify-between rounded-2xl border border-slate-200 px-3 py-3 text-left text-slate-900">
            <a
              key=""
              href="/contact-us"
            >
              Contact Us
            </a>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
