import { useEffect, useState } from 'react';
import styles from './SolosTable.module.css';


const SolosTable = ({ soloTimes }) => {

  const solos = soloTimes.map(solo => {
    return (
      <tr>
        <td>ok</td>
        <td>{solo.startingTime} - {solo.endingTime}</td>
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
