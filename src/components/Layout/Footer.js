import { Link } from "react-router-dom"
import IgLogo from '../../imgs/Instagram_Glyph_White.svg'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles['footer-links']}>
        <a href="https://www.instagram.com/theriffalong/" target="_blank"><img className={styles['social-media']} src={IgLogo} /></a>
        <Link to='/privacy' className={styles.privacy} >Privacy Policy</Link>
      </div>
      <div className={styles['footer-copyright']}>
        The RiffAlong
      </div>
    </div>

  )
}

export default Footer
