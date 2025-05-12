import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const [minPrice, setMinPrice] = useState('0');

    const filterChangeHandler = (selectedPrice) => {
        setMinPrice(+selectedPrice);
    };

    const filetedExpenses = props.items.filter((expense) => {
        return expense.amount >= minPrice;
    });

    let expensesContent = <p>값이 없습니다.</p>;

    if (filetedExpenses.length > 0) {
        expensesContent = filetedExpenses.map((item) => <ExpenseItem title={item.title} amount={item.amount} date={item.date} />);
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={minPrice} onChangeFilter={filterChangeHandler} />
            {expensesContent}
        </Card>
    );
};

export default Expenses;
