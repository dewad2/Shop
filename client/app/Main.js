import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

export default class Main extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <HashRouter>
        <div>
          <h1>Hiiiii</h1>
        </div>
      </HashRouter>
    );
  }
}
