// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Utils
import { isFirstRender } from '../../../shared/utils/data';

//Components
import SearchBox from '../../global/components/SearchBox';

// Assets
import shippingIcon from '../../../../public/assets/images/ic_shipping@2x.png';

class Posts extends Component {
  render() {

    const { posts } = this.props;

    if (isFirstRender(posts)) {
      return null;
    }

    return (
      <div className="main-content">
        <SearchBox />
        <div className="container">
          <div className="posts">

            <div className="row">
                <div className="col-xs-12">
                  <ol className="breadcrumb BreadcrumbCategories">
                    {posts.categories && posts.categories.map( category =>
                      <li key={category}><a href="javascript:void(0);">{category}</a></li>
                    )}
                  </ol>
              </div>
            </div>

            <div className="productList">
              <ul className="list">

                {posts.items && posts.items.map(item =>
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

export default Posts;
