import styles from "./Footer.module.css";
import Logo from "../Assets/Logo.svg";

function Footer() {
  return (
    <footer className='bg-dark text-light'>
      <main
        className={
          "d-block d-md-flex align-items-center justify-content-between p-5"
        }
      >
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
            className='d-flex p-1 bg-light border-0 rounded justify-content-between mx-3 mx-md-0'
          >
            <div>
              <input
                type='email'
                className='form-control border-0 bg-light'
                placeholder='Your Email'
                name='email'
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
            styles.main_flex_2 + " d-flex justify-content-around mb-4 mb-md-0"
          }
        >
          <ul className={styles.list}>
            <li>Teach here</li>
            <li>Be part</li>
            <li>Business</li>
            <li>Blogs</li>
            <li>Help Center</li>
          </ul>
          <ul className={styles.list}>
            <li>About us</li>
            <li>Contact us</li>
            <li>Download App</li>
            <li>Register</li>
            <li>Terms {"&"} Policy</li>
          </ul>
        </div>
        <div className={styles.main_flex_3 + " ms-5 ms-md-0"}>
          <ul className={styles.list}>
            <li>React us at</li>
            <li>
              <a href='tel:+91 88888888888' className='fw-bold'>
                +91 88888888888
              </a>
            </li>
            <li>
              <a href='mailto:upsilon175@gmail.com' className='fw-bold'>
                upsilon175@gmail.com
              </a>
            </li>
            <li>Follow us on</li>
            <li className={styles.social}>
              <a href='https://www.facebook.com/Upsilon_India-107293461772755'>
                <i className='uil uil-facebook px-2 py-1 fs-2 me-2'></i>
              </a>
              <a href='https://www.instagram.com/upsilon_india/'>
                <i className='uil uil-instagram p-1 fs-2 me-2'></i>
              </a>
              <a href='https://www.youtube.com/channel/UC4jIp2xyX7OJWmpqDjKH6wg'>
                <i className='uil uil-youtube p-1 fs-2 me-2'></i>
              </a>
              <a href='https://www.linkedin.com/company/upsilon-india/'>
                <i className='uil uil-linkedin px-2 py-1 fs-2'></i>
              </a>
            </li>
          </ul>
        </div>
      </main>
    </footer>
  );
}

export default Footer;
