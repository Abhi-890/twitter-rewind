import React from "react";
import Navbar from "../Components/Navbar";
import { Button } from "react-bootstrap";
import "./Home.css";
import Footerbar from "../Components/Footerbar";
function Home() {
  return (
    <div className="main">
      <Navbar />
      <div className="upper-bg">
        <img src="./assets/rectangle2.png" alt="" />
      </div>
      <div className="hero1">
        <div className="hero1-left">
          <h2>
            Become a true <span>SURPERFAN</span>
          </h2>
          <p>
            Support your favourite creator by sharing their #TweetsFromHome wall
            <br /> with your loved ones and grow their community.
          </p>
          <div className="search">
            <i>
              <img src="./assets/search_24px.png" alt="" />
            </i>
            <input type="text" placeholder="Search your favourite creator" />
          </div>
          <Button>View Tweets From Home</Button>
        </div>
        <div className="hero1-right">
          <img src="./assets/loganphoto.png" alt="" />
        </div>
      </div>
      <div className="mid-bg">
        <img src="./assets/rectangle2.png" alt="" />
      </div>
      <h1>
        <span>Creators</span> are powerful
      </h1>
      <div className="hero2">
        <div className="hero2-left">
          <img src="./assets/animation.gif.png" alt="" />
          <div className="gif-border border-1"></div>
          <div className="gif-border border-2"></div>
        </div>
        <div className="hero2-right">
          <h6>CREATORS SHAPE CULTURE</h6>
          <p>
            2 in 3 twitter users agree that creators change and shape culture
          </p>
          <p>
            <span>#HiArmy</span> <span>#everydays</span>
          </p>
          <p>
            <span>#teamtrees</span> <span>#BTS</span>
          </p>
          <p>
            <span>#botarmy</span>
          </p>
        </div>
      </div>
      <div className="footer">
        <h1>
          With #TweetsFromHome, express your love for your favourite creator.
        </h1>
        <p>
          Choose the top tweets that you absolutely admire to create your
          version of their #TweetsFromHome wall and simply share on Twitter.
        </p>

        <div className="search-footer">
          <i>
            <img src="./assets/search_24px.png" alt="" />
          </i>
          <input type="text" placeholder="Search your favourite creator" />
        </div>
        <Button>Sign in to continue</Button>
      </div>
      <Footerbar />
    </div>
  );
}

export default Home;
