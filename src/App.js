import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import VideoArea from './Pages/VideoArea';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/video/:id' element={<VideoArea/>}/>
      </Routes>

    </div>
  );
}

export default App;
