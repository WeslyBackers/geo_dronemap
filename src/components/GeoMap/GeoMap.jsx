import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './GeoMap.styles';
import { MapContainer } from 'react-leaflet';
import { TileLayer } from 'react-leaflet/TileLayer';
import { useMap } from 'react-leaflet/hooks';
import { Marker } from 'react-leaflet';
import { Popup } from 'react-leaflet';

class GeoMap extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('GeoMap will mount');
  }

  componentDidMount = () => {
    console.log('GeoMap mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('GeoMap will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('GeoMap will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('GeoMap did update');
  }

  componentWillUnmount = () => {
    console.log('GeoMap will unmount');
  }

  render () {
    if (this.state.hasError) {

      return <h1>Something went wrong.</h1>;

    }

    return (

      <div className="GeoMapWrapper">
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    );
  }
}

GeoMap.propTypes = {
  // bla: PropTypes.string,
};

GeoMap.defaultProps = {
  // bla: 'test',
};

export default GeoMap;
