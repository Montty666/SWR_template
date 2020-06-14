import React, { useState } from 'react'
import styles from './Component.module.scss'
import useSWR from 'swr'

export const ComponentTwo = () => {
  const [userData, setUserData] = useState<string>('')
  const { data, mutate } = useSWR('/api/data')
  return (
    <div className={styles['container']}>
      <span>I ll recieve data from 1st component.</span> <br/>
      <span>Mutate data below and it will mutate data in 1st component as well.</span> <br/>
      <span>{JSON.stringify(data)}</span>
      <br/>
      <br/>
      <input onChange={(e) => setUserData(e.target.value)} value={userData}/>
      <button onClick={() => mutate(userData, false)}> MUTATE STATE</button>
    </div>
  )
}