import './App.css';
import Login from './container/Login';
import Register from './container/Register';
import Tasks from './container/Tasks';
import Createtask from './container/Createtask';
import Viewtask from './container/Viewtask';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Edittask from './container/Edittask';
import Productcart from './container/Productcart';


function App() {

  let isLoggedIn = localStorage.getItem('token') ? true : false;

  if (!isLoggedIn && window.location.pathname !== '/') {
    window.location.href = '/';
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/productcart" element={<Productcart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/createtask" element={<Createtask />} />
        <Route path='/viewtask/:id' element={<Viewtask />} />
        <Route path='/edit/:id' element={<Edittask />} />
      </Routes>
    </div>
  );
}

export default App;
