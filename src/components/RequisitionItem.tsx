import React from 'react'
import { Link } from 'react-router-dom'

function RequisitionItem() {
  return (
    <div className='flex justify-between bg-white p-8 rounded-md items-center mb-5 dark:bg-slate-900'>
        <h2 className='text-slate-600 font-semibold dark:text-slate-400'>Software development Requistion</h2>
        <h2 className='text-slate-600 font-semibold dark:text-slate-400'>Development & Integrations</h2>
        <Link to='/requisition-details'>
        <button className='text-purple-600'>
            View Details
        </button>
        </Link>
       
        <button className='bg-green-500 text-white p-2 w-28 text-center rounded-md'>
            Approve
            </button>
            <button className='bg-red-500 text-white p-2 w-28 text-center rounded-md'>
                Decline
            </button>
    </div>
  )
}

export default RequisitionItem