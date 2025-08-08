
import { useState } from "react";
import { motion }  from "framer-motion";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaMedal,
  FaYoutube,
} from "react-icons/fa";
import {

  SiReact,
 
} from "react-icons/si";
import { RiFocus2Line } from "react-icons/ri";
import { GrProjects } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import { FaLaptopCode } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa6";
import { AiFillRobot } from "react-icons/ai";
import { GiFruitBowl } from "react-icons/gi";
import { SiQuicktype } from "react-icons/si";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("personal");

  // Project data
  const projects = {
    personal: [
      {
        id: 1,
        title: "CodeMinder",
        status: "Live",
        url: "https://code-minder.vercel.app",
        description:
          "Built a coding dashboard that increased user task tracking efficiency by 40% with features like question tracking, event reminders, and AI-powered personalized mentorship",
        technologies: [
          "MERN Stack",
          "Gemini API",
          "Tailwind CSS",
          "OpenCV",
          "Flask",
        ],
        icon: <FaLaptopCode size={25} />,
      },
      {
        id: 2,
        title: "SkillSync",
        status: "Live",
        url: "https://skill-sync-beta-six.vercel.app",
        description:
          "AI-powered job portal with personalized recommendations, AI Mock Interview, Resume Analyzer, and secure admin dashboard with role-based access",
        technologies: ["MERN Stack", "Redux", "Gemini API", "Firebase"],
        icon: <GiSkills size={25} />,
      },
      {
        id: 3,
        title: "FocusZen",
        status: "Live",
        url: "https://focus-zen.vercel.app",
        description:
          "Focused productivity app for task and time management with real-time user analytics to track efficiency and focus sessions.",
        technologies: ["MERN Stack", "Gemini API", "Tailwind CSS"],
        icon: <RiFocus2Line size={25} />,
      },
      {
        id: 4,
        title: "Project Hub",
        status: "Live",
        url: "https://myprojectshub.vercel.app",
        description:
          "Interactive platform to showcase projects with Firebase-powered real-time updates, authentication, and modern responsive UI.",
        technologies: ["React JS", "Firebase", "Tailwind CSS", "Git"],
        icon: <GrProjects size={25} />,
      },
    ],
    client: [
      {
        id: 1,
        title: "Multilingual Support System",
        status: "github",
        url: "https://github.com/prathmesh-sargar/frontzip",
        client: "Collab Vision Infosolution",
        description:
          "Implemented multilingual support (4 languages) improving user accessibility by 30% across global regions",
        technologies: ["React.js", "i18next", "REST APIs"],
        icon: <FaLanguage size={25} />,
      },
      {
        id: 2,
        title: "Sentiment Analysis Chatbot",
        status: "github",
        url: "https://github.com/prathmesh-sargar/Sentiment-Bot",
        client: "E-commerce Product Team (Freelance)",
        description:
          "Real-time sentiment analysis chatbot for customer feedback using Flask and React. Detects positive or negative emotions with ML model and interactive UI.",
        technologies: ["Flask", "React.js", "Vite", "NLTK", "Tailwind CSS"],
        icon: <AiFillRobot size={25} />,
      },
      {
        id: 3,
        title: "Dry Fruit Store E-commerce",
        status: "github",
        url: "https://github.com/prathmesh-sargar/Dry-Fruit-Store",
        client: "College Student (Freelance)",
        description:
          "Built a basic e-commerce website for a dry fruit store with product listings, cart functionality, and MySQL database for storing product data.",
        technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
        icon: <GiFruitBowl size={25} />,
      },
      {
        id: 4,
        title: "QuickLearn",
        status: "github",
        url: "https://github.com/prathmesh-sargar/QuickLearn",
        client: "DYPCET First Year Student Helpdesk",
        description:
          "Educational web app offering subject notes, previous year question papers, and a JavaScript-based chatbot for academic assistance.",
        technologies: ["HTML", "CSS", "JavaScript"],
        icon: <SiQuicktype size={25} />,
      },
    ],
  };

  // Animation variants
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    hover: {
      scale: 1.03,
      background:
        "linear-gradient(45deg, #000000, #2c2c54, #5e5b8c, #8f6593, #000000)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white font-serif px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <header className="border-b border-gray-700 pb-8 mb-8 flex flex-col md:flex-row gap-6 md:gap-8">
        <div className="flex  md:justify-start">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/prathmesh.jpg"
              alt="Prathmesh Sargar"
            />
          </div>
        </div>

        <div className="flex-1 text-2xl">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl font-bold mb-2 pt-sans-bold"
          >
            Prathamesh Sargar
          </motion.h1>
          <p className="text-base sm:text-lg text-gray-300 mb-1">
            +91-8010618424 | prathmeshtech27@gmail.com
          </p>
          <p className="text-base sm:text-lg text-gray-300 mb-4">
            D.Y. Patil College of Engineering and Technology | B.Tech in Data
            Science (CGPA: 8.5)
          </p>
          <p className="mb-4 text-gray-300 text-base sm:text-lg">

            Full Stack Developer with 1+ year experience building scalable, AI-powered web apps using MERN, Flask, and modern cloud platforms. Skilled at bridging frontend elegance with robust backend architecture, delivering personalized user experiences through integrated ML models and real-time analytics.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/prathmesh-sargar" className="hover:text-gray-400 transition-colors">
              <FaGithub size={25} />
            </a>
            <a href="https://x.com/Prathmesh_2005" className="hover:text-gray-400 transition-colors">
              <FaTwitter size={25} />
            </a>
            <a href="https://www.linkedin.com/in/prathmesh-sargar" className="hover:text-gray-400 transition-colors">
              <FaLinkedin size={25} />
            </a>
            <a href="https://www.youtube.com/@prathmesh-tech" className="hover:text-gray-400 transition-colors">
              <FaYoutube size={25} />
            </a>
          </div>
        </div>
      </header>

      {/* Technical Skills */}
      {/* <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-2 pt-sans-bold">Technical Skills</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <motion.div 
            className="p-4 rounded-lg bg-gray-900 flex items-center gap-2"
            variants={cardVariants}
            whileHover="hover"
          >
            <SiTypescript size={20} />
            <span>TypeScript</span>
          </motion.div>
          <motion.div 
            className="p-4 rounded-lg bg-gray-900 flex items-center gap-2"
            variants={cardVariants}
            whileHover="hover"
          >
            <SiReact size={20} />
            <span>React.js</span>
          </motion.div>
          <motion.div 
            className="p-4 rounded-lg bg-gray-900 flex items-center gap-2"
            variants={cardVariants}
            whileHover="hover"
          >
            <SiNextdotjs size={20} />
            <span>Next.js</span>
          </motion.div>
          <motion.div 
            className="p-4 rounded-lg bg-gray-900 flex items-center gap-2"
            variants={cardVariants}
            whileHover="hover"
          >
            <SiNodedotjs size={20} />
            <span>Node.js</span>
          </motion.div>
          <motion.div 
            className="p-4 rounded-lg bg-gray-900 flex items-center gap-2"
            variants={cardVariants}
            whileHover="hover"
          >
            <SiMongodb size={20} />
            <span>MongoDB</span>
          </motion.div>
          <motion.div 
            className="p-4 rounded-lg bg-gray-900 flex items-center gap-2"
            variants={cardVariants}
            whileHover="hover"
          >
            <SiPython size={20} />
            <span>Python</span>
          </motion.div>
          <motion.div 
            className="p-4 rounded-lg bg-gray-900 flex items-center gap-2"
            variants={cardVariants}
            whileHover="hover"
          >
            <FaJava size={20} />
            <span>Java</span>
          </motion.div>
          <motion.div 
            className="p-4 rounded-lg bg-gray-900 flex items-center gap-2"
            variants={cardVariants}
            whileHover="hover"
          >
            <SiFastapi  size={20} />
            <span>Fast API</span>
          </motion.div>
        </div>
      </section> */}

      {/* Professional Journey */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-2 pt-sans-bold">
          Professional Journey
        </h2>

        <motion.div
          className="mb-6 p-4 sm:p-6 rounded-lg bg-gray-900"
          variants={cardVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-semibold">
                Software Trainee Intern · Collab Vision Infosolution
              </h3>
              <p className="text-gray-400">Feb 2025 – May 2025 | Remote</p>
              <ul className="mt-2 text-sm sm:text-base text-gray-300 list-disc pl-5 space-y-1">
                <li>
                  Implemented multilingual support (4 languages), improving user
                  accessibility by 30%
                </li>
                <li>
                  Contributed to Agile sprints and code reviews, reducing bug
                  turnaround time by 25%
                </li>
                <li>
                  Supported full-stack development including frontend
                  enhancements and backend integration
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-800 px-2 py-1 rounded text-xs sm:text-sm flex items-center gap-1">
                <SiReact /> React.js
              </span>
              <span className="bg-gray-800 px-2 py-1 rounded text-xs sm:text-sm">
                i18next
              </span>
              <span className="bg-gray-800 px-2 py-1 rounded text-xs sm:text-sm">
                REST APIs
              </span>
            </div>
          </div>
        </motion.div>
        {/* freelance  */}
        <motion.div
  className="mb-6 p-4 sm:p-6 rounded-lg bg-gray-900"
  variants={cardVariants}
  initial="initial"
  animate="animate"
  whileHover="hover"
>
  <div className="flex flex-col md:flex-row justify-between items-start gap-4">
    <div className="flex-1">
      <h3 className="text-lg sm:text-xl font-semibold">
        Freelance Full Stack Developer · Client-Based Projects
      </h3>
      <p className="text-gray-400">Remote | Ongoing</p>
      <ul className="mt-2 text-sm sm:text-base text-gray-300 list-disc pl-5 space-y-1">
        <li>
          Built real-world apps for clients: college notes app, e-commerce site, student tools, and prediction system
        </li>
        <li>
          Delivered full-stack solutions using React.js, Node.js, MongoDB, and Redux Toolkit
        </li>
        <li>
          Integrated REST APIs, authentication, and responsive UI with Tailwind CSS and Bootstrap
        </li>
        <li>
          Managed both UI/UX and backend architecture; delivered client-ready apps with positive feedback
        </li>
      </ul>
    </div>
    <div className="flex flex-wrap gap-2">
      <span className="bg-gray-800 px-2 py-1 rounded text-xs sm:text-sm flex items-center gap-1">
        <SiReact /> React.js
      </span>
      <span className="bg-gray-800 px-2 py-1 rounded text-xs sm:text-sm">
        Node.js
      </span>
      <span className="bg-gray-800 px-2 py-1 rounded text-xs sm:text-sm">
        MongoDB
      </span>
      <span className="bg-gray-800 px-2 py-1 rounded text-xs sm:text-sm">
        Redux Toolkit
      </span>
      <span className="bg-gray-800 px-2 py-1 rounded text-xs sm:text-sm">
        REST APIs
      </span>
    </div>
  </div>
</motion.div>

      </section>

      {/* Projects with Tabs */}
      <section className="mb-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h2 className="text-2xl font-bold border-b border-gray-700 pb-2 pt-sans-bold">
            Projects
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("personal")}
              className={`pt-sans-bold px-3 py-1 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base ${
                activeTab === "personal"
                  ? "bg-white text-black"
                  : "bg-gray-800 text-white"
              }`}
            >
              Personal
            </button>
            <button
              onClick={() => setActiveTab("client")}
              className={` pt-sans-bold px-3 py-1 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base ${
                activeTab === "client"
                  ? "bg-white text-black"
                  : "bg-gray-800 text-white"
              }`}
            >
              Client Work
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {projects[activeTab].map((project) => (
            <motion.div
              key={project.id}
              className="border border-gray-800 p-4 sm:p-6 rounded-lg bg-gray-900"
              variants={cardVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                {project.icon}
                <h3 className="text-lg sm:text-xl font-semibold">
                  {project.title}
                </h3>
                <div>
                  {project.status && (
                    <a  className="" href={project?.url}>
                      <span className="text-xs bg-green-700 px-2 py-1 rounded-lg  ">
                        {project.status}
                      </span>
                    </a>
                  )}
                </div>
              </div>
              {project.client && (
                <p className="text-sm sm:text-base text-gray-400 mb-2">
                  Client: {project.client}
                </p>
              )}
              <p className="mb-4 text-sm sm:text-base text-gray-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-800 px-2 py-1 rounded text-xs sm:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Achievements & Activities */}
      <section className="mb-12">
        <h2 className="pt-sans-bold text-2xl font-bold mb-6 border-b border-gray-700 pb-2">
          Achievements & Leadership
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <motion.div
            className="border border-gray-800 p-4 sm:p-6 rounded-lg bg-gray-900"
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <div className="flex items-center gap-2 mb-3">
              <FaMedal size={20} />
              <h3 className="text-lg sm:text-xl font-semibold">Achievements</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-300">
              <li>
                Mentored <span className="font-bold md:text-xl">1000+ students</span>, resulting in 40% increase in project
                completion rates
              </li>
              <li>
                Won <span className="font-bold md:text-xl" >5+ national</span> tech competitions including Startup Pitches, Hackathons & Project competitions.

              </li>
              <li>
                Founder & Creator of YouTube Channel <span><a className="text-bold text-xl" href="https://www.youtube.com/@prathmesh-tech">( Prathmesh Tech )</a></span> with tech
                tutorials
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="border border-gray-800 p-4 sm:p-6 rounded-lg bg-gray-900"
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <div className="flex items-center gap-2 mb-3">
              <FaMedal size={20} />
              <h3 className="text-lg sm:text-xl font-semibold">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-gray-800 px-3 py-1 rounded">
                Exceptional Communicator
              </span>
              <span className="bg-gray-800 px-3 py-1 rounded">Leadership</span>
              <span className="bg-gray-800 px-3 py-1 rounded">
                Problem-Solving
              </span>
              <span className="bg-gray-800 px-3 py-1 rounded">Adaptable</span>
              <span className="bg-gray-800 px-3 py-1 rounded">Proactive</span>
              <span className="bg-gray-800 px-3 py-1 rounded">
                Constant Learner
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        className="border-t border-gray-700 pt-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-gray-400 text-sm sm:text-base">
          © {new Date().getFullYear()} Prathamesh Sargar
        </p>
        <div className=" flex justify-end ">
           <div className="flex gap-4">
            <a href="https://github.com/prathmesh-sargar" className=" hover:text-white text-gray-400 transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://x.com/Prathmesh_2005" className=" hover:text-white text-gray-400 transition-colors">
              <FaTwitter size={20} />
            </a>
            <a href="https://www.linkedin.com/in/prathmesh-sargar" className=" hover:text-white text-gray-400 transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="https://www.youtube.com/@prathmesh-tech" className=" hover:text-white text-gray-400 transition-colors">
              <FaYoutube size={20} />
            </a>
          </div>
       </div>   
      </motion.footer>
    </div>
  );
};

export default Portfolio;
