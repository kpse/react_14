'use strict';

import React from 'react';

require('styles/lessons/components/CommentForm.less');

class CommentFormComponent extends React.Component {
  constructor() {
    super();
    this.state = {author: '', text: ''};
  }

  authorChange(e) {
    console.log(e.target.value);
    console.log(this.state.author);
    this.setState({author: e.target.value});
  }

  textChange(e) {
    console.log(this.state.text);
    this.setState({text: e.target.value});
  }

  render() {
    return (<form className="comment-form">
      <input type="text" placeholder="your name" value={this.state.author} onChange={(e) => this.authorChange(e)}/>
      <input type="text" placeholder="say something" value={this.state.text} onChange={(e) => this.textChange(e)}/>
      <input type="submit" value="Post"/>
    </form>)
  }
}

CommentFormComponent.displayName = 'LessonsComponentsCommentFormComponent';

// Uncomment properties you need
// CommentFormComponent.propTypes = {};
// CommentFormComponent.defaultProps = {};

export default CommentFormComponent;
