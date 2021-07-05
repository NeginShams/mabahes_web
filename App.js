import React from 'react';

import './App.css';

import  ReservePage from './pages/reservePage/reservepage.component';
import { Switch, Route } from 'react-router-dom';
import { Header } from './components/header/header.component';
import FooterPage from './components/footer/footer.component';
import HomePage from './pages/homepage/homepage.component';
import {ServicePage} from './pages/servicepage/servicepage.comonent';
import {About} from './pages/about-doctor/about-dr.component';
import {Contact} from './pages/contact/contact.component';
import {Protocols} from './pages/signup-doctorpage/protocols.component';
import {Covid} from './pages/writeprpage/covid.component';
import { Report } from './pages/report-bug/report.component';
// import {Signup} from './pages/signup-form/signup.component';
import { Showpr} from './pages/showpr/covid.component';
import {Aboutp} from './pages/about-patient/protocols.component';
import {Signupp} from './pages/signup-patientpage/protocols.component';
class App extends React.Component {
  render()

  { 

    
    return (
        <div className="App">
          <Header />        
          <Switch>
            <Route exact path = '/' component = {HomePage}/>
            <Route  path = '/reserve' component = {ReservePage}/>
            <Route  path = '/services' component = {ServicePage}/>
            <Route  path = '/about' component = {About}/>
            <Route  path = '/contact' component = {Contact}/>
            <Route  path = '/protocols' component = {Protocols}/>
            <Route  path = '/writepr' component = {Covid}/>
            <Route  path = '/bugreport' component = {Report}/>
            <Route  path = '/showpr1' component = {Showpr}/>
            <Route  path = '/aboutp1' component = {Aboutp}/>
            <Route  path = '/signupp' component = {Signupp}/>
            {/* <Route  path = '/signup1' component = {Signup}/> */}
          </Switch>
          <FooterPage/>
        </div>
    );
  }
}

export default App;
