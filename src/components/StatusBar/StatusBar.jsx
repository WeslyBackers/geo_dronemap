import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './StatusBar.styles';
import '../../css/statusbar.css';

class StatusBar extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('StatusBar will mount');
  }

  componentDidMount = () => {
    console.log('StatusBar mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('StatusBar will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('StatusBar will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('StatusBar did update');
  }

  componentWillUnmount = () => {
    console.log('StatusBar will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="StatusBarWrapper ms-2 me-3">
        Status bar
      </div>
    );
  }
}

StatusBar.propTypes = {
  // bla: PropTypes.string,
};

StatusBar.defaultProps = {
  // bla: 'test',
};

export default StatusBar;
