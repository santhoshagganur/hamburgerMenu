// Write your code here
import {Component} from 'react'
import './index.css'
import Header from '../Header'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="home-container">
          <div className="home-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
              alt="home"
              className="home-page"
            />
          </div>
        </div>
      </>
    )
  }
}

export default Home
