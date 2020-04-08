import React, { Component } from 'react'

export class Search extends Component {
  state = {
    text: '',
  }
  /*If a stateful component has an event handler, the event needs to be defined
before the render. Note: e stands for event */
  onChange = (e) => this.setState({ [e.target.name]: e.target.value })
  //.target refers to the object onto which the event was dispatched: 'text'
  onSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.text)
  }
  //Not having arrow function would need a .bind because otherwise onSubmit would produce undefined
  //.preventDefault cancels the event called.

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)} className="form">
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
