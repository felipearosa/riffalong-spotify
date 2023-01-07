import styles from './SolosButtons.module.css';
import { playSolo } from '../../helpers/spotifyReq';
import { useSelector } from 'react-redux';

const SolosButtons = ({ soloTimes, activeSolo }) => {
  const accessToken = useSelector(state => state.auth.accessToken)

  const startSolo = async () => {
    await playSolo(activeSolo.startingTime, activeSolo.endingTime, accessToken)
  }

  return (
    <div className={`row ${styles.container}`}>
      <div onClick={startSolo} className={`btn btn-dark btn-lg col-sm-12 col-md-6 p-3`}>
        start over!
      </div>
      <div className="btn btn-dark btn-lg col-sm-12 col-md-6 p-3">
        loop!
      </div>
    </div>
  )
}

export default SolosButtons
