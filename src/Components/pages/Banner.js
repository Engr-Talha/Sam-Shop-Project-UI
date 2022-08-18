import React from "react";
import bannerimage from "./images/6253.png";
import meta from "./images/2656.png";
import { useHistory } from "react-router-dom";
import "./Home.css";

function Banner() {
  const history = useHistory();

  const coursesPage = () => {
    history.push("/Shop");
  };
  return (
    <div>
      <div className="contianer-fluid main-banner-image">
        <img className="banner-image-logo" src={bannerimage} w-100></img>
      </div>

      <div className="contianer">
        <div className="text ">WE WISH FOR YOU TO...</div>

        <div className="heading">
          Keep doing what you do!<br></br>
          Be Kind, Be Unique<br></br>
          You got this!
        </div>
      </div>
      <div className="hr ">
        <hr className="hrr"></hr>
      </div>

      <div className="container Marketplace   ">
        <div className="col-md-6 rightmarket-child ">
          {" "}
          <h2 className="SMOphysicalo">
            SMO' PHYGITAL <br></br>MARKET PLACE
          </h2>
          <p className="paragraphsmo">
            To build a WEB 3.0 based community around us that helps spread
            digital knowledge and provide the necessary tools to be utilized in
            the physical world as for all recognized metaverses as well. In
            addition, we are open and also do want to use our platforms to pave
            the way for multiple projects, brands, and holder ideas helping them
            create and develop and uplift their own WEB 3.0 communities.
          </p>
          <a href="/Shop">
            <button className="shop-buttom">THE SMO SHOP</button>
          </a>
        </div>

        <div className="col-md-6">
          <img className="meta" src={meta}></img>
        </div>
      </div>

      <div className="hr">
        <hr className="hrr"></hr>
      </div>

      <div className="contianer">
        <div className="text">ABOUT US...</div>
        <div className="heading2 ">
          <h2>THE SMO' PURPOSE</h2>
        </div>
      </div>
      <div className="threecoloums">
        <div className="coloums">
          <div className="heading">Mision</div>
          <p className="">
            The SMO' Phygital Marketplace isdesigned with the Physical
            utilization of your NFT's in mind, Here you can browse thru a series
            of exclusive merch, minting your own NFT in the process. All the
            merch sold in first market is marked with NFC tag & QR code.
          </p>
        </div>
        <div className="coloums">
          <div className="heading">Vision</div>
          <p className="">
            Our vision will forever be to innovate and develop inside the WEB
            3.0 ecosystem do wishing to take part and document each step of its
            evolution while also providing our full knowledge and support along
            the process helping WEB 3.0 become a global standard in all house
            holds and communities, This also helps describe our main slogan.
            "Innovating to bring humans and technology closer
          </p>
        </div>

        <div className="coloums">
          <div className="heading">Reason</div>
          <p className="">
            The Reason we do this is for the people that ideas where once
            denied, for you to have a space were you are able to create and be
            free to be able to say out loud anything with out being having
            fingers pointed towards you that's our main reason because Social
            Media Optimization is more the New Tech is Freedom and this freedom
            comes in the form of decentrilization it comes in being private
            while being You being CREATIVE
          </p>
        </div>
      </div>

      <div class="text-block-12">
        <strong class="bold-text-3">
          SMO' &amp; Friends: <br />
        </strong>
        "More than Art and Utility a Strong Growing Community”
      </div>

      <div class="text-block-11">
        {" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Verified
        Smart Contract Adress: &nbsp;
        <strong class="bold-text-4">
          0x099fcfcc1dfdda09cf09605e937434057ac33d38
        </strong>
        <br />
      </div>
    </div>
  );
}

export default Banner;
