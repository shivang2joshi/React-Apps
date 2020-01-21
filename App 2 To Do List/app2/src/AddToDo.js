import React from 'react';

class AddToDo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            content: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addToDo(this.state.content);
        this.setState({ content: '' });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="task"> write new task here </label>
                    <input type="text" id="task" onChange={this.handleChange} value={this.state.content} />
                    <button type="submit"> Add </button>
                </form>
            </div>
        );
    }

}

export default AddToDo;