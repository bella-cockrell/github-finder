import React, { Component } from 'react'

class UserItem extends Component {
  constructor() {
    super();
    this.state = {
      id: 'id',
      login: 'mojombo',
      avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
      html_url: 'https://github.com/mojombo'
    }
  }


  render() {
    return (
      <div>
        User Item
      </div>
    )
  }
}

export default UserItem;
