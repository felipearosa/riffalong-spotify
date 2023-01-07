import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './SolosTable.module.css';
import MsToMin from '../../helpers/MsToMin';

const SolosTable = ({ soloTimes, activateSolo }) => {
  const timerRef = useRef(null);
  const accessToken = useSelector(state => state.auth.accessToken)
  const [activeSolo, setActiveSolo] = useState();

  const activeHandler = async (solo, i) => {
    if (i === activeSolo) return;

    activateSolo(solo);
    setActiveSolo(i);
  }

  const solos = soloTimes.map((solo, i) => {
    const startingSeconds = MsToMin(solo.startingTime)
    const endingTime = MsToMin(solo.endingTime)

    return (
      <tr className={activeSolo === i ? styles.active : 'active'} key={i} onClick={() => activeHandler(solo, i)}>
        <td>ok</td>
        <td>{startingSeconds} - {endingTime}</td>
        <td>X</td>
      </tr>
    )
  })


  return (
    <table className={styles['solo-table']}>
      <thead>
        <tr>
          <th className="text-center">Mastered</th>
          <th className="text-center">Time</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ok</td>
          <td>solo time</td>
          <td>X</td>
        </tr>
        {solos}
      </tbody>

    </table>
  )
}

export default SolosTable
