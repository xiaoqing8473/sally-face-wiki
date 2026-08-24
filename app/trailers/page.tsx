import Link from 'next/link';

export const metadata = {
  title: 'Sally Face 2 Trailers & Teasers - Official Videos | Sally Face 2 Wiki',
  description: 'Watch and analyze the official Sally Face 2 teaser trailer revealed on the 10th anniversary. Frame-by-frame breakdown of scenes, characters, and story clues.',
  keywords: 'Sally Face 2 trailer, teaser, official video, Portable Moose, 10th anniversary',
};

export default function TrailersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-sm text-slate-400 mb-8">
          <Link href="/" className="hover:text-purple-400">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-300">Trailers</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Sally Face 2 Trailers & Videos
        </h1>
        <p className="text-xl text-slate-300 mb-12">
          Official trailers, teasers, and video content for Sally Face 2, revealed by Portable Moose.
        </p>

        {/* Official Teaser */}
        <section className="mb-16">
          <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden">
            <div className="aspect-video bg-slate-900 flex items-center justify-center">
              <div className="text-center">
                <p className="text-slate-400 mb-4">Official Teaser Trailer</p>
                <a
                  href="https://www.youtube.com/results?search_query=Sally+Face+2+official+teaser"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg inline-block transition-all"
                >
                  Watch on YouTube →
                </a>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-3">Sally Face 2 — Official Teaser (Aug 16, 2026)</h2>
              <p className="text-slate-400 mb-4">
                Revealed during the 10th anniversary livestream. Shows the abandoned post-apocalyptic Nockfell,
                with Ashley and Todd exploring the ruins.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-700 text-slate-300 rounded text-sm">10th Anniversary</span>
                <span className="px-3 py-1 bg-slate-700 text-slate-300 rounded text-sm">First Look</span>
                <span className="px-3 py-1 bg-slate-700 text-slate-300 rounded text-sm">Post-Apocalypse</span>
              </div>
            </div>
          </div>
        </section>

        {/* Trailer Breakdown */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Teaser Breakdown</h2>
          <div className="space-y-6">
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                <span className="text-2xl mr-3">🏚️</span>
                Setting: Abandoned Nockfell
              </h3>
              <p className="text-slate-400">
                The teaser shows a decrepit, abandoned version of Nockfell. We see an out-of-use gas station
                and what little is left of the Addison Apartments—the iconic location from the first game,
                now in ruins.
              </p>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                <span className="text-2xl mr-3">👥</span>
                Characters: Ashley & Todd
              </h3>
              <p className="text-slate-400">
                Ashley and Todd are shown adventuring together, older and going through strife. They appear
                to be the main protagonists in Sally Face 2, exploring the wasteland together.
              </p>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                <span className="text-2xl mr-3">🎭</span>
                Sal's Fate
              </h3>
              <p className="text-slate-400">
                Sal, or whatever is left of him, seems to be a fragmented version of himself, donning a cloak
                much similar to that of the cult from the first game. His exact role in the sequel remains mysterious.
              </p>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                <span className="text-2xl mr-3">🧩</span>
                Gameplay Hints
              </h3>
              <p className="text-slate-400">
                The trailer hints at brain-bending puzzles and cryptic brain teasers. Sally Face 2 features a new
                hint system to help players survive the challenging puzzles in this broken world.
              </p>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="bg-slate-800 border border-slate-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6">More Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/release-date" className="text-purple-400 hover:text-purple-300 font-medium">
              → Check Release Date
            </Link>
            <Link href="/episodes" className="text-purple-400 hover:text-purple-300 font-medium">
              → Episode 2 Guide
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
