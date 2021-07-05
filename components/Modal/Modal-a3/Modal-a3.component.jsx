import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import CustomButton from '../../custombutton/custombutton.component';

import './Modal-a3.styles.scss';

export default class Modala3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        return (
            <div>
                <CustomButton className='buttonmodal' onClick={() => this.openModal()} >توضیحات بیشتر</CustomButton>
                <Modal visible={this.state.visible} width="1500" height="800" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div className='paracontainer'>
                        <h3>ویروس کرونا</h3>
                        <p className='paramodal'>
                        به گزارش خبرنگار مهر، مهدی محمدی ظهر امروز یکشنبه در جمع خبرنگاران اظهار کرد: در شبانه روز گذشته ۹ مورد مثبت بستری مبتلا به کرونا و ۲۰ مورد بیمار مثبت سرپایی نیز در استان کرمانشاه شناسایی شدند.

وی افزود: هم‌اکنون ۱۵۵ بیمار مربوط به کرونا در مراکز درمانی استان کرمانشاه بستری هستند.

رئیس کمیته اطلاع رسانی ستاد مدیریت کرونا دانشگاه علوم پزشکی کرمانشاه تصریح کرد: خوشبختانه هیچ موردی از فوت با تشخیص قطعی ابتلاء به کرونا در استان ثبت نشده است.

محمدی گفت: مجموع جان باختگان بر اثر ابتلاء به کرونا در استان کرمانشاه از ابتدای اپیدمی تاکنون، یک هزار و ۴۹۴ نفر است.

وی تصریح کرد: در ۲۴ ساعت گذشته ۵۲ بیمار جدید با علائم مشکوک به کرونا در بیمارستان‌های استان کرمانشاه بستری شده و ترخیص ۴۵ نفر از بیمارستان پس از بهبودی انجام گرفته است.
</p>
                        <CustomButton className='buttonmodal' onClick={() => this.closeModal()}>بستن</CustomButton>
                    </div>
                </Modal>
            </div>
        );
    }
}
