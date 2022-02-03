import { Link } from "react-router-dom";

import styles from "./Showcase.module.css";
import showcase from "../Assets/Landing Page/Showcase.svg";
import showcase_students from "../Assets/Landing Page/showcase_students.svg";
import showcase_teacher from "../Assets/Landing Page/showcase_teacher.svg";
import showcase_Elearning from "../Assets/Landing Page/showcase_Elearning.png";

const Showcase = () => {
  return (
    <div className={styles.showcase}>
      <main
        className={
          styles.main +
          " d-block d-md-flex p-4 p-md-5 mx-4 mx-md-5 my-1 align-items-center"
        }
      >
        <div className='d-block d-md-none'>
          <img src={showcase} />
        </div>
        <div className={styles.main_flex_1 + " pe-lg-5 me-lg-5"}>
          <h1 className={styles.header + " fw-bold mb-4 mt-4 mt-md-0"}>
            Make money from your Skills
          </h1>
          <p className='mb-4'>
            Manage your class and increase your reach with upsilon. If you have
            a skill, help others learn and contribute back to the learning
            community. Create an income generator in your free time.
          </p>
          <div className='d-md-flex'>
            <button className='btn-primary py-2 mb-2 mb-md-0 rounded me-md-5'>
              <Link to='/login' className={styles.Link + " py-3 px-4"}>
                Get Started
              </Link>
            </button>
            <br />
            <Link to='/' className={styles.link + " " + styles.Link}>
              Become an Instructor
            </Link>
          </div>
        </div>
        <div className='d-none d-md-block'>
          <img src={showcase} />
        </div>
      </main>
      <div className='p-5'>
        <div className='d-block d-md-flex justify-content-center justify-content-md-around align-items-center py-3 border border-left-0 border-right-0'>
          <div className='d-flex'>
            <img src={showcase_students} />
          </div>
          <div className='d-flex'>
            <img src={showcase_teacher} />
          </div>
          <div className='d-flex'>
            <img src={showcase_Elearning} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
