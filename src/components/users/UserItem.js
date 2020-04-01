import React, { Component } from 'react'

class UserItem extends Component {
  render() {
    const { avatar_url, login, html_url } = this.props.user
    //destructoring from the props in the mapping method in Users.js
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt={login}
          className="round-img"
          style={{ width: '60px' }} //you can pass a style without CSS. Need double curly braces.
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">
            More
          </a>
        </div>
      </div>
    )
  }
}

export default UserItem
