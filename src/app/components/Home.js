import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component {
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
          Your name is {this.props.name}, age is {this.props.age}
        </p>
        <div>
          <h4>Hobbies</h4>
          <ul>
            {this.props.user.hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

/**
 * Define prop types for the Component
 */
Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  user: PropTypes.object,
};

// ERROR: Uncaught TypeError: Cannot read property 'string' of undefined
// FIX: Install 'prop-types' library separately... https://stackoverflow.com/a/44573437/2661028
