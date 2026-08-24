import Link from 'next/link';

export const metadata = {
  title: 'Sally Face 2 Release Date - When is it Coming Out? | Sally Face 2 Wiki',
  description: 'Sally Face 2 was announced on August 16, 2026, for Steam Early Access, followed by console and mobile releases. Get the latest updates on the release date.',
  keywords: 'Sally Face 2 release date, when is Sally Face 2 coming out, Steam Early Access, Portable Moose',
};

export default function ReleaseDatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="text-sm text-slate-400 mb-8">
          <Link href="/" className="hover:text-purple-400">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-300">Release Date</span>
        </div>

        {/* Hero */}
        <div className="mb-12">
          <div className="inline-block px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-full mb-4">
            <span className="text-green-300 text-sm font-medium">✓ Officially Announced</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Sally Face 2 Release Date
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Sally Face 2 was officially announced on August 16, 2026—the 10th anniversary of the original game.
            While no specific release date has been revealed, the game will launch first in Steam Early Access,
            followed by console and mobile platforms.
          </p>
        </div>

        {/* Quick Answer Box */}
        <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <span className="mr-3">📅</span>
            When is Sally Face 2 Coming Out?
          </h2>
          <div className="space-y-3 text-slate-300">
            <p className="flex items-start">
              <span className="text-purple-400 font-bold mr-3">•</span>
              <span><strong className="text-white">Announcement:</strong> August 16, 2026 (10th anniversary)</span>
            </p>
            <p className="flex items-start">
              <span className="text-purple-400 font-bold mr-3">•</span>
              <span><strong className="text-white">Steam Early Access:</strong> TBA (Coming Soon)</span>
            </p>
            <p className="flex items-start">
              <span className="text-purple-400 font-bold mr-3">•</span>
              <span><strong className="text-white">Full Release:</strong> TBA</span>
            </p>
            <p className="flex items-start">
              <span className="text-purple-400 font-bold mr-3">•</span>
              <span><strong className="text-white">Consoles & Mobile:</strong> After PC release</span>
            </p>
          </div>
        </div>

        {/* Platform Release Order */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Platform Release Order</h2>
          <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden">
            <div className="divide-y divide-slate-700">
              <div className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
                    <span className="text-2xl mr-3">1️⃣</span>
                    PC (Steam Early Access)
                  </h3>
                  <p className="text-slate-400">First platform to receive the game. Exact date to be announced.</p>
                </div>
                <span className="px-4 py-2 bg-green-600/20 text-green-300 rounded-full text-sm font-medium">
                  First
                </span>
              </div>

              <div className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
                    <span className="text-2xl mr-3">2️⃣</span>
                    Consoles
                  </h3>
                  <p className="text-slate-400">PlayStation, Xbox, and Nintendo Switch (expected) after PC launch.</p>
                </div>
                <span className="px-4 py-2 bg-slate-700 text-slate-300 rounded-full text-sm font-medium">
                  Later
                </span>
              </div>

              <div className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
                    <span className="text-2xl mr-3">3️⃣</span>
                    Mobile (iOS & Android)
                  </h3>
                  <p className="text-slate-400">Mobile versions planned after console releases.</p>
                </div>
                <span className="px-4 py-2 bg-slate-700 text-slate-300 rounded-full text-sm font-medium">
                  Later
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Development Timeline */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Development Timeline</h2>
          <div className="space-y-6">
            <div className="flex">
              <div className="flex-shrink-0 w-32 text-purple-400 font-semibold">2025-2026</div>
              <div className="flex-1">
                <h3 className="text-white font-semibold mb-2">Team Expansion</h3>
                <p className="text-slate-400">
                  Portable Moose expanded from a solo operation to a team of four to focus on Sally Face 2 production.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 w-32 text-purple-400 font-semibold">Aug 16, 2026</div>
              <div className="flex-1">
                <h3 className="text-white font-semibold mb-2">Official Announcement</h3>
                <p className="text-slate-400">
                  Sally Face 2 was revealed on the 10th anniversary of the original game via a live teaser trailer
                  streamed on Portable Moose's YouTube channel.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 w-32 text-purple-400 font-semibold">TBA</div>
              <div className="flex-1">
                <h3 className="text-white font-semibold mb-2">Steam Early Access Launch</h3>
                <p className="text-slate-400">
                  Specific date to be announced. Follow official channels for updates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Stay Updated */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">How to Stay Updated</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="https://store.steampowered.com/app/3937470/Sally_Face_2/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-purple-500 transition-all group"
            >
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400">
                🎮 Wishlist on Steam
              </h3>
              <p className="text-slate-400 text-sm">
                Get notified immediately when the release date is announced.
              </p>
            </a>

            <a
              href="https://www.instagram.com/portablemoose/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-purple-500 transition-all group"
            >
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400">
                📱 Follow on Instagram
              </h3>
              <p className="text-slate-400 text-sm">
                Development updates and behind-the-scenes content from Portable Moose.
              </p>
            </a>

            <a
              href="https://twitter.com/portablemoose"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-purple-500 transition-all group"
            >
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400">
                🐦 Follow on Twitter/X
              </h3>
              <p className="text-slate-400 text-sm">
                Real-time announcements and community engagement.
              </p>
            </a>

            <a
              href="https://portablemoose.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-purple-500 transition-all group"
            >
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400">
                🌐 Visit Official Website
              </h3>
              <p className="text-slate-400 text-sm">
                Press kit, news, and official announcements from Portable Moose.
              </p>
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="bg-slate-800 border border-slate-700 rounded-lg p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                Is Sally Face 2 out yet?
                <span className="text-purple-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-slate-400 leading-relaxed">
                No, Sally Face 2 is still in development. It was announced on August 16, 2026, but no release date
                has been confirmed yet. The game will launch first in Steam Early Access.
              </p>
            </details>

            <details className="bg-slate-800 border border-slate-700 rounded-lg p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                When will Early Access start?
                <span className="text-purple-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-slate-400 leading-relaxed">
                The exact date for Steam Early Access has not been announced. Portable Moose will reveal the date
                closer to launch. Wishlist the game on Steam to get notified immediately.
              </p>
            </details>

            <details className="bg-slate-800 border border-slate-700 rounded-lg p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                Will it be free to play?
                <span className="text-purple-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-slate-400 leading-relaxed">
                Pricing has not been announced yet. The original Sally Face was a paid game, so Sally Face 2 is
                expected to be paid as well, but official pricing will be revealed closer to release.
              </p>
            </details>

            <details className="bg-slate-800 border border-slate-700 rounded-lg p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                What platforms will Sally Face 2 be on?
                <span className="text-purple-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-slate-400 leading-relaxed">
                Sally Face 2 will launch first on PC via Steam Early Access, followed by consoles (PlayStation, Xbox,
                and likely Nintendo Switch) and mobile devices (iOS and Android).
              </p>
            </details>
          </div>
        </section>

        {/* Related Pages */}
        <section className="bg-slate-800 border border-slate-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Related Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/trailers" className="text-purple-400 hover:text-purple-300 font-medium">
              → Watch Official Trailers
            </Link>
            <Link href="/episodes" className="text-purple-400 hover:text-purple-300 font-medium">
              → Episode 2 Walkthrough
            </Link>
            <Link href="/" className="text-purple-400 hover:text-purple-300 font-medium">
              → Back to Home
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
