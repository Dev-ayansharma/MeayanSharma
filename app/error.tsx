'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error('Client Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#1c1c2b] to-[#0f0f1f] text-white p-6 text-center">
      <h1 className="text-5xl font-bold text-red-400 mb-4">⚠️ Something went wrong</h1>
      <p className="text-gray-300 mb-6 max-w-md">
        Oops! An unexpected error occurred. Please try refreshing or go back to the homepage.
      </p>
      <div className="flex gap-4">
        <button 
          onClick={() => reset()}
          className="px-6 py-2 bg-purple-600 hover:bg-purple-700 transition rounded-lg cursor-pointer text-white"
        >
          🔄 Try Again
        </button>
        <Link
          href="/"
          className="px-6 py-2 bg-gray-700 hover:bg-gray-800 transition rounded-lg cursor-pointer text-white"
        >
          🏠 Go Home
        </Link>
      </div>
    </div>
  );
}
