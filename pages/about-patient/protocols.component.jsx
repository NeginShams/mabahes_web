
import nemune from './images/patient.jpg';
import './about-dr.styles.scss';
import { Link } from 'react-router-dom';
import CustomButton from '../../components/custombutton/custombutton.component';
import React , {useState , useEffect} from 'react';
export const Aboutp=()=>{
    const[firestname, setFirstname] = useState([]);
    const[lastname, setlastname] = useState([]);
    const[information, setInformation] = useState([]);
    const[user, setuser] = useState([]);
    useEffect(() => {
    getFirstlast();
    }, []);
    useEffect(() => {
        getFirstlast();
        }, [])
    
        async function getFirstlast() {
             await  fetch('http://127.0.0.1:8000/api/user/patient_info/', {
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
        setInformation(user.medical_history)
    } 
    return(
    <div className='aboutcontainer'>
        <Link to="/showpr1">
     <CustomButton dir="rtl" className='button2' type="button" >
          نمایش نسخه
     </CustomButton>
 </Link>
 {user.map((user) => {
              return (
                  <div>
                <p> {user.first_name}{user.last_name}</p>
                <p> {user.medical_history}</p>
                 <hr />
                 </div>
              );
            })}
        
        <img src={nemune} alt = ' عکس بیمار'/>
        </div>
    )
    
};