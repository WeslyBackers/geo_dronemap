import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

//import { Test } from './GeoInfo.styles';
import '../../css/geoinfo.css';

class GeoInfo extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

/*   componentWillMount = () => {
    console.log('GeoInfo will mount');
  } */

  componentDidMount = () => {
    console.log('GeoInfo mounted');
  }

/*   componentWillReceiveProps = (nextProps) => {
    console.log('GeoInfo will receive props', nextProps);
  } */

/*   componentWillUpdate = (nextProps, nextState) => {
    console.log('GeoInfo will update', nextProps, nextState);
  } */

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
      <div className="GeoInfoWrapper col row m-2 me-3">
        <Card className='CardInfo'>
          <h4 className='flex text-center mt-4'>Geographical Information</h4>
          <hr></hr>
        </Card>
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
