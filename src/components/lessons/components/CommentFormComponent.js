'use strict';

import React from 'react';

require('styles/lessons/components/CommentForm.less');

class CommentFormComponent extends React.Component {
  render() {
    return (<form className="comment-form">
      <input type="text" placeholder="your name"/>
      <input type="text" placeholder="say something"/>
      <input type="submit" value="Post"/>
    </form>)
  }
}

CommentFormComponent.displayName = 'LessonsComponentsCommentFormComponent';

// Uncomment properties you need
// CommentFormComponent.propTypes = {};
// CommentFormComponent.defaultProps = {};

export default CommentFormComponent;
