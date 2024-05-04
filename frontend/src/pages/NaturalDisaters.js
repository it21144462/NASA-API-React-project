import React from 'react';
import WildfireTracker from "../components/WildfireTracker";
import Loader from "../components/Loader";
import { useState,useEffect } from "react";

function NaturalDisaster() {

    const[eventData,setEventData] = useState([]);
    const[loading,setLoading] = useState(false);
  
    useEffect(()=>{
      const fetchEvents = async()=>{
        setLoading(true);
        const res = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events');
        const {events} = await res.json()
  
        setEventData(events);
        setLoading(false);
        console.log(eventData)
      }
  
      fetchEvents();
      console.log(eventData);
    }, [""])
  
    return (
      <div className="App">
        
        { !loading ? <WildfireTracker eventData={eventData}/>: <Loader />}
        
      </div>
    );
  }
export default NaturalDisaster
