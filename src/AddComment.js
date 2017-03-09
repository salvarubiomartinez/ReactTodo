import React from 'react';

class AddComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = { newComment: { body: "" } };
    }
    render() {
        return (
            <p className="App-intro">
                Add comment : 
                <input type="text"
                    value={this.state.newComment.body}
                    onChange={
                        (event) => {
                            this.setState({ newComment: { body: event.target.value } });
                        }
                    } />
                <button onClick={
                    () => {
                        this.props.SendNewComment(this.state.newComment);
                        this.setState({ newComment: { body: "" } });
                    }
                }>Send</button>
            </p>
        );
    }
}

export default AddComment;