// Write your code here
import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import {IoMdClose} from 'react-icons/io'
import {Component} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="nav-bar-container">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
            alt="website logo"
            className="website"
          />
        </Link>
        <Popup
          modal
          trigger={
            <button
              type="button"
              data-testid="hamburgerIconButton"
              className="hamburger-button"
            >
              <GiHamburgerMenu />
            </button>
          }
          className="popup-content"
        >
          {close => (
            <button
              className="close-button"
              type="button"
              data-testid="closeButton"
            >
              <IoMdClose className="close-icon" />
            </button>
          )}
          <h1> About </h1>
        </Popup>
      </div>
    )
  }
}

export default Header
