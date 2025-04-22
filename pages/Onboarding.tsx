'use client';

import React, { useState } from 'react';

interface OnboardingSlide {
  title: string;
  highlight?: string;
  description?: string;
  subtitle?: string;
  buttonText?: string;
}

const onboardingScreens: OnboardingSlide[] = [
  {
    title: "¿Recuerdas cuando podías\nhablar sin dudar?",
    highlight: "sin dudar",
    description: "¿Cuándo fue la última vez que expresaste tus ideas sin trabarte? ¿Ha sido el scroll infinito y el contenido rápido lo que ha reducido tu capacidad de expresión?"
  },
  {
    title: "No es tu culpa.",
    highlight: "No es tu culpa",
    description: "Las redes sociales han programado nuestro cerebro para el contenido rápido y superficial, afectando nuestra capacidad de expresión y pensamiento profundo."
  },
  {
    title: "Tu voz interior.",
    highlight: "voz interior",
    description: "Es única como tu huella digital. Y es la clave para recuperar tu fluidez verbal y liberarte de los algoritmos que limitan tu expresión."
  },
  {
    title: "Bienvenido a\nSpeakFlow",
    subtitle: "Es hora de transformar el tiempo de scroll en tiempo de crecimiento personal.",
    buttonText: "COMENZAR"
  }
];

export default function Onboarding() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const handleNext = () => {
    if (currentScreen < onboardingScreens.length - 1) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  const currentSlide = onboardingScreens[currentScreen];

  return (
    <div className="flex min-h-screen bg-[#1A1A1A]">
      <div className="flex flex-col justify-between p-6 flex-1">
        <div className="w-10 h-10 rounded-full bg-[#4169E1] mt-16 mx-auto" />
        
        <div className="flex-1 flex flex-col justify-center items-center px-5">
          <h1 className="text-3xl text-white text-center font-bold mb-5">
            {currentSlide.highlight 
              ? currentSlide.title.split(currentSlide.highlight).map((part, index, array) => (
                  <React.Fragment key={index}>
                    {part}
                    {index < array.length - 1 && (
                      <span className="text-[#4169E1]">{currentSlide.highlight}</span>
                    )}
                  </React.Fragment>
                ))
              : currentSlide.title
            }
          </h1>
          
          {currentSlide.description && (
            <p className="text-lg text-white text-center opacity-80 leading-relaxed">
              {currentSlide.description}
            </p>
          )}
          
          {currentSlide.subtitle && (
            <p className="text-base text-white text-center opacity-70">
              {currentSlide.subtitle}
            </p>
          )}
        </div>

        <button 
          className="bg-[#4169E1] py-4 rounded-xl text-white font-bold text-base mt-10"
          onClick={handleNext}
        >
          {currentSlide.buttonText || "Toca para continuar"}
        </button>
      </div>
    </div>
  );
} 