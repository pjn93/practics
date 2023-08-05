import { useEffect, useState } from "react";
import "./App.css";
import Games1 from "./Games1";
import Header from "./Header";

function App() {
  let [data, setData] = useState([]);
  // let [gamename, setGamename] = useState([]);
  let gamename = [];
  useEffect(() => {
    async function getData() {
      let response = await fetch(
        "https://run.mocky.io/v3/31709b10-7d7a-448f-8d52-103cfaca1875"
      );
      let finalData = await response.json();
      setData(finalData.games);
    }
    getData();
  }, []);
  // console.log(data);
  function getGamenames() {
    for (let i = 0; i < data.length - 1; i++) {
      gamename.push(data[i].franchisee);
    }
  }
  getGamenames();
  console.log(gamename);
  return (
    <div className="App">
      <Header gamename={gamename} />
      
      {/* <h1>Main page</h1> */}

      {data.map((item, index) => {
        return (
          <div>
            {/* <h2>Top: {item.franchisee}</h2> */}
            {/* <Header gamename={item.franchisee} /> */}
            {item.titles.map((it, ind) => {
              return (
                <>
                  {/* <h5>Game name: {it.title}</h5>
                  <h2>
                    <img
                      src={it.cover_image}
                      alt="imag"
                      height={80}
                      width={80}
                    />
                    <img
                      src={it.background_image}
                      alt="imag"
                      height={80}
                      width={80}
                    />
                    <img
                      src={it.title_icon}
                      alt="imag"
                      height={80}
                      width={80}
                    />
                  </h2> */}
                </>
              );
            })}
          </div>
        );
      })}
      {/* <Header games1={gamename} /> */}
    </div>
  );
}

export default App;
