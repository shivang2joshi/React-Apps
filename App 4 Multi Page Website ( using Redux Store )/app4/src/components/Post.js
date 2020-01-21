import React from 'react';
import { connect } from 'react-redux';

class Post extends React.Component {

    render() {

        const { post } = this.props;
        console.log(this.props.post);

        return (
            <div className="container">
                <h4>{post.title}</h4>
                <hr />
                <p>{post.body}</p>
            </div>
        );
    }

}

//the function will be called before above component
//so think like that.
//here props is being decided and above used.
const mapStateToProps = (state, thisProps) => {
    const id = thisProps.match.params.post_id;
    console.log(id);

    return { post: state.posts.find(post => post.id === id) };
    // return { post: state.posts[id] };
}

export default connect(mapStateToProps)(Post);