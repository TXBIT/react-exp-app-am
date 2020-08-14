import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = ({ expense, history, editExpense, removeExpense }) => {
  return (
    <div>
      <ExpenseForm
        expense={expense}
        onSubmit={(updatedExpense) => {
          editExpense(expense.id, updatedExpense);
          history.push('/');
        }}
      />
      <button
        onClick={() => {
          removeExpense({ id: expense.id });
          history.push('/');
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(
    (expense) => expense.id === props.match.params.id
  ),
});

export default connect(mapStateToProps, { editExpense, removeExpense })(
  EditExpensePage
);
