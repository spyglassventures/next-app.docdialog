"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Modal from "@/components/Modal";
import ifasConfig from "@/config/ifasConfig.json";
import modalConfig from "@/config/modalConfig.json";

const ServicesPage = () => {
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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 py-10">
      {/* Centered Image and Text */}
      <div className="text-center max-w-lg bg-white dark:bg-gray-900 p-10 rounded-lg shadow-lg">
        <img
          src="/images/about/DanielM.jpg"
          alt="Daniel Müller - Gründer von Doc Dialog"
          className="mx-auto rounded-lg mb-6 w-64 h-auto"
        />
        <p className="text-2xl font-semibold mb-4">Treffe den Gründer von Doc Dialog auf der IFAS</p>
        <p className="text-lg mb-6">
          Live Demo auf der IFAS<br />
          Besuchen Sie uns am<br />
          <strong>23.10.2024, 17 Uhr</strong><br />
          Halle 7 (IT & Beratung)<br />
          Stand Nr. E 43 (Axonlab)
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

    
      
    </div>
  );
};

export default ServicesPage;
