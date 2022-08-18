import React from "react";
import "./Home.css";

import logo from "./images/6252dd3ed42119959baea504_PNG_FILE_TRANSF_3-p-500.png";
function Navbar() {
  return (
    <div>
      <nav class="navbar navbackground  navbar-expand-lg ">
        <div class="container-fluid">
          <a class="imagelogo navbar-brand" href="/">
            <img
              src={logo}
              alt=""
              width="60"
              height="54"
              class="d-inline-block align-text-top"
              href="home"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="Smoandfriends">
                  SMO' & FRIENDS{" "}
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="RoadMap">
                  ROADMAP
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="Faq">
                  FAQ
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link " href="Contact">
                  CONTACT
                </a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <button class="btn btn-outline-success" type="submit">
                Connect Wallet
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
