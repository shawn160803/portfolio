
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Download, Sun, Moon } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'light';
    setTheme(saved);
    if (saved === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('theme', next);
    if (next === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  };

  const projects = [
    {
      title: 'Flight Booking System',
      tech: 'React.js, Node.js, MySQL',
      desc: 'Developed a full-stack flight booking platform with authentication, seat availability, and secure payments.',
      link: '#'
    },
    {
      title: 'Task Manager Web App',
      tech: 'MERN Stack',
      desc: 'Built a task management web app with JWT authentication, CRUD operations, and React Hooks for live updates.',
      link: '#'
    },
    {
      title: 'Heart Disease Predictor',
      tech: 'Python, Machine Learning',
      desc: 'Created an ML model with 84% accuracy to predict heart disease using health indicators and logistic regression.',
      link: '#'
    },
    {
      title: 'Sales Dashboard',
      tech: 'Power BI, Excel',
      desc: 'Designed an interactive Power BI dashboard analyzing regional and monthly sales trends for business insights.',
      link: '#'
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 scroll-smooth">
      <header className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4 md:px-0">
        <div>
          <h1 className="text-xl font-bold">Priyanshu Gupta</h1>
          <p className="text-sm text-gray-500 dark:text-gray-300">Software Developer</p>
        </div>
        <div className="flex items-center gap-3">
          <a href="/Priyanshu_Gupta_Clickable_FullStack_Developer_Resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-2 bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700">
              <Download size={14} /> Resume
            </button>
          </a>
          <button onClick={toggleTheme} aria-label="Toggle theme" className="p-2 rounded-md bg-gray-100 dark:bg-gray-800">
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>
        </div>
      </header>

      <section id="home" className="text-center py-20">
        <motion.h2 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-extrabold">
          Hi, I’m <span className="text-blue-600 dark:text-blue-400">Priyanshu Gupta</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-lg mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Software Developer building web apps and data-driven tools. Passionate about clean code, performance, and impactful products.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-6 flex justify-center gap-4">
          <a href="#projects">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">See Projects</button>
          </a>
          <a href="mailto:priyanshugupta426@gmail.com">
            <button className="bg-gray-200 dark:bg-gray-800 px-4 py-2 rounded-md">Contact</button>
          </a>
        </motion.div>
      </section>

      <section id="about" className="max-w-3xl mx-auto py-10 text-center">
        <motion.h3 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 10 }} className="text-2xl font-semibold mb-4 text-blue-600">About Me</motion.h3>
        <motion.p whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} className="text-gray-700 dark:text-gray-300">
          I am a Computer Science graduate from Dehradun focused on building scalable web applications and data tools. I work primarily with React, Node, and Python, and enjoy turning ideas into polished, usable products.
        </motion.p>
      </section>

      <section id="skills" className="max-w-4xl mx-auto py-10">
        <motion.h3 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 10 }} className="text-2xl font-semibold mb-6 text-center text-blue-600">Technical Skills</motion.h3>
        <div className="grid md:grid-cols-2 gap-6 px-4 md:px-0">
          <div className="p-4 border rounded-md bg-white dark:bg-gray-800 shadow-sm">
            <h4 className="font-semibold mb-2">Frontend</h4>
            <p>React.js, HTML5, CSS3, JavaScript, Tailwind CSS</p>
          </div>
          <div className="p-4 border rounded-md bg-white dark:bg-gray-800 shadow-sm">
            <h4 className="font-semibold mb-2">Backend</h4>
            <p>Node.js, Express.js, MySQL, MongoDB, REST APIs</p>
          </div>
          <div className="p-4 border rounded-md bg-white dark:bg-gray-800 shadow-sm">
            <h4 className="font-semibold mb-2">Data & Analytics</h4>
            <p>Python, Pandas, NumPy, Power BI, SQL, Excel</p>
          </div>
          <div className="p-4 border rounded-md bg-white dark:bg-gray-800 shadow-sm">
            <h4 className="font-semibold mb-2">Tools & Soft Skills</h4>
            <p>Git, GitHub, VS Code, Problem Solving, Teamwork, Agile</p>
          </div>
        </div>
      </section>

      <section id="projects" className="max-w-5xl mx-auto py-10">
        <motion.h3 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 10 }} className="text-2xl font-semibold mb-6 text-center text-blue-600">Projects</motion.h3>
        <div className="grid sm:grid-cols-2 gap-6 px-4 md:px-0">
          {projects.map((proj, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.02 }} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }}>
              <div className="p-4 border rounded-md bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition">
                <h4 className="font-semibold text-lg">{proj.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{proj.tech}</p>
                <p className="text-gray-700 dark:text-gray-200 text-sm">{proj.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="text-center py-12 bg-blue-50 dark:bg-gray-800">
        <motion.h3 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 10 }} className="text-2xl font-semibold mb-4 text-blue-600">Contact Me</motion.h3>
        <motion.p whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} className="text-gray-700 dark:text-gray-300 mb-6">Feel free to reach out for collaborations or opportunities!</motion.p>
        <div className="flex justify-center gap-6">
          <a href="mailto:priyanshugupta426@gmail.com" className="text-blue-600 dark:text-blue-300 hover:opacity-80"><Mail /></a>
          <a href="tel:+916396132408" className="text-blue-600 dark:text-blue-300 hover:opacity-80"><Phone /></a>
          <a href="https://github.com/shawn160803" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-300 hover:opacity-80"><Github /></a>
          <a href="https://www.linkedin.com/in/priyanshu-gupta-54b813254" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-300 hover:opacity-80"><Linkedin /></a>
        </div>
      </section>

      <footer className="text-center py-6 text-sm text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} Priyanshu Gupta • Software Developer</footer>
    </div>
  );
}
