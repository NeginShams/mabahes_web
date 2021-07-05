import React from 'react';
import StickyFooter from 'react-sticky-footer';
import { Link } from 'react-router-dom';
import './footer.styles.scss';
  
const Footer = () => (
  <div className="footercontainer" >
  <footer className="footer">
    <ul>
        <Link className="foot">پرسش و پاسخ</Link>
        </ul>
        <ul>
        <Link className="foot">سوالات متداول</Link>
        </ul>
        <ul>
        <Link className="foot" to='/bugreport' >گزارش باگ</Link>
        </ul>
       
  </footer>
  </div>
);
  
export default Footer;

// const FooterPage = () => {
  
//   return (
//     <StickyFooter
//     className = "stickyfooter"
//     bottomThreshold={100}
//     normalStyles={{
//     backgroundColor: "#ffffff",
//     padding: "2rem",
//     }}
//     stickyStyles={{
//     backgroundColor: "rgba(255,255,255,.8)",
//     padding: "2rem"
//     }}
//     >
        // <ul>
        // <Link className="foot">پرسش و پاسخ</Link>
        // </ul>
        // <ul>
        // <Link className="foot">سوالات متداول</Link>
        // </ul>
        // <ul>
        // <Link className="foot">تلفن پشتیبانی سایت</Link>
        // </ul>
        // <ul>
        // <Link className="foot">همکاری با ما</Link>
        // </ul>
        // <ul>
        // <Link className="foot">قوانین سایت</Link>
        // </ul>
        // <ul>
        // <Link className="foot" to='/bugreport' >گزارش باگ</Link>
        // </ul>
//     </StickyFooter>
//   );
// }

// export default FooterPage;