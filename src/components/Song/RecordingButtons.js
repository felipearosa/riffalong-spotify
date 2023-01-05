import styles from './RecordingButtons.module.css'

const RecordingButtons = props => {
  const getTimeHandler = () => {
    //something to get time from player
    props.setIsRecording()
  }
  return (
    <div className={`row justify-content-center ${styles.container}`}>
      <div className={`btn btn-dark btn-lg col-sm-12 col-md-6 p-3`} onClick={getTimeHandler}>
        start!
      </div>
      <div className="btn btn-dark btn-lg col-sm-12 col-md-6 p-3" onClick={getTimeHandler}>
        stop!
      </div>
    </div>
  )
}

export default RecordingButtons
