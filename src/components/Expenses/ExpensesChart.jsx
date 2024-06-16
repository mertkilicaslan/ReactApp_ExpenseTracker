import React from "react";

import Chart from "../Chart/Chart";
import { INITIAL_CHART_DATA_POINTS } from "../../utils/constants";

const ExpensesChart = (props) => {
  const chartDataPoints = structuredClone(INITIAL_CHART_DATA_POINTS);

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // Jan = 0, Feb = 1
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
