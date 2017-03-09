import React from 'react';

const IndexComments = (props) => {
    const comments = props.comments;
    return (
        <ul>
          {comments.map(comment =>
            <p key={comment.id}>
              {comment.body}
              &nbsp;
            <button onClick={() => props.DeleteComment(comment.id)}>X</button>
              &nbsp;
            <button onClick={() => props.UpdateComment(comment.id)}>Edit</button>
            </p>)}
        </ul>
    );
};

export default IndexComments;