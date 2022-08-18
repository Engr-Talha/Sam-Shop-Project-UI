import React from "react";
import "./Shop.css";
import TopImg from "./Imgs/TopImg.jpg";

const banner = require("../pages/images/smo and friends.jpg");
const two = require("../pages/images/627408fa160e4f7a02ff270e_SMO.png");
const one = require("../pages/images/627321a54fa4de4262670d46_SMO-5.png");
const three = require("../pages/images/627323c12faf65f7fd13119d_Untitled design.png");

const firstgif = require("../pages/images/62c3962a670a967624860ea9_Rotating Hoodie.gif");
const secondgif = require("../pages/images/62c39b1369f3e62c11a00d8b_Untitled design.gif");
const thirdgif = require("../pages/images/62c39db9a5e65903c4e88b05_Polo White.gif");

function Shop() {
  return (
    <div className="main-wrapper">
      <div className="banner">
        <img className="bannerimage" src={TopImg}></img>
      </div>

      <div className="contianer">
        <div className="text ">NEW FROM SMO'</div>

        <div className="heading">SMO' BRAND PHYGITAL WEARABLES</div>
      </div>

      <div className="contianer">
        <h1 class="smo-break-s1-lvl-1-header">
          <span class="text-span-28">SMO'</span>{" "}
          <span class="text-span-27"> BREAK</span>&nbsp;
          <span class="text-span-29">|</span> &nbsp;PILOT
        </h1>{" "}
      </div>

      <div class="smo-break-s1-lvl-1-divider"></div>

      <div className="products">
        <div className="product-item">
          <div className="backgroundprodict-image">
            {" "}
            <img className="imagesetting" src={one}></img>
          </div>

          <div class="smo-hat-v1-header">SMO' Hat</div>
          <div class="smo-hat-v1-price">
            ETH 0.08<span class="text-span-19"></span>
            <br />
          </div>
          <div className="buttons-shop">
            <a href="#" class="smo-small-hat-lvl-1 w-button">
              Small
            </a>
            <a href="#" class="smo-medium-hat-lvl-1 w-button">
              Medium
            </a>
            <a href="#" class="smo-large-hat-lvl-1 w-button">
              Large
            </a>
          </div>
        </div>

        <div className="product-item">
          <div className="backgroundprodict-image">
            {" "}
            <img className="imagesetting" src={two}></img>
          </div>

          <div class="smo-hat-v1-header">SMO' Hoodie</div>
          <div class="smo-hat-v1-price">
            ETH 0.08<span class="text-span-19"></span>
            <br />
          </div>
          <div className="buttons-shop">
            <a href="#" class="smo-small-hat-lvl-1 w-button">
              Small
            </a>
            <a href="#" class="smo-medium-hat-lvl-1 w-button">
              Medium
            </a>
            <a href="#" class="smo-large-hat-lvl-1 w-button">
              Large
            </a>
            <a href="#" class="smo-large-hat-lvl-1 w-button">
              XLarge
            </a>
            <a href="#" class="smo-large-hat-lvl-1 w-button">
              2XLarge
            </a>
          </div>
        </div>

        <div className="product-item">
          <div className="backgroundprodict-image">
            {" "}
            <img className="imagesetting" src={three}></img>
          </div>

          <div class="smo-hat-v1-header">SMO' Hat</div>
          <div class="smo-hat-v1-price">
            ETH 0.08<span class="text-span-19"></span>
            <br />
          </div>
          <div className="buttons-shop">
            <a href="#" class="smo-small-hat-lvl-1 w-button">
              31/30
            </a>
            <a href="#" class="smo-medium-hat-lvl-1 w-button">
              32/30
            </a>
            <a href="#" class="smo-large-hat-lvl-1 w-button">
              33/30
            </a>
          </div>
        </div>
      </div>
      <div className="products">
        <div className="product-item">
          <div className="backgroundprodict-image">
            {" "}
            <img className="imagesetting" src={one}></img>
          </div>

          <div class="smo-hat-v1-header">SMO' Hat</div>
          <div class="smo-hat-v1-price">
            ETH 0.08<span class="text-span-19"></span>
            <br />
          </div>
          <div className="buttons-shop">
            <a href="#" class="smo-small-hat-lvl-1 w-button">
              Small
            </a>
            <a href="#" class="smo-medium-hat-lvl-1 w-button">
              Medium
            </a>
            <a href="#" class="smo-large-hat-lvl-1 w-button">
              Large
            </a>
          </div>
        </div>

        <div className="product-item">
          <div className="backgroundprodict-image">
            {" "}
            <img className="imagesetting" src={two}></img>
          </div>

          <div class="smo-hat-v1-header">SMO' Hoodie</div>
          <div class="smo-hat-v1-price">
            ETH 0.08<span class="text-span-19"></span>
            <br />
          </div>
          <div className="buttons-shop">
            <a href="#" class="smo-small-hat-lvl-1 w-button">
              Small
            </a>
            <a href="#" class="smo-medium-hat-lvl-1 w-button">
              Medium
            </a>
            <a href="#" class="smo-large-hat-lvl-1 w-button">
              Large
            </a>
            <a href="#" class="smo-large-hat-lvl-1 w-button">
              XLarge
            </a>
            <a href="#" class="smo-large-hat-lvl-1 w-button">
              2XLarge
            </a>
          </div>
        </div>

        <div className="product-item">
          <div className="backgroundprodict-image">
            {" "}
            <img className="imagesetting" src={three}></img>
          </div>

          <div class="smo-hat-v1-header">SMO' Hat</div>
          <div class="smo-hat-v1-price">
            ETH 0.08<span class="text-span-19"></span>
            <br />
          </div>
          <div className="buttons-shop">
            <a href="#" class="smo-small-hat-lvl-1 w-button">
              31/30
            </a>
            <a href="#" class="smo-medium-hat-lvl-1 w-button">
              32/30
            </a>
            <a href="#" class="smo-large-hat-lvl-1 w-button">
              33/30
            </a>
          </div>
        </div>
      </div>
      <div className="products">
        <div className="product-item">
          <div className="backgroundprodict-image">
            {" "}
            <img className="imagesetting" src={one}></img>
          </div>

          <div class="smo-hat-v1-header">SMO' Hat</div>
          <div class="smo-hat-v1-price">
            ETH 0.08<span class="text-span-19"></span>
            <br />
          </div>
          <div className="buttons-shop">
            <a href="#" class="smo-small-hat-lvl-1 w-button">
              Small
            </a>
            <a href="#" class="smo-medium-hat-lvl-1 w-button">
              Medium
            </a>
            <a href="#" class="smo-large-hat-lvl-1 w-button">
              Large
            </a>
          </div>
        </div>

        <div className="product-item">
          <div className="backgroundprodict-image">
            {" "}
            <img className="imagesetting" src={two}></img>
          </div>

          <div class="smo-hat-v1-header">SMO' Hoodie</div>
          <div class="smo-hat-v1-price">
            ETH 0.08<span class="text-span-19"></span>
            <br />
          </div>
          <div className="buttons-shop">
            <a href="#" class="smo-small-hat-lvl-1 w-button">
              Small
            </a>
            <a href="#" class="smo-medium-hat-lvl-1 w-button">
              Medium
            </a>
            <a href="#" class="smo-large-hat-lvl-1 w-button">
              Large
            </a>
            <a href="#" class="smo-large-hat-lvl-1 w-button">
              XLarge
            </a>
            <a href="#" class="smo-large-hat-lvl-1 w-button">
              2XLarge
            </a>
          </div>
        </div>

        <div className="product-item">
          <div className="backgroundprodict-image">
            {" "}
            <img className="imagesetting" src={three}></img>
          </div>

          <div class="smo-hat-v1-header">SMO' Hat</div>
          <div class="smo-hat-v1-price">
            ETH 0.08<span class="text-span-19"></span>
            <br />
          </div>
          <div className="buttons-shop">
            <a href="#" class="smo-small-hat-lvl-1 w-button">
              31/30
            </a>
            <a href="#" class="smo-medium-hat-lvl-1 w-button">
              32/30
            </a>
            <a href="#" class="smo-large-hat-lvl-1 w-button">
              33/30
            </a>
          </div>
        </div>
      </div>

      <div class=" mtb-3"></div>
      <div className="products">
        <div className="product-item-gif">
          <h1 class="heading-34">SMO' HOODIE</h1>
          <div className="">
            {" "}
            <img className="imagesetting-gif" src={firstgif}></img>
          </div>
        </div>
        <div className="product-item-gif">
          <h1 class="heading-34">SMO' SHIRT</h1>
          <div className="">
            {" "}
            <img className="imagesetting-gif" src={secondgif}></img>
          </div>
        </div>
        <div className="product-item-gif">
          <h1 class="heading-34">SMO' POLO</h1>
          <div className="">
            {" "}
            <img className="imagesetting-gif" src={thirdgif}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
