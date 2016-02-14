'use strict';

import React from 'react';

require('styles/lessons/components/CommentForm.less');

let CommentFormComponent = (props) => (
  <div className="commentform-component">
    This is comment form.
  </div>
);

CommentFormComponent.displayName = 'LessonsComponentsCommentFormComponent';

// Uncomment properties you need
// CommentFormComponent.propTypes = {};
// CommentFormComponent.defaultProps = {};

export default CommentFormComponent;
