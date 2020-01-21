import React from 'react';
import axios from 'axios';

class Post extends React.Component {

    state = {
        post: {}
    };

    componentDidMount() {
        let id = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then((res) => {
                this.setState({
                    post: res.data
                });
            });

    }

    render() {

        const { post } = this.state;

        return (
            <div className="container">
                <h4>{post.title}</h4>
                <hr/>
                <p>{post.body}</p>
            </div>
        );
    }

}

export default Post;