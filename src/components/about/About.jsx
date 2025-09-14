import React from "react"
import '../../style/About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <p>
          Hi, I'm <strong>Shraddha</strong>, a Full Stack Developer with 
          <span> 1.6+ years of experience</span> in building scalable, 
          responsive, and user-friendly web applications. I specialize in 
          <span> React.js, Next.js, and Node.js</span>, and have hands-on 
          experience with <span>AWS Cloud, MySQL, and MongoDB</span>. 
          Passionate about delivering clean UI, seamless functionality, 
          and performance-driven solutions.
        </p>

        <div className="about-cards">
          <div className="card">
            <h3> Skills</h3>
            <p>React.js, Next.js, Node.js, JavaScript, AWS, MySQL, MongoDB, Git, Html</p>
          </div>
          <div className="card">
            <h3> Experience</h3>
            <p>1.6+ years of full-stack development experience</p>
          </div>
          <div className="card">
  <h3> Location</h3>
  <h4>India</h4>
  <p>Ahmedabad, Gujarat</p>
</div>

        </div>
      </div>
    </section>
  )
}

export default About;
