import React from 'react';
import Reserve from '../../components/reserve/reserve.component';
import './reservepage.styles.scss';
import { Switch, Route } from 'react-router-dom';
import {Protocols} from '../signup-doctorpage/protocols.component';
import { useHistory } from "react-router-dom";
const ROLE_ROUTES = {
    3: '/about',
    2: '/aboutp1',
  };
const ReservePage = () =>{

    const history = useHistory();
  
    function redirectionBaseOnRole(role) {
      history.push(ROLE_ROUTES[role]);
    }
    return(
        <div className="reserve-page">
            <Reserve handleRedirect={redirectionBaseOnRole}/>
            <Route  path = '/protocols' component = {Protocols}/>
        </div>
    );
}
export default ReservePage;