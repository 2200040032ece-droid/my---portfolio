import React, { useState, useEffect } from 'react';

// --- SVG Icons ---
// Using components for icons makes the code cleaner
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
);

const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
);

const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
);


// --- Main App Component ---
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // --- Data for easy editing ---
  const personalInfo = {
    name: "Deepthi Madavarapu",
    email: "2200040032ece@gmail.com",
    phone: "+91-9381151930",
    linkedin: "https://www.linkedin.com/in/deepthi-madavarapu-245533249/",
    github: "https://github.com/2200040032ece-droid",
    profileImage: "https://i.imgur.com/b5U4CD1.jpeg",
    summary: "Final-year Electronics & Communication Engineering student specializing in Data Science and Machine Learning. Proven ability to build end-to-end software solutions, from predictive modeling to real-time traffic analysis using computer vision. Seeking a challenging role to apply skills in Python, predictive analytics, and cloud technologies.",
  };

  const skills = [
    { title: 'Programming Languages', list: 'Python, Java, C, SQL' },
    { title: 'Data Science & ML', list: 'Machine Learning, Deep Learning, Predictive Analytics, NLP, Computer Vision, Pandas, NumPy, Scikit-learn, TensorFlow, Keras, OpenCV' },
    { title: 'Cloud & Data Engineering', list: 'AWS (Cloud Practitioner), Azure, Big Data Concepts, Data Warehousing' },
    { title: 'Developer Tools', list: 'Git, Automation Anywhere, Microsoft Excel' },
  ];

  const projects = [
    {
      title: 'Inventory Management with Demand Forecasting',
      description: 'Engineered a predictive system that reduced stockouts and overstock by building forecasting models in Python. Utilized Pandas, NumPy for data manipulation and Scikit-learn for model development. Designed interactive data visualizations using Matplotlib.',
    },
    {
      title: 'Traffic Management using ML & Deep Learning',
      description: 'Developed an intelligent system to reduce travel delays by applying predictive analytics. Built and deployed Deep Learning models using TensorFlow and Keras for real-time traffic flow optimization. Integrated OpenCV for computer vision-based analysis of traffic feeds.',
    },
  ];

  const certifications = [
    {
      title: 'AWS Cloud Practitioner Essentials',
      imageUrl: 'https://i.imgur.com/F9Makyd.png',
      date: 'Aug 2025',
    },
    {
      title: 'Python for Data Science (Infosys)',
      imageUrl: 'https://i.imgur.com/yZrKioG.png',
      date: 'Aug 2025',
    },
    {
      title: 'Automation Anywhere Certified Professional',
      imageUrl: 'https://i.imgur.com/HPZNtGy.png',
      date: 'Mar 2025',
    },
    {
      title: 'Introduction to Machine Learning',
      imageUrl: 'https://i.imgur.com/W5HImD9.png',
      date: 'Feb 2024',
    },
    {
      title: 'AI & ML using Python',
      imageUrl: 'https://i.imgur.com/zkmqddE.png',
      date: 'Oct 2023',
    },
  ];


  return (
    <div className="bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans leading-relaxed">
      
      {/* --- Header --- */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-xl font-bold text-slate-900 dark:text-white">{personalInfo.name}</a>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="hover:text-sky-500 transition-colors">About</a>
            <a href="#skills" className="hover:text-sky-500 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-sky-500 transition-colors">Projects</a>
            <a href="#certifications" className="hover:text-sky-500 transition-colors">Certifications</a>
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              {isDarkMode ? <SunIcon /> : <MoonIcon />}
            </button>
          </nav>
          <button onClick={toggleDarkMode} className="md:hidden p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              {isDarkMode ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </header>

      <main className="pt-20">
        
        {/* --- Hero Section --- */}
        <section id="home" className="min-h-screen flex items-center bg-dots-pattern">
          <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 flex justify-center">
              <img 
                src={personalInfo.profileImage}
                alt={personalInfo.name} 
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-8 border-white dark:border-slate-800"
                style={{objectPosition: 'center 20%'}}
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white">
                Hi, I'm <span className="text-sky-500 dark:text-sky-400">Deepthi</span>
              </h1>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto md:mx-0">
                {personalInfo.summary}
              </p>
              <div className="mt-8 flex justify-center md:justify-start gap-4">
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-400 transition-colors">
                  <LinkedinIcon />
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-400 transition-colors">
                  <GithubIcon />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* --- About Section (Included in Hero for this design) --- */}
        <section id="about"></section>


        {/* --- Skills Section --- */}
        <section id="skills" className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {skills.map(skill => (
                <div key={skill.title} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold text-sky-500 dark:text-sky-400 mb-3">{skill.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{skill.list}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Projects Section --- */}
        <section id="projects" className="py-20 md:py-32 bg-slate-100 dark:bg-slate-800/50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {projects.map(project => (
                <div key={project.title} className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Certifications Section --- */}
        <section id="certifications" className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Certifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map(cert => (
                <div key={cert.title} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md text-center">
                  {cert.imageUrl && (
                     <a href={cert.imageUrl} target="_blank" rel="noopener noreferrer">
                      <img src={cert.imageUrl} alt={cert.title} className="h-40 w-full object-contain mb-4 rounded-md"/>
                    </a>
                  )}
                  {!cert.imageUrl && (
                    <div className="h-40 w-full bg-slate-100 dark:bg-slate-700 mb-4 rounded-md flex items-center justify-center">
                       <p className="text-slate-400">No Image</p>
                    </div>
                  )}
                  <h3 className="text-lg font-semibold">{cert.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* --- Footer --- */}
      <footer className="bg-slate-100 dark:bg-slate-800/50 py-8">
          <div className="container mx-auto px-6 text-center text-slate-500 dark:text-slate-400">
              <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.</p>
          </div>
      </footer>
    </div>
  );
}

export default App;

