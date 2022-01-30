import { Link } from "react-router-dom";

import styles from "./Showcase.module.css";
import showcase from "../Assets/Showcase.svg";
import showcase_students from "../Assets/showcase_students.svg";
import showcase_teacher from "../Assets/showcase_teacher.svg";
import showcase_Elearning from "../Assets/showcase_Elearning.png";

const Showcase = () => {
  return (
    <div className={styles.showcase}>
      <main
        className={
          styles.main + " d-block d-md-flex p-5 m-5 align-items-center"
        }
      >
        <div className='d-block d-md-none'>
          <img src={showcase} />
        </div>
        <div className={styles.main_flex_1 + " pe-lg-5 me-lg-5"}>
          <h1 className={styles.header + " mb-4 mt-5 mt-md-0"}>
            Make money from your Skills
          </h1>
          <p className='fs-5 mb-4'>
            Manage your class and increase your reach with upsilon. If you have
            a skill, help others learn and contribute back to the learning
            community. Create an income generator in your free time.
          </p>
          <div className='d-md-flex'>
            <button className='btn-primary py-2 py-md-3 px-4 mb-2 mb-md-0 rounded me-md-5'>
              Get Started
            </button>
            <br />
            <Link to='/' className={styles.link}>
              Become an Instructor
            </Link>
          </div>
        </div>
        <div className='d-none d-md-block'>
          <img src={showcase} />
        </div>
      </main>
      <div className="p-5">
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
