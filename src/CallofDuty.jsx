import React, { useState, useEffect } from "react";
import { useNavigate, Route } from "react-router-dom";
import axios from "axios";
import Cod1 from "./Cod1";
import "./games.css";

const CallofDuty = (props) => {
  const navigate = useNavigate();

  const cod = () => {
    navigate("cod1");
    return (
      <>
        <Route path="cod1" element={<Cod1  />} />
      </>
    );
  };

  return (
    <div>
      <div className="container">
        {/* <Header/> */}

        <div className="flex-container">
          <div className="flex-item-left">
            <div className="flexleft1">
              <div>
                <img
                  className="zoom"
                  src={props.cover_image[0]}
                  alt="butterfly"
                  onClick={() => cod()}
                />
              </div>
              <div style={{ marginLeft: "5px" }}>
                <img
                  className="zoom"
                  src={props.cover_image[1]}
                  alt="butterfly"
                />
              </div>
              <div style={{ marginLeft: "5px" }}>
                <img
                  className="zoom"
                  src={props.cover_image[2]}
                  alt="butterfly"
                />
              </div>
            </div>

           
          </div>
          <div style={{marginTop:'70px'}}>
          

          <Cod1 />

          </div>
        </div>
      </div>
    </div>
  );
};

export default CallofDuty;
