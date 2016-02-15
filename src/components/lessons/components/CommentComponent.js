'use strict';

import React from 'react';

require('styles/lessons/components/Comment.less');

let CommentComponent = (props) => (
  <div className="comment-component">
    <h2>{props.author}</h2>
    {props.children}
  </div>
);

CommentComponent.displayName = 'LessonsComponentsCommentComponent';

// Uncomment properties you need
// CommentComponent.propTypes = {};
// CommentComponent.defaultProps = {};

export default CommentComponent;
