'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">Sally Face 2</span>
            <span className="text-sm text-purple-400">Wiki</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/release-date" className="text-slate-300 hover:text-purple-400 transition-colors font-medium">
              Release Date
            </Link>
            <Link href="/trailers" className="text-slate-300 hover:text-purple-400 transition-colors font-medium">
              Trailers
            </Link>
            <Link href="/episodes" className="text-slate-300 hover:text-purple-400 transition-colors font-medium">
              Episodes
            </Link>
            <Link href="/characters" className="text-slate-300 hover:text-purple-400 transition-colors font-medium">
              Characters
            </Link>
            <a
              href="https://store.steampowered.com/app/3937470/Sally_Face_2/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all font-medium"
            >
              Steam
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-800">
            <div className="flex flex-col space-y-4">
              <Link
                href="/release-date"
                className="text-slate-300 hover:text-purple-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Release Date
              </Link>
              <Link
                href="/trailers"
                className="text-slate-300 hover:text-purple-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Trailers
              </Link>
              <Link
                href="/episodes"
                className="text-slate-300 hover:text-purple-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Episodes
              </Link>
              <Link
                href="/characters"
                className="text-slate-300 hover:text-purple-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Characters
              </Link>
              <a
                href="https://store.steampowered.com/app/3937470/Sally_Face_2/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all font-medium text-center"
              >
                Steam Page
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
