import React from 'react'
import RequisitionItem from '../components/RequisitionItem'

function Requisitions() {
  return (
    <div className="dark:bg-bkgSecondary dark:text-content max-h-fit pb-20 p-8 w-full ">
      <h1 className='font-semibold text-2xl text-gray-600 mb-3 dark:text-slate-300'>Requisitions</h1>
     <div>
        <RequisitionItem />
        <RequisitionItem />
        <RequisitionItem />
        <RequisitionItem />
     </div>
    </div>
  )
}

export default Requisitions