import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import styles from './App.module.scss'

const element = (
  <div className={styles['app']}>
    <App />
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
