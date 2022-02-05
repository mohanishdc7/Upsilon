import styles from "./Team.module.css";
import Founder from "../Assets/Founder.png";
import CoFounder from "../Assets/Marketing0.png";

const Team = () => {
  return (
    <section className={styles.team}>
      <main className='d-block p-4 px-lg-5 mx-4 mx-lg-5 mt-3 align-items-center'>
        <h1 className={styles.header}>Our Team</h1>
        <div className='d-block d-lg-flex align-items-center justify-content-around px-lg-5 m-lg-5'>
          <div className='mt-4 mb-5 m-lg-0'>
            <div className={styles.teamCard + " mx-md-5"}>
              <a
                href='https://www.linkedin.com/in/sanchit-gupta-361581189/'
                target='_blank'
              >
                <p className={styles.lnkdIn}>in</p>
              </a>
              <div className='p-5'>
                <img src={Founder} alt='Founder' className='rounded-circle' />
                <p>Founder</p>
                <p className='fs-3 fw-bold'>Sanchit Gupta</p>
              </div>
            </div>
          </div>
          <div className='mt-4 mb-5 m-lg-0'>
            <div className={styles.teamCard + " mx-md-5"}>
              <a
                href='https://www.linkedin.com/in/varunkumar017/'
                target='_blank'
              >
                <p className={styles.lnkdIn}>in</p>
              </a>
              <div className='p-5'>
                <img src={CoFounder} alt='Founder' className='rounded-circle' />
                <p>Co-Founder</p>
                <p className='fs-3 fw-bold'>Varun Kumar</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Team;
