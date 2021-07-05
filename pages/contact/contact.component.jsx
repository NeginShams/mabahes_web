import React from 'react';

import map1 from './images/map.JPG';
import './contact.styles.scss';

export const Contact = () => (
    <div className='contactcontainer'>
        <h2 className='contactus'>تماس با ما</h2>
        <div className='matn'>
            <p className='pp'>
            شما میتوانید از طریق شماره های زیر با همکاران ما در تماس باشید
            </p>
            <p className='pp'>
                031-3333333
            </p>
            <p className='pp'>
                0999-9999999
            </p>
            </div>
        <img className='contactImg'  src={map1} alt="نقشه" />
        </div >
        
);