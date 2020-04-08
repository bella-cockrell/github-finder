import React, { Component } from 'react'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import axios from 'axios'
import './App.css'

class App extends Component {
  state = {
    users: [],
    loading: false //1
  }

  async componentDidMount() {
    this.setState({ loading: true }); //2

    const res = await axios.get(`https://api.github.com/users?client_id
      ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret
      ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`); //3

    this.setState({ users: res.data, loading: false }) //4
  }

  //Search Github users
  searchUsers = (text) => {
    console.log(text)
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search searchUsers={this.searchUsers} />
          <Users loading={this.state.loading} users={this.state.users} />
          {/*5*/}
        </div>
      </div>
    )
  }
}

export default App

/*
HOW TO PASS STATE CHANGE
Step 1: Set the initial state in state object.
Step 2: Change the state through this.setState. This change can be through an API call or event.
Step 3: Execute action when state is changed.
Step 4: Revert back to original state once action is complete.
Step 5: Pass both states as props to be rendered, either true or false (and subsequent condition).
*/
