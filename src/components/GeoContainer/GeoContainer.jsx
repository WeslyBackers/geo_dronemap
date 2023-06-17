import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import GeoMap from '../GeoMap/GeoMap';
import GeoInfo from '../GeoInfo/GeoInfo';


//import { Test } from './GeoContainer.styles';
import '../../css/geocontainer.css';


class GeoContainer extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('GeoContainer will mount');
  }

  componentDidMount = () => {
    console.log('GeoContainer mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('GeoContainer will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('GeoContainer will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('GeoContainer did update');
  }

  componentWillUnmount = () => {
    console.log('GeoContainer will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="GeoContainerWrapper d-flex flex-row ">
        <GeoMap></GeoMap>
        <GeoInfo></GeoInfo>
      </div>
    );
  }
}

GeoContainer.propTypes = {
  // bla: PropTypes.string,
};

GeoContainer.defaultProps = {
  // bla: 'test',
};

export default GeoContainer;
