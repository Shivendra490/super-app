import styles from "./Registration.module.css";
import registerImg from "../assets/registerImg.png";

const registration = () => {
  return (
    <div className={styles.registrationPage}>
      <section className={styles.imgSection}>
        <img src={registerImg} />
      </section>
      <section className={styles.registrationSection}>
        <div className={styles.formWrapper}>
          <div className={styles.registrationHeader}>
            <h1 className={styles.heading}>Super app</h1>
            <h2>Create your new account</h2>
          </div>
          <div className={styles.fieldWrapper}>
            <input type="text" className={styles.field} placeholder="Name" />
            <input
              type="text"
              className={styles.field}
              placeholder="UserName"
            />
            <input type="text" className={styles.field} placeholder="Email" />
            <input type="text" className={styles.field} placeholder="Mobile" />
            <div className={styles.consentWrapper}>
              <input type="checkbox" id="consent" />
              <label htmlFor="consent">
                Share my registration data with Superapp
              </label>
            </div>
            <button className={styles.signUpBtn}>SIGN UP</button>
          </div>
          <div className={styles.policyWrapper}>
            <p>
              By clicking on Sign up. you agree to Superapp <span>Terms and Conditions of Use</span>
            
            </p>
            <br/>
            <p>
              To learn more about how Superapp collects, uses, shares and
              protects your personal data please head Superapp <span>Privacy Policy</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default registration;
