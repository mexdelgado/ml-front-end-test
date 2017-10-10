// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SearchBox from '../../global/components/SearchBox';

class Home extends Component {
  render() {
    //console.log('[i] PROPS HOME: ',this.props);
    return (
      <div className="main-content">
        <SearchBox/>
        <div className="container">
          <div className="home">

          </div>
        </div>
      </div>
    );
  }
}

export default Home;
