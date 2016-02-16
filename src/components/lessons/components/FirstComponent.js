'use strict';

import React from 'react';

require('styles/lessons/components/First.less');

import Form from './CommentFormComponent';
import List from './CommentListComponent';

let FirstComponent = (props) => {
  return (
    <div className="first-component">
      <h1>This is the comment box.</h1>
      <List data={props.data}/>
      <Form />
    </div>

  )
}

FirstComponent.displayName = 'LessonsComponentsFirstComponent';

// Uncomment properties you need
// FirstComponent.propTypes = {};
// FirstComponent.defaultProps = {};

export default FirstComponent;
