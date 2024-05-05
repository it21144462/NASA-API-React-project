import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import { NaturalDisasterSVG1 } from "../components/NaturalDisasterSVG1";
import { NaturalDisasterSVG2 } from "../components/NaturalDisasterSVG2";
import { NaturalDisasterSVG3 } from "../components/NaturalDisasterSVG3";


function Home() {

  const handleSignout = () => {
    localStorage.clear();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    
    // Provide feedback to the user
    alert("You have been logged out successfully!"); // Or use a toast notification library
    
    // Redirect the user to the login page
    window.location.href = '/'; // Adjust the route based on your application's routes
  }

  
  return (
    <div className="container mx-auto h-screen flex flex-col justify-center py-8">
     <div>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
      <h1 className="text-3xl font-bold mb-1 text-white">Cosmic Explorer Hub</h1>
      <h1 className="text-sm font-bold mb-4 text-white ml-20">
        Unveiling 
        <span className="text-red-600"> Earth's </span>
        Dynamic & 
        <span className="text-red-600"> Celestial </span>
        Marvels
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 ">
        {/* ----------------------------------------------------- */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col items-center justify-center space-y-4 hover-scale top-container">
          <div className="flex items-center justify-center">
            {/* {NaturalDisasterSVG1} */}<NaturalDisasterSVG1/>
          </div>
          <h2 className="text-xl font-bold mb-2 text-center">
          <span className="text-red-600">Disaster Watch : </span>
            Worldwide Disasters Radar
          </h2>
          <p className="text-gray-700">
          Explore the planet's pulse with real-time data on wildfires, icebergs, and volcanoes.
           Witness Earth's ever-changing landscape and stay informed about natural phenomena shaping our world.
          </p>
          <Link
            to="/natural-disaster"
            className="bg-blue-500 rounded-full text-white font-bold py-2 px-4 transition-transform duration-300 border border-black "
            style={{ border: "1px solid black" }} // Inline style for border color
          >
            Check
          </Link>
        </div>
        {/* ---------------------------------------------- */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col items-center justify-center space-y-4 hover-scale">
          <div className="flex items-center justify-center">
            {/* {NaturalDisasterSVG2} */}<NaturalDisasterSVG2/>
          </div>
          <h2 className="text-xl font-bold mb-2 text-center">
          <span className="text-red-600">Space Odyssey : </span>
          Picture of the Day
          </h2>
          <p className="text-gray-700">
          Embark on a cosmic journey through captivating images captured by NASA.
           Delve into the universe's beauty with daily snapshots of celestial wonders.
            Enter a realm where every picture tells a story of the cosmos.
          </p>
          <Link
            to="/image-of-the-day"
            className="bg-blue-500 rounded-full text-white font-bold py-2 px-4 transition-transform duration-300 border border-black "
            style={{ border: "1px solid black" }} // Inline style for border color
          >
            Check
          </Link>
        </div>
        {/* ---------------------------------------------- */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col items-center justify-center space-y-4 hover-scale bottom-container">
          <div className="flex items-center justify-center">
            {/* {NaturalDisasterSVG3} */}<NaturalDisasterSVG3/>
          </div>
          <h2 className="text-xl font-bold mb-2 text-center">
          <span className="text-red-600">Asteroid Alert : </span>
            Near Earth Objects Detection
          </h2>
          <p className="text-gray-700">
          Unveil the mysteries of the cosmos and track asteroids on a collision course with Earth.
           Stay vigilant with timely updates on celestial visitors and safeguard our planet from cosmic threats.
            Explore the unknown depths of space from the comfort of your screen.
          </p>
          <Link
            to="/asteriod"
            className="bg-blue-500 rounded-full text-white font-bold py-2 px-4 transition-transform duration-300 border border-black "
            style={{ border: "1px solid black"}} // Inline style for border color
          >
            Check
          </Link>
        </div>
        
        
        {/* ---------------------------------------------- */}
      </div>
    </div>
  );
}

export default Home;

