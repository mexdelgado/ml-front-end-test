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

  componentWillMount(){
   //console.log(this.props);
  }

  componentDidMount() {
    //console.log(this.props);
    //let search = queryString.parse(search);
    //console.log(search);
    //console.log(isFirstRender(this.props.posts));

    if (isFirstRender(this.props.posts)) {
      let search = this.props.location.search;
      if(search){
        this.props.dispatch(Items.initialAction('client',search));
      }else{
        this.props.dispatch(Items.initialAction('client'));
      }
    }
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
