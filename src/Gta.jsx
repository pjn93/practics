import React, { useState, useEffect } from "react";
import axios from "axios";
import "./games.css";
import Header from "./Header";

const Gta = (props) => {
  const [dataSource, setDataSource] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://run.mocky.io/v3/31709b10-7d7a-448f-8d52-103cfaca1875")
      .then((response) => {
        setDataSource(response.data.games[1]);
        console.log(response.data.games[1]);
      })
      .catch((error) => {
        setError("Error fetching data from the API.");
      });
  };

  return (
    <div className="container">
      {/* <Header /> */}

      {/*     
       <div>
          {dataSource.map((item) => (
            <>
            <h2>{item.title}</h2>
            <img src={item.cover_image} alt='game1' width='100px' height='100px'/>
            <img src={item.background_image} alt='game1' width='150px' height='150px'/>
            <img src={item.title_icon} alt='game1' width='50px' height='50px'/>
        
            </>

          ))}
          </div>
     */}
      <div className="flex-container">
        <div className="flex-item-left">
          <div className="flexleft1">
            <div>
              <img
                className="zoom"
                src={props.cover_image[0]}
                alt="butterfly"
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
                src={props.cover_image[1]}
                alt="butterfly"
              />
            </div>
          </div>
          <span>
            <p className="text1">Grand theft auto: |||</p>
          </span>
        </div>

        <div className="flex-item-right">
          <p className="text2">grand theft auto III</p>
          <button className="btn">Buy now</button>
        </div>
        <div className="flex-item-right1">
          <p className="text3">grand theft auto III</p>
        </div>
      </div>
    </div>
  );
};

export default Gta;
