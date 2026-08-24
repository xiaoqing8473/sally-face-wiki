import Link from 'next/link';

export const metadata = {
  title: 'Sally Face Episode 2: The Wretched - Complete Walkthrough | Sally Face Wiki',
  description: 'Complete walkthrough for Sally Face Episode 2: The Wretched. Find all Supernatural Hotspots, solve puzzles, unlock achievements, and uncover hidden secrets.',
  keywords: 'Sally Face Episode 2, The Wretched, walkthrough, supernatural hotspots, guide, puzzles',
};

export default function EpisodesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-sm text-slate-400 mb-8">
          <Link href="/" className="hover:text-purple-400">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-300">Episodes</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Sally Face Episode 2: The Wretched
        </h1>
        <p className="text-xl text-slate-300 mb-12">
          Complete walkthrough, Supernatural Hotspots locations, puzzle solutions, and achievement guide
          for Sally Face Episode 2.
        </p>

        {/* Story Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Story Overview</h2>
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <p className="text-slate-300 leading-relaxed mb-4">
              Exploring the building, Sal saw things he could not explain. In apartment 504, he met the ghost
              of Megan, a girl who had lived there years before. He also met Larry Johnson, who lives in the
              basement and becomes a key ally in uncovering the supernatural mysteries of Addison Apartments.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Episode 2: The Wretched delves deeper into the dark secrets of the apartment complex, introducing
              more characters and expanding the eerie narrative that makes Sally Face unforgettable.
            </p>
          </div>
        </section>

        {/* Supernatural Hotspots */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">All Supernatural Hotspots</h2>
          <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-6 mb-6">
            <p className="text-purple-200">
              <strong>Tip:</strong> Use Sal's Game Gear to detect Supernatural Hotspots throughout the building.
              Finding all hotspots is required for 100% completion.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { num: 1, location: "Apartment 504 - Megan's Room", description: "Interact with the ghost of Megan" },
              { num: 2, location: "Basement - Furnace Room", description: "Examine the mysterious pentagram" },
              { num: 3, location: "Apartment 403 - Living Room", description: "Check the flickering TV" },
              { num: 4, location: "Rooftop", description: "Investigate the ritual circle" },
              { num: 5, location: "Apartment 202 - Bathroom", description: "Look in the mirror for anomalies" },
            ].map((hotspot) => (
              <div key={hotspot.num} className="bg-slate-800 border border-slate-700 rounded-lg p-5 flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {hotspot.num}
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{hotspot.location}</h3>
                  <p className="text-slate-400 text-sm">{hotspot.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Puzzles */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Key Puzzles & Solutions</h2>
          <div className="space-y-6">
            <details className="bg-slate-800 border border-slate-700 rounded-lg p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                Piano Puzzle (Apartment 504)
                <span className="text-purple-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-slate-400 leading-relaxed space-y-2">
                <p><strong className="text-white">Solution:</strong> Play the notes in the order shown in Megan's drawings.</p>
                <p>The correct sequence is: <span className="text-purple-300 font-mono">C - E - G - B - D</span></p>
              </div>
            </details>

            <details className="bg-slate-800 border border-slate-700 rounded-lg p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                Basement Door Code
                <span className="text-purple-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-slate-400 leading-relaxed space-y-2">
                <p><strong className="text-white">Solution:</strong> Find the code written in Larry's notes.</p>
                <p>The code is: <span className="text-purple-300 font-mono">2-7-4-3</span></p>
              </div>
            </details>

            <details className="bg-slate-800 border border-slate-700 rounded-lg p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                Ritual Circle Symbols
                <span className="text-purple-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-slate-400 leading-relaxed">
                <p><strong className="text-white">Solution:</strong> Match the symbols to their corresponding elements: Fire, Water, Earth, Air in clockwise order.</p>
              </div>
            </details>
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Episode 2 Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-5">
              <h3 className="text-white font-semibold mb-2 flex items-center">
                <span className="mr-2">🏆</span>
                The Wretched
              </h3>
              <p className="text-slate-400 text-sm">Complete Episode 2</p>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-lg p-5">
              <h3 className="text-white font-semibold mb-2 flex items-center">
                <span className="mr-2">👻</span>
                Ghost Hunter
              </h3>
              <p className="text-slate-400 text-sm">Find all Supernatural Hotspots</p>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-lg p-5">
              <h3 className="text-white font-semibold mb-2 flex items-center">
                <span className="mr-2">🎹</span>
                Piano Master
              </h3>
              <p className="text-slate-400 text-sm">Solve the piano puzzle on first try</p>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-lg p-5">
              <h3 className="text-white font-semibold mb-2 flex items-center">
                <span className="mr-2">🔍</span>
                Detective
              </h3>
              <p className="text-slate-400 text-sm">Examine all interactable objects</p>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="bg-slate-800 border border-slate-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6">More Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/" className="text-purple-400 hover:text-purple-300 font-medium">
              → Sally Face 2 Info
            </Link>
            <Link href="/trailers" className="text-purple-400 hover:text-purple-300 font-medium">
              → Watch Trailers
            </Link>
            <Link href="/characters" className="text-purple-400 hover:text-purple-300 font-medium">
              → Character Guide
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
