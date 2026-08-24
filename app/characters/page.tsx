import Link from 'next/link';

export const metadata = {
  title: 'Sally Face 2 Characters Guide | Sally Face 2 Wiki',
  description: 'Complete character guide for Sally Face 2. Learn about Sal, Ashley, Todd, and other characters in the post-apocalyptic sequel.',
  keywords: 'Sally Face 2 characters, Sal, Ashley, Todd, cast, characters guide',
};

export default function CharactersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-sm text-slate-400 mb-8">
          <Link href="/" className="hover:text-purple-400">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-300">Characters</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Sally Face 2 Characters
        </h1>
        <p className="text-xl text-slate-300 mb-12">
          Meet the characters returning in Sally Face 2's post-apocalyptic world.
        </p>

        {/* Main Characters */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Main Characters</h2>

          <div className="space-y-8">
            {/* Sal Fisher */}
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-24 h-24 bg-purple-600 rounded-lg flex items-center justify-center text-4xl">
                  🎭
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Sal Fisher (Sally Face)</h3>
                  <div className="space-y-2 text-slate-300">
                    <p>
                      <strong className="text-purple-400">Status in Sally Face 2:</strong> Fragmented, mysterious
                    </p>
                    <p>
                      The protagonist of the first game, Sal appears in Sally Face 2 in a fragmented form, donning
                      a cloak similar to the cult from the original game. His exact role and state remain one of the
                      biggest mysteries of the sequel.
                    </p>
                    <p className="text-slate-400 italic">
                      "Whatever is left of him struggles to find meaning in a world broken by darkness."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ashley */}
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-24 h-24 bg-pink-600 rounded-lg flex items-center justify-center text-4xl">
                  👧
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Ashley Campbell</h3>
                  <div className="space-y-2 text-slate-300">
                    <p>
                      <strong className="text-purple-400">Status in Sally Face 2:</strong> Survivor, older
                    </p>
                    <p>
                      One of Sal's closest friends from the first game, Ashley appears in Sally Face 2 as an older
                      version of herself, going through strife as she explores the abandoned Nockfell with Todd.
                      She seems to be one of the main protagonists in the sequel.
                    </p>
                    <p className="text-slate-400 italic">
                      "Adventuring through the ruins, searching for answers in a broken world."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Todd */}
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-24 h-24 bg-blue-600 rounded-lg flex items-center justify-center text-4xl">
                  👦
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Todd Morrison</h3>
                  <div className="space-y-2 text-slate-300">
                    <p>
                      <strong className="text-purple-400">Status in Sally Face 2:</strong> Survivor, older
                    </p>
                    <p>
                      Another of Sal's friends, Todd is shown alongside Ashley in the Sally Face 2 teaser,
                      exploring the post-apocalyptic remains of Nockfell. Like Ashley, he has aged and appears
                      to have gone through significant hardship.
                    </p>
                    <p className="text-slate-400 italic">
                      "Together with Ashley, uncovering the dark truth behind the world's collapse."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Character Development Notice */}
        <section className="mb-12">
          <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
              <span className="mr-3">⚠️</span>
              Game Still in Development
            </h3>
            <p className="text-purple-200 leading-relaxed">
              Sally Face 2 is still in development, and full character details have not been revealed yet.
              This page will be updated with complete character information, backstories, and relationships
              once the game releases in Steam Early Access.
            </p>
          </div>
        </section>

        {/* What We Know */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">What We Know From the Teaser</h2>
          <div className="space-y-4">
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Post-Apocalyptic Setting</h3>
              <p className="text-slate-400">
                The world has been broken by darkness. Nockfell is abandoned, with ruins of the Addison Apartments
                and other familiar locations now empty and decayed.
              </p>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Time Skip</h3>
              <p className="text-slate-400">
                Significant time has passed since the events of the first game. Ashley and Todd are noticeably older,
                suggesting years have gone by.
              </p>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Sal's Transformation</h3>
              <p className="text-slate-400">
                Sal appears in a fragmented, mysterious form wearing cult-like robes. The exact nature of his
                transformation and his role in Sally Face 2 remains to be revealed.
              </p>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="bg-slate-800 border border-slate-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Learn More</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/trailers" className="text-purple-400 hover:text-purple-300 font-medium">
              → Watch the Teaser
            </Link>
            <Link href="/episodes" className="text-purple-400 hover:text-purple-300 font-medium">
              → Episode 2 Guide
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
