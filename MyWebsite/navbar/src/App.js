
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import './App.css';
import Navbar from './Navbar';
import Nick1 from './Components/Nick1';
import Nick2 from './Components/Nick2';
import Nick3 from './Components/Nick3';


function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Nick1" element={ <Nick1/> } />
        <Route path="/Nick2" element={ <Nick2/> } />
        <Route path="/Nick3" element={ <Nick3/> } />
      </Routes>
    </Router>
    </div>
  );
}

export default App;