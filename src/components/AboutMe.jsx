import React from "react";
import ramphoto from "./data/ramphoto.json";

const AboutMe = () => {
 
  return (
    <>
      <section id="aboutme" class="about-section">
        <div class="about-container">
            <div class="about-image" data-aos="flip-left"
                data-aos-duration="1000">
            <img src={`/assets/${ramphoto.imgSrc}`} alt="Ramchandra" />
            </div>
            <div class="about-content"data-aos="flip-left"
                >
                <h1>About Me</h1>
                <p data-aos="flip-top"
              data-aos-duration="1000">Hello! My name is Ramchandra Khadak. I am currently studying Bachelor of IT (BSc CSIT)
              at Patan Multiple Campus. I am passionate about technology, coding, and web development.
              I enjoy creating interactive and dynamic web applications.
              In my spare time, I like to learn new programming languages and frameworks to enhance my skills.</p>
                <p data-aos="flip-right"
                data-aos-duration="1000">As a tech lover student, I am deeply passionate about exploring and mastering the
                latest advancements in technology. My interests lie in the fascinating fields of artificial
                intelligence, web development, and data science. I am constantly driven by the potential of AI
                to revolutionize industries, enhance user experiences, and solve complex problems. My curiosity
                in web development fuels my desire to create intuitive and impactful digital experiences.
                Additionally, my enthusiasm for data science stems from a fascination with uncovering hidden
                insights and patterns that can drive informed decision-making. I am dedicated to honing my skills
                and knowledge in these areas, aiming to leverage technology to create innovative solutions that can
                benefit society. Thank you for visiting my website!</p>
                <div class="about-buttons">
                    <a href="#projects" class="btn">View My Projects</a>
                </div>
            </div>
        </div>
    </section>
      
         
    </>
  );
};

export default AboutMe;
