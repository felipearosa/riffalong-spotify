import styles from './SolosTable.module.css';

const SolosTable = () => {
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
      </tbody>

    </table>
  )
}

export default SolosTable
