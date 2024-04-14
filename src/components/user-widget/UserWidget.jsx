
import styles from "./UserWidget.module.css"
import avatar from "../../assets/avatar.png"

const UserWidget = () => {
  return (
    <section className={styles.userSection}>
      <div className={styles.userAvatar}>
        <img src={avatar}/>
      </div>
      <div className={styles.userDetails}>
        <p className={styles.name}>KK Vinay</p>
        <p className={styles.email}>Vinay090@gmail.com</p>
        <p className={styles.username}>vinay060</p>
        <div className={styles.genreList}>
            <div className={styles.genreItem}>Horror</div>
            <div className={styles.genreItem}>Thriller</div>
            <div className={styles.genreItem}>Action</div>
            <div className={styles.genreItem}>Fiction</div>
        </div>
      </div>
    </section>
  )
}

export default UserWidget
