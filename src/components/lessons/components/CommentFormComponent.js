'use strict';

import React from 'react';

require('styles/lessons/components/CommentForm.less');

class CommentFormComponent extends React.Component {
  constructor() {
    super();
    this.state = {author: '', text: ''};
  }

  authorChange(e) {
    this.setState({author: e.target.value});
  }

  textChange(e) {
    this.setState({text: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    console.log('I just submitted : text + ' + text + ', author: ' + author);
    this.state = {author: '', text: ''};
  }

  render() {
    return (<form className="comment-form" onSubmit={(e) => this.handleSubmit(e)}>
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
