import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import GeoInfo from '../GeoInfo/GeoInfo';

//leaflet components
import { MapContainer } from 'react-leaflet';
import { TileLayer } from 'react-leaflet/TileLayer';
// 
/* 
import { useMap } from 'react-leaflet/hooks';
import { Marker } from 'react-leaflet';
import { Popup } from 'react-leaflet'; 

*/
import { Polygon } from 'react-leaflet';

//data import
import data from '../../dronedata.json';


const redOptions = { color: 'red' }


class GeoMap extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      data:[],
    };
  }

 /*  componentWillMount = () => {
    console.log('GeoMap will mount');
  } */

  componentDidMount = () => {
    console.log('GeoMap mounted');
    console.log(data);
    
    var data_ = data[0]['features'];

    //reverse lat-lon

    console.log(data_.length);

    this.setState({data:data_});

  }
/* 
  componentWillReceiveProps = (nextProps) => {
    console.log('GeoMap will receive props', nextProps);
  } */
/* 
  componentWillUpdate = (nextProps, nextState) => {
    console.log('GeoMap will update', nextProps, nextState);
  } */

  componentDidUpdate = () => {
    console.log('GeoMap did update');
    //console.log(this.state.data);

  }

  componentWillUnmount = () => {
    console.log('GeoMap will unmount');
  }

  render () {

    console.log(this.state.data);


    if (this.state.hasError) {

      return <h1>Something went wrong.</h1>;

    }

    const children = this.state.data.map((el,i)=>
    {
      for (let x=0;x < el['geometry']['coordinates'].length;x++){

        el['geometry']['coordinates']= el['geometry']['coordinates']; 

      }

      return(
      <Polygon key={i} positions={el['geometry']['coordinates']} pathOptions={redOptions} />)
    });

    return (

      
      //Define map layout
      <div className="GeoMapWrapper map-id row rounded" id="map-id">
        <MapContainer  center={[51.305, 3.00]} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        {children}
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
