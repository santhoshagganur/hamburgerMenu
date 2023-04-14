// Write your code here
import Popup from 'reactjs-popup'
import {Component} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="nav-bar-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="website"
        />
        <Popup modal trigger={<GiHamburgerMenu />}>
          <h1> About </h1>
        </Popup>
      </div>
    )
  }
}

export default Header
