import React, { useState } from "react";
import "./Newsfeed.css";
import LineGraph from "./LineGraph";
import Timeline from "./Timeline";
import Chip from "@material-ui/core/Chip";
import { Avatar } from "@material-ui/core";

const Newsfeed = () => {
  const [popularTopics, setTopics] = useState([
    "Technology",
    "Top Movies",
    "Upcoming Earnings",
    "Crypto",
    "Cannabis",
    "Healthcare Supplies",
    "Index ETFs",
    "Technology",
    "China",
    "Pharma",
  ]);
  return (
    <div className="newsfeed">
      <div className="newsfeed__container">
        <div className="newsfeed__chartSection">
          <div className="newsfeed__portfolio">
            <h1>$114,656</h1>
            <p>+$44.63 (+0.04%) Today</p>
          </div>
          <div className="newsfeed__chart">
            <LineGraph />
            <Timeline />
          </div>
        </div>
        <div className="newsfeed__buying__section">
          <h2>Buying Power</h2>
          <h2>$4.11</h2>
        </div>
        <div className="newsfeed__market__section">
          <div className="newsfeed__market__box">
            <p>Market's Closed</p>
            <h1>Happy Chinese New Year</h1>
          </div>
        </div>
        <div className="newsfeed__popularlists__section">
          <div className="newsfeed__popularlists__intro">
            <h1>Popular lists</h1>
            <p>Show More</p>
          </div>
          <div className="newsfeed__popularlists__badges">
            {popularTopics.map((topic) => (
              <Chip
                className="topic__badge"
                variant="outlined"
                label={topic}
                avatar={
                  <Avatar
                    src={`https://avatars.dicebear.com/api/human/${topic}.svg`}
                  />
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsfeed;
