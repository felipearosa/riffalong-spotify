import { useState } from 'react'

import styles from './RecordingButtons.module.css'
import { getSongTime } from '../../helpers/spotifyReq';
import { useSelector } from 'react-redux';

const RecordingButtons = props => {
  const accessToken = useSelector(state => state.auth.accessToken)
  const [isRecording, setIsRecording] = useState(false);

  const startTimeHandler = async () => {
    //something to get time from player
    const response = await getSongTime(accessToken);
    console.log(response.data.progress_ms)
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
