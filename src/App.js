import './App.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import 'leaflet/dist/leaflet.css';
import '../src/css/geomap.css';
import GeoContainer from './components/GeoContainer/GeoContainer';



// Bootstrap Bundle JS
import TitleBar from './components/TitleBar/TitleBar';
import StatusBar from './components/StatusBar/StatusBar';


function App() {
  return (
    <div className="App col">
      <TitleBar></TitleBar>
      <GeoContainer></GeoContainer>
      <StatusBar></StatusBar>
    </div>
  );
}

export default App;
