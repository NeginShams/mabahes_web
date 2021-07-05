
import nemune from './images/doctor.jpg';

import './about-dr.styles.scss';
import { Link } from 'react-router-dom';
import CustomButton from '../../components/custombutton/custombutton.component';
import React , {useState , useEffect} from 'react';
export const About=()=>{
    const[firestname, setFirstname] = useState([]);
    const[lastname, setlastname] = useState([]);
    const[information, setInformation] = useState([]);
    const[user, setuser] = useState([]);
    // const[token,setToken]= useState([]);
    const token = localStorage.getItem('authToken');
    // setToken(localStorage.getItem)
    useEffect(() => {
    getFirstlast();
    }, [])

    async function getFirstlast() {
         await  fetch('http://127.0.0.1:8000/api/user/doctor_info/', {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        
        headers: {
            'Authorization': `Bearer  ${localStorage.getItem('authToken')}`,
            "Content-type": "application/json; charset=UTF-8"
        },
        
    }
    
    )
    .then(response => response.json())
    .then(data =>
      setuser(data)
    );
    setFirstname(user.first_name)
    setlastname(user.last_name)
    setInformation(user.education)
} 
    return(
    <div className='aboutcontainer'>
        <Link to="/writepr">
     <CustomButton dir="rtl" className='button2' type="button" >
          نوشتن نسخه
     </CustomButton>
 </Link>
 {user.map((user) => {
              return (
                  <div>
                <p> {user.first_name}{user.last_name}</p>
                <p> {user.education}</p>
                 <hr />
                 </div>
              );
            })}
        <img classname='imgcontainer' src={nemune} alt = 'عکس پزشک'/>
        </div>
    
    );  
}
export default About;