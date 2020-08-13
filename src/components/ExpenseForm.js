import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();
console.log(now.format('MMM Do, YYYY'));

class ExpenseForm extends Component {
  state = {
    description: '',
    amount: '',
    note: '',
    createdAt: moment(),
    calendarFocused: false,
  };

  // onDescriptionChange = (e) => {
  //   const description = e.target.value;
  //   this.setState(() => ({ description }));
  // };

  // onNoteChange = (e) => {
  //   const note = e.target.value;
  //   this.setState(() => ({ note }));
  // };

  onChange = (e) => {
    // e.persist();
    // this.setState(() => ({ [e.target.name]: e.target.value }));
    if (e.target.name !== 'amount') {
      this.setState({ [e.target.name]: e.target.value });
    } else {
      if (e.target.value.match(/^\d*(\.\d{0,2})?$/)) {
        this.setState({ amount: e.target.value });
      }
    }
  };

  onDateChange = (createdAt) => {
    this.setState(() => ({ createdAt }));
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  render() {
    return (
      <div>
        <form>
          <input
            autoFocus
            type="text"
            placeholder="Description"
            name="description"
            value={this.state.description}
            onChange={this.onChange}
          />
          <input
            type="text"
            placeholder="Amount"
            name="amount"
            value={this.state.amount}
            onChange={this.onChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Add a note for your expense (optional)"
            name="note"
            onChange={this.onChange}
            value={this.state.note}
          ></textarea>
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
