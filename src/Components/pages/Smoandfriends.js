import React from "react";
import logo from "./images/6252dd3ed42119959baea504_PNG_FILE_TRANSF_3-p-500.png";
import Slider from "react-slick";
import one from "./images/626b235a4858852426472eb8_PNG_FILE_TRANSF_3-p-800.png";
import two from "./images/62d1a1521ed7e93d2315ec36_PNG_FILE_TRANSF_CONCEPT_1-p-800.png";
import three from "./images/62d1a0fee40a0678ce08b077_PNG_TRANSF_FILE_1-p-800.png";
import four from "./images/62dc1ce199bfd644cd5fa789_PNG_FILE_TRANSF_CONCEPT_1-2-p-500.png";
import five from "./images/62d24f5f633c390435d45e1e_Untitled design (1).png";
import six from "./images/62eeb980d640655b94b48513_ex-03-p-500.jpg";

import "./Smoandfriends.css";
const banner = require("../pages/images/smo and friends.jpg");

function Smoandfriends() {
  return (
    <div className="main-wrapper">
      <div className="banner">
        <img className="bannerimage" src={banner}></img>
      </div>

      <div className="contianer">
        <div className="heading">
          We’re a collective of creative thinkers<br></br> looking to built a
          community that <br></br>changes the WEB 3 World.
        </div>
      </div>

      <div className="hr ">
        <hr className="hrr"></hr>
      </div>

      <div className="contianer">
        <div className="text ">SOCIAL FEED, NEWS & UPDATES...</div>

        <div className="heading">What's New from SMO' & Friends</div>
      </div>

      {/* <div className="div-contianer">
        <div className="FirstPost"></div>
        <div className="SecondPost"></div>
        <div className="ThirdPost"></div>
      </div> */}
      <div className="contianer">
        <div className="heading paddingtopandbottom">SMO' & Friends NFT</div>
      </div>
      <div className="nfts">
        <div className="nft1">
          <div>
            {" "}
            <img className="nft-image" src={one}></img>
          </div>
          <div>
            {" "}
            <img src={logo} className="logo-image-nft"></img>
          </div>
          <h4 className="name-of-nft">The Masters Key</h4>
          <h4 className="name-of-nft">5/6</h4>
          <div className="button-inline">
            <a className=" smo-shop-button">SHOP</a>
            <a className=" smo-shop-button">Create</a>
            <a className=" smo-shop-button">Mint</a>
          </div>
        </div>

        <div className="nft2">
          <div>
            {" "}
            <img className="nft-image" src={two}></img>
          </div>
          <div>
            <h4 className="isp-nft-page">ISP</h4>
          </div>
          <h4 className="name-of-nft">The SMO & Friends Journeys</h4>
          <h4 className="name-of-nft">1 / 25</h4>
          <div className="button-inline">
            <a className="isp---series-button">SHOP</a>
            <a className="isp---series-button">Create</a>
            <a className="isp---series-button">Mint</a>
          </div>
        </div>

        <div className="nft2">
          <div>
            {" "}
            <img className="nft-image" src={three}></img>
          </div>
          <div>
            <h4 className="isp-nft-page">WAGMI</h4>
          </div>
          <h4 className="name-of-nft">Music thru the veins</h4>
          <h4 className="name-of-nft">1 / 80</h4>
          <div className="button-inline">
            <a className=" wagmi---shop-button">SHOP</a>
            <a className="wagmi---shop-button">Create</a>
            <a className="wagmi---shop-button">Mint</a>
          </div>
        </div>
      </div>
      <div className="nfts-second-row">
        <div className="div-block-15">
          <div>
            {" "}
            <img className="nft-image" src={four}></img>
          </div>
          <div>
            <h4 className="isp-nft-page">DEX</h4>
          </div>
          <h4 className="name-of-nft">The Power of Knowledge</h4>
          <h4 className="name-of-nft">1 / 25</h4>
          <div className="button-inline">
            <a className=" dex---mint-button">Learn</a>
            <a className=" dex---mint-button">Mint</a>
            <a className=" dex---mint-button">App</a>
          </div>
        </div>

        <div className="div-block ">
          <div>
            {" "}
            <img className="nft-image" src={six}></img>
          </div>
          <div>
            <h4 className="isp-nft-page">PG ‍</h4>
          </div>
          <h4 className="name-of-nft">The Chefs Choice</h4>
          <h4 className="name-of-nft">1/100</h4>
          <div className="button-inline">
            <a className="pg---diet-button">Diet</a>
            <a className="pg---diet-button">Mint</a>
            <a className="pg---diet-button">Disc</a>
          </div>
        </div>

        <div className="div-block-16">
          <div>
            {" "}
            <img className="nft-image" src={five}></img>
          </div>
          <div>
            <h4 className="isp-nft-page">CLEO</h4>
          </div>
          <h4 className="name-of-nft">Passion for Fashion</h4>
          <h4 className="name-of-nft">NI PUTA IDEA QUE VOY HACER ‍ UNLMTD</h4>
          <div className="button-inline">
            <a className=" wagmiq---shop-button">Mint</a>
            <a className="wagmiq---shop-button">Mint</a>
            <a className="wagmiq---shop-button">Mint</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Smoandfriends;
