import styles from "./Registration.module.css";
import registerImg from "../assets/registerImg.png";

const registration = () => {
  return (
    <div className={styles.registrationPage}>
      <section className={styles.imgSection}>
        <img src={registerImg} />
      </section>
      <section className={styles.registrationSection}>
          Registration form
      </section>
    </div>
  );
};

export default registration;
