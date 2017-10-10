// Dependencices
import React, { Component } from 'react';
import { connect } from 'react-redux';

import queryString from 'query-string';

// Components
import Posts from './components/Posts';

// Action
import { fetchPosts } from './actions';

// Utils
import { isFirstRender } from '../../shared/utils/data';

class Items extends Component {

  static initialAction(fetchFrom, query='') {
    query = queryString.parse(query);
    return fetchPosts(fetchFrom, query);
  }

  constructor(props){
    super(props);
    this.state = {
        term: ''
    }
  }

  componentWillMount(){
   //console.log(this.props);
    let term = this.props.location.search || '';
    this.setState({ term })
  }

  componentDidMount() {
    //console.log(this.props.posts);
    //let search = queryString.parse(search);
    //console.log(search);
    //console.log(isFirstRender(this.props.posts));

    this.props.dispatch(Items.initialAction('client', this.state.term));

    /*if (isFirstRender(this.props.posts)) {
      this.props.dispatch(Items.initialAction('client'));
    }*/
  }

  render() {
    const { posts } = this.props;
    //console.log(posts);
    return <Posts posts={posts} />;
  }
}

export default connect(({ items }) => ({
  posts: items.posts
}), null)(Items);
