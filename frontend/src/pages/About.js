import React from 'react';
import spaceImage from  '../assests/NASA_Mars_Rover.jpg';
import wildfireImage from '../assests/nasa-apollo-proj.jpg';
import AsterionutImage from '../assests/Asterionut.jpg';


const About =()=> {

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
    <div className="bg-gray-900 text-white min-h-screen">

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 sm:px-8">
        {/* About Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <p className="text-lg leading-relaxed">
            At Space Explorer, we're passionate about bringing you closer to the wonders of the universe. 
            Our mission is to provide you with real-time data and captivating imagery from NASA, 
            allowing you to explore Earth's dynamic landscapes and delve into the mysteries of the cosmos 
            right from your screen.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src={spaceImage} alt="Space" className="rounded-lg shadow-md" />
          <img src={wildfireImage} alt="Wildfire" className="rounded-lg shadow-md mt-10" />
          
          
        </div>

        {/* NASA's Contributions */}
        <section className="mb-12 mt-5">
          <h2 className="text-3xl font-semibold mb-4">NASA's Contributions</h2>
          <p className="text-lg leading-relaxed mb-4">
            NASA has been at the forefront of space exploration, scientific research, and innovation 
            for decades, bringing numerous benefits to humanity. Some of NASA's key contributions include:
          </p>
          <ul className="list-disc ml-20">
            <li className="text-sm">Advancements in space exploration technology</li>
            <li className="text-sm">Understanding Earth's climate and environment</li>
            <li className="text-sm">Discovering new exoplanets and celestial objects</li>
            <li className="text-sm">Inspiring future generations of scientists and engineers</li>
          </ul>
        </section>

        {/* Website Purpose */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Website</h2>
          <p className="text-lg leading-relaxed mb-4">
            Space Explorer is your gateway to the cosmos, offering a unique blend of real-time data, 
            captivating imagery, and educational resources. Whether you're interested in tracking 
            wildfires, viewing the latest picture of the day from NASA, or staying informed about 
            near-Earth asteroids, our website has something for every space enthusiast.
          </p>
          <p className="text-lg leading-relaxed">
            Join us on this cosmic journey as we explore the wonders of the universe together!
          </p>
        </section>

        {/* Images */}
        <div className="flex flex-col items-center">
          <img src={AsterionutImage} alt="Space" className="rounded-lg shadow-md" />
          
        </div>
      </main>

      
    </div>
  );
};

export default About;


