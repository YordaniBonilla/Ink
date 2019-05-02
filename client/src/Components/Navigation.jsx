import React from 'react'
import { NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'reactstrap';
import OMG from './Nat.jsx'
const Navigation = () => {
  return  (
    <div className="bg-info clearfix">
      <div className="btn  float-left">
      <NavLink to="/"><Button color="danger" >Home</Button></NavLink>
      </div>
      <div  className="btn float-right">
        <NavLink to="/login"><Button color="danger">Login</Button></NavLink>
      </div>
      <div className="btn float-right">
      <NavLink to="/map"><Button color="danger">Map</Button></NavLink>
      </div> 

      <div  className="btn float-right">
      <NavLink to="/nat"><Button color="danger">OMG</Button></NavLink>
      </div>  
      
    </div>
    
 
  );
};


export default Navigation;
