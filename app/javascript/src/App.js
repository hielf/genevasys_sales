import React from 'react'
import { Route, Switch } from 'react-router-dom'
import OrderForm from './Desktop/Order/Form'
import ResultForm from './Desktop/Order/ResultForm'
import Term from './Desktop/Pages/Term'
// import './App.css';
import { ConfigProvider } from 'antd';

ConfigProvider.config({
  theme: {
    primaryColor: '#90BA75',
    textColor: '#90BA75',
    textColorSecondary: '#90BA75',
    linkColor: '#90BA75',
  },
});

const App = () => {
  return (
    <Switch>
      <Route exact path="/order/new" component={OrderForm}/>
      <Route exact path="/order/submit" component={ResultForm}/>
      <Route exact path="/terms" component={Term}/>
    </Switch>
  )
}

export default App

// https://demos.creative-tim.com/material-kit-react/#/presentation
// https://ant.design/index-cn
