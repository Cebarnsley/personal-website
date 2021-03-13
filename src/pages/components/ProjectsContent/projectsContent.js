import React, {  useState } from "react"
import './projectsContent.css';
import reactFoodChooser from '../ProjectsContent/reactFoodChooser.png';
import roboFriends from '../ProjectsContent/robofriends.png';
import faceRecog from '../ProjectsContent/face-recog.png';
import backgroundGenerator from '../ProjectsContent/bg-gen.png';
import oldProfileWebsite from '../ProjectsContent/old-profile-website.png';
import pier from '../../../Images/pier3.png';
import boat from '../../../Images/boat.png';
import plane from '../../../Images/plane2.png';
import bb from '../../../Images/bb.png';


export default function ProjectsContent() {
    // const [imageSize, setImageSize] = useState(false);
    const [activeId, setActiveId] = useState('');
    
   
    const images = [
       {id: 1, image: pier}, 
       {id: 2, image:boat}, 
       {id: 3, image:plane}, 
       {id: 4, image:bb}
    ];




  


  return (
      <div className="projectsContainer">
        <h2 className="projectTitle">Projects</h2>
        <div className="websiteProjects">

            
        <div className="projectCard">
        <a href="https://cebarnsley.github.io/react-food-chooser2/"><img alt='food-chooser-logo' src={reactFoodChooser} /></a>
            <div className="projectText">
                <h4>What Should I eat?</h4>
                <p className="text">An app created with React. Edit meal options and generate a random result.</p>
            </div>

        </div>

        <div className="projectCard">
            <a href="https://cebarnsley.github.io/robo-friends/"><img alt='roboFriends-logo' src={roboFriends} /></a>
            <div className="projectText">
                <h4>RoboFriends</h4>
                <p className="text">Created with React and uses APIs. Allows you to filter content by using the searchfield.</p>
            </div>

        </div>

        <div className="projectCard">
        <a href="https://face-finder-7961.herokuapp.com/"><img alt='face-recog-logo' src={faceRecog} /></a>
            <div className="projectText">
                <h4>Face Recognition API</h4>
                <p className="text">React app to highlight faces in images. Uses databases to log in and show number of images submitted.</p>
            </div>

        </div>

        <div className="projectCard">
            <a href="https://cebarnsley.github.io/background-generator/"><img alt='bg-gen-logo' src={backgroundGenerator} /></a>
            <div className="projectText">
                <h4>Background Generator</h4>
                <p className="text">Select two colours to produce a gradient, or generate one randomly. Includes CSS code to add to your projects.</p>
            </div>

        </div>

        <div className="projectCard">
            <a href="https://cebarnsley.github.io/profile-website/"><img alt='bg-gen-logo' src={oldProfileWebsite} /></a>
            <div className="projectText">
                <h4>Profile Website</h4>
                <p className="text">A profile website made using HTML, SASS, JavaScript, and some jQuery.</p>
            </div>

        </div>
        </div>
        {/* <h3 className="projectTitle">Blender</h3>
        <div className="blenderProjects">

        


            {images.map((el, id) => {

                return (
                    <div className={activeId === el.id ? 'blenderImageDivClicked' : 'blenderImageDiv'}>
                    <button className="blenderImageCloseButton" style={{display: activeId === el.id ? 'block' : 'none' }} onClick={() => { setActiveId('')}}>&times;</button>
                    <img key={el.id}  
                    alt="blender image" 
                    onClick={() => { setActiveId(el.id)}}
                   
                    className={activeId === el.id ? 'blenderImageClicked' : 'blenderImage'} 
                    src={el.image}/>
                    </div>
                   
                )
             }

             )}
                      
    

        </div> */}
     
      </div>
  
  )
}


