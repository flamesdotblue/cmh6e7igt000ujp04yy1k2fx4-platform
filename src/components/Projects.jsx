import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const projects = [
  {
    id: 'p1',
    title: 'AI-Powered Music Generator',
    thumb: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1453090927415-5f45085b65c0?q=80&w=1200&auto=format&fit=crop',
    ],
    description:
      'A generative system that composes adaptive soundtracks using transformer architectures and timbre-conditioned diffusion. Built with Python, PyTorch, and a WebAudio-powered interface.',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 'p2',
    title: 'Decentralized Social Platform',
    thumb: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop',
    ],
    description:
      'A resilient, peer-to-peer social network featuring content moderation via zero-knowledge proofs and reputation staking. Implemented with TypeScript, libp2p, and smart contracts.',
  },
  {
    id: 'p3',
    title: 'Interactive Data Visualization Tool',
    thumb: 'https://images.unsplash.com/photo-1526401485004-2fda9f4d6f6a?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1551281044-8c9478173ae9?q=80&w=1200&auto=format&fit=crop',
    ],
    description:
      'A WebGL-accelerated platform for exploring large-scale datasets with fluid interactions, multi-dimensional projections, and storytelling features.',
  },
];

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section className="relative bg-[#121212] py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 md:col-span-8">
            <h2 className="text-[32px] md:text-[36px] font-bold text-[#7DF9FF]" style={{fontFamily:'Montserrat, Inter, sans-serif'}}>Projects</h2>
            <p className="mt-2 text-[#A9A9A9]" style={{fontFamily:'\"Open Sans\", Inter, sans-serif', fontSize:16}}>Selected work exploring AI, decentralized systems, and advanced visualization.</p>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right">
            <a href="#skills" className="inline-block px-5 py-2 rounded-md bg-[#7DF9FF] text-black font-semibold hover:bg-[#00FFFF] transition-colors">View Skills</a>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p)}
              className="group relative rounded-xl overflow-hidden border border-[#1E1E1E] focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
            >
              <img src={p.thumb} alt={p.title} className="w-full h-60 object-cover" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <span className="px-2 py-1 rounded bg-black/50 text-[#7DF9FF] font-bold" style={{fontFamily:'\"Open Sans\", Inter, sans-serif', fontSize:18}}>{p.title}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[60] flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/80"
              onClick={() => setActive(null)}
            />
            <motion.aside
              className="ml-auto w-full max-w-3xl h-full bg-[#0f0f0f] border-l border-[#1E1E1E] overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold text-[#7DF9FF]" style={{fontFamily:'Montserrat, Inter, sans-serif'}}>{active.title}</h3>
                  <button
                    onClick={() => setActive(null)}
                    className="px-4 py-2 rounded-md bg-[#7DF9FF] text-black font-semibold hover:bg-[#00FFFF] transition-colors"
                  >
                    Close
                  </button>
                </div>
                <p className="mt-4 text-[#A9A9A9]" style={{fontFamily:'\"Open Sans\", Inter, sans-serif', fontSize:16}}>{active.description}</p>
                {active.video && (
                  <div className="mt-6 aspect-video rounded-lg overflow-hidden border border-[#1E1E1E]">
                    <iframe
                      src={active.video}
                      title={active.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
                {active.images?.length > 0 && (
                  <div className="mt-6 grid grid-cols-12 gap-4">
                    {active.images.map((src, i) => (
                      <img key={i} src={src} alt="Project detail" className="col-span-12 sm:col-span-6 rounded-lg border border-[#1E1E1E]" />
                    ))}
                  </div>
                )}
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
