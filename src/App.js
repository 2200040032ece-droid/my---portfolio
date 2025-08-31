function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="text-center py-10 bg-blue-600 text-white shadow-md">
        <h1 className="text-4xl font-bold">Deepthi Madavarapu</h1>
        <p className="text-lg mt-2">
          Aspiring Software Engineer | Data Science & AI Enthusiast
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="mailto:2200040032ece@gmail.com"
            className="hover:underline"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/deepthi-madavarapu-245533249/"
            target="_blank"
            className="hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            className="hover:underline"
          >
            GitHub
          </a>
        </div>
      </header>

      {/* About */}
      <section className="max-w-3xl mx-auto py-10 px-6">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          I am a final-year B.Tech student in Electronics & Communication
          Engineering with a strong background in software development, data
          science, and machine learning. Passionate about solving real-world
          problems using technology and eager to contribute to innovative
          projects.
        </p>
      </section>

      {/* Skills */}
      <section className="max-w-3xl mx-auto py-10 px-6">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="grid grid-cols-2 gap-3 list-disc list-inside">
          <li>Python</li>
          <li>Java</li>
          <li>C</li>
          <li>SQL</li>
          <li>Machine Learning & Deep Learning</li>
          <li>Data Structures & Algorithms</li>
          <li>Azure, AWS, Big Data</li>
          <li>Automation Anywhere</li>
        </ul>
      </section>

      {/* Education */}
      <section className="max-w-3xl mx-auto py-10 px-6">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div className="space-y-4">
          <div>
            <p className="font-bold">KL University, Vaddeswaram</p>
            <p>B.Tech – Electronics & Communication Engineering (2022 – 2026)</p>
          </div>
          <div>
            <p className="font-bold">Sri Chaitanya Junior College, Vijayawada</p>
            <p>Intermediate – BiPC (2020 – 2022)</p>
          </div>
          <div>
            <p className="font-bold">Atkinson Senior Secondary School, Vijayawada</p>
            <p>10th Standard (2019 – 2020)</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-3xl mx-auto py-10 px-6">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="space-y-6">
          <div>
            <p className="font-bold">
              Inventory Management with Demand Forecasting
            </p>
            <p>
              Built forecasting models using Python to predict inventory needs,
              reducing stockouts and overstock through automation.
            </p>
          </div>
          <div>
            <p className="font-bold">Traffic Management using ML & DL</p>
            <p>
              Developed ML/DL models to predict congestion, applied computer
              vision for real-time analysis, and used predictive analytics to
              reduce travel delays.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="max-w-3xl mx-auto py-10 px-6">
        <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
        <ul className="list-disc list-inside">
          <li>AWS Cloud Practitioner Essentials – Aug 2025</li>
          <li>Python for Data Science (Infosys Springboard) – Aug 2025</li>
          <li>Automation Anywhere – Certified Professional – Mar 2025</li>
          <li>Introduction to Machine Learning – Feb 2024</li>
          <li>AI & Machine Learning using Python – Oct 2023</li>
        </ul>
      </section>

      {/* Resume Download */}
      <section className="text-center py-10">
        <a
          href="/Deepthi_Madavarapu_Resume.pdf"
          download
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Download Resume (PDF)
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-200 text-sm text-gray-600">
        © 2025 Deepthi Madavarapu | Built with React & TailwindCSS
      </footer>
    </div>
  );
}

export default App;
