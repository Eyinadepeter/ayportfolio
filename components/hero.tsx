"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Video Editor / MCR / Social Media Manager";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
              Hi, I'm <span className="text-primary">Ayomide</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-6 flex items-center">
              <span className="text-foreground">{text}</span>
              <span className="animate-blink ml-1 text-primary">|</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              I craft compelling video content, manage live broadcasts, and
              drive social media engagement. With a keen eye for detail, I
              ensure seamless editing and impactful digital presence.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </Button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-8">
              {[
                {
                  href: "https://youtube.com/@midephilips?si=zEOvcvwyfeTy6EgT",
                  icon: Youtube,
                },
                {
                  href: "https://youtube.com/@ytmidephilips?si=qfAYlIp_kDf2PVEI",
                  icon: Youtube,
                },
                {
                  href: "https://www.instagram.com/_midephilips",
                  icon: Instagram,
                },
                {
                  href: "https://x.com/_midephilips",
                  icon: Twitter,
                },
                {
                  href: "https://www.facebook.com/share/1HHNuFHkKm",
                  icon: Facebook,
                },
              ].map(({ href, icon: Icon }, i) => (
                <Button
                  key={i}
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-primary/10 transition"
                  asChild
                >
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    <Icon className="w-5 h-5 text-muted-foreground hover:text-primary transition" />
                  </a>
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative max-w-sm mx-auto w-full"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl border border-muted">
              <img
                src="/IMG_2859.PNG"
                alt="Ayomide"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <button
          onClick={() => scrollToSection("about")}
          className="animate-bounce p-2 rounded-full bg-muted hover:bg-muted-foreground/10 transition"
        >
          <ArrowRight className="h-6 w-6 rotate-90 text-muted-foreground" />
        </button>
      </div>
    </section>
  );
}
