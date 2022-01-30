import { Link } from "react-router-dom";

import styles from "./Showcase.module.css";
import showcase from "../Assets/Showcase.svg";

const Showcase = () => {
  return (
    <div className={styles.showcase}>
      <main className={styles.main + " d-block d-md-flex p-5 m-5 align-items-center"}>
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
            <button className='btn-primary py-3 px-4 rounded me-md-5'>
              Get Started
            </button>
            <Link to='/' className={styles.link}>
              Become an Instructor
            </Link>
          </div>
        </div>
        <div className='d-none d-md-block'>
          <img src={showcase} />
        </div>
      </main>
    </div>
  );
};

export default Showcase;
