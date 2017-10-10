// Dependencies
import React, { Component } from 'react';

import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom'


//Assets
import logo from '../../../../public/assets/images/Logo_ML@2x.png';
import icoSearch from '../../../../public/assets/images/ic_Search@2x.png';


class SearchBox extends Component {

  constructor(props) {
      super(props);

      this.state = {
        term: ''
      }

      //console.log(this.props);

      this.handleChange = this.handleChange.bind(this);
      this.handleKeyUp = this.handleKeyUp.bind(this);
      this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  componentWillMount() {
      let term = this.props.search || '';
      this.setState({ term })
      //console.log(this.props);
  }

  handleChange(e) {
    //console.log(e.target.value);
    this.setState({
      term: e.target.value
    });
  }

  handleKeyUp(e) {
    if (event.keyCode == 13) return this.handleSubmitForm(e)
  }

  handleSubmitForm(e){
      e.preventDefault()

      //this.context.router.history.push({
      /*this.props.history.push({
        pathname: '/items',
        search: `?search=${this.state.term}`
      });*/

      //console.log(this.props);

  }

  render() {

    return (
      <div className="SearchBox">
        <nav className="navbar navbar-default Header">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">
                <img src={logo} alt="logo" />
              </a>

              <form onSubmit={this.handleSubmitForm} className="fr-search" name="fr-search" id="fr-search">
                <div className="form-group">
                  <div className="input-group">
                    <input type="text" value={this.state.term} onChange={this.handleChange} onKeyUp={this.handleKeyUp} name="search" id="fr_search" className="form-control" placeholder="Nunca dejes de buscar" />
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

