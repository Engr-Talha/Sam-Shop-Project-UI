import React from "react";
import "./TimelineFaq.css";
import TopImg from "./Imgs/TopImg.jpg";

import RdImg1 from "./Imgs/RdImg1.png";
import BoxImg1 from "./Imgs/boxImg1.jpeg";
import TimeLine from "./TimeLine";

export default function RoadMap() {
  return (
    <>
      <div className="Sara pb-1">
        <div className="container-fluid">
          <div className="container-fluid TopImg">
            <div class="intro-header-time-line cc-subpage-time-line"></div>
            <div class="timeline-main_heading-wrapper">
              <div class="margin-bottom-medium">
                <h2 class="heading-15">Welcome to the SMO' Roadmap </h2>
              </div>
              <p class="paragraph-large">
                Relive what started by a human with visions of a new world.{" "}
                <br />
                The SMO' Story Arc starts 1 year ago... Strap in.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="Sara"> */}

      <TimeLine />
      {/* </div> */}
      <div className="Sara pt-2">
        <div class="timeline-main_heading-wrapper">
          <div class="margin-bottom-medium">
            <h1 class="heading-15">Today</h1>
          </div>
          <p class="timeline_text">
            Today Relume is a team run by two guys with the same mission in life
            - To wake up every day with a choice to do what we love to do, build
            meaningful relationships and do great work.W3B City Soon
          </p>

          <iframe
            width="640"
            height="359"
            src="https://www.youtube.com/embed/WhWc3b3KhnY"
            title="Spring - Blender Open Movie"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          {/* <button className="btn Button">clone this timeline</button> */}
        </div>
      </div>
    </>
  );
}
