import React, { Component } from 'react'
import UserItem from './UserItem'

class Users extends Component {
  render() {
    return (
      <div style={userStyle}>
        {this.props.users.map(user => (
          <UserItem key={user.id} user={user} />
          //This mapping method defines a prop which is used in UserItem.js
        ))}
      </div>
    )
  }
}

const userStyle = {
  display: 'grid', //If not in CSS, must put value in apos
  gridTemplateColumns: 'repeat(3, 1fr)', //If not in CSS, must use pascalcase not kebab
  gridGap: '1rem'
}
export default Users
