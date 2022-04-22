
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './conmponent/addUsser/AddUser';
import Home from './conmponent/home/Home';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='user/add' element={<AddUser />} ></Route>
        <Route path='/home' element={<Home />} ></Route>


      </Routes>
    </div>
  );
}

export default App;