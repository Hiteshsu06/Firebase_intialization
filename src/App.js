import './App.css';
import Login from './container/login';
import Register from './container/register';
import Taskpage from './container/taskpage';
import {Routes ,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <Routes> 
    <Route path="/" element={<Login/>}/>
    <Route path="/taskpage" element={<Taskpage/>}/>
    <Route path="/signup" element={<Register/>}/>
    </Routes>
    </div>
  );
}

export default App;
