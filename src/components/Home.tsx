import React from 'react'
import { ComponentOne } from './ComponentOne'
import { ComponentTwo } from './ComponentTwo'
import styles from './Home.module.scss'

export const Home = () => {
  return (
    <div className={styles['container']}>
      <ComponentOne />
      <ComponentTwo />
    </div>
  )
}