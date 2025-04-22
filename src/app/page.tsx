'use client';

import React, { useState } from 'react';
import '../styles/onboarding.css';

const onboardingScreens = [
  {
    title: "¿Recuerdas cuando podías hablar sin dudar?",
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
    title: "Bienvenido a SpeakFlow",
    subtitle: "Es hora de transformar el tiempo de scroll en tiempo de crecimiento personal.",
    buttonText: "COMENZAR"
  }
];

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const handleNext = () => {
    if (currentScreen < onboardingScreens.length - 1) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  const currentSlide = onboardingScreens[currentScreen];
  const parts = currentSlide.highlight ? currentSlide.title.split(currentSlide.highlight) : [currentSlide.title];

  return (
    <div className="container">
      <div className="content">
        <div className="dot"></div>
        
        <div className="text-container">
          <h1 className="title">
            {currentSlide.highlight ? (
              <>
                {parts[0]}
                <span className="highlight">{currentSlide.highlight}</span>
                {parts[1]}
              </>
            ) : (
              currentSlide.title
            )}
          </h1>
          
          {currentSlide.description && (
            <p className="description">{currentSlide.description}</p>
          )}
          
          {currentSlide.subtitle && (
            <p className="subtitle">{currentSlide.subtitle}</p>
          )}
        </div>

        <button className="next-button" onClick={handleNext}>
          {currentSlide.buttonText || "Toca para continuar"}
        </button>
      </div>
    </div>
  );
} 