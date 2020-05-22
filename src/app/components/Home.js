import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component {
  constructor(props) {
    super();
    // this.age = props.age;
    this.state = {
      age: props.initAge,
      status: 0,
      brandName: 'React Beginner',
    };
  }

  makeOlder() {
    // this.age += 3;
    // console.log('Current age', this.age);

    this.setState({
      age: (this.state.age += 3),
    });
  }

  changeBrandName() {
    this.props.changeBrand(this.state.brandName);
  }

  render() {
    console.log(this.props);

    return (
      <div>
        <p>*** Home component</p>

        {/* Use single curly braces to execute valid JavaScript code */}
        {'Two plus Two = '}
        {2 + 2}

        {/* Use props to output dynamic data */}
        <p>
          Your name is {this.props.name}, age is {this.state.age}
        </p>
        <p>Status: {this.state.status}</p>
        <p>
          <button className="btn" onClick={this.makeOlder.bind(this)}>
            Make me older!
          </button>
        </p>
        <p>
          <button className="btn" onClick={this.props.greet}>
            Greet
          </button>
        </p>
        <hr />
        <p>
          <button className="btn" onClick={this.changeBrandName.bind(this)}>
            Change Brand Name
          </button>
        </p>
      </div>
    );
  }
}

/**
 * Define prop types for the Component
 */
Home.propTypes = {
  name: PropTypes.string,
  initAge: PropTypes.number,
  greet: PropTypes.func,
  changeBrand: PropTypes.func,
};

// ERROR: Uncaught TypeError: Cannot read property 'string' of undefined
// FIX: Install 'prop-types' library separately... https://stackoverflow.com/a/44573437/2661028
