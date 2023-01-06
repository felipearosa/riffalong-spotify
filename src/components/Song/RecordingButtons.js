import { useState } from 'react'
import styles from './RecordingButtons.module.css'

const RecordingButtons = props => {
  const [isRecording, setIsRecording] = useState(false);

  const startTimeHandler = () => {
    //something to get time from player
    props.setIsRecording()
    setIsRecording(true);
  }

  const endTimeHandler = () => {
    setIsRecording(false);
  }

  return (
    <div className={`row justify-content-center ${styles.container}`}>
      <div className={`btn btn-dark btn-lg col-sm-12 col-md-6 p-3 ${isRecording ? 'disabled' : ''}`} onClick={startTimeHandler}>
        start!
      </div>
      <div className={`btn btn-dark btn-lg col-sm-12 col-md-6 p-3 ${!isRecording ? 'disabled' : ''}`} onClick={endTimeHandler}>
        stop!
      </div>
    </div>
  )
}

export default RecordingButtons
