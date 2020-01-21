import React from 'react';
import { Link } from 'react-router-dom';
import pokeball from '../pokeball.png';
import { connect } from 'react-redux';
//connect will be used to map the state (global state) to the props of wrapped component 

class Home extends React.Component {

    //no need to maintain states as we now have a global store.
    //access it from the props.

    render() {

        //destructuring means mapping the value directly
        //to the mentioned keys inside {}
        //keys inside { } and of this.state Object should match.
        const { posts } = this.props;
        // same as posts = this.props.posts.slice();
        console.log(posts);

        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={pokeball} alt="Pokeball" />
                        <div className="card-content">
                            <Link to={"/" + post.id} >
                                <span className="card-title green-text"> {post.title} </span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                );
            })
        ) : (
                <p>You are all caught up!</p>
            );

        return (
            <div className="container">
                <h1>Home</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam in animi magnam fugiat expedita exercitationem illum, earum non beatae molestiae placeat nisi dolor quae nobis dolorem doloremque deserunt illo autem.</p>
                <h3 className="center">Posts</h3>
                {postList}
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}
//the function will be used by connect() for mapping purpose
//customize it as you desire
//the global state can be accessed now in props.

// connect() will return HOC and that HOC will wrap Home
export default connect(mapStateToProps)(Home);