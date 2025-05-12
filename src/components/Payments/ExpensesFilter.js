import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const rangeChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <input type="range" min="0" max="1000" step="1" value={props.selected} onChange={rangeChangeHandler}></input>
            </div>
            <div style={{ textAlign: 'center', marginTop: '0.5rem' }}> {props.selected}원 이상</div>
        </div>
    );
};

export default ExpensesFilter;
