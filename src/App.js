import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup/Signup';
import Home from './Pages/Home';
import VideoArea from './Pages/VideoArea';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Signup/>} />
        <Route path='/browse' element={<Home/>}/>
        <Route path='/browse/video/:location/:id' element={<VideoArea/>}/>
      </Routes>

    </div>
  );
}

export default App;
