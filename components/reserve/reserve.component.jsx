import React , {useState , useEffect} from 'react';
import FormInput from '../forminput/forminput.component';
import './reserve.styles.scss';
import { $Axios } from '../../api';
//import Select from 'react-select';
import { Link } from 'react-router-dom';
import CustomButton from '../custombutton/custombutton.component';
export const Reserve = ({ handleRedirect }) =>{
    const[userName,setUserName] = useState('');
    const[password,setPassword] = useState('');
    const[token,settoken] = useState('');
    const[user,setuser] = useState('');
    const[role,setrole] = useState('');
    
        //const handle_submit = async (evt) => {
          
          // try {
          //   const form = new FormData();
          //   form.append('username', values.userName);
          //   form.append('password', values.password);
      
          //   const { data } = await $Axios.post('?', form);
            
          //   localStorage.setItem('authToken', data.token);
          //   handleRedirect(data.role);
          // } catch (e) {
          //   console.log('Error logging in!!', e);
          // }
      //  };
      let requestPayload = {
        user_name: userName,
         password: password,
       }
       
    
    const handle_submit = async(evt) => {
        evt.preventDefault();
         await  fetch('http://127.0.0.1:8000/api/user/user_login/', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(requestPayload),
    }
    
    )
    .then(response => response.json())
    .then(data =>
      setuser(data)
    );
    // const data = await res.json();
    settoken(user.access_token) ;
    setrole(user.role) ;
    localStorage.setItem('authToken', user.access_token);
    handleRedirect(user.role);
    
    // localStorage.setItem('authToken', response.json());
    
      }; 
    // const handle_submit = async(evt) => {
    //     evt.preventDefault();
    //   await  fetch('http://localhost:3000/seapp/make-reserve/', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //     })
    //   };       
        return (
           
            <div className='parentdiv'>
              <h1>ورود</h1>
            <div className='div-reserve'>
                <form className = 'reserve-class' onSubmit = {handle_submit}>
                <FormInput
                        name = 'userName'
                        type = 'text'
                        value = {userName}
                        onChange = {e=> setUserName(e.target.value)}
                        label='نام کاربری'
                        required
                    />
                    <FormInput
                        name = 'password'
                        type = 'text'
                        value = {password}
                        onChange = {e => setPassword(e.target.value)}
                        label='رمز عبور '
                        required
                    />
                  <CustomButton className='button'>ورود</CustomButton>
                </form>
                <Link to='/protocols'>برای ثبت نام پزشک اینجا کلیک کنید</Link>
                <br></br>
                <br></br>
                <Link to='/signupp'>برای ثبت نام بیمار اینجا کلیک کنید</Link>
                
            </div>
            </div>

        );
};
export default Reserve;