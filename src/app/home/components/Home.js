// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Styles
//import styles from './Home.scss';
import shippingIcon from '../../../../public/assets/images/ic_shipping@2x.png';

class Home extends Component {
  render() {
    return (
      <div className="home">

        <div className="row">
            <div className="col-xs-12">
              <ol className="breadcrumb BreadcrumbCategories">
                <li><a href="#">Home</a></li>
                <li><a href="#">Library</a></li>
                <li className="active">Data</li>
              </ol>
          </div>
        </div>

        <div className="productList">
          <ul className="list">
            <li className="product-item">
              <div className="row">
                <div className="col-sm-11">
                  <img src="http://mla-s2-p.mlstatic.com/334905-MLA25117438986_102016-I.jpg" className="product-thumbnail" />
                  <h1 className="price">$ 1.999
                    <span className="shippingIcon"><img src={shippingIcon}/></span>
                    <span className="location">Capital Federal</span>
                  </h1>
                  <p className="description">Arduino Uno R3 Original + Cable Usb / Chip Desmontable Atmel</p>
                </div>
              </div>
            </li>
            <li className="product-item">
              <div className="row">
                <div className="col-sm-11">
                  <img src="http://mla-s2-p.mlstatic.com/334905-MLA25117438986_102016-I.jpg" className="product-thumbnail" />
                  <h1 className="price">$ 1.999
                    <span className="shippingIcon"><img src={shippingIcon}/></span>
                    <span className="location">Capital Federal</span>
                  </h1>
                  <p className="description">Arduino Uno R3 Original + Cable Usb / Chip Desmontable Atmel</p>
                </div>
              </div>
            </li>
            <li className="product-item">
              <div className="row">
                <div className="col-sm-11">
                  <img src="http://mla-s2-p.mlstatic.com/334905-MLA25117438986_102016-I.jpg" className="product-thumbnail" />
                  <h1 className="price">$ 1.999
                    <span className="shippingIcon"><img src={shippingIcon}/></span>
                    <span className="location">Capital Federal</span>
                  </h1>
                  <p className="description">Arduino Uno R3 Original + Cable Usb / Chip Desmontable Atmel</p>
                </div>
              </div>
            </li>
            <li className="product-item">
              <div className="row">
                <div className="col-sm-11">
                  <img src="http://mla-s2-p.mlstatic.com/334905-MLA25117438986_102016-I.jpg" className="product-thumbnail" />
                  <h1 className="price">$ 1.999
                    <span className="shippingIcon"><img src={shippingIcon}/></span>
                    <span className="location">Capital Federal</span>
                  </h1>
                  <p className="description">Arduino Uno R3 Original + Cable Usb / Chip Desmontable Atmel</p>
                </div>
              </div>
            </li>
          </ul>
        </div>

      </div>
    );
  }
}

export default Home;
