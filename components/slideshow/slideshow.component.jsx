import React from 'react';
import { Slide } from 'react-slideshow-image';
 import './slideshow.styles.scss';
import './slider.css';
import  { useEffect, useState } from "react";

import SimpleImageSlider from "react-simple-image-slider";
import nemune from './images/noskheyar.jpg';
// const images = [
//   { url: "images/dandun.jpg" },
//   { url: "images/pic3.jpg" },
//   { url: "images/pic4.jpg" },
// ];
// const Slideshow = () => {
//   useEffect(() => {
//   },[]);
//      return (
//       <div>
//       <SimpleImageSlider
//         width={896}
//         height={504}
//         images={images}
//       />
//     </div>
//      );
// }
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
 }
// const Slideshow = () => {
//   return (
//     <div className="slide-container">
//       <Slide>
//         <div className="each-slide">
//           <div style={{'backgroundImage': `url(${dandun})`}}>
//             <span>Slide 1</span>
//           </div>
//         </div>
//         <div className="each-slide">
//           <div style={{'backgroundImage': `url(${pic3})`}}>
//             <span>Slide 2</span>
//           </div>
//         </div>
//         <div className="each-slide">
//           <div style={{'backgroundImage': `url(${pic4})`}}>
//             <span>Slide 3</span>
//           </div>
//         </div>
//       </Slide>
//     </div>
//   )
// }

const Slideshow = () => {
  // useEffect(() => {
  //   slidesh();
  // }, []);
  // function slidesh() {
  //   return (
  //     <div >
  //       <Slide {...properties}>
  //         <div className="each-slide">
  //           <div style={{'backgroundImage': `url(${dandun})`}}>
  //           </div>
  //         </div>
  //         <div className="each-slide">
  //           <div style={{'backgroundImage': `url(${pic3})`}}>
  //           </div>
  //         </div>
  //         <div className="each-slide">
  //           <div style={{'backgroundImage': `url(${pic4})`}}>
  //           </div>
  //         </div>
  //       </Slide>
  //         {/* <img src={nemune} alt = 'عکس نسخه یار'/> */}
  //     </div>
  //   )
  // }
    return (
      
      <div >
      //   {/* <Slide {...properties}>
      //     <div className="each-slide">
      //       <div style={{'backgroundImage': `url(${dandun})`}}>
      //       </div>
      //     </div>
      //     <div className="each-slide">
      //       <div style={{'backgroundImage': `url(${pic3})`}}>
      //       </div>
      //     </div>
      //     <div className="each-slide">
      //       <div style={{'backgroundImage': `url(${pic4})`}}>
      //       </div>
      //     </div>
      //   </Slide> */}
          <img src={nemune} alt = 'عکس نسخه یار'/>
      </div>
    )
};
export default Slideshow;