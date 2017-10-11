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

  static initialAction(fetchFrom, query='', typeGet) {
    //console.log('[i] TYPEGET 1: ',typeGet);
    //console.log('[i] query 1: ',query);
    if(typeGet==="all"){
      query = queryString.parse(query);
    }
    return fetchPosts(fetchFrom, query, typeGet);
  }

  constructor(props){
    super(props);
    this.state = {
      term: ''
    }
  }

  componentWillMount(){
    //console.log(this.props);

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
      term:  location.search || ''
    });

  }

  componentDidMount() {
    //console.log(this.props.posts);
    //let search = queryString.parse(search);
    //console.log(search);
    //console.log(isFirstRender(this.props.posts));

    //console.log(this.props.match.params);

    //console.log(id);

    if(this.state.term){
      this.props.dispatch(Items.initialAction('client', this.state.term, 'all'));
    }else{
      this.props.dispatch(Items.initialAction('client', this.props.match.params, 'single'));
    }

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
