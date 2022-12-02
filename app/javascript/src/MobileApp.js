import React from 'react'
import { Route, Switch } from 'react-router-dom'
import OrderForm from './Mobile/Order/Form'
import ResultForm from './Mobile/Order/ResultForm'
import Term from './Mobile/Pages/Term'

const MobileApp = () => {
  return (
    <Switch>
      <Route exact path="/promote/new" component={OrderForm}/>
      <Route exact path="/promote/submit" component={ResultForm}/>
      <Route exact path="/terms" component={Term}/>
    </Switch>
  )
}

export default MobileApp
