import React, { Component } from 'react';

class ExpenseForm extends Component {
  state = {
    description: '',
    amount: '',
    note: '',
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
