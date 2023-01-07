import { useEffect } from 'react';

import SolosButtons from './SolosButtons';
import styles from './SolosBox.module.css';
import SolosTable from './SolosTable';

const SolosBox = ({ soloTimes }) => {

  return (
    <div className={styles.box}>
      <h3>Loop</h3>
      <SolosButtons soloTimes={soloTimes} />
      <SolosTable soloTimes={soloTimes} />
    </div>
  )
}

export default SolosBox
