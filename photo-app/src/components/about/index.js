import React from 'react';
import coverImage from "../../assests/cover/shutterstock_328212341.jpg";

function About() {
 
    return (
<section className="my-5">
  <h1 id="about">Ashley Saelens</h1>
  <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
</section>
      );
  
}

export default About;