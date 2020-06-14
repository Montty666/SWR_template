import React from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className={styles['container']}>
      <Link to="/">
        <span className={styles['text']}>REDUX WON`T RULE`EM ALL!</span>
      </Link>
      <div className={styles['navigator']}>
        <Link to="/about">
          <span className={styles['text']}>ABOUT</span>
        </Link>
      </div>
    </div>
  )
}
