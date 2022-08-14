// import logo from './logo.svg';
// import './App.css';

import GreenImg from "./components/GreenImg";
import HeroImg from "./components/HeroImg";
import Nav from "./components/Nav";
import ProjectSection from "./components/ProjectSection";
import Section from "./components/Section";
import Skills from "./components/Skills";
import SniffleImg from "./components/SniffleImg";
import VitalsImg from "./components/VitalsImg";


function App() {
  return (
    // navbar
    <div className="scroll-smooth">
      <Nav />
      <div className="md:flex">
        <HeroImg />
        <Section />
      </div>

    {/* projects section */}
      <h1 className="text-center text-6xl mb-5">Projects</h1>

    {/* sniffles project section */}
      <div className="md:flex md:flex-row-reverse border-b-gray-300 border-solid border-b border-t">
        <SniffleImg />
        <ProjectSection liveBtnDest="https://sniffles.netlify.app/" srcBtnDest="https://github.com/jodyvanhoose/sniffles" name="Sniffles" description="Sniffles is an allergy/pollen web app that takes in a users location and displays pollen data for that area. As I have allergies myself this was a project that was personal to me. I know the pains people with allergies face personally. Developed with HTML, CSS, SASS, JavaScript, and React.js framework."></ProjectSection>
      </div>
        
        {/* green smoothies project section  */}
      <div className="md:flex border-b-gray-300 border-solid border-b">
        <GreenImg />
        <ProjectSection liveBtnDest="https://jodyvanhoose.github.io/GreenSmoothies/" srcBtnDest="https://github.com/jodyvanhoose/GreenSmoothies" name="Green Smoothies" description="A responsive mobile first website/product that displays smoothie/product data. Built with UI design for user experience in mind. Development with HTML, CSS, and JavaScript"></ProjectSection>
      </div>

      {/* vitals project sections */}
      <div className="md:flex md:flex-row-reverse border-b-gray-300 border-solid border-b">
      <VitalsImg />
      <ProjectSection liveBtnDest="https://jodyvanhoose.github.io/vitals/" srcBtnDest="https://github.com/jodyvanhoose/vitals" name="Vitals" description="Having a background in healthcare I wanted to contribute back to the healthcare/medical profession with this web app/product that takes in user data input  and displays if vital stats/data are in normal range. Development with HTML, CSS, Bootstrap, and JavaScript">

      </ProjectSection>

      
      </div>

      
      <div className="md:max-w-4xl md:mx-auto ">
      <Skills />
      </div>
      <Section />
      

    
      
    </div>
  );
}

export default App;
