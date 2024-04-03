import styles from "./Registration.module.css";
import registerImg from "../../assets/registerImg.png";
import { useState } from "react";
import checkError from "../../helpers/check-error";

const initialUserData = {
  name: "",
  userName: "",
  email: "",
  mobile: "",
};

const Registration = () => {
  const [user, setUser] = useState(initialUserData);
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState(null);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setError(null);
    const err = checkError(user, consent);
    const errLength = Object.keys(err).length;

    if (errLength > 0) {
      setError(err);
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));
    console.log(JSON.parse(localStorage.getItem("currentUser")));
    setUser(initialUserData);
    setConsent(false);
  };

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
            <input
              type="text"
              className={styles.field}
              placeholder="Name"
              name="name"
              value={user.name}
              onChange={onChangeHandler}
            />
            {error?.name && <p className={styles.error}>{error?.name}</p>}
            <input
              type="text"
              className={styles.field}
              placeholder="UserName"
              name="userName"
              value={user.userName}
              onChange={onChangeHandler}
            />
            {error?.userName && (
              <p className={styles.error}>{error?.userName}</p>
            )}
            <input
              type="text"
              className={styles.field}
              placeholder="Email"
              name="email"
              value={user.email}
              onChange={onChangeHandler}
            />
            {error?.email && <p className={styles.error}>{error?.email}</p>}
            <input
              type="text"
              className={styles.field}
              placeholder="Mobile"
              name="mobile"
              value={user.mobile}
              onChange={onChangeHandler}
            />
            {error?.mobile && <p className={styles.error}>{error?.mobile}</p>}
            <div className={styles.consentWrapper}>
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
              />
              <label htmlFor="consent">
                Share my registration data with Superapp
              </label>
            </div>
            {error?.consent && <p className={styles.error}>{error?.consent}</p>}
            <button className={styles.signUpBtn} onClick={submitHandler}>
              SIGN UP
            </button>
          </div>
          <div className={styles.policyWrapper}>
            <p>
              By clicking on Sign up. you agree to Superapp{" "}
              <span>Terms and Conditions of Use</span>
            </p>
            <br />
            <p>
              To learn more about how Superapp collects, uses, shares and
              protects your personal data please head Superapp{" "}
              <span>Privacy Policy</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;
