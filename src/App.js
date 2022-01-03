import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navbar/>}/>
      </Routes>

    </div>
  );
}

export default App;
