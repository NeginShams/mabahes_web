import React , {useState , useEffect} from 'react';
// import 'react-modern-calendar-datepicker/lib/DatePicker.css';
// import DatePicker from 'react-modern-calendar-datepicker';
import FormInput from '../forminput/forminput.component';
import './reserve.styles.scss';
//import Select from 'react-select';
import { Link } from 'react-router-dom';
import CustomButton from '../custombutton/custombutton.component';
import RadioGroup from 'react-radio-buttons';
import axios from 'axios';

export const Reserve = () =>{
    const[firstName,setFirstName] = useState('');
    const[lastName,setLastName] = useState('');
    const[userName,setUserName] = useState('');
    const[password,setPassword] = useState('');
    const[information,setInformation] = useState('');
    const data={user_name: "negin",
    password: "123",
    first_name: "negin",
    last_name: "shams",
    role: 2, 
    medical_history: "mmmm"};
    // const handle_submit = async (e) => {
    //     // const form={
    //     //     "user_name":e.userName,
    //     //     "password": e.password,
    //     //     "first_name": e.firstName,
    //     //     "last_name": e.lastName,
    //     //     "role": 2, 
    //     //     "medical_history": e.information
    //     // }
    //      try {
    //       const form = new FormData();
    //     //   form.append('user_name', e.userName);
    //     //   form.append('password', e.password);
    //     //   form.append('first_name', e.firstName);
    //     //   form.append('last_name', e.lastName);
    //     //   form.append('medical_history', e.information);
    //     //   form.append('role', 2);
    //       form.append('user_name', "mina");
    //       form.append('password', "123");
    //       form.append('first_name', "m");
    //       form.append('last_name', "rezaee");
    //       form.append('medical_history',"mnn");
    //       form.append('role', 2);
    //     // const form ={
    //     //     'user_name':"Mina",
    //     //     'password':"123",
    //     //     'first_name':"r",
    //     //     'last_name':"rt",
    //     //     'medical_history':"rttt"
    //     // }
    //     //   axios({
    //     //       method:"POST",
    //     //       url:"http://127.0.0.1:8000/api/user/patient_register/",
    //     //       data:form
    //     //   })
    //        const { data } = await $Axios.post('http://127.0.0.1:8000/api/user/patient_register/', form);
        
    //         // fetch('http://127.0.0.1:8000/api/user/patient_register/', {
    //         //     method: 'POST', // or 'PUT'
    //         //     headers: {
    //         //       'Content-Type': 'application/json',
    //         //     },
    //         //     body: JSON.stringify(form),
    //         //   })
    //         //   .then(response => response.json())
    //         //   .then(data => {
    //         //     console.log('Success:', data);
    //         //   })
    //         //   .catch((error) => {
    //         //     console.error('Error:', error);
    //         //   });
           



    //     } catch (e) {
    //       console.log('Error signup!!', e);
    //     }
    //   };
       async function _postData(url = '', data = {}) {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(data)
        });
        
        return response.json();
    } 
   let requestPayload = {
        user_name: userName,
    password: password,
    first_name: firstName,
    last_name: lastName,
    role: 2, 
    medical_history: information

       }
       
    let tok;
    const handle_submit = async(evt) => {
        evt.preventDefault();
      await  fetch('http://127.0.0.1:8000/api/user/patient_register/', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
           
        },
        body: JSON.stringify(requestPayload)
    });
    
      }; 
     
    //   const handle_times = async(e) => {
    //       setSelectedDay(e);
    //    await fetch(`http://127.0.0.1:8000/seapp/empty-hours/?date=${e.value}`)
    //       .then(response => response.json())
    //       .then(json => setTimesContent(json))
    //       .then( console.log(TimesContent));
    //   };
   
        
        return (
           
            <div className='parentdiv'>
                <h1>ثبت نام بیمار</h1>
            <div className='div-reserve'>
                <form className = 'reserve-class'
                
                onSubmit = {handle_submit}>
                <FormInput
                        name = 'firstName'
                        type = 'text'
                        value = {firstName}
                        onChange = {e=> setFirstName(e.target.value)}
                        label='نام '
                        required
                    />
                    <FormInput
                        name = 'lastName'
                        type = 'text'
                        value = {lastName}
                        onChange = {e => setLastName(e.target.value)}
                        label='نام خانوادگی'
                        required
                    />
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
                       <FormInput
                        name = 'information'
                        type = 'text'
                        value = {information}
                        onChange = {e => setInformation(e.target.value)}
                        label='اگر سابقه ی بیماری دارید وارد کنید '
                        
                    />
                     {/* <div className="radio">
                        <label>
                        <input
                            type="radio"
                            value={role}
                            //checked={selectedOption === "DOCTOR"}
                            onChange={e => setRole("DOCTOR")}
                        />
                        پزشک
                        </label>
                        </div>
                        <div className="radio">
                        <label>
                        <input
                            type="radio"
                            value={role}
                           // checked={this.state.selectedOption === "PATIENT"}
                            onChange={e => setRole("PATIENT")}
                        />
                        بیمار
                        </label>
                        </div> */}
                     {/* <input type="radio" id="html" name="fav_language" value="HTML">
                    <label for="html">HTML</label><br>
                    <input type="radio" id="css" name="fav_language" value="CSS">
                    <label for="css">CSS</label><br></br>
                    */}
                    {/* <DatePicker
                        value={selectedDay}
                        onChange = {setSelectedDay}
                        shouldHighlightWeekends
                        locale="fa" // add this
                    /> */}
                    {/* <Select
                         placeholder="تاریخ مراجعه"
                         className="dropdown"
                         name="form-field-name"
                         value={selectedDay}
                         onChange={
                             handle_times
                                }
                            
                         options = {DatesContent.map((obj)=>({value : obj.date,label : obj.date.toUpperCase()}))}
                    />
                    <Select
                         placeholder="زمان مراجعه"
                         className="dropdown"
                         name="form-field-name"
                         value={timeField}
                         onChange={selectedOption => setTimeField(selectedOption)}
                         options ={ TimesContent.map((obj)=>({value : obj.date,label : "ساعت شروع : "+obj.startTime +"    "+ "ساعت پایان : "+obj.endTime}))}
                    /> */}
                   
                    <CustomButton className='button' type="primary" htmlType="submit">ثبت نام</CustomButton>
                </form>
             
            </div>
            </div>

        );
};
export default Reserve;