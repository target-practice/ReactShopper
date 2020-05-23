import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component {
  constructor(props) {
    super();
    // this.age = props.age;
    this.state = {
      age: props.initAge,
      status: 0,
      brandName: props.initBrandName,
    };

    setTimeout(() => {
      this.setState({
        status: 1,
      });
    }, 3000);

    console.log('Constructor');
  }

  // ---------------------------------
  //
  // Component Lifecycle methods/hooks
  //
  // ---------------------------------

  /** Executes first in the lifecycle, even before any render is done */
  componentWillMount() {
    console.log('Component will mount');
  }

  /** Executes after rendering is done */
  componentDidMount() {
    console.log('Component did mount');
  }

  /** Executes whenever some properties get updated */
  componentWillReceiveProps(updatedProps) {
    console.log('Component will receive props', updatedProps);
  }

  /** Checks whether a Component should be updated */
  shouldComponentUpdate(updatedProps, updatedState) {
    console.log('Should Component update', updatedProps, updatedState);

    // if (updatedState.status === 1) return false;

    return true;
  }

  /** Executes when shouldComponentUpdate returns 'true' */
  componentWillUpdate(updatedProps, updatedState) {
    console.log('Component will update', updatedProps, updatedState);
  }

  /** Executes when Component has been updated/re-rendered */
  componentDidUpdate(previousProps, previousState) {
    console.log('Component did update', previousProps, previousState);
  }

  /** Executes finally, at the end of the lifecycle */
  componentWillUnmount() {
    console.log('Component will unmount');
  }

  // ---------------------------------
  //
  // Custom methods
  //
  // ---------------------------------

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

  onChangeInputBrandName(event) {
    this.setState({
      brandName: event.target.value,
    });
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
        <div className="form-group">
          <label htmlFor="">Brand Name (with Two-Way Binding)</label>
          <input
            type="text"
            className="form-control"
            value={this.state.brandName}
            onChange={this.onChangeInputBrandName.bind(this)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Brand Name (with 'default value')</label>
          <input
            type="text"
            className="form-control"
            defaultValue={this.props.initBrandName}
          />
        </div>
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
  initBrandName: PropTypes.string,
};

// ERROR: Uncaught TypeError: Cannot read property 'string' of undefined
// FIX: Install 'prop-types' library separately... https://stackoverflow.com/a/44573437/2661028
