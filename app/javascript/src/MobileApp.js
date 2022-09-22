import React from 'react'
import { Route, Switch } from 'react-router-dom'
import OrderForm from './Mobile/Order/Form'
import ResultForm from './Mobile/Order/ResultForm'
import Term from './Mobile/Pages/Term'
import { ConfigProvider } from 'antd';

// ConfigProvider.config({
//   theme: {
//     primaryColor: '#90BA75',
//     textColor: '#90BA75',
//     textColorSecondary: '#90BA75',
//     linkColor: '#90BA75',
//   },
// });

const MobileApp = () => {
  return (
    <Switch>
      <Route exact path="/order/new" component={OrderForm}/>
      <Route exact path="/order/submit" component={ResultForm}/>
      <Route exact path="/terms" component={Term}/>
    </Switch>
  )
}

export default MobileApp

// https://demos.creative-tim.com/material-kit-react/#/presentation
// https://ant.design/index-cn
