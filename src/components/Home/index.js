import React from "react"
import "./styles.css"
import Image from "../../Assets/IMG_8172.jpg"



function Home() {
    return (
      <div>
       <div className="container">

      <div className="row" id="welcome">
        
            <div className="col-md-4">
                <img src={Image} alt="Man standing in front color background" className="circle img-fluid"/>
            </div>
            <div className="col-md-8" id="hello">
                <h4>
                  Hello, my name is Dennis Amparo and I'm a Front End Developer.
                </h4>
            </div>

      </div>

      <div className="row" id="bio">
            <div className="col-md-12">
              <h4 className="textJustify">
                My story:
                <br/>
                <br/>
                I live in Scottsdale, AZ and graduated from Arizona State University with a BS in Chemical Engineering.  After traveling the world for a summer, I realized my passion was in web developement.  Since then, my mission has been to create high quality applications focused on sound design and a strong user experience.
                <br/>
                <br/>
                In my free time I enjoy traveling, trying new food, and pursuing new web development projects.
              </h4>

            </div>
      </div>


      <div className="row" id="socialMedia">
        <div className="col"></div>
        <div className="col-2">

          <a href="https://github.com/damparo" target="_blank">
            <i className="fab fa-github"></i>
          </a>

          <a href="https://www.linkedin.com/in/Amparo11/" target="_blank">
            <i className="fab fa-linkedin-in"></i>
          </a>

          <a href="mailto:dennisamparo11@gmail.com">
            <i className="far fa-envelope"></i>
          </a>

        </div>
        <div className="col"></div>
      </div>

       </div>
      </div>
   
    );
  }

  export default Home;
  