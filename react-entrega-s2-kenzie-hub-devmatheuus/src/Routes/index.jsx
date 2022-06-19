import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import Signup from '../Pages/Signup';
import Login from '../Pages/Login'; 
import Dashboard from '../Pages/Dashboard';


const Routes = () =>{

  const [ authenticated, setAuthenticated ] = useState(false)

  useEffect(() =>{

    const TOKEN = localStorage.getItem('@KenzieHub:token')

    if(TOKEN){
      return setAuthenticated(true)
    }

  },[authenticated])

  return(
    <Switch>
      <Route exact path='/'>
        <Home authenticated={authenticated}/>
      </Route>
      <Route path='/signup'>
        <Signup authenticated={authenticated}/>
      </Route>
      <Route path='/login'>
        <Login authenticated={authenticated} setAuthenticated={setAuthenticated}/>
      </Route>
      <Route path='/dashboard'>
        <Dashboard authenticated={authenticated} setAuthenticated={setAuthenticated}/>
      </Route>
    </Switch>
  )
}
export default Routes;