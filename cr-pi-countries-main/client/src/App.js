import logo from './logo.svg';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './componentes/Home/Home'
import './App.css';
import NavBar from './componentes/NavBar/NavBar'
import Landing from'./componentes/Landing/Landing';
import Card from './componentes/Card/Card';
import VistaHome from './vistas/VistaHome';
import VistaDetail from './vistas/VistaDetail';
import VistaAddActivity from './vistas/VistaAddActivity';



function App() {
  return (
    <BrowserRouter>
    <div>
      
      <Routes>
      <Route  path="/" Component={Landing} />
      <Route  path="/countries" Component={VistaHome}/>
      <Route path="/countries/:id" Component={VistaDetail} />
      <Route exact path='/activity' Component={VistaAddActivity} />

        
      </Routes>
      

    </div>
    </BrowserRouter>
    
    
    
  
  );
}

export default App;
