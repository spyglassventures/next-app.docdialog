"use client";
import { useState, useEffect } from "react";

const Typewriter = () => {
  const texts = [
    "Reisehinweise Brasilien, Pat 45 w, Diabetikerin",
    "Erstelle Kostengutsprache Zyban, beachte Limitatio, siehe KG Eintrag ...",
    "Fülle Formular KTG aus, Inhalt siehe KG Eintrag vom ...",
    "HIN Emails von Kardiologen in 10km Luftlinie von mir",
    "Beantworte Mail KTG, Referenz 35.044.533, Antworten zu allen Fragen ausformulieren, siehe KG Eintrag ...",
    "Erstelle Wundbeschreibung, siehe Bild im Anhang",
    "Verhaltensempfehlung bei Brämestich für Patienten ausformulieren",
  ];

  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < texts[currentIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + texts[currentIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100); // Typing speed
      return () => clearTimeout(timeout);
    } else {
      // Pause before transitioning to the next text
      const pauseTimeout = setTimeout(() => {
        setCurrentText("");
        setCharIndex(0);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length); // Loop through texts
      }, 2000); // Pause duration
      return () => clearTimeout(pauseTimeout);
    }
  }, [charIndex, currentIndex, texts]);

  return (
    <div
      className="text-lg font-mono text-black dark:text-white"
      style={{
        height: "4.5em", // Ensure space for 3 lines (each line ~1.5em)
        overflow: "hidden", // Prevent overflow
        lineHeight: "1.5em", // Line height for consistent spacing
        display: "flex",
        alignItems: "center", // Center content vertically if fewer lines
      }}
    >
      <span>{currentText}</span>
      <span className="blinking-cursor">|</span>
      <style jsx>{`
        .blinking-cursor {
          display: inline-block;
          width: 1px;
          height: 1em;
          background-color: currentColor;
          animation: blink 1s steps(2, start) infinite;
        }
        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }
          50%, 100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Typewriter;
