import React from "react";

const Tutorial = () => {
  return (
    <div>
      <div className="t-flex">
        <div className="t-paragraph">
          <h1>How it Works</h1>
          <p>
            The system is intergrated to serve both the students, schools and
            provide a report to the ministry. Click on the button below to learn
            more...
          </p>
          <button className="h-button">Learn More</button>
        </div>
        <div className="t-video">
          <iframe
            width="100%"
            src="https://www.youtube.com/embed/Lat1ncaJS0k?si=ObFk4vpXan0FhczQ?autoplay=1&mute=1"
            title=" Abena Forwarding Platform Tutorial"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
