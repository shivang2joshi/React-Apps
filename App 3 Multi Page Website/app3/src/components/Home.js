import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import pokeball from '../pokeball.png';
//axios for fetching data from APIs
//like fetch() function of built-in JavaScript


class Home extends React.Component {

    state = {
        posts: []
    };

    componentDidMount() {
        // fetching process would be done after the component has mounted into DOM
        // data fetching things are generally done here in this Life Cycle Function.

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                this.setState({
                    posts: res.data.slice(0, 10)
                });
            });

    }

    render() {

        //destructuring means mapping the value directly
        //to the mentioned keys inside {}
        //keys inside { } and of this.state Object should match.
        const { posts } = this.state;
        console.log(posts);

        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={pokeball} alt="Pokeball"/>
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

export default Home;