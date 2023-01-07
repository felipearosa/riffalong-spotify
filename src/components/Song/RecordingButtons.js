import axios from "axios"
import { useState } from 'react'

import styles from './RecordingButtons.module.css'
import { getSongTime } from '../../helpers/spotifyReq';
import { useSelector } from 'react-redux';

const RecordingButtons = props => {
  const accessToken = useSelector(state => state.auth.accessToken)
  const [isRecording, setIsRecording] = useState(false);
  const [startingTime, setStartingTime] = useState(false);
  const [endingTime, setEndingTime] = useState(false);

  const startTimeHandler = async () => {
    const startingTime = await getSongTime(accessToken);
    setStartingTime(startingTime);
    setIsRecording(true);
  }

  const endTimeHandler = async () => {
    const endingTime = await getSongTime(accessToken);
    setEndingTime(endingTime);
    setIsRecording(false);
    props.setSoloTime(startingTime, endingTime);
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
