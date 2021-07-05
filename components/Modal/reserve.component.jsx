import React , {useState , useEffect} from 'react';
// import 'react-modern-calendar-datepicker/lib/DatePicker.css';
// import DatePicker from 'react-modern-calendar-datepicker';
import FormInput from '../forminput/forminput.component';
import './reserve.styles.scss';
//import Select from 'react-select';
import { Link } from 'react-router-dom';
import CustomButton from '../custombutton/custombutton.component';
import RadioGroup from 'react-radio-buttons';

export const Reserve = () =>{
    const[firstName,setFirstName] = useState('');
    const[lastName,setLastName] = useState('');
    const[userName,setUserName] = useState('');
    const[password,setPassword] = useState('');
    const[information,setInformation] = useState('');
    const handle_submit = async (values) => {
        try {
          const form = new FormData();
          form.append('username', values.userName);
          form.append('password', values.password);
          form.append('firstname', values.firstName);
          form.append('lastname', values.lastName);
          form.append('information', values.information);
          form.append('role', values.role);
          const { data } = await $Axios.post('?', form);
        } catch (e) {
          console.log('Error logging in!!', e);
        }
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
            <div className='div-reserve'>
                <form className = 'reserve-class' onSubmit = {handle_submit}>
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
                   
                    <CustomButton className='button'>ثبت نام</CustomButton>
                </form>
             
            </div>
            </div>

        );
};
export default Reserve;