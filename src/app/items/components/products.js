// Dependencies
import React, { Component } from 'react';
import { BrowserRouter, StaticRouter, Switch, Route, Link} from 'react-router-dom';

// Utils
import { isFirstRender } from '../../../shared/utils/data';

//Components
import SearchBox from '../../global/components/SearchBox';

// Assets
import shippingIcon from '../../../../public/assets/images/ic_shipping@2x.png';

class Products extends Component {
  render() {

    const {
      products,
      product,
      show
    } = this.props;
    console.log(this.props);


    return (
      <div className="main-content">
        <SearchBox />
        <div className="container">

           <div className="products">

            <div className="row">
                <div className="col-xs-12">
                  <ol className="breadcrumb BreadcrumbCategories">
                    {products.categories && products.categories.map( category =>
                      <li key={category}><a href="javascript:void(0);">{category}</a></li>
                    )}
                  </ol>
              </div>
            </div>

            <div className="productList">
              <ul className="list">

                {products.items && products.items.map(item =>
                  <li key={item.id} className="product-item">
                    <Link to={`/items/${item.id}`}>
                    <div className="row">
                      <div className="col-sm-11">
                        <img src={item.picture} className="product-thumbnail" />
                        <h1 className="price">$ {item.price.amount}
                          <span className="shippingIcon"><img src={shippingIcon}/></span>
                          <span className="location">{item.location}</span>
                        </h1>
                        <p className="description">{item.title}</p>
                      </div>
                    </div>
                    </Link>
                  </li>
                )}

              </ul>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default Products;
