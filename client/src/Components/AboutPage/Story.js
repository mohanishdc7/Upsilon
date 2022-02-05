import story from "../Assets/About Page/Story.svg";
import styles from "./Story.module.css";

const Story = () => {
  return (
    <section className={styles.story}>
      <main className='d-block d-md-flex p-4 p-lg-5 mx-4 mx-lg-5 my-1 align-items-center'>
        <div className='d-block d-md-none'>
          <img src={story} />
        </div>
        <div className={styles.main_flex_1 + " pe-lg-5"}>
          <h1 className={styles.header + " fw-bold mb-4 mt-4 mt-md-0"}>
            Our Story
          </h1>
          <p>
            We started just after the Covid19 crisis that badly affected the
            flow of learning between tutors to students. Hence to tackle this
            vital issue, we introduced Upsilon, which is a startup driven by IIT
            Madras students. Here we take care of both a tutor who shares his
            skill and of student who is eager to learn.
          </p>
        </div>
        <div className='d-none d-md-block me-lg-5'>
          <img src={story} />
        </div>
      </main>
    </section>
  );
};

export default Story;
