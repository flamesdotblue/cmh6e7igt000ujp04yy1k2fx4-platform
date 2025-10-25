import React from 'react';

const skills = [
  { name: 'Python', level: 92 },
  { name: 'JavaScript', level: 90 },
  { name: 'UI/UX Design', level: 82 },
  { name: 'Machine Learning', level: 88 },
];

const education = [
  { title: "Master's in Computer Science, MIT", date: '2018 — 2020', desc: 'Focused on machine learning systems, HCI, and data visualization.' },
  { title: "Bachelor's in Software Engineering, Stanford", date: '2014 — 2018', desc: 'Explored distributed systems, design thinking, and entrepreneurship.' },
];

const blogs = [
  { title: 'The Future of AI in Design', date: 'Aug 2024', desc: 'How generative models reshape creative workflows and design systems.' },
  { title: 'Building Scalable Web Applications', date: 'May 2024', desc: 'Patterns for resilient, observable, and efficient frontends and backends.' },
  { title: 'The Importance of User-Centered Design', date: 'Jan 2024', desc: 'Bridging research insights with production constraints for impact.' },
];

export default function SkillsEducationBlogs() {
  return (
    <div className="bg-[#121212]">
      <Skills />
      <EducationBlogs />
    </div>
  );
}

function Skills() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-[32px] md:text-[36px] font-bold text-[#7DF9FF]" style={{fontFamily:'Montserrat, Inter, sans-serif'}}>Skills & Experience</h2>
        <div className="mt-10 grid grid-cols-12 gap-8">
          {skills.map((s) => (
            <div key={s.name} className="col-span-12 sm:col-span-6 lg:col-span-3">
              <div className="p-5 rounded-xl bg-[#1E1E1E] border border-[#2A2A2A]">
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold" style={{fontFamily:'\"Open Sans\", Inter, sans-serif'}}>{s.name}</span>
                  <span className="text-[#A9A9A9]" style={{fontFamily:'\"Open Sans\", Inter, sans-serif'}}>{s.level}%</span>
                </div>
                <div className="mt-3 h-2 rounded bg-black/40 overflow-hidden">
                  <div
                    className="h-full rounded bg-[#7DF9FF] transition-all duration-500 hover:bg-[#00FFFF] shadow-[0_0_12px_#00FFFF]"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationBlogs() {
  return (
    <section className="py-24 border-t border-[#1E1E1E]" id="education-blogs">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-6">
            <h3 className="text-[28px] md:text-[32px] font-bold text-[#7DF9FF]" style={{fontFamily:'Montserrat, Inter, sans-serif'}}>Education</h3>
            <div className="mt-6 space-y-4">
              {education.map((e) => (
                <div key={e.title} className="p-5 rounded-xl bg-[#1E1E1E] border border-[#2A2A2A]">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-white font-semibold" style={{fontFamily:'\"Open Sans\", Inter, sans-serif'}}>{e.title}</span>
                    <span className="text-[#A9A9A9] text-sm" style={{fontFamily:'\"Open Sans\", Inter, sans-serif'}}>{e.date}</span>
                  </div>
                  <p className="mt-2 text-[#A9A9A9]" style={{fontFamily:'\"Open Sans\", Inter, sans-serif', fontSize:16}}>{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <h3 className="text-[28px] md:text-[32px] font-bold text-[#7DF9FF]" style={{fontFamily:'Montserrat, Inter, sans-serif'}}>Blogs</h3>
            <div className="mt-6 grid grid-cols-12 gap-4">
              {blogs.map((b) => (
                <article key={b.title} className="col-span-12 sm:col-span-6 lg:col-span-12 xl:col-span-6 p-5 rounded-xl bg-[#1E1E1E] border border-[#2A2A2A] hover:border-[#00FFFF] transition-colors">
                  <h4 className="text-white font-semibold" style={{fontFamily:'\"Open Sans\", Inter, sans-serif'}}>{b.title}</h4>
                  <span className="text-[#A9A9A9] text-sm" style={{fontFamily:'\"Open Sans\", Inter, sans-serif'}}>{b.date}</span>
                  <p className="mt-2 text-[#A9A9A9]" style={{fontFamily:'\"Open Sans\", Inter, sans-serif', fontSize:16}}>{b.desc}</p>
                  <a href="#" className="mt-3 inline-block px-4 py-2 rounded-md bg-[#7DF9FF] text-black font-medium hover:bg-[#00FFFF] transition-colors">Read</a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
