import React, { Component } from 'react';
import { Link } from 'react-router';

import Post from '../../posts/containers/Post.jsx';
import Loading from '../../shared/components/Loading.jsx';
import api from '../../api.js';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      posts: [],
      loading: true
    };
  }

  async componentDidMount() {
    const [
      user,
      posts
    ] = await Promise.all([
      api.users.getSingle(this.props.params.id),
      api.users.getPosts(this.props.params.id)
    ]);

    this.setState({
      user,
      posts,
      loading: false
    });
  }

  render () {
    if (this.state.loading) {
      return <Loading />
    }
    return (
      <section name="profile">
        <h2>Profile of {this.state.user.name}</h2>
        <fieldset>
          <legend>Basic Info</legend>
          <input type="email" disabled="" value={this.state.user.email} />
        </fieldset>
        {this.state.user.address && (
          <fieldset>
            {this.state.user.address.street} <br /> 
            {this.state.user.address.city}
          </fieldset>
        )}
        <section>
          {this.state.loading && (
            <h2>Loading posts...</h2>
          )}
          {this.state.posts.map((post, index) => 
            <Post key={post.id} {...post} user={this.state.user} />
          )}
        </section>
        <Link to="/">Go to home</Link>
      </section>
    );
  }
}

export default Profile;