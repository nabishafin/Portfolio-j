
"use client";
import { useState } from "react";
import TechIcons from "./components/TechIcons";
import TechnologyDescription from "./components/TechnologyDescription";
import { FaReact, FaVuejs, FaAngular, FaNodeJs, FaPython, FaDocker, FaJenkins } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiSvelte, SiExpress, SiMongodb, SiFastapi, SiRubyonrails, SiKubernetes, SiAnsible, SiTerraform } from 'react-icons/si';

function SkillsSection() {
  const [activeTab, setActiveTab] = useState("backend");
  const [selectedTech, setSelectedTech] = useState(null);

  const frontendTechs = [
    { name: "React", icon: <FaReact />, color: "#61DAFB", description: "React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies." },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6", description: "TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language." },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#38B2AC", description: "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces. It is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override." },
    { name: "Vue", icon: <FaVuejs />, color: "#4FC08D", description: "Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members." },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF", description: "Next.js is an open-source React front-end development web framework that enables functionality such as server-side rendering and generating static websites for React based web applications." },
    { name: "Angular", icon: <FaAngular />, color: "#DD0031", description: "Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS." },
    { name: "Svelte", icon: <SiSvelte />, color: "#FF3E00", description: "Svelte is a free and open-source front-end compiler that enables developers to build user interfaces. It is not a framework in the traditional sense, but rather a compiler that converts your components into efficient imperative code that surgically updates the DOM." },
  ];

  const backendTechs = [
    { name: "Node.js", icon: <FaNodeJs />, color: "#339933", description: "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser." },
    { name: "Express", icon: <SiExpress />, color: "#FFFFFF", description: "Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs." },
    { name: "Python", icon: <FaPython />, color: "#3776AB", description: "Python is an interpreted, high-level and general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant whitespace." },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248", description: "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas." },
    { name: "Docker", icon: <FaDocker />, color: "#2496ED", description: "Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their own software, libraries and configuration files." },
    { name: "FastAPI", icon: <SiFastapi />, color: "#009688", description: "FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.6+ based on standard Python type hints." },
    { name: "Ruby on Rails", icon: <SiRubyonrails />, color: "#CC0000", description: "Ruby on Rails, or Rails, is a server-side web application framework written in Ruby under the MIT License. Rails is a model–view–controller (MVC) framework, providing default structures for a database, a web service, and web pages." },
  ];

  const devopsTechs = [
    { name: "Kubernetes", icon: <SiKubernetes />, color: "#326CE5", description: "Kubernetes is an open-source container-orchestration system for automating computer application deployment, scaling, and management. It was originally designed by Google and is now maintained by the Cloud Native Computing Foundation." },
    { name: "Jenkins", icon: <FaJenkins />, color: "#D24939", description: "Jenkins is a free and open source automation server. It helps automate the parts of software development related to building, testing, and deploying, facilitating continuous integration and continuous delivery." },
    { name: "Ansible", icon: <SiAnsible />, color: "#EE0000", description: "Ansible is an open-source software provisioning, configuration management, and application-deployment tool enabling infrastructure as code. It runs on many Unix-like systems, and can configure both Unix-like systems as well as Microsoft Windows." },
    { name: "Terraform", icon: <SiTerraform />, color: "#623CE4", description: "Terraform is an open-source infrastructure as code software tool created by HashiCorp. Users define and provide data center infrastructure using a declarative configuration language known as HashiCorp Configuration Language, or optionally JSON." },
  ];

  const getTechnologies = () => {
    switch (activeTab) {
      case "frontend":
        return frontendTechs;
      case "backend":
        return backendTechs;
      case "devops":
        return devopsTechs;
      default:
        return [];
    }
  };

  return (
    <div className="text-white relative">
      <div className="relative z-10 container mx-auto px-6 py-20 max-w-7xl">
        <h1 className="text-5xl font-extrabold text-center mb-10 text-white">
          Expertise
        </h1>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="flex gap-4 border-b border-gray-800">
              <button
                onClick={() => {
                  setActiveTab("frontend");
                  setSelectedTech(null);
                }}
                className={`px-6 py-3 font-semibold transition-all duration-300 relative ${
                  activeTab === "frontend"
                    ? "text-white"
                    : "text-gray-500 hover:text-green-400"
                }`}
              >
                Frontend
                {activeTab === "frontend" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500"></div>
                )}
              </button>

              <button
                onClick={() => {
                  setActiveTab("backend");
                  setSelectedTech(null);
                }}
                className={`px-6 py-3 font-semibold transition-all duration-300 relative ${
                  activeTab === "backend"
                    ? "text-white"
                    : "text-gray-500 hover:text-green-400"
                }`}
              >
                Backend
                {activeTab === "backend" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500"></div>
                )}
              </button>
              <button
                onClick={() => {
                  setActiveTab("devops");
                  setSelectedTech(null);
                }}
                className={`px-6 py-3 font-semibold transition-all duration-300 relative ${
                  activeTab === "devops"
                    ? "text-white"
                    : "text-gray-500 hover:text-green-400"
                }`}
              >
                DevOps
                {activeTab === "devops" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500"></div>
                )}
              </button>
            </div>

            <div className="pt-8">
              <h2 className="text-3xl font-bold mb-12 tracking-tight">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Technologies
              </h2>

              <TechIcons
                technologies={getTechnologies()}
                activeTab={activeTab}
                setSelectedTech={setSelectedTech}
              />
            </div>
          </div>
          <div className="mt-20">
            <TechnologyDescription technology={selectedTech} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;

