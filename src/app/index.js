import React from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <h1>Hello from React Shopper!!!</h1>
          <Home />
        </div>
      </div>
    );
  }
}

// NOTE: You can only return ONE single root (top-level) HTML element per Component.

render(<App />, window.document.getElementById('app'));
