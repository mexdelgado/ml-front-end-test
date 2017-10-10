// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom'


//Assets
import logo from '../../../../public/assets/images/Logo_ML@2x.png';
import icoSearch from '../../../../public/assets/images/ic_Search@2x.png';


class SearchBox extends Component {

  render() {
    //console.log('[i] PROPS SEARCHBOX: ',this.props);
    return (
      <div className="SearchBox">
        <nav className="navbar navbar-default Header">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">
                <img src={logo} alt="logo" />
              </a>

              <form action="/items" className="fr-search" name="fr-search" id="fr-search">
                <div className="form-group">
                  <div className="input-group">
                    <input type="text"  name="search" id="fr_search" className="form-control" placeholder="Nunca dejes de buscar" />
                      <span className="input-group-btn">
                      <button className="btn btn-search" type="submit">
                        <img src={icoSearch} alt="search" className="btnSearch" />
                      </button>
                    </span>
                  </div>
                </div>
              </form>

            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default SearchBox;

