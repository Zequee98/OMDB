import React from 'react';
import {Link} from 'react-router';

class Main extends React.Component {
  render() {
    return (
      <center>
        <div>
          <h1>
            <a href='/'>
              OMDB
            </a>
          </h1>
          {React.cloneElement(this.props.children)}
        </div>
      </center>
    )
  }
};

export default Main;
