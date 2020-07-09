import React from 'react';

  const PictureComments = (props) => {
      const comments = props.commentsState
      console.log(comments)
    return (
      <>
       {comments.map((c, index) => (
          <li key={index}>{c.body}</li>
        )) }
      </>
    )

  }
export default PictureComments;