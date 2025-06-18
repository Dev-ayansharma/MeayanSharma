// app/not-found.tsx
'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#1c1c2b] to-[#0f0f1f] text-white p-6 text-center">
      <h1 className="text-6xl font-bold text-red-400 mb-4">🚫 404</h1>
      <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-400 max-w-md mb-6">
        Sorry, the page you’re looking for doesn&post;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 transition rounded-lg cursor-pointer text-white"
      >
        🏠 Go Home
      </Link>
    </main>
  );
}
