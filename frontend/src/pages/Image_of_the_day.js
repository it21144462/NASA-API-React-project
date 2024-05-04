import React, { useState, useEffect } from "react";

function Image_of_the_day() {
  const [date, setDate] = useState("");
  const [imageData, setImageData] = useState(null);
  const [error, setError] = useState(
    'Please select a date and click "Fetch Image".'
  );
 
  const handleChange = (e) => {
    setDate(e.target.value);
  };

  const fetchData = () => {
    setError("");
    const selectedDate = new Date(date);
    const currentDate = new Date();

    if (selectedDate > currentDate) {
      setError("Please select a past or present date.");
      return;
    }

    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=yOPGtFFJvRbP0DddzPAkSTr5frBFNZW2EJPb9jkK&date=${date}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setError(data.error.message);
        } else {
          setImageData(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again.");
      });
  };

  useEffect(() => {
    fetchData(); // Fetch data on initial load
  }, []);

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
    <div className="container mx-auto mt-8 p-4 flex flex-col items-center">
      <div>
        <input
          type="date"
          value={date}
          onChange={handleChange}
          className="border border-gray-400 rounded-md p-2 mr-2"
        />
        <button
          onClick={fetchData}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Get Image
        </button>
      </div>
      {error && (
        <p
          className={`text-red-600 font-bold mt-2 ${
            new Date(date) > new Date() ? "text-white" : "text-red-500"
          }`}
        >
          {error}
        </p>
      )}
      {imageData && (
        <div className="mt-8 bg-gray-900 p-6 rounded-lg shadow-xl">
          <div className="flex flex-row items-center justify-between mb-4">
            <h2 className="text-3xl font-bold text-white">{imageData.title}</h2>
          </div>
          <p className="text-white">Copyright: {imageData.copyright}</p>
          <p className="text-white">Date: {imageData.date}</p>
          <p className="text-white mt-4">{imageData.explanation}</p>
          <div className="mt-6 flex justify-center">
            <img
              src={imageData.url}
              alt={imageData.title}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Image_of_the_day;

