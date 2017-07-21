require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

function formatDate(date) {
  return date.toLocaleDateString();
}

class Comment extends React.Component {
  render() {
    return (
      <div className="Comment">
        <UserInfo
          user={this.props.data.author} />
        <div className="Comment-text">
          {this.props.data.text}
        </div>
        <div className="Comment-date">
          {formatDate(this.props.data.date)}
        </div>
      </div>
    );
  }
}


class UserInfo extends React.Component {
  render() {
    return (
      <div className="UserInfo">
        <Avatar user={this.props.user}/>
        <div className="UserInfo-name">
          {this.props.user.name}
        </div>
      </div>
    );
  }
}

class Avatar extends React.Component {
  render() {
    return (
      <img className="Avatar"
        src={this.props.user.avatarUrl}
        alt={this.props.user.name}
      />
    );
  }
}

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Comment data={comment}/>
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}



AppComponent.defaultProps = {
};

export default AppComponent;
