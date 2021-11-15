import React from 'react';
import { useState } from "react";

import './ExpensesFilter.css';


const ExpensesFilter = (props) => {
    const[enteredYear, onChooseYearFilter] = useState("");

    const onChangeYearHandler = function(e){
        onChooseYearFilter(e.target.value);
    };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select>
          <option value='2022' onChange={onChangeYearHandler}>2022</option>
          <option value='2021' onChange={onChangeYearHandler}>2021</option>
          <option value='2020' onChange={onChangeYearHandler}>2020</option>
          <option value='2019' onChange={onChangeYearHandler}>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;