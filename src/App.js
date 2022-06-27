import './App.css';
import './assests/font-awesome/css/font-awesome.min.css';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import About from './components/About/About';
import Service from './components/Service/Service';
import Dashboard from './components/Dashboard/Dashboard';
import AddExpense from './components/AddExpense/AddExpense';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Team from'./components/Team';
import LeaveTracker from './components/LeaveTracker';
import { SidebarData } from './components/SidebarData';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/service' element={<Service/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/addExpense' element={<AddExpense/>}/>
      <Route path='/Navbar' element={<Navbar/>}/>
      <Route path='/SidebarData' element={<SidebarData/>}/>
      <Route path='/Team' element={<Team/>}/>
      <Route path='/LeaveTracker' element={<LeaveTracker/>}/>
      </Routes>   
      </BrowserRouter>
    
 
        
    </div>
  );
}

export default App;
