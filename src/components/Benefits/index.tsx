"use client";
import { useState, useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import Image from "next/image"; // Import Image from next/image

const Benefits = () => {
    const benefitsData = [
        {
            id: 1,
            value: "Fr. 50'000",
            description: "Wertschöpfung pro Jahr pro Praxis",
        },
        {
            id: 2,
            value: "30 Minuten",
            description: "Zeitersparnis pro Tag pro Arzt in Vollzeit",
        },
        {
            id: 3,
            value: "5+ Aufgaben",
            description: "werden direkt an das MPA-Team delegierbar – ohne zusätzlichen Aufwand",
        },
    ];

    // Testimonials reduced to one sentence
    const leftTestimonials = [
        {
            id: 2,
            name: "Dr. med. C. Berg",
            designation: "Praxisinhaber, St. Gallen",
            image: "/images/testimonials/DrBerg.jpg",
            content:
                "Das KI-Tool hilft mir täglich bei der Patientenbetreuung und spart Zeit.",
        },
        {
            id: 1,
            name: "A. Bergmann",
            designation: "MPA Leitung, Zürich",
            image: "/images/testimonials/Angelika.jpg",
            content:
                "Seit der Einführung des KI-Tools bleibt nichts mehr liegen und Versicherungsanfragen werden schnell erledigt.",
        },
        {
            id: 3,
            name: "G. Müller",
            designation: "Internist (FMH), Zürich",
            image: "/images/testimonials/Gregor.jpg",
            content:
                "Dokumentation und Kostengutsprachen sind mit dem System einfacher und schneller geworden.",
        },
    ];

    const rightTestimonials = [
        {
            id: 4,
            name: "Dr. med. C. Rosenbaum",
            designation: "Praxisinhaber, Zürich",
            image: "/images/testimonials/DrRosenbaum.png",
            content:
                "Ich kann Doc Dialog nur empfehlen, es spart viel Zeit bei der Bearbeitung von Formularen.",
        },
        {
            id: 5,
            name: "Dr. med. H. Eckardt",
            designation: "Praxisinhaber, Zürich",
            image: "/images/testimonials/DrEckardt-min.jpg",
            content:
                "Die KI-Lösungen von Doc Dialog haben uns geholfen, den administrativen Aufwand deutlich zu reduzieren.",
        },
        {
            id: 6,
            name: "Dr. med. G. Fischer",
            designation: "Praxisinhaber, Zürich",
            content:
                "Das KI-Tool hat meine Praxis effizienter gemacht und unterstützt mich vielseitig.",
            image: "/images/testimonials/DrFischer.png",
            star: 5,
        },
    ];

    const [leftTestimonialIndex, setLeftTestimonialIndex] = useState(0);
    const [rightTestimonialIndex, setRightTestimonialIndex] = useState(0);
    const [isLeftVisible, setIsLeftVisible] = useState(false);
    const [isRightVisible, setIsRightVisible] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsLeftVisible(false); // Hide left testimonial before switching
            setTimeout(() => {
                setLeftTestimonialIndex((prevIndex) => (prevIndex + 1) % leftTestimonials.length);
                setIsLeftVisible(true); // Slowly show new left testimonial
            }, 2000); // fading effect duration

            setTimeout(() => {
                setIsRightVisible(false); // Hide right testimonial before switching
                setTimeout(() => {
                    setRightTestimonialIndex((prevIndex) => (prevIndex + 1) % rightTestimonials.length);
                    setIsRightVisible(true); // Slowly show new right testimonial
                }, 2000); // Delay the right side change by 2 seconds
            }, 3000);
        }, 8000); // Change every 10 seconds

        return () => clearInterval(interval);
    }, [leftTestimonials.length, rightTestimonials.length]);

    const leftTestimonial = leftTestimonials[leftTestimonialIndex];
    const rightTestimonial = rightTestimonials[rightTestimonialIndex];

    return (
        <section id="benefits" className="py-6 md:py-10 lg:py-18 relative">
            <div className="container relative z-10 pt-8 sm:pt-16">
                <SectionTitle title="Warum Doc Dialog?" paragraph="" center />

                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-3">
                    {benefitsData.map((benefit) => (
                        <div key={benefit.id} className="text-center">
                            <h3 className="text-2xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">
                                {benefit.value}
                            </h3>
                            <p className="text-sm sm:text-base font-medium text-body-color">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>


            {/* Left Testimonial */}
            <div
                className={`absolute left-0 top-10 md:top-0 w-96 md:w-100 pt-12 pl-6 sm:pl-12 rounded-lg transition-opacity duration-1000 ease-in-out ${isLeftVisible ? "opacity-100" : "opacity-0"
                    }`}
            >

                <div className="flex items-center space-x-4">
                    <div className="max-sm:pl-12 max-sm:pt-2">
                        <Image
                            src={leftTestimonial.image}
                            alt={leftTestimonial.name}
                            width={48}
                            height={48}
                            className="rounded-full"
                        />
                    </div>
                    <div>
                        <h4 className="font-light text-lg ">{leftTestimonial.name}</h4>
                        <p className="text-sm text-gray-600 font-light">
                            {leftTestimonial.designation}
                        </p>
                    </div>
                </div>
                <p className="mt-2 text-xs italic text-gray-400 leading-tight font-light text-center sm:text-left pr-4">
                    &quot;{leftTestimonial.content}&quot;
                </p>

            </div>


            {/* Right Testimonial */}
            <div
                className={`hidden sm:block absolute right-0 top-10 md:top-0 w-96 md:w-100 p-4 pt-8 rounded-lg transition-opacity duration-1000 ease-in-out ${isRightVisible ? "opacity-100" : "opacity-0"
                    }`}
            >
                <div className="flex items-center space-x-4">
                    <Image
                        src={rightTestimonial.image}
                        alt={rightTestimonial.name}
                        width={48}
                        height={48}
                        className="rounded-full"
                    />
                    <div>
                        <h4 className="font-light text-lg">{rightTestimonial.name}</h4>
                        <p className="text-sm text-gray-600 font-light">
                            {rightTestimonial.designation}
                        </p>
                    </div>
                </div>
                <p className="mt-2 text-xs italic text-gray-400 leading-tight font-light">
                    &quot;{rightTestimonial.content}&quot;
                </p>
            </div>



        </section>
    );
};

export default Benefits;
