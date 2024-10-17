"use client";
import Link from "next/link";
import Modal from '../../components/Modal';
import ModalContent from '../../components/Modalcontent';
import { useState, useEffect } from 'react';
import modalConfig from '@/config/modalConfig.json';
import heroConfig from '@/config/heroConfig.json';
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
        <div className="absolute inset-0">
          <img
            src={heroConfig.hero.backgroundMedia.src}
            alt="Background"
            className="absolute inset-0 object-cover w-full h-full"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1))", // Left-side blur effect
              maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1))", // Fallback for other browsers
              filter: "blur(2px)", // Adjust this value to control the blur amount
            }}
          />
          <img
            src={heroConfig.hero.backgroundMedia.src}
            alt="Background"
            className="absolute inset-0 object-cover w-full h-full"
            style={{
              clipPath: "inset(0 0 0 50%)", // Right side is sharp
            }}
          />
        </div>
      );
    }

    return null;
  };

  return (
    <>
      <section
        id="home"
        className={`relative z-10 overflow-hidden pb-8 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[100px] 2xl:pt-[210px] ${heroConfig.hero.backgroundClass}`}
      >
        {renderBackgroundMedia()}
        {heroConfig.hero.showBackground && <div className="absolute inset-0 bg-white opacity-10 dark:bg-black dark:opacity-70"></div>}
        <div className="container relative z-10">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <div className="bg-white bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-90 p-4 rounded-lg max-w-[500px] mx-auto">
                  <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
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
                  <ul className="flex flex-col items-left justify-left space-y-2 mb-6 pl-10">
                    <li className="flex items-center">
                      <CheckCircleIcon className="h-6 w-6 text-green-500 dark:text-green-400 mr-2" />
                      <span className="text-black dark:text-gray-300">Formulare halbautomatisch Ausfüllen</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircleIcon className="h-6 w-6 text-green-500 dark:text-green-400 mr-2" />
                      <span className="text-black dark:text-gray-300">Durch Praxisinhaber und MPAs entwickelt</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircleIcon className="h-6 w-6 text-green-500 dark:text-green-400 mr-2" />
                      <span className="text-black dark:text-gray-300">Datenschutzkonform Schweiz</span>
                    </li>
                  </ul>

                  {/* Anrufen Button */}
                  {heroConfig.hero.callToAction.showCallButton && (
                    <Link
                      href={heroConfig.hero.callToAction.callButton.link}
                      className={`${heroConfig.hero.callToAction.callButton.class} px-6 py-3 text-lg dark:bg-gray-700 dark:text-white`}
                    >
                      {heroConfig.hero.callToAction.callButton.label}
                    </Link>
                  )}

                  {/* WhatsApp Button */}
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

                  {/* Online Termine Buchen Button */}
                  {heroConfig.hero.callToAction.showOnlineTerminButton && (
                    <Link
                      href={heroConfig.hero.callToAction.onlineBookingButton.link}
                      className={`${heroConfig.hero.callToAction.onlineBookingButton.class} px-28 pt-3 py-3 text-lg dark:bg-gray-700 dark:text-white`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {heroConfig.hero.callToAction.onlineBookingButton.label}
                    </Link>
                  )}
                </div>

                {modalConfig.isModalEnabled && (
                  <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal} contentLabel="Modal">
                    <ModalContent />
                  </Modal>
                )}

                {/* Buttons */}
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-0 bottom-0 p-4 m-2 bg-white bg-opacity-95 dark:bg-gray-800 dark:bg-opacity-90 z-10 rounded-lg w-[350px] h-auto">
          <h3 className="text-lg font-extralight mb-2 text-black dark:text-gray-300" style={{ fontFamily: 'Roboto, sans-serif' }}>Mitgliedschaften und Integrationen</h3> {/* Thinner, softer font */}
          <div className="flex flex-row items-center space-x-4"> {/* Align logos to top */}
            <img src="/images/brands/vebmitglied.png" alt="VEB Mitglied" className="h-16 w-14 opacity-100 filter grayscale dark:filter-none" /> {/* Grey overlay removed in dark mode */}
            <img src="/images/brands/hin.png" alt="HIN Mitglied" className="h-10 w-18 opacity-100 filter grayscale dark:filter-none" /> {/* Grey overlay removed in dark mode */}
            <img src="/images/brands/swissmadesoftware.png" alt="Swiss Made Software" className="h-16 w-20 opacity-100 filter grayscale dark:filter-none" /> {/* Grey overlay removed in dark mode */}
          </div>
        </div>

        <div className="absolute right-0 bottom-0 p-4 m-2 bg-white bg-opacity-95 dark:bg-gray-800 dark:bg-opacity-90 z-10 rounded-lg w-[350px] h-auto">
          <h3 className="text-lg font-extralight mb-2 text-black dark:text-gray-300" style={{ fontFamily: 'Roboto, sans-serif' }}>Doc Dialog treffen</h3> {/* Thinner, softer font */}
          <Link href="https://www.ifas-expo.ch/de" target="_blank" rel="noopener noreferrer">
            <div className="flex flex-row items-center space-x-4 cursor-pointer">
              <img src="/images/brands/ifas.png" alt="IFAS" className="h-16 opacity-100 filter grayscale dark:filter-none" /> {/* Grey overlay removed in dark mode */}
              <p className="text-xs text-gray-600 dark:text-gray-400" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Besuchen Sie uns am<br />
                23.10.2024, 17 Uhr<br />
                Halle 7 (IT & Beratung)<br />
                Stand Nr. E 43 (Axonlab)
              </p>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Hero;
