import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import _ from 'lodash';
import AjaxCall from './AjaxCall';
import EditComment from './EditComment';
import IndexComments from './IndexComments';
import AddComment from './AddComment';


class App extends Component {
  constructor(props) {
    super(props);
    this.GetComments = this.GetComments.bind(this);
    this.SendNewComment = this.SendNewComment.bind(this);
    this.DeleteComment = this.DeleteComment.bind(this);
    this.UpdateComment = this.UpdateComment.bind(this);
    this.SendUpdatedComment = this.SendUpdatedComment.bind(this);

    this.state = {
      comments: [],
      updatedComment: {},
      showEdit: false
    };
    this.GetComments();
  }
  GetComments() {
    AjaxCall("http://localhost:3000/comments", "GET", (comments) => this.setState({ comments: comments }));
  }
  SendNewComment(comment) {
    AjaxCall("http://localhost:3000/comments", "POST", this.GetComments, comment);
  }
  UpdateComment(id) {
    var comment = this.state.comments.filter(com => com.id === id)[0];
    this.setState({ updatedComment: comment });
    this.setState({ showEdit: true });
  }
  SendUpdatedComment(comment) {
    AjaxCall("http://localhost:3000/comments/" + comment.id, "PUT", this.GetComments, comment);
    this.setState({ showEdit: false });
  }
  DeleteComment(id) {
    AjaxCall("http://localhost:3000/comments/" + id, "DELETE", this.GetComments);
  }
  render() {
    return (
      <div className="App red">
        <h2>Comments</h2>
        <AddComment SendNewComment={this.SendNewComment}/>
        <IndexComments
          comments={this.state.comments}
          DeleteComment={this.DeleteComment}
          UpdateComment={this.UpdateComment}
        />
        <br />
        {this.state.showEdit ?
          <EditComment
            updatedComment={this.state.updatedComment}
            onCommentUpdate={this.SendUpdatedComment}
          />
          : <div></div>
        }
      </div>
    );
  }
}

export default App;
