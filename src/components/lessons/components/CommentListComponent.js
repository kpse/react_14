'use strict';

import React from 'react';

require('styles/lessons/components/CommentList.less');

import Comment from './CommentComponent';

let CommentListComponent = (props) => {

  let nodes = props.data.map(function (comment) {
    return (
      <Comment author={comment.author} key={comment.id}>
        {comment.text}
      </Comment>
    )
  });

  return (
    <div className="commentlist-component">
      This is comments list.
      {nodes}
    </div>
  )
};

CommentListComponent.displayName = 'LessonsComponentsCommentListComponent';

// Uncomment properties you need
// CommentListComponent.propTypes = {};
// CommentListComponent.defaultProps = {};

export default CommentListComponent;
