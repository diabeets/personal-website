import './App.css';
import Home from './components/home/home';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="aboutMe">
      <Routes>
        <Route exact path="/" element={<Home />} />

      </Routes>
 
    </div>
  );
}

export default App;
