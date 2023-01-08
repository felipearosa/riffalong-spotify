import { useEffect, useState } from 'react';

import SolosButtons from './SolosButtons';
import styles from './SolosBox.module.css';
import SolosTable from './SolosTable';

const SolosBox = ({ soloTimes }) => {
  const [activeSolo, setActiveSolo] = useState();

  const activateSolo = solo => {
    setActiveSolo(solo);
  }

  return (
    <div className={styles.box}>
      <h3>Loop</h3>
      <SolosButtons activeSolo={activeSolo} />
      <SolosTable soloTimes={soloTimes} activateSolo={activateSolo} />
    </div>
  )
}

export default SolosBox
