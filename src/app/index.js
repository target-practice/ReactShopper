import React from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      brandName: 'React Shopper',
      homeMounted: true,
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

  onChangeHomeMounted() {
    this.setState({
      homeMounted: !this.state.homeMounted,
    });
  }

  render() {
    let homeComponent = '';
    if (this.state.homeMounted) {
      homeComponent = (
        <Home
          name={'Tony'}
          initAge={30}
          greet={this.onGreet}
          changeBrand={this.onChangeBrandName.bind(this)}
          initBrandName={this.state.brandName}
        />
      );
    }

    return (
      <div className="container">
        <div className="row">
          <Header brandName={this.state.brandName} />
        </div>
        <div className="row">
          <h1>Hello from React Shopper!!!</h1>

          {homeComponent}

          <p>
            <button
              className="btn"
              onClick={this.onChangeHomeMounted.bind(this)}
            >
              (Un)Mount Home Component
            </button>
          </p>
        </div>
      </div>
    );
  }
}

// NOTE: You can only return ONE single root (top-level) HTML element per Component.

render(<App />, window.document.getElementById('app'));
