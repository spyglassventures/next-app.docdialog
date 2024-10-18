"use client";
import { useEffect, useRef } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "../../config/featuresData";

const Features = () => {
  const videosRef = useRef<HTMLVideoElement[]>([]); // To hold references to the video elements

  // Function to handle video playback based on visibility
  const handleScrollVideoPlay = () => {
    videosRef.current.forEach((video) => {
      if (video) {
        const rect = video.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
        if (isVisible) {
          video.play();
        } else {
          video.pause();
        }
      }
    });
  };

  useEffect(() => {
    // Add scroll event listener to trigger video play/pause on scroll
    window.addEventListener("scroll", handleScrollVideoPlay);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScrollVideoPlay);
    };
  }, []);

  const videos = [
    {
      src: "/images/video/Zwischenbericht.mp4",
      title: "Ein Zwischenbericht...",
      description:
        "Doc Dialog hilft dabei, semi-automatisch praxisübliche Formulare auszufüllen.",
    },
    {
      src: "/images/video/Verlauf.mp4",
      title: "mit Doc Dialog ausfüllen",
      description:
        "Kopieren Sie den anonymisierten relevanten Verlauf in unser Tool und erhalten Sie den ausgefüllten Bericht zurück.",
    },
  ];

  return (
    <>
      <section id="features" className="py-6 md:py-10 lg:py-18">
        <div className="container">
          <SectionTitle title="Was kann Doc Dialog?" paragraph="" center />
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Video Feature Section */}
      <section id="video-feature" className="py-5 bg-gray-100">
        <div className="container">
          <SectionTitle
            title="Automatisierte Berichte mit Doc Dialog"
            paragraph="Doc Dialog hilft dabei, Formulare semi-automatisch auszufüllen. Sie als Arzt behalten die Kontrolle."
            center
          />

          <div className="flex justify-center space-x-2">
            {videos.map((video, index) => (
              <div key={index} className="w-full max-w-xs">
                <video
                  ref={(el) => {
                    if (el) videosRef.current[index] = el;
                  }}
                  src={video.src}
                  className="w-full h-auto mb-4 rounded-lg shadow-lg"
                  muted
                  loop
                  playsInline // Ensure the video remains embedded and doesn't go full screen on mobile
                />
                <h3 className="text-lg font-bold text-black dark:text-white text-center mb-2">
                  {video.title}
                </h3>
                <p className="text-sm font-medium leading-relaxed text-body-color text-center">
                  {video.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
