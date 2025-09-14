import React, { useState, useEffect } from "react";
import "../../style/Project.css";
import livon from '../../assets/livon.png';


function Project() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState([]);

const projects = [
  {
    title: "Ed-Tech Management System",
    desc: "An online education platform for managing students, employees, and course bookings with payment integration.",
    img: "https://www.21kschool.com/in/wp-content/uploads/sites/4/2025/03/Technology-in-Education.png",
    details: "Developed a complete Ed-Tech platform to manage students, employees, and course enrollments with payment integration. My role included frontend UI design, validation, API integration, as well as backend API creation, authentication, and role management.",
    technologies: ["React.js", "Next.js", "Node.js", "MySQL", "AWS"],
    liveLink: "#"
  },
  {
    title: "TP-Bazaar (E-commerce Platform)",
    desc: "A multi-module e-commerce platform for Admin, Retailers, and Customers.",
    img: "https://img.freepik.com/free-vector/e-commerce-app-concept-illustration_114360-8242.jpg?w=826",
    details: "Designed and developed an e-commerce platform with modules for Admin, Retailer, and Customer. Features include product management, role-based routing, and stock management. My role included frontend UI, API integration, and backend API/authentication.",
    technologies: ["React.js", "Css", "Node.js", "MySQL", "AWS"],
    liveLink: "#"
  },
  {
    title: "Employee Management System (EMS)",
    desc: "A system to manage employees, HR, and work processes efficiently.",
    img: "https://img.freepik.com/free-vector/business-people-analyzing-growth-charts_23-2148855270.jpg?w=826",
    details: "Built a robust employee management system to handle HR and organizational workflows. My role included frontend design and API integration, plus backend API development, authentication, and role management.",
    technologies: ["React.js", "Node.js", "MySQL", "Bootstrap"],
    liveLink: "#"
  },
  {
    title: "LivonControls (Smart Access Control)",
    desc: "A smart access control system for residential and commercial spaces.",
    img: livon,
    details: "Developed frontend components for the Admin Dashboard, enabling secure and centralized management of smart keypads, user access roles, and device configurations. Features real-time monitoring and remote access control.",
    technologies: ["React.js", "Next.js", "Nest.js", "JavaScript"],
    liveLink: "#"
  }
];




  // Filter projects based on category
  useEffect(() => {
    if (filter === "all") {
      setVisibleProjects(projects);
    } else {
      setVisibleProjects(
        projects.filter(project => 
          project.technologies.some(tech => 
            tech.toLowerCase().includes(filter.toLowerCase())
          )
        )
      );
    }
  }, [filter]);

  // Close modal when pressing Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 >My Projects</h2>
        <p className="subtitle" data-aos="fade-down" data-aos-delay="100">
          Here are some of my recent works showcasing my skills in frontend
          development.
        </p>

        {/* Filter buttons */}
        <div className="filter-buttons" data-aos="fade-in" data-aos-delay="200">
          <button 
            className={filter === "all" ? "active" : ""} 
            onClick={() => setFilter("all")}
          >
            All Projects
          </button>
          <button 
            className={filter === "react" ? "active" : ""} 
            onClick={() => setFilter("react")}
          >
            React
          </button>
          <button 
            className={filter === "node" ? "active" : ""} 
            onClick={() => setFilter("node")}
          >
            Node.js
          </button>
          <button 
            className={filter === "css" ? "active" : ""} 
            onClick={() => setFilter("css")}
          >
            CSS
          </button>
           <button 
            className={filter === "Next" ? "active" : ""} 
            onClick={() => setFilter("Next")}
          >
            Next
          </button>
        </div>

        <div className="projects-grid">
          {visibleProjects.map((project, index) => (
            <div 
              className="project-card" 
              key={index}
              data-aos="fade-up" 
              data-aos-delay={index * 100}
              onClick={() => setSelectedProject(project)}
            >
              <div className="card-img">
                <img src={project.img} alt={project.title} />
                <div className="project-overlay">
                  <div className="overlay-content">
                    <h3>{project.title}</h3>
                    <p>{project.desc}</p>
                    <button className="btn">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="technologies">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-tag">+{project.technologies.length - 3}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedProject && (
        <div className="popup" onClick={() => setSelectedProject(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => setSelectedProject(null)}>
              &times;
            </span>
            
            <div className="popup-header">
              <h3>{selectedProject.title}</h3>
              
            </div>
            
            <img src={selectedProject.img} alt={selectedProject.title} />
            
            <div className="popup-details">
              <p>{selectedProject.details}</p>
              
              <div className="technologies-list">
                <h4>Technologies Used:</h4>
                <div className="tech-tags">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Project;