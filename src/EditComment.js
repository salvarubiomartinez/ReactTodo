import React from 'react';

class EditComment extends React.Component{
    constructor(props){
        super(props);
        this.state = { commentInEdition : this.props.updatedComment};
    }
    render(){
    return (<div>
        <h2>Edit comment</h2>
        <input type="text" value={ this.state.commentInEdition.body} onChange={
            (event) => {
                this.setState({ commentInEdition: { id: this.state.commentInEdition.id, body: event.target.value } });
            }
        } />
        <button onClick={() => this.props.onCommentUpdate(this.state.commentInEdition)}>Edit</button>
    </div>);
    }
};

export default EditComment;