import React from "react"
import "./styles.css"
import Image from "../../Assets/BulletJournal.JPG"
import Image1 from "../../Assets/Fitness.JPG"
import Image2 from "../../Assets/mood.JPG"
import Image3 from "../../Assets/PWgenerator.JPG"
import Image4 from "../../Assets/Scheduler.JPG"
import Image5 from "../../Assets/WeatherDash.JPG"

function Project() {
    return (
      <div>
        
        <div className="container">
      <div className="wapper">
        
      
      <div className="row Proj1">
        <div className="col">
          <div className="row imgTitle"><h4>Welcome To Your Mood</h4></div>
          <div className="row image">
            <a href="https://justphvn.github.io/ProjectOne-Vibes/" target="_blank">
              <img className="desert img-fluid" src={Image2} alt="sedona"/>
              </a>
            </div>
          <div className="row techUsed"><a href="https://github.com/JustPhvn/ProjectOne-Vibes" target="_blank"><h5> link to github repo</h5></a>
        </div>
        </div>
      </div>

      <div className="row Proj2">
        <div className="col">
          <div className="row imgTitle"><h4>Bullet Journal</h4></div>
          <div className="row image">
            <a href="https://personal-bullet-journal.herokuapp.com" target="_blank">
            <img className="desert img-fluid" src={Image} alt="sedona"/>
            </a>
          </div>
          <div className="row techUsed"><a href="https://github.com/bfeliz/bullet-journal" target="_blank"><h5> link to github repo</h5></a>

          </div>
        </div>
      </div>

      <div className="row Proj3">
        <div className="col">
          <div className="row imgTitle"><h4>City Forecast</h4></div>
          <div className="row image">
            <a href="https://damparo.github.io/Weather-Dashboard/" target="_blank">
            <img className="desert img-fluid" src={Image5} alt="sedona"/>
            </a>
          </div>
          <div className="row techUsed"><a href="https://github.com/damparo/Weather-Dashboard" target="_blank"><h5> link to github repo</h5></a>

          </div>
        </div>
      </div>

      <div className="row Proj4">
        <div className="col">
          <div className="row imgTitle"><h4>Workout Tracker</h4></div>
          <div className="row image">
            <a href="https://blooming-coast-21791.herokuapp.com/" target="_blank">
            <img className="desert img-fluid" src={Image1} alt="sedona"/>
            </a>
          </div>
          <div className="row techUsed"><a href="https://github.com/damparo/Workout-Tracker" target="_blank"><h5> link to github repo</h5></a>

          </div>
        </div>
      </div>

      <div className="row Proj5">
        <div className="col">
          <div className="row imgTitle"><h4>Day Planner</h4></div>
          <div className="row image">
            <a href="https://damparo.github.io/Day-Planner/" target="_blank">
            <img className="desert img-fluid" src={Image4} alt="sedona"/>
            </a>
          </div>
          <div className="row techUsed"><a href="https://github.com/damparo/Day-Planner" target="_blank"><h5> link to github repo</h5></a>

          </div>
        </div>
      </div>

      <div className="row Proj6">
        <div className="col">
          <div className="row imgTitle"><h4>Password Generator</h4></div>
          <div className="row image">
            <a href="https://damparo.github.io/PassWordGen/" target="_blank">
            <img className="desert img-fluid" src={Image3} alt="sedona"/>
            </a>
          </div>
          <div className="row techUsed"><a href="https://github.com/damparo/PassWordGen" target="_blank"><h5> link to github repo</h5></a>
          </div>
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


      </div>
    );
  }

  export default Project;
  