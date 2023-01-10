import styles from './WebsiteSummary.module.css'

const WebsiteSummary = () => {
  return (
    <section>
      <div className={styles.summary}>
        <div  className={styles.summary__container}>
          <h3>Practice the riff or solo you want!</h3>
          <ol>
            <li>Create an account with your Spotify Login.</li>
            <li>Choose the song.</li>
            <li>Record the part of the song you want to practice by clicking the start and stop buttons.</li>
            <li>Choose your recoding and click the buttons to  start over or leave it on loop.</li>
          </ol>
        </div>
      </div>
    </section>
  )
}

export default WebsiteSummary
