import React, { Component } from 'react'

export class Search extends Component {
  state = {
    text: ''
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value })
  //1. Square notation in case more than one text field is updated. In this case, outputs 'text'.

  onSubmit = (e) => {
    e.preventDefault()
    this.props.searchUsers(this.state.text)
    this.setState({ text: '' })
  }
  //2. As an arrow function, we do not need to do this.onSubmit.bind(this) below.

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search users..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    )
  }
}

export default Search

/*
This stateful class has two functions (labelled 1 and 2). They both event handlers.

If a stateful component has an event handler, the event (e) needs to be defined before the render.

For onChange:
Step 1: The value prop changes to the text that the user submits. There must be an attached onChange
  event otherwise the user will not be able to type.
Step 2: the method onChange is fired off. Text key in state object is updated to new value.
  Note: e.target returns the element that triggered the event.

For onSubmit:
  Step 1: e.preventDefault stops the function from trying to send data off.
  Step 2: this.props.searchUsers is passed up to the App.js level.


Additional notes:
Please note, for arrow functions, .this always refers to the object that defined the function,
    not the object that called it. Hence no need for .bind.

Additionally, .target refers to the object onto which the event was dispatched: 'text'

Also, .preventDefault cancels the event called.
*/
