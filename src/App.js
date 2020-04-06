import React, { Component } from 'react'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import axios from 'axios'
import './App.css'

class App extends Component {
  state = {
    users: [],
    loading: false,
  }
  //Step 1: set the initial state
  async componentDidMount() {
    this.setState({ loading: true })
    //Step 2: change the state
    const res = await axios.get(`https://api.github.com/users?client_id
      ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret
      ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    this.setState({ users: res.data, loading: false })
  }
  //Step 3: execute action when state is changed, revert back to original state.
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
          {/* Step 4: pass both states as props to be rendered*/}
        </div>
      </div>
    )
  }
}

export default App
