<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Deepthi Madavarapu | Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
        }
        /* Simple animation for section headers */
        .section-header {
            animation: fadeInDown 1s ease-out;
        }
        @keyframes fadeInDown {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    </style>
</head>
<body class="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">

    <!-- =======================================================
         HEADER & NAVIGATION
         ======================================================= -->
    <header class="bg-white dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 shadow-md">
        <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="#" class="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Deepthi M.</a>
            <div class="hidden md:flex space-x-6 items-center">
                <a href="#home" class="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition">Home</a>
                <a href="#about" class="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition">About</a>
                <a href="#projects" class="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition">Projects</a>
                <a href="#gallery" class="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition">Gallery</a>
                <a href="#certifications" class="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition">Certifications</a>
                <a href="#contact" class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition-transform transform hover:scale-105">Contact</a>
            </div>
            <!-- Mobile Menu Button can be added here if needed -->
        </nav>
    </header>

    <main>
        <!-- =======================================================
             HERO SECTION
             ======================================================= -->
        <section id="home" class="bg-gray-50 dark:bg-gray-800">
            <div class="container mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center">
                <!-- Image Div -->
                <div class="md:w-1/2 flex justify-center items-center">
                     <img src="https://i.imgur.com/b5U4CD1.jpeg" alt="Deepthi Madavarapu" class="rounded-full shadow-2xl w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-white dark:border-gray-700" style="object-position: center 20%;">
                </div>
                <!-- Text Div -->
                <div class="md:w-1/2 text-center md:text-left mt-12 md:mt-0 md:pl-12">
                    <h1 class="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
                        Hi, I'm <span class="text-indigo-500">Deepthi Madavarapu</span>
                    </h1>
                    <p class="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
                        A final-year Electronics & Communication Engineering student passionate about software development, data science, and machine learning.
                    </p>
                    <div class="mt-8 flex justify-center md:justify-start space-x-4">
                        <a href="https://linkedin.com/in/deepthi-madavarapu-245533249/" target="_blank" class="text-indigo-500 hover:text-indigo-700" aria-label="LinkedIn Profile">
                            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"/></svg>
                        </a>
                        <a href="https://github.com/2200040032ece-droid" target="_blank" class="text-indigo-500 hover:text-indigo-700" aria-label="GitHub Profile">
                            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- =======================================================
             ABOUT / SKILLS SECTION
             ======================================================= -->
        <section id="about" class="py-20">
            <div class="container mx-auto px-6 lg:px-8">
                <div class="text-center mb-12 section-header">
                    <h2 class="text-4xl font-extrabold text-gray-900 dark:text-white">About Me & My Skills</h2>
                    <div class="mt-4 mx-auto w-24 h-1 bg-indigo-500 rounded"></div>
                </div>
                <div class="max-w-4xl mx-auto text-center text-lg text-gray-600 dark:text-gray-300 mb-12">
                    <p>I am skilled in problem-solving, algorithms, and data-driven decision-making. I'm actively seeking opportunities in Software Development, Data Engineering, or AI/ML to contribute to innovative solutions while continuously learning and growing in the tech industry.</p>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                    <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center shadow-md hover:shadow-xl transition-shadow">
                        <h3 class="font-bold text-lg text-gray-900 dark:text-white mb-2">Programming</h3>
                        <p>C, Python, Java, SQL</p>
                    </div>
                    <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center shadow-md hover:shadow-xl transition-shadow">
                        <h3 class="font-bold text-lg text-gray-900 dark:text-white mb-2">Data & Cloud</h3>
                        <p>Azure, AWS, Big Data, Data Warehousing</p>
                    </div>
                    <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center shadow-md hover:shadow-xl transition-shadow">
                        <h3 class="font-bold text-lg text-gray-900 dark:text-white mb-2">Core Skills</h3>
                        <p>Data Structures, ML, DL, Software Development</p>
                    </div>
                    <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center shadow-md hover:shadow-xl transition-shadow">
                        <h3 class="font-bold text-lg text-gray-900 dark:text-white mb-2">Tools</h3>
                        <p>Excel, Automation Anywhere, Git</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- =======================================================
             PROJECTS SECTION
             ======================================================= -->
        <section id="projects" class="bg-gray-50 dark:bg-gray-800 py-20">
            <div class="container mx-auto px-6 lg:px-8">
                <div class="text-center mb-12 section-header">
                    <h2 class="text-4xl font-extrabold text-gray-900 dark:text-white">My Projects</h2>
                    <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">Here's a look at what I've been working on.</p>
                    <div class="mt-4 mx-auto w-24 h-1 bg-indigo-500 rounded"></div>
                </div>
                <div class="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
                    <!-- Project 1 -->
                    <div class="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 flex flex-col">
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">Inventory Management with Demand Forecasting</h3>
                        <p class="text-gray-600 dark:text-gray-300 flex-grow">
                            Built forecasting models to predict inventory needs from historical sales data. This system automates inventory control, reducing both stockouts and overstock, with visualizations for tracking key trends.
                        </p>
                        <div class="mt-4 mb-6">
                            <span class="inline-block bg-indigo-100 text-indigo-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">Python</span>
                            <span class="inline-block bg-green-100 text-green-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Excel</span>
                             <span class="inline-block bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">Machine Learning</span>
                        </div>
                        <div class="flex space-x-4 mt-auto">
                            <a href="#" class="w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition">View Live</a>
                            <a href="#" class="w-full text-center bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg transition dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">Source Code</a>
                        </div>
                    </div>
                    <!-- Project 2 -->
                    <div class="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 flex flex-col">
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">Traffic Management using ML & DL</h3>
                        <p class="text-gray-600 dark:text-gray-300 flex-grow">
                            Developed models for traffic congestion prediction and flow optimization. This project integrates real-time analysis using computer vision and sensor data to detect anomalies and forecast conditions, reducing travel delays.
                        </p>
                        <div class="mt-4 mb-6">
                            <span class="inline-block bg-indigo-100 text-indigo-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">Python</span>
                            <span class="inline-block bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">Machine Learning</span>
                            <span class="inline-block bg-purple-100 text-purple-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">Deep Learning</span>
                        </div>
                        <div class="flex space-x-4 mt-auto">
                            <a href="#" class="w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition">View Live</a>
                            <a href="#" class="w-full text-center bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg transition dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">Source Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- =======================================================
             MY WORK / GALLERY SECTION
             ======================================================= -->
        <section id="gallery" class="py-20">
            <div class="container mx-auto px-6 lg:px-8">
                <div class="text-center mb-12 section-header">
                    <h2 class="text-4xl font-extrabold text-gray-900 dark:text-white">My Work & Gallery</h2>
                    <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">A collection of my projects and designs.</p>
                    <div class="mt-4 mx-auto w-24 h-1 bg-indigo-500 rounded"></div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="group bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                        <div class="relative">
                            <img class="w-full h-60 object-cover" src="https://placehold.co/600x400/6366f1/ffffff?text=Project+Image" alt="Inventory Management with Demand Forecasting">
                            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center p-4">
                                <p class="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">Inventory Management with Demand Forecasting</p>
                            </div>
                        </div>
                    </div>
                    <div class="group bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                        <div class="relative">
                            <img class="w-full h-60 object-cover" src="https://placehold.co/600x400/818cf8/ffffff?text=Project+Image" alt="Traffic Management using ML & DL">
                            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center p-4">
                                <p class="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">Traffic Management using ML & DL</p>
                            </div>
                        </div>
                    </div>
                    <div class="group bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                        <div class="relative">
                            <img class="w-full h-60 object-cover" src="https://placehold.co/600x400/a5b4fc/ffffff?text=Your+Image+3" alt="Description of your image 3">
                            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                                <p class="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Another Project</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- =======================================================
             CERTIFICATIONS SECTION
             ======================================================= -->
        <section id="certifications" class="bg-gray-50 dark:bg-gray-800 py-20">
            <div class="container mx-auto px-6 lg:px-8">
                <div class="text-center mb-12 section-header">
                    <h2 class="text-4xl font-extrabold text-gray-900 dark:text-white">Licenses & Certifications</h2>
                    <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">My professional credentials and qualifications.</p>
                    <div class="mt-4 mx-auto w-24 h-1 bg-indigo-500 rounded"></div>
                </div>
                <div class="max-w-4xl mx-auto space-y-8">
                    <!-- AWS Certification -->
                    <div class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md flex items-center space-x-6 hover:shadow-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300">
                        <div class="flex-shrink-0">
                            <a href="https://i.imgur.com/F9Makyd.png" target="_blank">
                                <img src="https://i.imgur.com/F9Makyd.png" alt="AWS Cloud Practitioner Certificate" class="w-24 h-auto rounded-md shadow-sm">
                            </a>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-gray-900 dark:text-white">AWS Cloud Practitioner Essentials</h3>
                            <p class="text-md text-gray-700 dark:text-gray-300 mt-1">Amazon Web Services (AWS)</p>
                            <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Issued: Aug 2025</p>
                            <a href="https://i.imgur.com/F9Makyd.png" target="_blank" class="inline-block mt-3 text-indigo-500 hover:text-indigo-700 dark:hover:text-indigo-400 font-semibold">Show Credential &rarr;</a>
                        </div>
                    </div>
                    <!-- Python for Data Science Certification -->
                    <div class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md flex items-center space-x-6 hover:shadow-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300">
                        <div class="flex-shrink-0">
                             <a href="https://i.imgur.com/yZrKioG.png" target="_blank">
                                <img src="https://i.imgur.com/yZrKioG.png" alt="Python for Data Science Certificate" class="w-24 h-auto rounded-md shadow-sm">
                            </a>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-gray-900 dark:text-white">Python for Data Science</h3>
                            <p class="text-md text-gray-700 dark:text-gray-300 mt-1">Infosys Springboard</p>
                            <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Issued: Aug 2025</p>
                            <a href="https://i.imgur.com/yZrKioG.png" target="_blank" class="inline-block mt-3 text-indigo-500 hover:text-indigo-700 dark:hover:text-indigo-400 font-semibold">Show Credential &rarr;</a>
                        </div>
                    </div>
                    <!-- Automation Anywhere Certification -->
                    <div class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md flex items-center space-x-6 hover:shadow-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300">
                        <div class="flex-shrink-0">
                            <a href="https://i.imgur.com/HPZNtGy.png" target="_blank">
                                <img src="https://i.imgur.com/HPZNtGy.png" alt="Automation Anywhere Certificate" class="w-24 h-auto rounded-md shadow-sm">
                            </a>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-gray-900 dark:text-white">Automation Anywhere - Certified Automation Professional</h3>
                            <p class="text-md text-gray-700 dark:text-gray-300 mt-1">Automation Anywhere</p>
                            <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Issued: Mar 2025 · Expires: Mar 2027</p>
                            <a href="https://i.imgur.com/HPZNtGy.png" target="_blank" class="inline-block mt-3 text-indigo-500 hover:text-indigo-700 dark:hover:text-indigo-400 font-semibold">Show Credential &rarr;</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- =======================================================
             CONTACT SECTION
             ======================================================= -->
        <section id="contact" class="bg-gray-50 dark:bg-gray-800 py-20">
            <div class="container mx-auto px-6 text-center">
                 <div class="text-center mb-12 section-header">
                    <h2 class="text-4xl font-extrabold text-gray-900 dark:text-white">Get In Touch</h2>
                    <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">I'm open to new opportunities. Let's connect!</p>
                    <div class="mt-4 mx-auto w-24 h-1 bg-indigo-500 rounded"></div>
                </div>
                <div class="mt-8">
                    <p class="text-xl font-medium text-gray-800 dark:text-gray-100">
                        <a href="mailto:2200040032ece@gmail.com" class="hover:text-indigo-500">2200040032ece@gmail.com</a>
                    </p>
                    <p class="text-lg text-gray-600 dark:text-gray-300 mt-2">
                        +91-9381151930
                    </p>
                </div>
            </div>
        </section>

    </main>

    <!-- =======================================================
         FOOTER
         ======================================================= -->
    <footer class="bg-white dark:bg-gray-900">
        <div class="container mx-auto px-6 py-4 text-center text-gray-600 dark:text-gray-400">
            <p>&copy; 2025 Deepthi Madavarapu. All Rights Reserved.</p>
        </div>
    </footer>

</body>
</html>









