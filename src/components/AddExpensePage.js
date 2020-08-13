import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const AddExpensePage = ({ addExpense, history }) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      onSubmit={(expense) => {
        addExpense(expense);
        history.push('/');
      }}
    />
  </div>
);

export default connect(null, { addExpense })(AddExpensePage);
