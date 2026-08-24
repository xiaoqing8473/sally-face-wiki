import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Sally Face 2 Wiki — Release Date, Trailers, Gameplay Guide',
  description: 'Complete guide to Sally Face 2, covering release date, platforms, gameplay, trailers, and everything announced by Portable Moose. Stay updated with the latest news!',
  keywords: 'Sally Face 2, Steam, horror game, Portable Moose, release date, gameplay, trailer',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full mb-6">
            <span className="text-purple-300 text-sm font-medium">Fan-Made Community Wiki</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            Sally Face 2
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            After the haunting climax of Sally Face, the sequel continues the dark adventure with a group of friends
            struggling to find meaning in a world broken by darkness.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
            <div className="px-4 py-2 bg-slate-800/50 rounded-lg border border-slate-700">
              <span className="text-purple-400">Announced Aug 16, 2026</span>
            </div>
            <div className="px-4 py-2 bg-slate-800/50 rounded-lg border border-slate-700">
              <span className="text-purple-400">Steam Early Access Coming Soon</span>
            </div>
            <div className="px-4 py-2 bg-slate-800/50 rounded-lg border border-slate-700">
              <span className="text-purple-400">Post-Apocalypse Setting</span>
            </div>
            <div className="px-4 py-2 bg-slate-800/50 rounded-lg border border-slate-700">
              <span className="text-purple-400">Puzzle-Driven Adventure</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link
              href="/release-date"
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105"
            >
              Check Release Date
            </Link>
            <Link
              href="/trailers"
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg border border-slate-700 transition-all"
            >
              Watch Trailers
            </Link>
            <a
              href="https://store.steampowered.com/app/3937470/Sally_Face_2/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg border border-slate-700 transition-all"
            >
              Wishlist on Steam
            </a>
          </div>

          {/* Video Label */}
          <div className="text-sm text-slate-400">
            <span className="inline-block px-3 py-1 bg-slate-800/50 rounded border border-slate-700">
              📺 Official Media Available
            </span>
          </div>
        </div>
      </section>

      {/* Start Here Section */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-purple-400 text-sm font-medium uppercase tracking-wider">Start Here</span>
            <h2 className="text-4xl font-bold text-white mt-2">Your Sally Face 2 Journey</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <Link href="/beginner-guide" className="group">
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-purple-500 transition-all hover:transform hover:scale-105">
                <div className="text-5xl font-bold text-purple-600 mb-4">1</div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  Beginner Guide
                </h3>
                <p className="text-slate-400 text-sm">
                  Everything you need to know before starting Sally Face 2, from the story so far to gameplay basics.
                </p>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/release-date" className="group">
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-purple-500 transition-all hover:transform hover:scale-105">
                <div className="text-5xl font-bold text-purple-600 mb-4">2</div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  Release Date Info
                </h3>
                <p className="text-slate-400 text-sm">
                  Platform roadmap, Early Access details, and how to stay updated on the latest announcements.
                </p>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/trailers" className="group">
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-purple-500 transition-all hover:transform hover:scale-105">
                <div className="text-5xl font-bold text-purple-600 mb-4">3</div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  Trailer Breakdown
                </h3>
                <p className="text-slate-400 text-sm">
                  Frame-by-frame analysis of the official teaser, revealing hidden details and story clues.
                </p>
              </div>
            </Link>

            {/* Card 4 */}
            <Link href="/episodes" className="group">
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-purple-500 transition-all hover:transform hover:scale-105">
                <div className="text-5xl font-bold text-purple-600 mb-4">4</div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  Story Recap
                </h3>
                <p className="text-slate-400 text-sm">
                  Complete recap of Sally Face Episode 2 and what to expect in the sequel's dark narrative.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Game Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">What is Sally Face 2?</h2>

              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Sally Face 2 is a supernatural, post-apocalypse horror adventure game developed by Portable Moose,
                  the studio behind the cult hit original game that garnered "Overwhelmingly Positive" reviews on Steam.
                </p>
                <p>
                  Set after the haunting climax of the first game, the sequel follows a group of friends—Ashley, Todd,
                  and a fragmented version of Sal—as they navigate through a world broken by darkness, exploring the
                  abandoned ruins of Nockfell.
                </p>
                <p>
                  Featuring brain-bending puzzles, cryptic brain teasers, and a new hint system, Sally Face 2 promises
                  to deliver another unsettling narrative-driven experience with side-scrolling gameplay.
                </p>
              </div>

              <Link
                href="/release-date"
                className="inline-block mt-8 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all"
              >
                Explore All Guides →
              </Link>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-slate-700">
                  <span className="text-slate-400">Developer</span>
                  <span className="text-white font-semibold">Portable Moose</span>
                </div>
                <div className="flex justify-between py-3 border-b border-slate-700">
                  <span className="text-slate-400">Platform</span>
                  <span className="text-white font-semibold">PC, Consoles, iOS, Android</span>
                </div>
                <div className="flex justify-between py-3 border-b border-slate-700">
                  <span className="text-slate-400">Genre</span>
                  <span className="text-white font-semibold">Horror Adventure, Puzzle</span>
                </div>
                <div className="flex justify-between py-3 border-b border-slate-700">
                  <span className="text-slate-400">Announced</span>
                  <span className="text-white font-semibold">August 16, 2026</span>
                </div>
                <div className="flex justify-between py-3 border-b border-slate-700">
                  <span className="text-slate-400">Early Access</span>
                  <span className="text-white font-semibold">Steam (TBA)</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-slate-400">Original Rating</span>
                  <span className="text-green-400 font-semibold">Overwhelmingly Positive</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/50 to-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Master Sally Face 2?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            From your first steps in the abandoned Nockfell to solving cryptic brain teasers, our community wiki
            has you covered. Join thousands of fans preparing for the sequel.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/beginner-guide"
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105"
            >
              Read the Beginner Guide
            </Link>
            <a
              href="https://store.steampowered.com/app/3937470/Sally_Face_2/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg border border-slate-700 transition-all"
            >
              Wishlist on Steam
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Sally Face 2 Wiki</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                An independent fan-made wiki covering release date, gameplay, trailers, and guides for Sally Face 2,
                the supernatural horror adventure sequel by Portable Moose.
              </p>
              <p className="text-slate-500 text-xs">
                Free horror adventure on PC, Consoles, and Mobile. Post-apocalypse setting, puzzle-driven gameplay.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Official Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://store.steampowered.com/app/3937470/Sally_Face_2/"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-slate-400 hover:text-purple-400 transition-colors">
                    Steam Page
                  </a>
                </li>
                <li>
                  <a href="https://portablemoose.com/"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-slate-400 hover:text-purple-400 transition-colors">
                    Official Website
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/portablemoose/"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-slate-400 hover:text-purple-400 transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/portablemoose"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-slate-400 hover:text-purple-400 transition-colors">
                    Twitter/X
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Wiki Pages</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/release-date" className="text-slate-400 hover:text-purple-400 transition-colors">
                    Release Date
                  </Link>
                </li>
                <li>
                  <Link href="/trailers" className="text-slate-400 hover:text-purple-400 transition-colors">
                    Trailers & Videos
                  </Link>
                </li>
                <li>
                  <Link href="/episodes" className="text-slate-400 hover:text-purple-400 transition-colors">
                    Episodes & Story
                  </Link>
                </li>
                <li>
                  <Link href="/characters" className="text-slate-400 hover:text-purple-400 transition-colors">
                    Characters
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-wrap justify-between items-center text-sm text-slate-500">
            <p>© 2026 Sally Face 2 Wiki. Fan-made, not affiliated with Portable Moose.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
