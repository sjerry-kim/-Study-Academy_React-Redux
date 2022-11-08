import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home';
import Login from './page/Login';
import User from './page/User';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/user' element={<User/>}/>
      </Routes>
    </div> 
  );
}

export default App;
