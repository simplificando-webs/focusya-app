'use client';

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

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
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.dot} />
        
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            {currentSlide.highlight 
              ? currentSlide.title.split(currentSlide.highlight).map((part, index, array) => (
                  <React.Fragment key={index}>
                    {part}
                    {index < array.length - 1 && (
                      <Text style={styles.highlightText}>{currentSlide.highlight}</Text>
                    )}
                  </React.Fragment>
                ))
              : currentSlide.title
            }
          </Text>
          
          {currentSlide.description && (
            <Text style={styles.description}>{currentSlide.description}</Text>
          )}
          
          {currentSlide.subtitle && (
            <Text style={styles.subtitle}>{currentSlide.subtitle}</Text>
          )}
        </View>

        <TouchableOpacity 
          style={styles.button} 
          onPress={handleNext}
        >
          <Text style={styles.buttonText}>
            {currentSlide.buttonText || "Toca para continuar"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    height: '100vh',
    width: '100vw',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 24,
  },
  dot: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4169E1',
    marginTop: 60,
    alignSelf: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  highlightText: {
    color: '#4169E1',
  },
  description: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    opacity: 0.8,
    lineHeight: 26,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    opacity: 0.7,
  },
  button: {
    backgroundColor: '#4169E1',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 