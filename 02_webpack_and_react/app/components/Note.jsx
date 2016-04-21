import React from 'react';

// using es6 based class approach - as opposed to React.createClass. Drawback is autobinding doesn't occur
export default class Note extends React.Component {
  render() {
    return <div>Learn Webpack</div>
  }
}
