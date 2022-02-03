import thumbnail from "../Assets/Landing Page/thumbnail.png";
import styles from "./CourseCard.module.css";

const CourseCard = () => {
  return (
    <div className={styles.div}>
      <img src={thumbnail} alt='thumbnail' />
      <div className='px-4 px-md-5 py-4'>
        <div className='d-flex justify-content-between align-items-center'>
          <p className='fs-4 fw-bolder'>Music (Vocal)</p>
          <p>Online</p>
        </div>
        <p className='text-primary my-2'>Kaveera</p>
        <p>Basic training, how to sing, vocal, management, etc</p>
        <div className='d-flex justify-content-between align-items-center mt-2'>
          <div className='d-flex'>
            <i className='bi bi-star-fill text-warning'></i>
            <i className='bi bi-star-fill text-warning'></i>
            <i className='bi bi-star-fill text-warning'></i>
            <i className='bi bi-star-fill text-secondary'></i>
            <i className='bi bi-star-fill text-secondary'></i>
          </div>
          <p className='text-primary'>Free</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
