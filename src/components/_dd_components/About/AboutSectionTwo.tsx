import Image from "next/image";
import { FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import LinkedIn and email icons
import styles from '../../../styles/ImageGallery.module.css'; // Import the CSS module for gallery styling
import aboutSectionTwoConfig from "@/config/aboutSectionTwoConfig.json";

const AboutSectionTwo = () => {
  return (
    <section className="py-6 md:py-10 lg:py-18">
      <div className="container">
        <h1 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">Unser Team</h1>
        <div className="-mx-4 flex flex-wrap">
          {aboutSectionTwoConfig.team.map((person, index) => (
            <div key={index} className="w-full px-4 sm:w-1/2 md:w-1/3 lg:w-1/4">
              <div className={`${styles.imageWrapper} mb-8`}>
                <div className="relative aspect-square hover:shadow-xl transition-shadow duration-300 flex flex-col-reverse">
                  <Image src={person.src} alt={person.caption} fill sizes="(min-width: 808px) 50vw, 100vw" style={{ objectFit: "cover" }} />
                  <p className="absolute bottom-0 w-full text-center bg-opacity-50 bg-black text-white py-1">
                    {person.caption}
                    <div className="flex justify-center space-x-3 mt-2">
                      {person.linkedin && (
                        <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block">
                          <FaLinkedin className="text-white hover:text-blue-600" size={20} />
                        </a>
                      )}
                      {person.email && (
                        <a href={`mailto:${person.email}`} className="inline-block">
                          <FaEnvelope className="text-white hover:text-gray-400" size={20} />
                        </a>
                      )}
                    </div>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h1 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">Advisor</h1>
        <div className="-mx-4 flex flex-wrap">
          {aboutSectionTwoConfig.praxis.map((person, index) => (
            <div key={index} className="w-full px-4 sm:w-1/2 md:w-1/3 lg:w-1/4">
              <div className={`${styles.imageWrapper} mb-8`}>
                <div className="relative aspect-square hover:shadow-xl transition-shadow duration-300 flex flex-col-reverse">
                  <Image src={person.src} alt={person.caption} fill sizes="(min-width: 808px) 50vw, 100vw" style={{ objectFit: "cover" }} />
                  <p className="absolute bottom-0 w-full text-center bg-opacity-50 bg-black text-white py-1">
                    {person.caption}
                    <div className="flex justify-center space-x-3 mt-2">
                      {person.linkedin && (
                        <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block">
                          <FaLinkedin className="text-white hover:text-blue-600" size={20} />
                        </a>
                      )}
                      {person.email && (
                        <a href={`mailto:${person.email}`} className="inline-block">
                          <FaEnvelope className="text-white hover:text-gray-400" size={20} />
                        </a>
                      )}
                    </div>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
