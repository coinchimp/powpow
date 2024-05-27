// src/app/Banner.js
import styles from './Banner.module.css';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <img src="/banner-image.jpg" alt="Banner" className={styles.bannerImage} />
    </div>
  );
};

export default Banner;
