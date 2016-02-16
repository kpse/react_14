require('normalize.css');
require('styles/App.css');

import React from 'react';
import CommentBox from './lessons/components/FirstComponent';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    let data = [
      {id: 1, author: "Pete Hunt", text: "This is one comment"},
      {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
    ];
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
        <CommentBox data={data} />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
