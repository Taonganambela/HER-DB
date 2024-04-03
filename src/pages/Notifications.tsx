import React from 'react'
import Notification from '../components/Notification'

function Notifications() {
  return (
    <div className="dark:bg-bkgSecondary dark:text-content max-h-fit pb-20 p-8 w-full ">
      <h1 className='font-semibold text-2xl text-gray-600 mb-3 dark:text-slate-300'>Notifications</h1>
      <div className='bg-white dark:bg-bkg rounded-md p-4 pb-10'>
          <Notification />
          <Notification />
          <Notification />
          <Notification />
          <Notification />
          <Notification />
          <Notification />
          <Notification />
          <Notification />
          <Notification />
          <Notification />
          <Notification />
      </div>
    </div>
  )
}

export default Notifications