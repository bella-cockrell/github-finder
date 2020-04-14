import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null //1
  }

  // async componentDidMount() {
  //   this.setState({ loading: true }); //2

  //   const res = await axios.get(`https://api.github.com/users?client_id
  //     ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret
  //     ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`); //3

  //   this.setState({ users: res.data, loading: false }); //4
  // }

  //Search Github users > goes to API endpoint. As arrow function, async works differently.
  searchUsers = async text => {
    this.setState({ loading: true })

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id
      ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret
      ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users: res.data.items, loading: false }); //Why .items? Console.log out res.data and then select items in object.
  }

  //Clear users from state
  clearUsers = () => this.setState({ users: [], loading: false })

  //Set alert if text from Search.js is undefined
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } }); //If msg: msg, can just put msg

    setTimeout(() => this.setState({ alert: null }), 2000);
  }
  render() {
    const { users, loading, alert } = this.state;

    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} /> {/*this alert will not go away without setTimeout*/}
            <Switch>
              <Route exact path='/' render={props => (
                <Fragment>
                  <Search
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={this.setAlert}
                  />
                  {/* These is passed up from Search.js via functions */}
                  <Users
                    loading={loading}
                    users={users}
                  />
                </Fragment>
              )} />
              <Route exact path='/about' component={About} />
            </Switch>

            {/*5*/}
          </div>
        </div>
      </Router >
    );
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
