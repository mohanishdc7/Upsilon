import culture from "../Assets/About Page/Culture.svg";
import styles from "./Culture.module.css";

const Story = () => {
  return (
    <section className={styles.culture}>
      <main className='d-block d-md-flex p-4 p-lg-5 mx-4 mx-lg-5 my-1 align-items-center'>
        <div className='d-block'>
          <img src={culture} />
        </div>
        <div className={styles.main_flex_1 + " ps-lg-5 ms-lg-5"}>
          <h1 className={styles.header + " fw-bold mb-4 mt-4 mt-md-0 ms-lg-5"}>
            Our Culture
          </h1>
          <p className='ms-lg-5'>
            We believe that every member associated with upsilon is equally
            valuable. We follow a decentralized approach to promote the creation
            of new ideas among our members. We are focusing on No communication
            gap between our core team and members to lead better coordination.
          </p>
        </div>
      </main>
    </section>
  );
};

export default Story;
