import React, { Component } from 'react'

export class Search extends Component {
  state = {
    text: '',
  }
  /*If a stateful component has an event handler, the event needs to be defined
before the render. Note: e stands for event */
  onChange = (e) => {
    this.setState({ text: e.target.value })
  }
  //.target refers to the object onto which the event was dispatched: 'text'

  render() {
    return (
      <div>
        <form className="form">
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
