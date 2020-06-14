import React from 'react'
import useSWR from 'swr'
import axios from 'axios'
import styles from './Component.module.scss'

const fetcher = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  return res.data
}

export const ComponentOne = () => {

  const { data } = useSWR('/api/data', fetcher, {
    onSuccess(user) {
      localStorage.setItem('data', JSON.stringify(user));
    }
  })

  return (
    <div className={styles['container']}>
      <span>I will fetch data.</span> <br/>
      {data ? <> <span> DATA:</span>{JSON.stringify(data)}</> : <span>...loading</span>}
    </div>
  )
}