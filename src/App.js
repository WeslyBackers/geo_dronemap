import './App.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import 'leaflet/dist/leaflet.css';
import '../src/css/geomap.css';
import GeoContainer from './components/GeoContainer/GeoContainer';

// Bootstrap Bundle JS
import TitleBar from './components/TitleBar/TitleBar';
import GeoMap from './components/GeoMap/GeoMap';

function App() {
  return (
    <div className="App d-flex row">
      <TitleBar></TitleBar>
      <GeoContainer></GeoContainer>
    </div>
  );
}

export default App;
