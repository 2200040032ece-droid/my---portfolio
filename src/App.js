import React from 'react';

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 font-sans leading-normal tracking-normal">
      {/* Navigation Bar */}
      <nav className="bg-white dark:bg-gray-900 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800 dark:text-white">
            <a href="#home">Deepthi M.</a>
          </div>
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-indigo-500">About</a>
            <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-indigo-500">Projects</a>
            <a href="#gallery" className="text-gray-600 dark:text-gray-300 hover:text-indigo-500">Gallery</a>
            <a href="#certifications" className="text-gray-600 dark:text-gray-300 hover:text-indigo-500">Certifications</a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-indigo-500">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-6 py-24 md:py-32 flex flex-col-reverse md:flex-row items-center">
                {/* Text Div */}
                <div className="md:w-1/2 text-center md:text-left mt-12 md:mt-0">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
                        Hi, I'm <span className="text-indigo-500">Deepthi Madavarapu</span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
                        A final-year Electronics & Communication Engineering student passionate about software development, data science, and machine learning.
                    </p>
                    <div className="mt-8 flex justify-center md:justify-start space-x-4">
                        <a href="https://linkedin.com/in/deepthi-madavarapu-245533249/" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-700" aria-label="LinkedIn Profile">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/></svg>
                        </a>
                         <a href="https://github.com/2200040032ece-droid" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-700" aria-label="GitHub Profile">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        </a>
                    </div>
                </div>
                 {/* Image Div */}
                <div className="md:w-1/2 flex justify-center items-center">
                     <img src="https://i.imgur.com/b5U4CD1.jpeg" alt="Deepthi Madavarapu" className="rounded-full shadow-2xl w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-white dark:border-gray-700" style={{ objectPosition: 'center 20%' }} />
                </div>
            </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">About Me</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  I am a final-year B.Tech student in Electronics & Communication Engineering at KL University. I have a strong foundation in software development, data science, and machine learning.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  My technical skills include programming in C, Python, Java, and SQL, along with experience in cloud platforms like Azure and AWS. I'm proficient in data structures, algorithms, and leveraging tools like Git and Automation Anywhere.
                </p>
                 <p className="text-gray-600 dark:text-gray-300">
                  I am passionate about solving complex problems and contributing to innovative, data-driven solutions. I am actively seeking opportunities where I can apply my skills and continue to learn and grow in the tech industry.
                </p>
              </div>
              <div className="md:w-1/3 md:pl-10 mt-8 md:mt-0">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Technical Skills</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li><span className="font-semibold">Programming:</span> C, Python, Java, SQL</li>
                  <li><span className="font-semibold">Data & Cloud:</span> Azure, AWS, Big Data</li>
                  <li><span className="font-semibold">Tools:</span> Excel, Automation Anywhere, Git</li>
                  <li><span className="font-semibold">Core:</span> ML, DL, Data Structures & Algorithms</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Project 1 */}
                    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Inventory Management with Demand Forecasting</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Developed robust forecasting models using Python to predict inventory requirements based on historical sales data. This system automated inventory control logic, significantly reducing stockouts and overstock situations. I also designed data visualizations in Python & Excel to track key performance indicators and trends.
                        </p>
                        <div className="flex flex-wrap">
                            <span className="bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">Python</span>
                            <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Machine Learning</span>
                            <span className="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">Data Visualization</span>
                            <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Excel</span>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Traffic Management using ML & DL</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Engineered Machine Learning and Deep Learning models for traffic congestion prediction and flow optimization. This project integrated real-time analysis using computer vision and sensor data to detect anomalies. I applied predictive analytics to forecast traffic conditions, effectively reducing travel delays for commuters.
                        </p>
                         <div className="flex flex-wrap">
                            <span className="bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">Python</span>
                            <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Deep Learning</span>
                             <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Computer Vision</span>
                            <span className="bg-purple-100 text-purple-800 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">Predictive Analytics</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <img src="https://placehold.co/600x400/312e81/ffffff?text=Inventory+System" alt="Inventory Management Project" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Inventory Management</h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">Forecasting models to predict inventory needs.</p>
                </div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <img src="https://placehold.co/600x400/15803d/ffffff?text=Traffic+Analysis" alt="Traffic Management Project" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Traffic Management</h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">ML/DL models for traffic congestion prediction.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Certifications</h2>
            <div className="max-w-4xl mx-auto space-y-8">
                
                {/* Certificate 1 */}
                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 flex items-center space-x-6">
                    <img src="https://i.imgur.com/F9Makyd.png" alt="AWS Certificate" className="w-24 h-24 object-contain rounded-md flex-shrink-0" />
                    <div className="flex-grow">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">AWS Cloud Practitioner Essentials</h3>
                        <p className="text-gray-500 dark:text-gray-400">Issued: Aug 2025</p>
                    </div>
                    <a href="https://i.imgur.com/F9Makyd.png" target="_blank" rel="noopener noreferrer" className="inline-block bg-indigo-500 text-white font-bold py-2 px-4 rounded hover:bg-indigo-600 transition-colors">
                        Show Credential
                    </a>
                </div>

                {/* Certificate 2 */}
                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 flex items-center space-x-6">
                     <img src="https://i.imgur.com/yZrKioG.png" alt="Python Certificate" className="w-24 h-24 object-contain rounded-md flex-shrink-0" />
                    <div className="flex-grow">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Python for Data Science (Infosys Springboard)</h3>
                        <p className="text-gray-500 dark:text-gray-400">Issued: Aug 2025</p>
                    </div>
                    <a href="https://i.imgur.com/yZrKioG.png" target="_blank" rel="noopener noreferrer" className="inline-block bg-indigo-500 text-white font-bold py-2 px-4 rounded hover:bg-indigo-600 transition-colors">
                        Show Credential
                    </a>
                </div>

                {/* Certificate 3 */}
                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 flex items-center space-x-6">
                    <img src="https://i.imgur.com/HPZNtGy.png" alt="Automation Anywhere Certificate" className="w-24 h-24 object-contain rounded-md flex-shrink-0" />
                    <div className="flex-grow">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Automation Anywhere - Certified Automation Professional</h3>
                        <p className="text-gray-500 dark:text-gray-400">Issued: Mar 2025</p>
                    </div>
                    <a href="https://i.imgur.com/HPZNtGy.png" target="_blank" rel="noopener noreferrer" className="inline-block bg-indigo-500 text-white font-bold py-2 px-4 rounded hover:bg-indigo-600 transition-colors">
                        Show Credential
                    </a>
                </div>
                
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Get In Touch</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm currently seeking new opportunities and would love to hear from you. Whether you have a question or just want to say hi, feel free to reach out.
            </p>
            <a href="mailto:2200040032ece@gmail.com" className="bg-indigo-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-600 transition-colors text-lg">
              Say Hello
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Deepthi Madavarapu. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
