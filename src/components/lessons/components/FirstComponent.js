'use strict';

import React from 'react';

require('styles/lessons/components/First.less');

class FirstComponent extends React.Component {
  render() {
    return (
      <div className="first-component">
        This is the comment box.
      </div>
    );
  }
}

FirstComponent.displayName = 'LessonsComponentsFirstComponent';

// Uncomment properties you need
// FirstComponent.propTypes = {};
// FirstComponent.defaultProps = {};

export default FirstComponent;
