import React , {useState , useEffect} from 'react';
// import 'react-modern-calendar-datepicker/lib/DatePicker.css';
// import DatePicker from 'react-modern-calendar-datepicker';
import FormInput from '../../components/forminput/forminput.component';
import '../../components/reserve/reserve.styles.scss';
//import Select from 'react-select';
import { Link } from 'react-router-dom';
import CustomButton from '../../components/custombutton/custombutton.component';
import './covid.styles.scss';
import './reservepage.styles.scss';
export const Covid = () =>{
    const[userName,setUserName] = useState('');
    const[userName1,setUserName1] = useState('');
    const[pr,setPr] = useState('');
    const[selectedDay,setSelectedDay] = useState('');
    const[password,setpassword] = useState('');
    const[information,setinformation] = useState('');
    const[telephoneNumber,setTelephoneNumber] = useState('');
    const[timeField,setTimeField] = useState('');
    const localDate = '';
    const [DatesContent, setDatesContent] = useState([]);
    const[user, setuser] = useState([]);
    const [TimesContent, setTimesContent] = useState([]);
    // useEffect(async () => {
    //   await  fetch("http://127.0.0.1:8000/seapp/empty-dates/")
    //       .then(response => response.json())
    //       .then(json => setDatesContent(json));
    //   }, []);
    let requestPayload = {
      patient_username: userName,
      prescription_content: pr,
      // user_name:userName1,
      // password:password,
      // ME_number:information
  
         }

    const handle_submit = async (evt) => {
      evt.preventDefault();
    //   await  fetch('http://127.0.0.1:8000/api/user/doctor_info/', {
    //     method: 'GET',
    //     mode: 'cors',
    //     cache: 'no-cache',
    //     credentials: 'same-origin',
    //     redirect: 'follow',
    //     referrerPolicy: 'no-referrer',
        
    //     headers: {
    //         'Authorization': `Bearer  ${localStorage.getItem('authToken')}`,
    //         "Content-type": "application/json; charset=UTF-8"
    //     },
        
    // }
    
    // )
    // .then(response => response.json())
    // .then(data =>
    //   setuser(data)
    // );
    // setUserName1(user.user_name)
    // setpassword(user.password)
    // setinformation(user.ME_number)

      await  fetch('http://127.0.0.1:8000/api/user/save_recipe/', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        headers: {
            'Authorization': `Bearer  ${localStorage.getItem('authToken')}`,
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

           <div className="reserve-page">
            <div className='parentdiv'>
            <div className='div-reserve'>
                <form className = 'reserve-class' onSubmit = {handle_submit}>
                <FormInput
                        name = 'userName'
                        type = 'text'
                        value = {userName}
                        onChange = {e=> setUserName(e.target.value)}
                        label='نام کاربری بیمار'
                        required
                    />
                    <FormInput className = 'r' 
                        name = 'pr'
                        type = 'text1'
                        value = {pr}
                        onChange = {e => setPr(e.target.value)}
                        label='تجویزات '
                        required
                    />
                  
                   
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
                    
                    <CustomButton className='button'>ثبت</CustomButton>
                </form>
            </div>
            </div>
            </div>

        );
};
export default Covid;
// import React from 'react';


// import './covid.styles.scss';

// export const Covid = () =>  {
//     const[userName,setUserName] = useState('');
//     const[password,setPassword] = useState('');

//     return (
           
//         <div className='parentdiv'>
//         <div className='div-reserve'>
//             <form className = 'reserve-class' onSubmit = {handle_submit}>
//             <FormInput
//                     name = 'userName'
//                     type = 'text'
//                     value = {userName}
//                     onChange = {e=> setUserName(e.target.value)}
//                     label='نام کاربری'
//                     required
//                 />
//                 <FormInput
//                     name = 'password'
//                     type = 'text'
//                     value = {password}
//                     onChange = {e => setPassword(e.target.value)}
//                     label='رمز عبور '
//                     required
//                 />
//     )

// };