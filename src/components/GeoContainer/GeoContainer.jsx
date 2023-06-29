import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import GeoMap from '../GeoMap/GeoMap';
import GeoInfo from '../GeoInfo/GeoInfo';
import axios from 'axios';

//import { Test } from './GeoContainer.styles';
import '../../css/geocontainer.css';


class GeoContainer extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

/*   componentWillMount = () => {
    console.log('GeoContainer will mount');
  } */

  componentDidMount = () => {

    console.log('GeoContainer mounted');
  
    
  }

/*   componentWillReceiveProps = (nextProps) => {
    console.log('GeoContainer will receive props', nextProps);
  } */

/*   componentWillUpdate = (nextProps, nextState) => {
    console.log('GeoContainer will update', nextProps, nextState);
  } */

  componentDidUpdate = () => {
    console.log("GeoContainer did update");
  }

  componentWillUnmount = () => {
    console.log('GeoContainer will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (

      <div className="GeoContainerWrapper d-flex col">
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
