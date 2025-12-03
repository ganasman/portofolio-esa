'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

type Certificate = {
  title: string;
  issuer: string;
  image: string;
};

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  tech: string[];
};

type Skill = {
  name: string;
  icon: string;
  color?: string;
};

export default function Page() {
  const [currentRole, setCurrentRole] = useState<number>(0);
  const [mounted, setMounted] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [fullscreenImage, setFullscreenImage] = useState<Certificate | null>(null);

  const roles = [
    'Full Stack Developer',
    'Web Developer',
    'Mobile Developer',
    'Database Engineer'
  ];

  const frontendSkills: Skill[] = [
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' }
  ];

  const backendSkills: Skill[] = [
    { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
    { name: 'Prisma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg' }
  ];

  const projects: Project[] = [
    {
      title: 'System Input Data PPDB',
      description: 'Backend system for student registration and high school visit using Next.js and Prisma',
      image: '/images/sistem-ppdb.png',
      link: 'https://github.com/ganasman/be-ppdb',
      tech: ['Next.js', 'Prisma', 'TypeScript']
    },
    {
      title: 'System Booking Tiket Shuttle Bus',
      description: 'Web-based shuttle bus ticket booking system using Next.js and Supabase',
      image: '/images/ibis.png',
      link: 'https://example.com',
      tech: ['Supabase', 'Next.js', 'NestJS']
    },
    {
      title: 'CBT Online',
      description: 'Computer-Based Test online application using PHP and CodeIgniter',
      image: '/images/cbt.png',
      link: 'https://example.com',
      tech: ['PHP', 'MySQL', 'CodeIgniter']
    }
  ];

  const certificates: Certificate[] = [
    {
      title: 'PT WanTeknologi – Frontend Web Development Competency Certificate',
      issuer: 'Created a responsive landing page using HTML and CSS',
      image: '/images/sertikom1-depan.jpg'
    },
    {
      title: 'Dimensi Kreasi Nusantara – Backend Web Development Competency Certificate',
      issuer: 'Developed a web-based hotel booking application using PHP and MySQL',
      image: '/images/sertikom2-depan.jpg'
    },
    {
      title: 'Kreasi Media – Fullstack Web Development Competency Certificate',
      issuer: 'Built a library management system using Laravel, covering both frontend and backend components',
      image: '/images/sertikom3-depan.jpg'
    },
    {
      title: 'Ginvo Studio – Fullstack App Development Competency Certificate',
      issuer: 'Built a habit tracker system using React Native and Laravel, covering both frontend and backend components',
      image: '/images/sertikom4-depan.jpg'
    }
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTransitioning(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
    // roles is static in this component; disabling exhaustive-deps is intentional
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 relative overflow-hidden">
      {mounted && (
        <div className="fixed inset-0 opacity-30 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-purple-400 rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 2 + 2}s`
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10">
        {/* Hero */}
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 relative">
              <div className="relative w-40 h-40 mx-auto group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-violet-500 to-purple-500 rounded-full animate-spin-slow opacity-75 blur-sm" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-950 transform transition-all duration-500 group-hover:scale-105">
                  <Image src="/images/jawa.jpg" alt="Profile" fill className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-violet-500 to-purple-600 bg-clip-text text-transparent animate-fade-in px-4">
              Muhammad Esa Pungky
            </h1>

            <div className="h-16 mb-8 overflow-hidden px-4">
              <p
                className={`text-2xl sm:text-3xl text-purple-300 transition-all duration-500 ease-in-out transform ${
                  isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                }`}
              >
                {roles[currentRole]}
              </p>
            </div>

            <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up px-4" style={{ animationDelay: '0.2s' }}>
              Crafting elegant solutions through code. Passionate about building scalable web and mobile applications with cutting-edge technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-fade-in-up px-4" style={{ animationDelay: '0.4s' }}>
              <a href="#about" className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 transform">
                About Me
              </a>
              <a href="#projects" className="border-2 border-purple-600 hover:bg-purple-600/20 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 transform">
                View Projects
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-20 px-6 bg-gray-900/30" id="about">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-center text-gray-400 mb-12 text-lg">Get to know more about me</p>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-violet-600/20 rounded-2xl blur-2xl" />
                <div className="relative bg-gray-900/50 backdrop-blur border border-purple-900/30 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500">
                  <div className="aspect-square rounded-xl overflow-hidden mb-6 relative">
                    <Image src="/images/esa.jpg" alt="Workspace" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-purple-900/20 rounded-lg p-4 text-center border border-purple-800/30 hover:border-purple-600/50 transition-all duration-300">
                      <p className="text-3xl font-bold text-purple-300 mb-1">3</p>
                      <p className="text-sm text-gray-400">Years Experience</p>
                    </div>
                    <div className="bg-purple-900/20 rounded-lg p-4 text-center border border-purple-800/30 hover:border-purple-600/50 transition-all duration-300">
                      <p className="text-3xl font-bold text-purple-300 mb-1">20+</p>
                      <p className="text-sm text-gray-400">Projects Done</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Hello! I&apos;m Muhammad Esa Pungky Kristanto, a passionate <span className="text-purple-400 font-semibold">Full Stack Developer</span> with a keen eye for creating seamless digital experiences. My journey in tech started 3 years ago, and since then, I&apos;ve been dedicated to crafting elegant solutions to complex problems.
                  </p>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    I specialize in building <span className="text-purple-400 font-semibold">modern web applications</span> using cutting-edge technologies like React, Next.js, and Laravel. Whether it&apos;s a responsive website, a complex web application, or a mobile app, I bring creativity and technical excellence to every project.
                  </p>
                </div>

                <div className="pt-6 border-t border-purple-900/30">
                  <h3 className="text-xl font-semibold text-purple-300 mb-4">What I Bring to the Table:</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      'Clean Code Architecture',
                      'Responsive Design',
                      'Performance Optimization',
                      'Problem Solving',
                      'Team Collaboration',
                      'Agile Methodology'
                    ].map((skill, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-300 hover:text-purple-300 transition-colors duration-300">
                        <svg className="w-5 h-5 text-purple-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="py-20 px-6" id="skills">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent">
              Tech Stack
            </h2>
            <p className="text-center text-gray-400 mb-16 text-lg">Technologies I work with</p>

            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-purple-300 flex items-center justify-center gap-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Frontend Development
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {frontendSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/50 backdrop-blur border border-purple-900/30 p-6 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 text-center group transform hover:-translate-y-2"
                    style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
                  >
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative">
                      <Image src={skill.icon} alt={skill.name} width={64} height={64} className="object-contain" />
                    </div>
                    <p className="font-semibold text-gray-300 group-hover:text-purple-300 transition-colors">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-8 text-purple-300 flex items-center justify-center gap-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
                Backend Development
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {backendSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/50 backdrop-blur border border-purple-900/30 p-6 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 text-center group transform hover:-translate-y-2"
                    style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
                  >
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative">
                      <Image src={skill.icon} alt={skill.name} width={64} height={64} className="object-contain" />
                    </div>
                    <p className="font-semibold text-gray-300 group-hover:text-purple-300 transition-colors">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="py-20 px-6 bg-gray-900/30" id="projects">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-center text-gray-400 mb-16 text-lg">Some of my top projects</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur border border-purple-900/30 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20 group transform hover:-translate-y-2"
                  style={{ animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-purple-300 group-hover:text-purple-200 transition-colors">{project.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="text-xs bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full hover:bg-purple-900/50 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-all duration-300 group-hover:gap-3">
                      View Project
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certificates */}
        <section className="py-20 px-6" id="certificates">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent">
              Certificates & Achievements
            </h2>
            <p className="text-center text-gray-400 mb-16 text-lg">Professional certifications and accomplishments</p>
            <div className="grid md:grid-cols-3 gap-8">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur border border-purple-900/30 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20 cursor-pointer group transform hover:-translate-y-2"
                  onClick={() => setFullscreenImage(cert)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image src={cert.image} alt={cert.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-1 text-purple-300 group-hover:text-purple-200 transition-colors">{cert.title}</h3>
                    <p className="text-gray-400 text-sm">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20 px-6 bg-gray-900/30" id="contact">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent">
              Contact Me!
            </h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">Have a project in mind or just want to chat? Feel free to reach out!</p>
            <div className="flex flex-wrap gap-6 justify-center">
              <a href="mailto:muhammadesapungky@gmail.com" className="flex items-center gap-3 bg-gray-900/50 backdrop-blur border border-purple-900/30 px-8 py-4 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 transform hover:-translate-y-1 group">
                <svg className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="group-hover:text-purple-300 transition-colors">muhammadesapungky@gmail.com</span>
              </a>

              <a href="https://github.com/ganasman" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-gray-900/50 backdrop-blur border border-purple-900/30 px-8 py-4 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 transform hover:-translate-y-1 group">
                <svg className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span className="group-hover:text-purple-300 transition-colors">GitHub</span>
              </a>

              <a href="https://linkedin.com/in/muhammad-esa-pungky-kristanto-458a78378" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-gray-900/50 backdrop-blur border border-purple-900/30 px-8 py-4 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 transform hover:-translate-y-1 group">
                <svg className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="group-hover:text-purple-300 transition-colors">LinkedIn</span>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-purple-900/30">
          <div className="max-w-6xl mx-auto text-center text-gray-500">
            <p>© 2025 Portofolio Muhammad Esa Pungky Kristanto. Built with Next.js.</p>
          </div>
        </footer>
      </div>

      {/* Fullscreen Certificate Modal */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setFullscreenImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-purple-400 transition-all duration-300 hover:scale-110 transform"
            onClick={() => setFullscreenImage(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="max-w-5xl max-h-full animate-scale-in">
            <div className="relative w-full max-w-5xl h-[90vh]">
              <Image src={fullscreenImage.image} alt={fullscreenImage.title} fill className="object-contain rounded-lg shadow-2xl" />
            </div>
            <div className="text-center mt-6">
              <h3 className="text-2xl font-bold text-purple-300 mb-2">{fullscreenImage.title}</h3>
              <p className="text-gray-400">{fullscreenImage.issuer}</p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.4s ease-out;
        }

        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
      `}</style>
    </div>
  );
}
