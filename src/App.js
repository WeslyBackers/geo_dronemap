import './App.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import TitleBar from './components/TitleBar/TitleBar';
import GeoMap from './components/GeoMap/GeoMap';

function App() {
  return (
    <div className="App">
      <TitleBar></TitleBar>
      <GeoMap></GeoMap>
    </div>
  );
}

export default App;
