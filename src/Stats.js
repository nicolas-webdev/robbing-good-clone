import React, { useState, useEffect } from "react";
import "./Stats.css";
import axios from "axios";
import StatsRow from "./StatsRow";
import { db } from "./firebase";

const TOKEN = "c0ii5pn48v6r4cfkbh9g";
const BASE_URL = "https://finnhub.io/api/v1/quote";

const Stats = () => {
  const [stockData, setStockData] = useState([]);
  const [myStocks, setMyStocks] = useState([]);

  const getStockData = (stock) => {
    return axios
      .get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`)
      .catch((error) => {
        console.error("Error", error.message);
      });
  };

  const getMyStocks = () => {
    db.collection("myStocks").onSnapshot((snapshot) => {
      let promises = [];
      let tempData = [];
      snapshot.docs.map((doc) => {
        promises.push(
          getStockData(doc.data().ticker).then((res) => {
            tempData.push({
              id: doc.id,
              data: doc.data(),
              info: res.data,
            });
          })
        );
      });
      Promise.all(promises).then(() => {
        setMyStocks(tempData);
      });
    });
  };

  useEffect(() => {
    let tempStockData = [];
    const stocksList = ["AAPL", "MSFT", "DIS", "TWTR", "KO", "NFLX", "TER"];
    let promises = [];
    stocksList.forEach((stock) => {
      promises.push(
        getStockData(stock).then((res) => {
          tempStockData.push({
            name: stock,
            ...res.data,
          });
        })
      );
    });

    Promise.all(promises).then(() => {
      setStockData(tempStockData);
    });

    getMyStocks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="stats">
      <div className="stats__container">
        <div className="stats__header">
          <p>Stocks</p>
        </div>
        <div className="stats__content">
          <div className="stats__rows">
            {myStocks.map((stock) => (
              <StatsRow
                key={stock.data?.ticker}
                name={stock.data?.ticker}
                openPrice={stock.info?.o}
                volume={stock.data?.shares}
                price={stock.info?.c}
              />
            ))}
          </div>
        </div>
        <div className="stats__header">
          <p>Lists</p>
        </div>
        <div className="stats__content">
          <div className="stats__rows">
            {stockData.map((stock) => (
              <StatsRow
                key={stock?.name}
                name={stock?.name}
                openPrice={stock?.o}
                price={stock?.c}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
