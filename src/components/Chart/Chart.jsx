import React from "react";

import ChartBar from "./ChartBar";
import "../../styles/Chart.css";

const Chart = (props) => {
  const sumOfDataPointValues = props.dataPoints.reduce(
    (accumulator, currentObject) => accumulator + currentObject.value,
    0
  );

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          sumValue={sumOfDataPointValues}
        />
      ))}
    </div>
  );
};

export default Chart;
