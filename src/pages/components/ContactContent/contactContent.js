import React from "react"
import './contactContent.css';

export default function ContactContent() {
  return (
    <div className="contactContainer">
        <h2 className="contactTitle">Contact me</h2>
        <p><span style={{color: "rgb(86, 196, 181)"}}>Phone: </span>07577222750</p>
        <p><span style={{color: "rgb(86, 196, 181)"}}>Email: </span>cebarnsley@gmail.com</p>
            <div className="contactLinks">
                <p><a  href="https://linkedin.com/in/candice-barnsley-9a574b18a">LinkedIn</a></p>
                <p><a href="https://github.com/Cebarnsley">GitHub</a></p>
            </div>
    </div>
  )
}