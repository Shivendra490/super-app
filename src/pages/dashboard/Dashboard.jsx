
import styles from "./Dashboard.module.css"
import UserWidget from "../../components/user-widget/UserWidget"
import WeatherWidget from "../../components/weather-widget/WeatherWidget"

const Dashboard = () => {
  return (
    <div className={styles.dashboardPage}>
      <section className={styles.left}>
        <section className={styles.userComp}>
          <UserWidget/>
        </section>
        <section className={styles.weatherComp}>
          <WeatherWidget/>
        </section>
      </section>
      <section className={styles.right}>
        <div className={styles.newsComp}>
        hello
        </div>
      </section>

    </div>
  )
}

export default Dashboard
