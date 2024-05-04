import React, { useState } from 'react';
import Loader from '../components/Loader';

function Asteriod() {

    const [astFullDate, setAstFullDate] = useState('');
    const [count, setCount] = useState(0);
    const [asteroids, setAsteroids] = useState([]);
    const [loading2, setLoading2] = useState(false);

    const api_key = 'yOPGtFFJvRbP0DddzPAkSTr5frBFNZW2EJPb9jkK'; 

    const fetchAsteroids = async () => {
        setLoading2(true);
        try {
            const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${astFullDate}&end_date=${astFullDate}&api_key=${api_key}`);
            const data = await response.json();
            if (data === undefined) {
                alert("Couldn't get near earth objects, server error");
                return;
            }
            setCount(data.element_count);
            setAsteroids(data.near_earth_objects[astFullDate]);
            //console.log(astFullDate);
        } catch (err) {
            alert("Error while fetching the near earth objects, server error");
        }
        setLoading2(false);
    }

    const handleGetData = () => {
        fetchAsteroids();
    }

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
        <div>
            <h2 className='text-white font-bold text-2xl ml-20'>Near Earth Objects Detection</h2>
            <div className='ml-5  justify-center flex flex-col items-center'>
                <div>
                    <input
                        type="date"
                        value={astFullDate}
                        onChange={(e) => setAstFullDate(e.target.value)}
                        className="border border-gray-400 rounded-md p-2 mr-2"
                    />
                    <button onClick={handleGetData} className='bg-blue-500 text-white px-4 py-2 rounded-md'>Get Data</button>
                </div>
            </div>
            <div className='text-white ml-5'>
                <div className='text-white ml-5 flex flex-row gap-10 mt-5 mb-5 font-bold text-md'>
                    <p>Total Count : {count}</p>
                    <p>Date : {astFullDate}</p>
                </div>

                <div className="ml-10 mr-10">
                    {loading2 ? (
                        <Loader />
                    ) : (
                        <div className='justify-center items-center'>
                            {astFullDate === '' ? (
                                
                                <div className="w-3/4 mx-auto">
                                    <p className="text-center text-transparent">My Application</p>
                                    <p className="text-center text-transparent">My Application</p>
                                    <p className="text-center text-transparent">My Application</p>
                                    <p className="text-center text-transparent">My Application</p>
                                    <p className="text-center text-transparent">My Application</p>
                                    <p className="text-center text-transparent">My Application</p>
                                    <p className="text-center text-transparent">My Application</p>
                                    <p className="text-center text-transparent">My Application</p>
                                    <p className="text-center text-transparent">My Application</p>
                                    <p className="text-center text-transparent">My Application</p>
                                    <p className="text-center text-transparent">My Application</p>
                                    <p className="text-center text-transparent">My Application</p>
                                    <p className="text-center text-transparent">My Application</p>
                                    <p className="text-center text-transparent">My Application</p>
                                    <p className="text-center text-2xl font-bold text-white justify-center">Select the date </p>
                                    <p className="text-center text-transparent">My Application</p>
                                    <p className="text-center text-transparent">My Application</p>
                                    <p className="text-center text-transparent">My Application</p>
                                    <p className="text-center text-transparent">My Application</p>
                                    <p className="text-center text-transparent">My Application</p>
                                    <p className="text-center text-transparent">My Application</p>
                                    <p className="text-center text-transparent">My Application</p>
                                    <p className="text-center text-transparent">My Application</p>
                                    <p className="text-center text-transparent">My Application</p>
                                    <p className="text-center text-transparent">My Application</p>
                                    <p className="text-center text-transparent">My Application</p>
                                    <p className="text-center text-transparent">My Application</p>
                                    <p className="text-center text-transparent">My Application</p>
                                    <p className="text-center text-transparent">My Application</p>
                                    <p className="text-center text-transparent">My Application</p>
                                    <p className="text-center text-transparent">My Application</p>
                                    <p className="text-center text-transparent">My Application</p>
                                    <p className="text-center text-transparent">My Application</p>
                                    

                                </div>
                            ) : (
                                <div className="grid grid-cols-3 gap-5 justify-center">
                                    {asteroids.map((asteroid, index) => (
                                        <div key={index} className="grid-item text-white gap-10 bg-black bg-opacity-70 w-full border-white border-2 rounded-lg pl-3 pr-3 pt-3 pb-3">
                                            <p>Name: {asteroid.name}</p>

                                            <p>Hazardous Status :
                                                <span className={`rounded-md px-2 py-1 ml-3 ${asteroid.is_potentially_hazardous_asteroid ? 'bg-red-500' : 'bg-green-500'}`}>
                                                    {asteroid.is_potentially_hazardous_asteroid ? 'Treat' : 'No-Threat'}
                                                </span>
                                            </p>

                                            <div className='bg-slate-100 rounded-xl p-4 mt-3 text-black'>
                                                <p className='mb-3 font-bold'>Close Approach to the Earth</p>
                                                <p>Date/Time: {asteroid.close_approach_data[0].close_approach_date_full}</p>
                                                <p>Estimated diameter: {asteroid.estimated_diameter.meters.estimated_diameter_min.toFixed(2)} - {asteroid.estimated_diameter.meters.estimated_diameter_max.toFixed(2)} m</p>
                                                <p>Relative Velocity: {asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour} km/h</p>
                                                {asteroid.close_approach_data[0] ? (
                                                    <div>
                                                        <p>Miss Distance: {asteroid.close_approach_data[0].miss_distance.kilometers} km</p>
                                                        <p>Relative Velocity: {asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour} km/h</p>
                                                        <div className='mt-2'>
                                                            <a className='bg-blue-500 p-1 rounded-lg underline hover:bg-blue-700 text-white' href={asteroid.nasa_jpl_url} target='blank'>More info</a>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <p>No close approach data available</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Asteriod;

