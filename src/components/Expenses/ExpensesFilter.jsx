import React from "react";

import "../../styles/ExpensesFilter.css";
import { YEARS_IN_DROPDOWN } from "../../utils/constants";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by prior years</label>
        <select onChange={dropdownChangeHandler}>
          {YEARS_IN_DROPDOWN.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
