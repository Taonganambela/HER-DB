import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';

function Notification() {
  return (
    <div className='bg-slate-100 dark:bg-slate-900 flex space-x-5 p-2 rounded-md my-4'>
        <ClearIcon className='text-purple-600'/>
        <h2 className='text-slate-600 dark:text-slate-300'>Requistion form IT - Development & Intergrations</h2>
    </div>
  )
}

export default Notification