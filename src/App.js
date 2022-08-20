
import React from "react";
import { useEffect } from "react";
import "./App.css"
import About from "./components/About";
import AboutImg from "./components/AboutImg";
import ContactImg from "./components/ContactImg";
import ContactSection from "./components/ContactSection";
import GreenImg from "./components/GreenImg";
import HeroImg from "./components/HeroImg";
import Nav from "./components/Nav";
import ProjectSection from "./components/ProjectSection";
import Section from "./components/Section";
import Skills from "./components/Skills";
import SniffleImg from "./components/SniffleImg";
import VitalsImg from "./components/VitalsImg";
import Aos from "aos";
import "aos/dist/aos.css"


function App() {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    // navbar
    <div className="scroll-smooth text-gray-800">
      <Nav></Nav>
      <div id="home" className="md:flex">
        <HeroImg />
        <Section />
      </div>

    {/* projects section */}
      <h1 id="projects" className="text-center text-6xl text-[#3794fc] pb-5 border-b-gray-300 border-solid border-b">Projects</h1>

    {/* sniffles project section */}
      <div data-aos="fade-right" className="md:flex md:flex-row-reverse border-b-gray-300 border-solid border-b">
        <SniffleImg />
        <ProjectSection liveBtnDest="https://sniffles.netlify.app/" srcBtnDest="https://github.com/jodyvanhoose/sniffles" name="Sniffles" description="Sniffles is an allergy/pollen web app that takes in a users location and displays pollen data for that area. As I have allergies myself this was a project that was personal to me. I know the pains people with allergies face personally. Developed with HTML, CSS, SASS, JavaScript, and React.js framework."></ProjectSection>
      </div>
        
        {/* green smoothies project section  */}
      <div data-aos="fade-left" className="md:flex border-b-gray-300 border-solid border-b">
        <GreenImg />
        <ProjectSection liveBtnDest="https://jodyvanhoose.github.io/GreenSmoothies/" srcBtnDest="https://github.com/jodyvanhoose/GreenSmoothies" name="Green Smoothies" description="A responsive mobile first website/product that displays smoothie/product data. Built with UI design for user experience in mind. Development with HTML, CSS, and JavaScript"></ProjectSection>
      </div>

      {/* vitals project sections */}
      <div data-aos="fade-right" className="md:flex md:flex-row-reverse border-b-gray-300 border-solid border-b">
        <VitalsImg />
        <ProjectSection liveBtnDest="https://jodyvanhoose.github.io/vitals/" srcBtnDest="https://github.com/jodyvanhoose/vitals" name="Vitals" description="Having a background in healthcare I wanted to contribute back to the healthcare/medical profession with this web app/product that takes in user data input  and displays if vital stats/data are in normal range. Development with HTML, CSS, Bootstrap, and JavaScript">
        </ProjectSection>
      </div>

      {/* skills section */}
      <h1 id="skills" className="text-center text-6xl text-[#3794fc] my-5">Skills</h1>
      <div data-aos="zoom-in" data-aos-duration="3000" className="border-gray-300 border-b">      
        <div className="md:max-w-4xl md:mx-auto">
          <Skills />
        </div>
      </div>

      {/* about section */}
      <h1 id="about" className="text-center text-6xl text-[#3794fc] mt-5 p-5">About</h1>
      <div className="border-gray-300 border-b">
        <div id="about" className="flex flex-col lg:flex-row md:mx-20 p-5 justify-center items-center">
          <AboutImg />
          <About />
        </div>
      </div>
      
      
      {/* contact section */}
      <h1 id="contact" className="text-center text-6xl text-[#3794fc] mt-5 p-5">Contact</h1>
      <div className="md:flex border-b-gray-300 border-solid border-b mx-14">
        <ContactSection />
        <ContactImg />
      </div>
      <div className='h-20 bg-gray-900'>
      </div>
      
    </div>
  );
}

export default App;
