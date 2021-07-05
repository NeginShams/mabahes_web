import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import CustomButton from '../../custombutton/custombutton.component';

import '../Modal-a3/Modal-a3.styles.scss';

export default class Modala6 extends Component {
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
                <Modal visible={this.state.visible} width="1500" height="350" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div className='paracontainer'>
                        <p className='paramodal'> به گزارش خبرنگار بهداشت و درمان خبرگزاری تسنیم؛ رعایت دستورالعمل‌‌های تغذیه‌ای و تدابیر خاص در دوران بارداری برای مادران باردار بسیار ضروری است و این امر می‌تواند در نهایت منجر به طی دوره 9ماهه بارداری در نهایت صحت، سلامت و آرامش و تولد نوزادی بدون هرگونه مشکل و عارضه شود. 
                        </p>
                        <CustomButton className='buttonmodal' onClick={() => this.closeModal()}>بستن</CustomButton>
                    </div>
                </Modal>
            </div>
        );
    }
}
