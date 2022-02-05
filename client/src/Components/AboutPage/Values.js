import values from "../Assets/About Page/Values.svg";
import styles from "./Values.module.css";

const Story = () => {
  return (
    <section className={styles.values}>
      <main className='d-block d-md-flex p-4 p-lg-5 mx-4 mx-lg-5 my-1 align-items-center'>
        <div className='d-block d-md-none'>
          <img src={values} />
        </div>
        <div className={styles.main_flex_1 + " pe-lg-5"}>
          <h1 className={styles.header + " fw-bold mb-4 mt-4 mt-md-0"}>
            Our Values
          </h1>
          <p>
            We believe that the learning process should never be affected no
            matter what crisis transpires. We provide Upsilon, a remedy to all
            the common problems faced by the educational system. Additionally,
            we want to make education accessible for everyone and facilitate
            learning from anywhere.
          </p>
        </div>
        <div className='d-none d-md-block me-lg-5'>
          <img src={values} />
        </div>
      </main>
    </section>
  );
};

export default Story;
