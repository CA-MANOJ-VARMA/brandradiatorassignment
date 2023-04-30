import React from 'react'
import { Switch,Route } from 'react-router-dom'
import Home from './components/Home'
import AdminComponent from './components/AdminComponent'


const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/admin' component={AdminComponent}/>
    </Switch>
  )
}

export default App