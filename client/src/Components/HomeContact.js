import { FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import './style.css'
import {
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  Phone,
} from "@material-ui/icons";

function HomeContact() {

  const links = {
    email: "upsilon175@gmail.com",
    phone: "9191919191",
    whatsapp: "",
    linkedin: "https://www.linkedin.com/company/upsilon-india/",
    instagram: "https://www.instagram.com/upsilon_india/",
    facebook: "",
  };

  return (
      <div className="clas1">
        <div className="clasi">
          <span>Contact</span>
          <div><Phone/> 909090090</div>
          <div><Email/> upsilon175@gmail.com</div>
        </div>
        <div className="clas">
          <div className="clas2">Find Us On</div>
          <div>
          <a href={links.instagram}><Instagram/></a>
          <a href={links.facebook}><Facebook/></a>
          <a href={links.linkedin}><LinkedIn/></a></div> 
        </div>
      </div>
  );
}

export default HomeContact;
