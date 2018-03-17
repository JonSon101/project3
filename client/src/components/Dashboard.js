import React from "react";
import { Carousel } from "react-materialize";

const Dashboard = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>~ Duolingo ~</h2>
      <Carousel options={{ fullWidth: true }}>
        <div className="red">
          <h2>Day One!</h2>
          <p className="white-text">
            Today was the begining of my journey to Spanish!
          </p>
        </div>
        <div className="orange">
          <h2>Day Tres!</h2>
          <p className="white-text">Third Day in a Row!</p>
        </div>
        <div className="green">
          <h2>Day 100!</h2>
          <p className="white-text">Guess I haven't posted in a while. Haha</p>
        </div>
      </Carousel>
      <h2>~ Gym ~</h2>
      <Carousel options={{ fullWidth: true }}>
        <div className="red">
          <h2>Day One!</h2>
          <p className="white-text">
            Today was the begining of my journey to Spanish!
          </p>
        </div>
        <div className="orange">
          <h2>Day Tres!</h2>
          <p className="white-text">Third Day in a Row!</p>
        </div>
        <div className="green">
          <h2>Day 100!</h2>
          <p className="white-text">Guess I haven't posted in a while. Haha</p>
        </div>
      </Carousel>
      <h2>~ Home Improvements ~</h2>
      <Carousel options={{ fullWidth: true }}>
        <div className="red">
          <h2>Day One!</h2>
          <p className="white-text">
            Today was the begining of my journey to Spanish!
          </p>
        </div>
        <div className="orange">
          <h2>Day Tres!</h2>
          <p className="white-text">Third Day in a Row!</p>
        </div>
        <div className="green">
          <h2>Day 100!</h2>
          <p className="white-text">Guess I haven't posted in a while. Haha</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Dashboard;
