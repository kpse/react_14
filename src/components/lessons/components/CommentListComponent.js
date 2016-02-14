'use strict';

import React from 'react';

require('styles/lessons/components/CommentList.less');

let CommentListComponent = (props) => (
  <div className="commentlist-component">
    This is comments list.
  </div>
);

CommentListComponent.displayName = 'LessonsComponentsCommentListComponent';

// Uncomment properties you need
// CommentListComponent.propTypes = {};
// CommentListComponent.defaultProps = {};

export default CommentListComponent;
