import React, { useEffect,useState, useRef } from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaServer, FaDatabase } from 'react-icons/fa';
import '../../style/Skills.css';
const Skills = () => {
  const progressRefs = useRef([]);
  const [iconColors, setIconColors] = useState({
    HTML: '#e34f26',
    CSS: '#1572b6',
    JavaScript: '#f7df1e',
    'React.js': '#61dafb',
    'Node.js': '#339933',
    'Next.js': '#000000',
    MySQL: '#4479a1'
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBar = entry.target;
            const skillLevel = progressBar.dataset.level;
            progressBar.style.width = skillLevel;
          }
        });
      },
      { threshold: 0.5 }
    );

    progressRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      progressRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const handleColorChange = (skill, color) => {
    setIconColors(prev => ({
      ...prev,
      [skill]: color
    }));
  };

  const skills = [
    { icon: <FaHtml5 />, name: 'HTML', description: 'Well-structured and semantic markup for building responsive websites with accessibility in mind.', level: '95%', proficiency: 'Expert' },
    { icon: <FaCss3Alt />, name: 'CSS', description: 'Designing layouts, animations, and responsive UI with modern CSS features like Flexbox and Grid.', level: '90%', proficiency: 'Advanced' },
    { icon: <FaJsSquare />, name: 'JavaScript', description: 'Dynamic and interactive web applications with ES6+ features, async programming, and modern APIs.', level: '85%', proficiency: 'Advanced' },
    { icon: <FaReact />, name: 'React.js', description: 'Building component-based UIs, hooks, state management, and integration with backend services.', level: '88%', proficiency: 'Advanced' },
    { icon: <FaNodeJs />, name: 'Node.js', description: 'Developing REST APIs, backend logic, server-side rendering, and real-time applications.', level: '82%', proficiency: 'Proficient' },
    { icon: <FaServer />, name: 'Next.js', description: 'Full-stack development with SEO optimization, fast rendering, and API routes implementation.', level: '80%', proficiency: 'Proficient' },
    { icon: <FaDatabase />, name: 'MySQL', description: 'Designing relational databases, writing optimized queries, and managing database operations.', level: '85%', proficiency: 'Advanced' }
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <h4 className="section-title">My Skills</h4>
        
        {/* <div className="color-controls">
          <h3>Customize Icon Colors:</h3>
          <div className="color-inputs">
            {skills.map((skill, index) => (
              <div key={index} className="color-input">
                <label>{skill.name}</label>
                <input 
                  type="color" 
                  value={iconColors[skill.name]} 
                  onChange={(e) => handleColorChange(skill.name, e.target.value)}
                />
              </div>
            ))}
          </div>
        </div> */}
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon" style={{ color: iconColors[skill.name] }}>
                {skill.icon}
              </div>
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
              <div className="skill-level">
                <div 
                  className="skill-progress" 
                  ref={el => progressRefs.current[index] = el}
                  data-level={skill.level}
                ></div>
              </div>
              <div className="skill-info">
                <span>{skill.proficiency}</span>
                <span>{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;