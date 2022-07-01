import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import axios from 'axios'
// import Datepicker from 'flowbite-datepicker/Datepicker'

export default function Home () {
  const [dates, setDates] = useState({ birthdate: '2000-01-01', endDate: '2020-01-01' })
  const [age, setAge] = useState(0)
  const [showAge, setShowAge] = useState(false)

  // useEffect(() => {
  //   const dateRangePickerEl = document.getElementById('birthday')
  //   new Datepicker(dateRangePickerEl)
  //   const dateRangePickerE2 = document.getElementById('enddate')
  //   new Datepicker(dateRangePickerE2)
  // })
  const getAge = async () => {
    if (new Date(dates.birthdate) > new Date(dates.endDate)) {
      return alert('Birth date should be before end date')
    }
    try {
      const res = await axios.get(`/api/age?birthday=${dates.birthdate}&endDate=${dates.endDate}`)
      console.log('res', res)
      setAge(res.data.age)
      setShowAge(true)
    } catch (error) {
      console.log(error)
      alert('Error')
    }
  }
  console.log(dates)
  console.log(dates.birthdate > dates.endDate)
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='JavaScript calculate age' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='max-w-screen-xl mx-auto p-28'>
        <div>
          <div>
            <div className='rounded-sm bg-gradient-to-r bg-white border border-gray-200 dark:border-gray-700 p-2 sm:p-6 dark:bg-gray-200'>
              <div className='space-y-4 w-2/6'>
                <div className='flex justify-between'>
                  <div>Date of Birth</div>
                  <input
                    value={dates.birthdate} type='date' className='text-black border-gray-300 ' onChange={(e) => {
                      setShowAge(false)
                      setDates({
                        ...dates,
                        birthdate: e.target.value
                      })
                    }}
                  />
                </div>
                <div className='flex justify-between'>
                  <div>Age at the Date of</div>
                  <input
                    value={dates.endDate} type='date' className='text-black' onChange={(e) => {
                      setShowAge(false)
                      setDates({
                        ...dates,
                        endDate: e.target.value
                      })
                    }}
                  />
                </div>
              </div>
              <button className='mt-4 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' onClick={getAge}>Calculate</button>
            </div>
            <div>
              {showAge && (
                <div>
                  <div>Your age at {dates.endDate} is:</div>
                  <div>{age} years old</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
