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
          <p>(img here)</p>
        </div>
        <div className="orange">
          <h2>Day Tres!</h2>
          <p className="white-text">Third Day in a Row!</p>
          <p>(img here)</p>
        </div>
        <div className="green">
          <h2>Day 100!</h2>
          <p className="white-text">Guess I haven't posted in a while. Haha</p>
          <p>(img here)</p>
        </div>
      </Carousel>
      <button>Update Progress</button>
      <h2>~ Gym ~</h2>
      <Carousel options={{ fullWidth: true }}>
        <div className="red">
          <h2>Leg Day!</h2>
          <p className="white-text">Worst Day Ever!</p>
          <p>(img here)</p>
          <p>Leg Press: 5 x 12 @ 45 lbs.</p>
          <p>Quad Extension: 5 x 12 @ 45 lbs.</p>
          <p>Calf Raises: 5 x 12 @ 25 lbs.</p>
        </div>
        <div className="orange">
          <h2>Arm Day!</h2>
          <p className="white-text">Best day Ever!</p>
          <p>(img here)</p>
          <p>Bicep Curls: 5 x 12 @ 35 lbs.</p>
          <p>Tricep Extension: 5 x 12 @ 35 lbs.</p>
          <p>Pec Fly: 5 x 12 @ 35 lbs.</p>
        </div>
      </Carousel>
      <button>Update Progress</button>
      <h2>~ Home Improvements ~</h2>
      <Carousel options={{ fullWidth: true }}>
        <div className="red">
          <h2>Kitchen Remodal</h2>
          <p className="white-text">
            Replaced the kitchen floor today. It used to be tile and we replaced it with laminex wood flooring. 
          </p>
          <p>(img here)</p>
        </div>
      </Carousel>
      <button>Update Progress</button>
    </div>
  );
};

export default Dashboard;
