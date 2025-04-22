'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const OnboardingComponent = dynamic(
  () => import('../components/Onboarding').then((mod) => mod.default),
  { ssr: false }
);

export default function Home() {
  return <OnboardingComponent />;
} 