import { Avatar } from "@chakra-ui/avatar";
import React from "react";
import i0 from "../Components/Assets/Founder.png";
import i1 from "../Components/Assets/CoFounder.png";
import i2 from "../Components/Assets/Founding.png";
import i3 from "../Components/Assets/Marketing0.png";
import i4 from "../Components/Assets/Marketing1.png";
import i5 from "../Components/Assets/Marketing2.png";

function About() {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          padding: "20px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <span
          style={{
            fontSize: "48px",
            fontWeight: "800",
          }}
        >
          Our Story
        </span>
        <p
          style={{
            fontSize: "24px",
            textAlign: "left",
            maxWidth: "800px",
          }}
        >
          We started just after the Covid19 crisis that badly affected the flow
          of learning between tutors to students. Hence to tackle this vital
          issue, we introduced Upsilon, which is a startup driven by IIT Madras
          students. Here we take care of both a tutor who shares his skill and
          of student who is eager to learn.
        </p>
      </div>

      <div
        style={{
          color: "white",
          backgroundColor: "#805ad5",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <span
          style={{
            fontSize: "48px",
            fontWeight: "800",
          }}
        >
          Our Team
        </span>
        <div
          style={{
            display: "grid",
            maxWidth: "800px",
            margin: "auto",
            gridTemplateColumns: "1fr 1fr 1fr",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              flexDirection: "column",
              margin: "20px",
            }}
          >
            <Avatar size='xl' src={i0} />
            <span style={{ fontSize: "24px" }}>Sanchit Gupta</span>
            <span>Founder</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              flexDirection: "column",
              margin: "20px",
            }}
          >
            <Avatar size='xl' src={i1} />
            <span style={{ fontSize: "24px" }}>Vedant Saboo</span>
            <span>Co-Founder</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              flexDirection: "column",
              margin: "20px",
            }}
          >
            <Avatar size='xl' src={i2} />
            <span style={{ fontSize: "24px" }}>Saurav Kale</span>
            <span>Founding Member</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              flexDirection: "column",
              margin: "20px",
            }}
          >
            <Avatar size='xl' src={i3} />
            <span style={{ fontSize: "24px" }}>Varun Kumar</span>
            <span>Marketing Head</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              flexDirection: "column",
              margin: "20px",
            }}
          >
            <Avatar size='xl' src={i4} />
            <span style={{ fontSize: "24px" }}>Parth Ajmera</span>
            <span>Marketing Manager</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              flexDirection: "column",
              margin: "20px",
            }}
          >
            <Avatar size='xl' src={i5} />
            <span style={{ fontSize: "24px" }}>Rahul Choudhary</span>
            <span>Marketing Manager</span>
          </div>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          padding: "20px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <span
          style={{
            fontSize: "48px",
            fontWeight: "800",
            padding: "20px",
          }}
        >
          OUR VALUES
        </span>
        <ul
          style={{
            textAlign: "left",
            fontSize: "24px",
            maxWidth: "800px",
          }}
        >
          <li>
            We believe that the learning process should never be affected no
            matter what crisis transpires. We provide Upsilon, a remedy to all
            the common problems faced by the educational system.
          </li>
          <li>
            Additionally, we want to make education accessible for everyone and
            facilitate learning from anywhere.
          </li>
        </ul>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "white",
          backgroundColor: "#805ad5",
          padding: "20px",
        }}
      >
        <span
          style={{
            fontSize: "48px",
            fontWeight: "800",
          }}
        >
          OUR CULTURE
        </span>
        <p
          style={{
            fontSize: "24px",
            textAlign: "left",
            maxWidth: "800px",
            color: "white",
          }}
        >
          We believe that every member associated with upsilon is equally
          valuable. We follow a decentralized approach to promote the creation
          of new ideas among our members. We are focusing on No communication
          gap between our core team and members to lead better coordination.
        </p>
      </div>
    </div>
  );
}

export default About;
