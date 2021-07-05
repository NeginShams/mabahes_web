import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import CustomButton from '../../custombutton/custombutton.component';

import '../Modal-a3/Modal-a3.styles.scss';

export default class Modala4 extends Component {
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
                <Modal visible={this.state.visible} width="1500" height="550" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div className='paracontainer'>
                       
                        <p className='paramodal'>
                        به گزارش گروه اجتماعی باشگاه خبرنگاران پویا؛ اولین کلینیک ویژه اختلالات عصب و صورت در کشور به منظور تسهیل دسترسی، کاهش هزینه و صرفه جویی در وقت بیماران، با کار تیمی متخصصان گوش و حلق و بینی، روان پزشکی، مغز و اعصاب، پلاستیک، چشم، فیزیوتراپی و طب فیزیکی؛ امروز در بیمارستان حضرت رسول اکرم (ص) راه اندازی شد.

دکتر احمد دانشی، مدیر گروه گوش و حلق و بینی دانشگاه علوم پزشکی ایران در این مراسم گفت: در این کلینیک درمان بیماران با ناهنجاری‌های مادرزادی فک و صورت، شکستگی و تومورها و کیست‌های فک و صورت و عصب و صورت، به صورت متمرکز و تیمی انجام می‌شود؛ دسترسی آسان بیماران به تخصص‌های مورد نیاز، افزایش اعتماد به کیفیت خدمات ارائه شده و صرفه جویی در وقت و هزینه بیماران از مزایای این کلینیک است.

در ادامه جمعی از پزشکان متخصص این مرکز، به تشریح مزایای راه اندازی این کلینیک پرداختند.

شباهنگ محمدی، متخصص گوش و حلق و بینی با اشاره به طولانی بودن روند درمان در برخی بیماری‌ها از جمله سرطان گردن و بیماری های خود ایمنی، افتتاح این کلینیک را گامی موثر در کم شدن زمان درمان و افزایش سرعت بازتوانی بیماران دانست.

علی محمد اصغری متخصص گوش و حلق و بینی گفت: درمان عصب صورت کاری پیچیده و نیازمند یک تیم پزشکی است که همکاری در این کلینیک موجب افزایش کیفیت و درمان سریعتر بیماران می‌شود.
                                               </p>
                        <CustomButton className='buttonmodal' onClick={() => this.closeModal()}>بستن</CustomButton>
                    </div>
                </Modal>
            </div>
        );
    }
}
