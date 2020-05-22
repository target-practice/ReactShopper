import React from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      brandName: 'React Shopper',
    };
  }
  onGreet() {
    alert('hello');
  }

  onChangeBrandName(newName) {
    this.setState({
      brandName: newName,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Header brandName={this.state.brandName} />
        </div>
        <div className="row">
          <h1>Hello from React Shopper!!!</h1>
          <Home
            name={'Tony'}
            initAge={30}
            greet={this.onGreet}
            changeBrand={this.onChangeBrandName.bind(this)}
          />
        </div>
      </div>
    );
  }
}

// NOTE: You can only return ONE single root (top-level) HTML element per Component.

render(<App />, window.document.getElementById('app'));
