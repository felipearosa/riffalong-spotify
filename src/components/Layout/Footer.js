import { Link } from "react-router-dom"

import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles['footer-links']}>
        <a href="https://github.com/felipearosa/riff_along" target="_blank"><i className="fab fa-github"></i></a>
        <a href="https://www.instagram.com/theriffalong/" target="_blank"><i className="fab fa-instagram"></i></a>
        <Link to='/privacy' className={styles.privacy} />
      </div>
      <div className={styles['footer-copyright']}>
        Master you song <i class="fas fa-music"></i> with The RiffAlong
      </div>
    </div>

  )
}

export default Footer
