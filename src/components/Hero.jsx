import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -80]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.6]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden" style={{backgroundColor:'#121212'}}>
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-[#121212]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-40 pb-24">
        <motion.div style={{ y, opacity }}>
          <h1
            className="text-[44px] sm:text-[64px] md:text-[72px] leading-[1.05] font-extrabold tracking-tight text-white"
            style={{fontFamily:'Montserrat, Inter, sans-serif'}}
          >
            Alex Future
          </h1>
          <p
            className="mt-4 text-[20px] sm:text-[22px] md:text-[24px] italic text-[#7DF9FF] max-w-3xl"
            style={{fontFamily:'Montserrat, Inter, sans-serif'}}
          >
            Designing intelligent, human-centered digital experiences.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="px-6 py-3 rounded-md bg-[#7DF9FF] text-black font-semibold hover:bg-[#00FFFF] transition-colors">View Projects</a>
            <a href="#about" className="px-6 py-3 rounded-md border border-[#2A2A2A] text-[#7DF9FF] hover:border-[#00FFFF] transition-colors">About Me</a>
          </div>
        </motion.div>
      </div>

      <AboutSection />
    </section>
  );
}

function AboutSection() {
  return (
    <div className="relative z-10 bg-[#121212]" id="about">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 md:col-span-4 flex justify-center md:justify-start">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop"
              alt="Headshot"
              className="w-44 h-44 md:w-56 md:h-56 rounded-full object-cover ring-4 ring-[#1E1E1E]"
            />
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2 className="text-[32px] md:text-[36px] font-bold text-[#7DF9FF]" style={{fontFamily:'Montserrat, Inter, sans-serif'}}>About Me</h2>
            <p className="mt-4 text-[#A9A9A9] leading-7" style={{fontFamily:'\"Open Sans\", Inter, sans-serif', fontSize:16}}>
              I am a multidisciplinary engineer focused on AI-driven products and immersive web experiences. My work blends machine learning, interaction design, and scalable systems to craft solutions that feel effortless and futuristic. I believe in clear communication, rigorous experimentation, and designing for real human needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
