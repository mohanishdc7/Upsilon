import { Link } from "react-router-dom";

import styles from "./Footer.module.css";
import Logo from "../Assets/Logo.svg";
import facebookIcon from "../Assets/Footer/facebook-icon.svg";
import instagramIcon from "../Assets/Footer/insta-icon.svg";
import youtubeIcon from "../Assets/Footer/youtube-icon.svg";
import linkedInIcon from "../Assets/Footer/linkedIn-icon.svg";

function Footer() {
  return (
    <footer className='bg-dark text-light'>
      <main className='d-block d-md-flex align-items-center justify-content-between p-5 pt-4'>
        <div className={styles.main_flex_1 + " mb-4 mb-md-0"}>
          <div className={styles.header}>
            <img src={Logo} alt='logo' />
            <p className='fw-bolder'>PSILON</p>
          </div>
          <p className='fs-5 mb-4'>
            The instructors from around the world teach millions of students.
          </p>
          <p className='fs-4 mb-2'>Subscribe to our newsletter</p>
          <form
            action='#'
            className='d-flex p-1 bg-light border-0 rounded justify-content-between'
          >
            <div>
              <input
                type='email'
                className='form-control border-0 bg-light'
                placeholder='Your Email'
                name='email'
                autoComplete='off'
              />
            </div>
            <div>
              <button type='submit' className='btn btn-primary border-0'>
                <i className='uil uil-message'></i>
              </button>
            </div>
          </form>
        </div>
        <div
          className={
            styles.main_flex_2 + " d-flex mx-3 mx-md-0 mb-4 mb-md-0"
          }
        >
          <ul className={styles.list}>
            <li>
              <Link to='/'>Teach here</Link>
            </li>
            <li>
              <Link to='/'>Be part</Link>
            </li>
            <li>
              <Link to='/'>Business</Link>
            </li>
            <li>
              <Link to='/'>Blogs</Link>
            </li>
            <li>
              <Link to='/'>Help Center</Link>
            </li>
          </ul>
          <ul className={styles.list}>
            <li>
              <Link to='/about'>About us</Link>
            </li>
            <li>
              <Link to='/'>Contact us</Link>
            </li>
            <li>
              <a
                href='https://play.google.com/store/apps/details?id=com.sanchit.Upsilon'
                target='_blank'
              >
                Download App
              </a>
            </li>
            <li>
              <Link to='/signup'>Register</Link>
            </li>
            <li>
              <Link to='/'>Terms {"&"} Policy</Link>
            </li>
          </ul>
        </div>
        <div className={styles.main_flex_3 + ' ms-3 ms-md-0'}>
          <ul className={styles.list}>
            <li>Reach us at</li>
            <li>
              <a href='tel:+91 88888888888' target='_blank' className='fw-bold'>
                +91 88888888888
              </a>
            </li>
            <li>
              <a
                href='mailto:upsilon175@gmail.com'
                target='_blank'
                className='fw-bold'
              >
                upsilon175@gmail.com
              </a>
            </li>
            <li>Follow us on</li>
            <li className={styles.social}>
              <a
                href='https://www.facebook.com/Upsilon_India-107293461772755'
                target='_blank'
              >
                <img src={facebookIcon} alt='facebook' />
                {/* <i className='uil uil-facebook px-2 py-1 fs-2 me-2'></i> */}
              </a>
              <a
                href='https://www.instagram.com/upsilon_india/'
                target='_blank'
              >
                <img src={instagramIcon} alt='facebook' />
              </a>
              <a
                href='https://www.youtube.com/channel/UC4jIp2xyX7OJWmpqDjKH6wg'
                target='_blank'
              >
                <img src={youtubeIcon} alt='facebook' />
              </a>
              <a
                href='https://www.linkedin.com/company/upsilon-india/'
                target='_blank'
              >
                <img src={linkedInIcon} alt='facebook' />
              </a>
            </li>
          </ul>
        </div>
      </main>
    </footer>
  );
}

export default Footer;
