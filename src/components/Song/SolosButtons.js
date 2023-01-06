import styles from './SolosButtons.module.css'

const SolosButtons = () => {
  return (
    <div className={`row ${styles.container}`}>
      <div className={`btn btn-dark btn-lg col-sm-12 col-md-6 p-3`}>
        start over!
      </div>
      <div className="btn btn-dark btn-lg col-sm-12 col-md-6 p-3">
        loop!
      </div>
    </div>
  )
}

export default SolosButtons
