import React, { Component } from 'react';
import { Link } from 'react-router';
import api from '../../api.js';
import Post from '../../posts/containers/Post.jsx';
import Loading from '../../shared/components/Loading.jsx';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      posts: [],
      loading: true
    };
  }
  async componentDidMount() {
    const posts = await api.posts.getList(this.state.page);

    this.setState({ 
      posts: posts,
      loading: false
    });
  }
  render () {
    return (
      <section name="Home">
        <h1>Home</h1>
        <p>texto</p>
        <section>
          {this.state.loading && (
            <Loading />
          )}
          {this.state.posts.map((post, index) => 
            <Post key={post.id} {...post} />
          )}
        </section>
        <Link to="/about">Go to about</Link>
      </section>
    )
  }
}

export default Home;