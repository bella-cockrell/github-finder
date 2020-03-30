//class-based component
import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Navbar extends Component {
  //These will be called if there is no prop passed. Passed props will override this.
  static defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
  };

  //This checks the types of each prop. make sure to import.
  static propTypes = {
    title: PropTypes.string.isRequired,
    icont: PropTypes.string.isRequired
  };

  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={this.props.icon} /> {this.props.title}

        </h1>
      </nav>
    );
  }
}

export default Navbar;

//fab fa-github is from Font Awesome
