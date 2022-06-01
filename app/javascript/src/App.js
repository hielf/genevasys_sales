import React from 'react'
import { Route, Switch } from 'react-router-dom'
import OrderForm from './Order/Form'
import './App.css';

const App = () => {
  return (
    <Switch>
      <Route exact path="/order/new" component={OrderForm}/>
      {/*<Route exact path='/order/:productId' component={Order}/>*/}
    </Switch>
  )
}

export default App

// https://demos.creative-tim.com/material-kit-react/#/presentation
// https://ant.design/index-cn
