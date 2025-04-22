import React from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen bg-[#1A1A1A] items-center justify-center">
      <h1 className="text-white text-2xl font-bold">Bienvenido a SpeakFlow</h1>
    </div>
  );
} 