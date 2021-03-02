import React, { useState, useRef, useEffect } from "react";
// import bgImage from '../Images/desk3.png';
import Header from "./components/header.js";
import Modal from "./components/Modal/modal";
import AboutContent from "./components/AboutContent/aboutContent";
import ProjectsContent from "./components/ProjectsContent/projectsContent";
import ContactContent from "./components/ContactContent/contactContent";
import "@fontsource/montserrat/400.css"
import './index.css';

export default function Home()  {

  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState("");
  const node = useRef();
 
  // toggle show/hide list array modal
  
  const toggleModal = () => {
    setShowModal(current => !current);
  }

  // handle click outside modal to close it

  useEffect(() => {
    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showModal]);

  const handleClickOutside = (e) => {
    if (node.current && node.current.contains(e.target)) {
      
      return;
    }
    setShowModal(false);
  };

  return (
    <div className="mainPageContainer" >
       <div id="portal"></div>
       {/* Modal */}
       {showModal === true ? (
      <Modal > 
        <div className="modalContainer"  ref={node} >
        <button className="closeModalButton" onClick={toggleModal}>&times;</button>
          <div className="modalText">{text}</div>
        </div>
      </Modal>
      ) : (
        null
        )}


        {/* Header and buttons */}
      <Header headerText="Hello" />
      <p className="subHeading">I'm Candice,</p>
      <p className="subHeading">Front-End Developer</p>
        <div className="links"> 
          <button className="aboutButton"  onClick={() => {toggleModal(); setText(<AboutContent />)}}>About</button>
          <button className="projectstButton" onClick={() => {toggleModal(); setText(<ProjectsContent />)}}>Projects</button>
          <button className="contactButton" onClick={() => {toggleModal(); setText(<ContactContent />)}}>Contact</button>
        </div> 
    </div>
  )
}
