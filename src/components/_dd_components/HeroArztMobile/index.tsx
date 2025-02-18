"use client";
import Link from "next/link";
import Modal from "../../Modal";
import ModalContent from "../../Modalcontent";
import { useState, useEffect } from "react";
import modalConfig from "@/config/modalConfig.json";
import heroConfig from "@/config/heroConfigArzt.json";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Hero = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  useEffect(() => {
    const checkModalQueryParam = () => {
      const params = new URLSearchParams(window.location.search);
      const showModal = params.get("modal") === "true";
      setModalOpen(showModal);
    };

    if (modalConfig.isModalEnabled) {
      window.addEventListener("load", checkModalQueryParam);
      window.addEventListener("popstate", checkModalQueryParam);

      checkModalQueryParam();

      return () => {
        window.removeEventListener("load", checkModalQueryParam);
        window.removeEventListener("popstate", checkModalQueryParam);
      };
    }
  }, []);

  const handleSlideChange = (direction) => {
    if (direction === "left") {
      setCurrentSlide((prev) =>
        prev === 0 ? heroConfig.hero.testimonials.length - 1 : prev - 1
      );
    } else {
      setCurrentSlide((prev) =>
        prev === heroConfig.hero.testimonials.length - 1 ? 0 : prev + 1
      );
    }
  };

  const renderBackgroundMedia = () => {
    if (!heroConfig.hero.showBackground) return null;

    if (heroConfig.hero.backgroundMedia?.type === "video") {
      return (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 object-cover w-full h-full"
          style={{ top: "1rem" }}
        >
          <source src={heroConfig.hero.backgroundMedia.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
    if (heroConfig.hero.backgroundMedia?.type === "image") {
      return (
        <div className="relative" style={{ marginTop: "1rem" }}>
          <img
            src={heroConfig.hero.backgroundMedia.src}
            alt="Background"
            className="object-cover w-full h-64 sm:h-auto"
          />
        </div>
      );
    }

    return null;
  };

  return (
    <>
      <section className="relative overflow-hidden bg-white dark:bg-black">
        {renderBackgroundMedia()}
        {heroConfig.hero.showBackground && (
          <div className="absolute inset-0 bg-white opacity-10 dark:bg-black dark:opacity-70"></div>
        )}

        {/* Button slightly lower */}
        <div className="absolute left-4 z-20" style={{ top: "6rem" }}>
          <Link
            href="https://calendly.com/doc-dialog/30min"
            className={`${heroConfig.hero.callToAction.onlineBookingButton.class} w-full pt-3 py-3 text-lg dark:bg-gray-700 dark:text-white`}
          >
            Doc Dialog nutzen
          </Link>
        </div>

        <div className="container mx-auto p-3">
          {/* Title Section */}
          <div className="text-center space-y-4">
            <h1 className="text-lg font-bold leading-tight text-black dark:text-white sm:text-xl">
              {heroConfig.hero.title}
            </h1>
            <p className="text-sm text-gray-700 dark:text-gray-300 sm:text-base">
              {heroConfig.hero.description}
            </p>
          </div>

          {/* Bullet Points */}
          <ul className="mt-6 space-y-2">
            <li className="flex items-center">
              <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2" />
              <span className="text-sm text-black dark:text-gray-300">
                Formulare automatisch ausfüllen. Mehr delegieren.
              </span>
            </li>
            <li className="flex items-center">
              <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2" />
              <span className="text-sm text-black dark:text-gray-300">
                Kostengutsprachen machen neu die MPAs mit KI
              </span>
            </li>
            <li className="flex items-center">
              <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2" />
              <span className="text-sm text-black dark:text-gray-300">
                Durch 🇨🇭 Praxisinhaber entwickelt.
              </span>
            </li>
            <li className="flex items-center">
              <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2" />
              <span className="text-sm text-black dark:text-gray-300">
                Gut für Einsteiger. Braucht wenig IT Kenntnisse.
              </span>
            </li>
            <li className="flex items-center">
              <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2" />
              <span className="text-sm text-black dark:text-gray-300">
                Kein Schulungsaufwand, keine Schnittstelle
              </span>
            </li>
          </ul>

          {/* Testimonials Slider */}
          <div className="mt-4">
            <div className="relative max-w-5xl mx-auto bg-white dark:bg-gray-800 shadow rounded-lg p-2">
              <button
                onClick={() => handleSlideChange("left")}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 p-1 text-gray-500 bg-gray-100 rounded-full hover:bg-gray-300 transition duration-300"
              >
                &lt;
              </button>
              <div className="overflow-hidden w-full">
                <div
                  className="transition-transform duration-500 flex"
                  style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                  }}
                >
                  {heroConfig.hero.testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-full flex items-center p-4"
                    >

                      <div className="text-left space-y-4">
                        {/* Text at the top */}
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          {testimonial.quote}
                        </p>

                        {/* Image and Title section */}
                        <div className="flex items-center">
                          {/* Picture on the left */}
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover mr-4"
                          />
                          {/* Title and position on the right */}
                          <div>
                            <h4 className="text-sm font-bold text-black dark:text-white">
                              {testimonial.name}
                            </h4>
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {testimonial.position}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => handleSlideChange("right")}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 p-1 text-gray-500 bg-gray-100 rounded-full hover:bg-gray-300 transition duration-300"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
