import React from 'react'
import Notification from '../components/Notification'

function Notifications() {

  const numberOfNotifications = 3;

  return (
    <div className="dark:bg-bkgSecondary dark:text-content h-screen pb-20 p-8 w-full ">
      <h1 className='font-semibold text-2xl text-gray-600 mb-3 dark:text-slate-300'>Notifications</h1>
      <div className='bg-white dark:bg-bkg rounded-md p-4 pb-10'>
      {Array.from({ length: numberOfNotifications }, (_, index) => (
        <Notification key={index} />
    ))}
      </div>
    </div>
  )
}

export default Notifications