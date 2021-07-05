import React,{useState} from 'react';
import a3 from '../../components/directory/images/3.jpg';
import a4 from '../../components/directory/images/4.jpeg';
import a6 from '../../components/directory/images/6.jpg';
import a7 from '../../components/directory/images/7.jpg';

import CustomButton from '../../components/custombutton/custombutton.component';
import Modala3 from '../../components/Modal/Modal-a3/Modal-a3.component';

import './servicepage.styles.scss';
import Modala4 from '../../components/Modal/Modal-a4/Modal-a4.component';
// import Modala5 from '../../components/Modal/Modal-a5/Modal-a5.component';
import Modala6 from '../../components/Modal/Modal-a6/Modal-a6.component';
import Modala7 from '../../components/Modal/Modal-a7/Modal-a7.component';

 export const ServicePage = () =>{
    return(
    <div className='service-page'>
        <div className='item'>
        <div className='titlecontainer'>
            <h3 className='title'>ویروس کرونا</h3>
            </div>
            <div>
                <img className='img'src={a3} alt = 'ویروس کرونا' />
                <p className = 'paragraph'>روز بدون فوتی کرونایی دیگری در کرمانشاه 
                 </p>
                 <>
                <Modala3
                />
                </>
            </div>
        </div>
        <div className='item'>
        <div className='titlecontainer'>
            <h3 className='title'>عصب و صورت</h3>
            </div>
            <div>
                <img className='img' src={a4} alt = 'عصب و صورت' />
                <p className = 'paragraph'>نخستین کلینیک ویژه اختلالات عصب و صورت در کشور 
                 </p>
                 <>
                <Modala4
                />
                </>
            </div>
        </div>
        <div className='item'>
            <div className='titlecontainer'>
            <h3 className='title'>مادران باردار</h3>
            </div>
            <div>
                <img className='img' src={a6} alt = 'مادران باردار' />
                <p className = 'paragraph'>
                دستورالعمل‌های ضروری تغذیه‌ای برای مادران باردار
                 </p>
                 <>
                <Modala6
                />
                </>
            </div>
        </div>
        <div className='item'>
        <div className='titlecontainer'>
            <h3 className='title'>پسماند پزشکی</h3>
            </div>
            <div>
                <img className='img' src={a7} alt = 'پسماند پزشکی' />
                <p className = 'paragraph'>
                جمع‌آوری روزانه ۱۰۰ تن پسماند پزشکی در شهر تهران
                 </p>
                 <>
                <Modala7
                />
                </>
            </div>
        </div>
        {/* <div className='item'>
        <div className='titlecontainer'>
            <h3 className='title'>جراحی دندان</h3>
            </div>
            <div>
                <img className='img' src={jarrahi} alt = 'جراحی' />
                <p className = 'paragraph'>
                جراحی دندان بخشی از دندانپزشکی است .
                 دندانپزشکی یک شاخه پزشکی است که با دندان ، لثه و دهان سرو کار دارد. دندانپزشکان با معالجه ، 
                 پیشگیری ، تشخیص و بررسی اختلالات و بیماری های حفره دهان سروکار دارند. که شامل مخاط دهان و 
                 دندان و همچنین کلیه بافت ها و ساختارهای مرتبط با آن ها (مانند ناحیه فک و صورت) می باشد.
                 </p>
                 <>
                <ModalJarrahi
                />
                </>
            </div>
        </div> */}
    </div>
    );
 };