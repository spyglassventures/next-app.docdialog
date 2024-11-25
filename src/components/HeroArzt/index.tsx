"use client";
import Link from "next/link";
import Modal from '../Modal';
import ModalContent from '../Modalcontent';
import { useState, useEffect } from 'react';
import modalConfig from '@/config/modalConfig.json';
import heroConfig from '@/config/heroConfigArzt.json';
import { CheckCircleIcon } from '@heroicons/react/24/solid'; // Import the green checkmark icon

const Hero = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  useEffect(() => {
    const checkModalQueryParam = () => {
      const params = new URLSearchParams(window.location.search);
      const showModal = params.get('modal') === 'true';
      setModalOpen(showModal);
    };

    if (modalConfig.isModalEnabled) {
      window.addEventListener('load', checkModalQueryParam);
      window.addEventListener('popstate', checkModalQueryParam);

      checkModalQueryParam();

      return () => {
        window.removeEventListener('load', checkModalQueryParam);
        window.removeEventListener('popstate', checkModalQueryParam);
      };
    }
  }, []);

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
        >
          <source src={heroConfig.hero.backgroundMedia.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
    if (heroConfig.hero.backgroundMedia?.type === "image") {
      return (
        <div className="relative sm:absolute inset-0">
          <img
            src={heroConfig.hero.backgroundMedia.src}
            alt="Background"
            className="relative sm:absolute object-cover w-full h-full"
          // style={{
          //   borderBottomLeftRadius: '30px', // Custom large border radius
          //   borderBottomRightRadius: '30px', // Custom large border radius
          //   WebkitMaskImage:
          //     "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1))",
          //   maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1))",
          //   filter: "blur(0px)",
          // }}
          />

          {/* Title for mobile centered in a white box */}
          <div className="block sm:hidden absolute inset-0 flex items-center justify-center">
            <div className="w-1/2 p-4 text-center rounded bg-white dark:bg-gray-900">
              <h1 className="text-black dark:text-white text-2xl font-bold opacity-90  leading-snug">
                {heroConfig.hero.title}
              </h1>
            </div>
          </div>
        </div>
      );
    }




    return null;
  };

  return (
    <>
      <section
        id="home"
        className={`relative z-10 overflow-hidden pb-24 md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[120px] ${heroConfig.hero.backgroundClass}`}
      >

        {renderBackgroundMedia()}
        {heroConfig.hero.showBackground && <div className="absolute inset-0 bg-white opacity-10 dark:bg-black dark:opacity-70"></div>}
        <div className="container relative z-10">
          <div className="-mx-4 flex flex-wrap">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Left Column: Testimonials */}
              <div className="space-y-6">
                {/* Testimonial 1 */}
                <div className="p-2 bg-white dark:bg-gray-800 shadow rounded-lg flex items-center space-x-4 max-w-xs">

                  <img
                    src="/images/testimonials/DrBerg.jpg"
                    alt="Dr. med. Christoph Berg"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-xs text-gray-700 dark:text-gray-300">
                      Das KI-Tool hat meine Praxis effizienter gemacht. Die
                      automatisierte Erstellung von Formularen spart enorm Zeit.
                    </p>
                    <h4 className="mt-1 text-sm font-bold text-black dark:text-white">
                      Dr. med. Christoph Berg
                    </h4>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Praxisinhaber, St. Gallen
                    </span>
                  </div>
                </div>
              </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Left Column: Testimonials */}
              <div className="space-y-6 pt-3">
                {/* Testimonial 1 */}
                <div className="p-2 bg-white dark:bg-gray-800 shadow rounded-lg flex items-center space-x-4 max-w-xs">

                  <img
                    src="/images/testimonials/Gregor.jpg"
                    alt="Gregor Müller, Internist (FMH)"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-xs text-gray-700 dark:text-gray-300">
                      Ich hab keine Zeit und Lust neue Software zu erlernen. Aber DocDialog ist so einfach, dass ich es sofort verstanden habe.
                    </p>
                    <h4 className="mt-1 text-sm font-bold text-black dark:text-white">
                      Dr. med. Christoph Berg
                    </h4>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Praxisinhaber, St. Gallen
                    </span>
                  </div>
                </div>
              </div>



            </div>





            <div className="mx-auto max-w-[800px] text-center">
              <div className="bg-white bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-90 p-4 rounded-lg max-w-[500px] mx-auto">
                <h1 className="hidden sm:block mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  {heroConfig.hero.title}
                </h1>


                {modalConfig.isModalEnabled && (
                  <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal} contentLabel="Modal">
                    <ModalContent />
                  </Modal>
                )}

                <p className="mb-4 text-sm !leading-relaxed text-black dark:text-gray-300 sm:text-md md:text-lg">
                  {heroConfig.hero.description}
                </p>

                {/* New Section for Benefits */}
                <ul className="flex flex-col items-start space-y-2 mb-6 pl-4 sm:pl-10">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2" />
                    <span className="text-sm text-left sm:text-base text-black dark:text-gray-300">Formulare halbautomatisch ausfüllen</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2" />
                    <span className="text-sm text-left sm:text-base text-black dark:text-gray-300">Kostengutsprachen mit KI formulieren</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2" />
                    <span className="text-sm text-left sm:text-base text-black dark:text-gray-300">Durch Praxisinhaber und MPAs in 🇨🇭 entwickelt</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2" />
                    <span className="text-sm text-left sm:text-base text-black dark:text-gray-300">Kein Schulungsaufwand, keine Schnittstelle, ...</span>
                  </li>
                </ul>


                {/* Call-to-action buttons */}
                <div className="flex flex-col items-center space-y-4 mb-6 sm:flex-row sm:space-y-0 sm:space-x-4">
                  {heroConfig.hero.callToAction.showCallButton && (
                    <Link
                      href={heroConfig.hero.callToAction.callButton.link}
                      className={`${heroConfig.hero.callToAction.callButton.class} px-6 py-3 text-lg dark:bg-gray-700 dark:text-white`}
                    >
                      {heroConfig.hero.callToAction.callButton.label}
                    </Link>
                  )}
                  {heroConfig.hero.callToAction.showWhatsAppChatButton && (
                    <Link
                      href={heroConfig.hero.callToAction.whatsappButton.link}
                      className={`${heroConfig.hero.callToAction.whatsappButton.class} px-6 py-3 text-lg dark:bg-gray-700 dark:text-white`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {heroConfig.hero.callToAction.whatsappButton.label}
                    </Link>
                  )}
                  {heroConfig.hero.callToAction.showOnlineTerminButton && (
                    <Link
                      href={heroConfig.hero.callToAction.onlineBookingButton.link}
                      className={`${heroConfig.hero.callToAction.onlineBookingButton.class} w-full pt-3 py-3 text-lg dark:bg-gray-700 dark:text-white`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {heroConfig.hero.callToAction.onlineBookingButton.label}
                    </Link>

                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust logos with white canvas */}
        <div className="container mx-auto pb-4 ">
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between pb-2">
            {/* Trust Partner left */}
            <div className="absolute bottom-0 p-4 m-2 bg-white bg-opacity-95 dark:bg-gray-800 dark:bg-opacity-90 z-10 rounded-lg w-[350px] h-auto left-0 sm:left-1/2 sm:transform sm:-translate-x-1/2 md:left-0 md:transform-none sm:text-center">
              <h3 className="text-lg font-extralight mb-2 text-black text-center sm:text-left dark:text-gray-300" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Mitgliedschaften und Integrationen
              </h3>
              <div className="flex flex-row items-center justify-center space-x-4 pl-8">
                {/* <img src="/images/brands/vebmitglied.png" alt="VEB Mitglied" className="h-16 w-14 opacity-100 filter grayscale dark:filter-none" /> */}
                <img src="/images/brands/hin.png" alt="HIN Mitglied" className="h-10 w-18 opacity-100 filter grayscale dark:filter-none" />
                <img src="/images/brands/swissmadesoftware.png" alt="Swiss Made Software" className="h-16 w-20 opacity-100 filter grayscale dark:filter-none" />
                <img src="/images/brands/healthtechcluster.png" alt="Health Tech Cluster" className="h-16 w-30 opacity-100 filter grayscale dark:filter-none" />
              </div>
            </div>






          </div>
        </div>
      </section >
    </>
  );
};

export default Hero;

