import React from "react";
import StockChart from "./stock.svg";
import StockChartRed from "./stock 1.svg";
import "./StatsRow.css";
import { db } from "./firebase";

function StatsRow(props) {
  const percentage = ((props.price - props.openPrice) / props.openPrice) * 100;

  const buyStock = () => {
    db.collection("myStocks")
      .where("ticker", "==", props.name)
      .get()
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          querySnapshot.forEach(function (doc) {
            db.collection("myStocks")
              .doc(doc.id)
              .update({
                shares: (doc.data().shares += 1),
              });
          });
        } else {
          db.collection("myStocks").add({
            ticker: props.name,
            shares: 1,
          });
        }
      });
  };

  return (
    <div className="row" onClick={buyStock}>
      <div className="row__intro">
        <h1>{props?.name}</h1>
        <p>{props.volume && props.volume + " shares"}</p>
      </div>
      <div className="row__chart">
        <img
          alt="stock chart"
          src={percentage > 0 ? StockChart : StockChartRed}
          height={16}
        />
      </div>
      <div className="row__numbers">
        <p className="row__price">{props.price}</p>
        <p
          className={
            percentage > 0 ? "row__percentage" : "row__percentage__negative"
          }
        >
          {" "}
          {percentage > 0 && "+"} {Number(percentage).toFixed(2)}%
        </p>
      </div>
    </div>
  );
}

export default StatsRow;
