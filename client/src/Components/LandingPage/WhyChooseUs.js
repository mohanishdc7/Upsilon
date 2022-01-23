import styles from "./WhyChooseUs.module.css";
import showcase from "../Assets/WhyChooseUs.svg";

const WhyChooseUs = () => {
  return (
    <div className={styles.WhyChooseUs}>
      <main className={styles.main + " d-block d-md-flex p-5 m-5"}>
        <div className="d-flex align-items-center d-md-none">
          <img src={showcase} />
        </div>
        <div className='pe-lg-5 me-lg-5'>
          <h1 className='fs-1 mb-5 mt-5 mt-md-0'>Why Choose Us?</h1>
          <p className='fs-3 mb-4'>For Student</p>
          <ul className={styles.list}>
            <li>Free: No platform charges for early clients.</li>
            <li>Versatility: Various courses to choose from.</li>
            <li>
              Flexibility: You can learn online or offline, from recorded or
              from live sessions, from local or global teachers!
            </li>
          </ul>
          <p className='fs-3 my-4'>For Teacher</p>
          <ul className={styles.list}>
            <li>Reach: Increases reach to a global level.</li>
            <li>Online Presence: You get a hassle free online presence.</li>
            <li>Offline: Become easy to find in your locality.</li>
          </ul>
        </div>
        <div className="d-none d-md-flex align-items-center">
          <img src={showcase} />
        </div>
      </main>
    </div>
  );
};

export default WhyChooseUs;
