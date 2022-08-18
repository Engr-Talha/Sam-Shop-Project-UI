import React from "react";
import "./TimelineFaq.css";
import TopImg from "./Imgs/TopImg.jpg";
import Con2Img from "./Imgs/Con2Img.jpg";
import Con3Img from "./Imgs/Con3Img.jpg";
import Con4Img from "./Imgs/Con4Img.jpg";
import Con5Img from "./Imgs/Con5Img.jpg";
import Con6Img from "./Imgs/Con6Img.png";

export default function Faq() {
  return (
    <div className="SaraFaq pb-1">
      <div className="container-fluid">
        <div className="container-fluid TopImg">
          <div class="intro-header-time-line cc-subpage-time-line"></div>
          <div class="section-heading-wrap">
            <div class="label cc-light">ENFOQUE PUERTO RICO LLC @ 2022</div>
            <h2 class="heading-31  ">SMO' &amp; Friends FAQ</h2>
          </div>
        </div>

        <div className="container">
          <a className="ImgTxt">
            <img className="w-100 Sec1" src={TopImg}></img>
          </a>
          <a className="ImgTxt">
            <h3 className="pt-3 Txt  text-center ">SMO' Phygital Brand</h3>
          </a>
          <h6 className="text-white text-center">Art and Brand direction</h6>
        </div>

        <div className="container container-2 ">
          <a className="ImgTxt">
            <img className="w-100 Sec1" src={Con2Img}></img>
          </a>
          <a>
            <h3 className="pt-3 Txt text-white text-center">
              WAGMI - INICIATIVE
            </h3>
          </a>
          <h6 className="text-white text-center">MUSIC COMPANY</h6>
        </div>

        <div className="container container-2 ">
          <a>
            <img className="w-100 Sec1" src={Con3Img}></img>
          </a>
          <a className="ImgTxt">
            <h3 className="pt-3 Txt text-white text-center">
              ISP - PASSION FOR FASHION
            </h3>
          </a>
          <h6 className="text-white text-center">Mother Company</h6>
        </div>

        <div className="container container-2 ">
          <a>
            <img className="w-100 Sec1" src={Con4Img}></img>
          </a>
          <a className="ImgTxt">
            <h3 className="pt-3 Txt text-white text-center">
              DEX's - WILL OF FIRE LEGACY
            </h3>
          </a>
          <h6 className="text-white text-center">Art and Brand direction</h6>
        </div>

        <div className="container container-2 ">
          <a>
            <img className="w-100 Sec1" src={Con5Img}></img>
          </a>
          <a className="ImgTxt">
            <h3 className="pt-3 Txt text-white text-center">
              SMO' & Friends Initiative{" "}
            </h3>
          </a>
          <h6 className="text-white text-center">Foundation</h6>
        </div>

        <div className="container container-2 ">
          <a>
            <img className="w-100 " src={Con6Img}></img>
          </a>
          <a className="ImgTxt">
            <h3 className="pt-3 Txt text-white text-center">
              Enfoque Puerto Rico
            </h3>
          </a>
          <h6 className="text-white text-center">Mother Company</h6>
        </div>

        <div className="container container-2 ">
          <h6 className="text-dark text-center pb-5">Powered by Webflow</h6>
        </div>
      </div>
    </div>
  );
}
