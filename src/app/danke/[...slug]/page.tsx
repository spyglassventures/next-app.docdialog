// src/app/danke/[...slug]/page.tsx
"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import homePageConfig from "@/config/homePageConfig.json";
import ScrollUp from "@/components/Common/ScrollUp";
import Benefits from "@/components/Benefits";
import VideoTestimonials from "@/components/VideoTestimonials";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Openinghours from "@/components/About/Openinghours";
import Features from "@/components/Features";
import Brands from "@/components/Brands";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";

const ThankYouPage = () => {
    const pathname = usePathname();
    const [customContent, setCustomContent] = useState<JSX.Element | null>(null);

    useEffect(() => {
        if (pathname) {
            // Define custom content based on the slug in pathname
            if (pathname.includes("calendly")) {
                setCustomContent(<p>Ich freue mich auf unser bevorstehendes Gespräch!</p>);
            } else if (pathname.includes("facebook")) {
                setCustomContent(
                    <p>Vielen Dank, dass Sie uns über Facebook kontaktiert haben!</p>
                );
            } else if (pathname.includes("instagram")) {
                setCustomContent(
                    <p>Vielen Dank, dass Sie uns über Instagram kontaktiert haben!</p>
                );
            } else if (pathname.includes("messe")) {
                setCustomContent(
                    <p>Wir freuen uns, Sie auf der Messe zu treffen!</p>
                );
            } else if (pathname.includes("linkedin")) {
                setCustomContent(
                    <p>Vielen Dank, dass Sie uns über LinkedIn kontaktiert haben!</p>
                );
            } else if (pathname.includes("whatsapp")) {
                setCustomContent(
                    <p>Vielen Dank, dass Sie uns über WhatsApp kontaktiert haben!</p>
                );
            } else if (pathname.includes("email")) {
                setCustomContent(
                    <p>Danke, dass Sie uns über unsere E-Mail kontaktiert haben!</p>
                );
            } else if (pathname.includes("referral")) {
                setCustomContent(
                    <p>Danke für Ihren Besuch! Wir freuen uns, auf den weiteren Kontakt.</p>
                );
            } else {
                setCustomContent(null); // Default case, no extra content
            }

            // Push thank you event to dataLayer
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: "thank_you_message",
                source_path: pathname, // Track the source path for analytics
            });
        }
    }, [pathname]);

    const { modules } = homePageConfig;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 py-16 px-4 md:py-20">
            {/* Canvas for Thank You Message */}
            <div className="text-center bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg mb-8 max-w-md mx-auto">
                <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
                    Vielen Dank!
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    Wir melden uns in Kürze.
                </p>
            </div>

            {/* Optional Custom Content Based on Slug */}
            {customContent && (
                <div className="text-center bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md mb-8 max-w-lg mx-auto">
                    {customContent}
                </div>
            )}

            {/* Contact Information */}
            <div className="text-center bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md max-w-lg mx-auto mb-8">
                <p className="font-semibold">Doc Dialog (Spyglass Ventures GmbH)</p>
                <p>Seestattstrasse 1</p>
                <p>8852 Altendorf</p>
                <p>
                    E-Mail:{" "}
                    <a
                        href="mailto:office@spyglassventures.ch"
                        className="text-blue-500 dark:text-blue-300 underline"
                    >
                        office@spyglassventures.ch
                    </a>
                </p>
                <p>
                    Telefon:{" "}
                    <a
                        href="tel:+41798329298"
                        className="text-blue-500 dark:text-blue-300 underline"
                    >
                        +41 79 832 9298
                    </a>
                </p>
            </div>

            {/* Additional Components */}
            <div className="mt-8">
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
            </div>
        </div>
    );
};

export default ThankYouPage;
