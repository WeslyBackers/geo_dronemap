import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './GeoInfo.styles';

class GeoInfo extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('GeoInfo will mount');
  }

  componentDidMount = () => {
    console.log('GeoInfo mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('GeoInfo will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('GeoInfo will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('GeoInfo did update');
  }

  componentWillUnmount = () => {
    console.log('GeoInfo will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="GeoInfoWrapper">
        Test content
      </div>
    );
  }
}

GeoInfo.propTypes = {
  // bla: PropTypes.string,
};

GeoInfo.defaultProps = {
  // bla: 'test',
};

export default GeoInfo;
