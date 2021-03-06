import styles from "./WhyChooseUs.module.css";
import showcase from "../Assets/Landing Page/WhyChooseUs.svg";

const WhyChooseUs = () => {
  return (
    <section className={styles.WhyChooseUs}>
      <main
        className={
          styles.main + " d-block d-md-flex align-items-center p-4 p-lg-5 m-4 m-lg-5"
        }
      >
        <div className='d-flex d-md-none'>
          <img src={showcase} />
        </div>
        <div className='pe-lg-5 me-lg-5'>
          <h1 className='fs-1 fw-bold mb-4 mt-5 mt-md-0'>Why Choose Us ?</h1>
          <p className='fs-3 fw-bold mb-2'>For Student</p>
          <ul className={styles.list}>
            <li>Free: No platform charges for early clients.</li>
            <li>Versatility: Various courses to choose from.</li>
            <li>
              Flexibility: You can learn online or offline, from recorded or
              from live sessions, from local or global teachers!
            </li>
          </ul>
          <p className='fs-3 fw-bold mt-3 mb-2'>For Teacher</p>
          <ul className={styles.list}>
            <li>Reach: Increases reach to a global level.</li>
            <li>Online Presence: You get a hassle free online presence.</li>
            <li>Offline: Become easy to find in your locality.</li>
          </ul>
        </div>
        <div className='d-none d-md-flex'>
          <img src={showcase} />
        </div>
      </main>
    </section>
  );
};

export default WhyChooseUs;
