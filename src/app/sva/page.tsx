"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Modal from "@/components/Modal";
import AboutSectionOne from "@/components/_dd_components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/_dd_components/About/AboutSectionTwo";
import Openinghours from "@/components/_dd_components/About/Openinghours";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/_dd_components/Hero";
import NewsTicker from "@/components/_dd_components/Hero/NewsTicker";
import Benefits from "@/components/_dd_components/Benefits";
import VideoTestimonials from "@/components/VideoTestimonials";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/_dd_components/Pricing";
import Contact from "@/components/Contact";
import ifasConfig from "@/config/ifasConfig.json";
import modalConfig from "@/config/modalConfig.json";
import homePageConfig from "@/config/homePageConfig.json";

const SVAPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const checkModalQueryParam = () => {
      const params = new URLSearchParams(window.location.search);
      const showModal = params.get("modal") === "true";
      setModalOpen(showModal);
    };

    if (modalConfig.isModalEnabled) {
      window.addEventListener("load", checkModalQueryParam);
      window.addEventListener("popstate", checkModalQueryParam);

      return () => {
        window.removeEventListener("load", checkModalQueryParam);
        window.removeEventListener("popstate", checkModalQueryParam);
      };
    }
  }, []);

  const { modules } = homePageConfig;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 py-12">
      {/* Centered Image and Text with Added Margin at the Top */}
      <div className="text-center max-w-lg bg-white dark:bg-gray-900 p-12 rounded-lg shadow-lg mt-12">
        <img
          src="/images/about/DanielM.jpg"
          alt="Daniel Müller - Gründer von Doc Dialog"
          className="mx-auto rounded-lg mb-2 w-64 h-auto"
        />
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Dr. sc. Daniel Müller gibt praktische Tipps zur Nutzung von Künstlicher Intelligenz beim Grundversorger</p>
        <p className="text-2xl font-semibold mb-4">Treffe den Gründer von Doc Dialog</p>
        <p className="text-lg mb-6">
          Live Demo auf der SVA<br />
          Vereinbaren Sie einen Termin mit uns.
        </p>

        {/* Call-to-action buttons */}
        <div className="flex flex-col items-center space-y-4 mb-6 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
          {ifasConfig.hero.callToAction.showCallButton && (
            <Link
              href={ifasConfig.hero.callToAction.callButton.link}
              className="w-64 px-6 py-3 text-lg dark:bg-gray-700 dark:text-white bg-blue-500 text-white rounded-md hover:bg-blue-700"
            >
              {ifasConfig.hero.callToAction.callButton.label}
            </Link>
          )}
          {ifasConfig.hero.callToAction.showWhatsAppChatButton && (
            <Link
              href={ifasConfig.hero.callToAction.whatsappButton.link}
              className="w-64 px-6 py-3 text-lg dark:bg-gray-700 dark:text-white bg-green-500 text-white rounded-md hover:bg-green-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              {ifasConfig.hero.callToAction.whatsappButton.label}
            </Link>
          )}
          {ifasConfig.hero.callToAction.showOnlineTerminButton && (
            <Link
              href={ifasConfig.hero.callToAction.onlineBookingButton.link}
              className="w-64 px-6 py-3 text-lg dark:bg-gray-700 dark:text-white bg-blue-500 text-white rounded-md hover:bg-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              {ifasConfig.hero.callToAction.onlineBookingButton.label}
            </Link>
          )}
        </div>
      </div>

      {/* Additional Components */}
      {modules.ScrollUp && <ScrollUp />}
      {modules.Benefits && <Benefits />}
      {modules.VideoTestimonials && <VideoTestimonials />}
      {modules.AboutSectionTwo && <AboutSectionTwo />}
      {modules.Openinghours && <Openinghours />}
      {modules.Features && <Features />}
      {modules.Brands && <Brands />}
      {modules.AboutSectionOne && <AboutSectionOne />}
      {modules.Testimonials && <Testimonials />}
      {modules.Pricing && <Pricing />}
      {/* {modules.Contact && <Contact />} */}
    </div>
  );
};

export default SVAPage;
