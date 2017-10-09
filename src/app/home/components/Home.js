// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Styles
//import styles from './Home.scss';
import logo from '../../../../public/assets/images/Logo_ML@2x.png';

class Home extends Component {
  render() {
    return (
      <div className="home">
        Home - <Link to="/about">About</Link> - <Link to="/blog">Blog</Link>
        <img src={logo}/>
      </div>
    );
  }
}

export default Home;
