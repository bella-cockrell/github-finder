//class-based component
import React from 'react'
import PropTypes from 'prop-types' //This functions same as TypeScript

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
    </nav>
  )
}

//These will be called if there is no prop passed. Passed props will override this.
Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
}

//This checks the types of each prop. make sure to import.
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default Navbar
//fab fa-github is from Font Awesome
