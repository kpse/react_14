'use strict';

import React from 'react';

require('styles/lessons/components/CommentList.less');

import Comment from './CommentComponent';

let CommentListComponent = (props) => (
  <div className="commentlist-component">
    This is comments list.
    <Comment author="Pete Hunt">This is one comment</Comment>
    <Comment author="Jordan Walke">This is *another* comment</Comment>
  </div>
);

CommentListComponent.displayName = 'LessonsComponentsCommentListComponent';

// Uncomment properties you need
// CommentListComponent.propTypes = {};
// CommentListComponent.defaultProps = {};

export default CommentListComponent;
