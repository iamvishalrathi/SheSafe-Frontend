import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import Piegraph from "../components/Piegraph.jsx";
import VideoFeed from "../components/VideoFeed.jsx";
import io from "socket.io-client";

const Alert = () => {
  const [alert, setAlert] = useState(true);
  const handleAlert = () => {
    setAlert(!alert);
  };

  return (
    <>
      {alert && (
        <div className="bg-slate-400 flex flex-row justify-between items-center w-[200px] my-2 px-3 rounded-md h-[40px] text-xl">
          <FontAwesomeIcon icon={faExclamationCircle} />
          <h4>Alert!</h4>
          <button onClick={handleAlert}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      )}
    </>
  );
};

const Live = () => {
  // State to manage real-time gender counts
  const [genderCounts, setGenderCounts] = useState({ male: 0, female: 0 });
  const [totalPersons, setTotalPersons] = useState(0);

  // Fetch the gender count from the backend
  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://localhost:5000/gender_count")
        .then((response) => response.json())
        .then((data) => setGenderCounts(data));
    }, 1000); // Update every 1 second

    return () => clearInterval(interval);
  }, []);

  // setTotalPersons(genderCounts.male + genderCounts.female);

  return (
    <div className="h-[550px] flex flex-row gap-16 justify-center items-center">
      <div>
        {/* Video Feed Component */}
        <VideoFeed />
        <div className="flex justify-center items-center w-[664px] gap-28 mt-5">
          <button className="w-[100px] h-[40px] rounded-lg bg-[#c82926] font-medium">
            Camera List
          </button>
          <button className="w-[80px] h-[40px] rounded-lg bg-[#2C2C2C] text-white">
            Events
          </button>
        </div>
      </div>

      {/* Gender counts and Pie Chart */}
      <div className="flex flex-col gap-10">
        <div className="flex flex-col justify-around text-start items-center w-[250px] h-[105px] bg-[#D9D9D9] rounded-lg text-xl">
          {/* <h2>No of People: {totalPersons}</h2> */}
          <h2>No of Men: {genderCounts.male}</h2>
          <h2>No of Women: {genderCounts.female}</h2>
        </div>
        <div className="w-[250px] h-[200px]">
          <Piegraph male={genderCounts.male} female={genderCounts.female} />
        </div>
      </div>

      {/* Alerts Section */}
      <div className="w-[250px] h-[400px] bg-[#D9D9D9] flex flex-col items-center p-1 rounded-xl">
        {/* Render multiple alerts */}
        {[...Array(6)].map((_, index) => (
          <Alert key={index} />
        ))}
      </div>
    </div>
  );
};

export default Live;
