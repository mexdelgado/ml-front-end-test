// Dependencices
import React, { Component } from 'react';
import { connect } from 'react-redux';

import queryString from 'query-string';

// Components
import Products from './components/products';

// Action
import { fetchProducts, fetchProduct } from './actions';

// Utils
import { isFirstRender } from '../../shared/utils/data';

class Items extends Component {

  static initialAction(fetchFrom, query='', typeGet) {
    //console.log('[i] TYPEGET 1: ',typeGet);
    //console.log('[i] query 1: ',query);
    if(typeGet === "all"){
      query = queryString.parse(query);
      return fetchProducts(fetchFrom, query);
    }else{
      return fetchProduct(fetchFrom, query);
    }
  }

  constructor(props){
    super(props);
    this.state = {
      displaySingleItem: false,
      term: ''
    }
  }

  componentWillMount(){
    const {
      match: {
        params: {
          id = 0
        }
      },
      location
    } = this.props;

    //console.log(this.props);
    //console.log(id);

    this.setState({
      displaySingleItem: id != '',
      term:  location.search || ''
    });

  }

  componentDidMount() {

    if(this.state.term){
      this.props.dispatch(Items.initialAction('client', this.state.term, 'all'));
    }else{
      this.props.dispatch(Items.initialAction('client', this.props.match.params, 'single'));
    }

  }

  render() {
    const {
      products,
      product
    } = this.props;

    let typeget = 'all';

    if (this.state.displaySingleItem){
      typeget = 'single';
    }

    console.log(typeget);

    return <Products typeget={typeget} products={products} product={product} />;
  }
}

export default connect(({ items }) => ({
  products: items.products,
  product: items.product,
}), null)(Items);
