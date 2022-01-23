import React from "react";
import './style.css'

function HomeMid5() {
  return (
    <div style={{
        textAlign : "center",
        backgroundColor : "#805AD5",
        color:'white',
        padding : "20px"
    }}>
      <span style={{
          fontSize: "48px",
          fontWeight  :"800",
          margin:"30px"
      }} >Why Choose Us?</span>
      <div style={{
          display:"flex",
          justifyContent : "space-evenly"
      }} className="hmwhyc">
        <div style={{
            maxWidth:'500px',
            textAlign: "left",
            margin:"30px",
            fontSize:"24px"
        }}>
          <span style={{ fontWeight:"bolder" }}>For Student</span>
          <ul>
            <li>Free: No platform charges for early clients.</li>
            <li>Versatility: Various courses to choose from.</li>
            <li>
              Flexibility: You can learn online or offline, from recorded or
              from live sessions, from local or global teachers!
            </li>
          </ul>
        </div>
        <div  style={{
            maxWidth:'500px',
            textAlign: "left",
            margin:"30px",
            fontSize:"24px"
        }}>
          <span style={{ fontWeight:"bolder" }}>For Teacher</span>
          <ul>
            <li>Reach: Increases reach to a global level.</li>
            <li>Online Presence: You get a hassle free online presence.</li>
            <li>Offline: Become easy to find in your locality.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomeMid5;
