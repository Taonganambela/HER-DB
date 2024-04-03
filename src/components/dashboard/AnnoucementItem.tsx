import React from 'react'
import PushPinIcon from '@mui/icons-material/PushPin';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function AnnoucementItem() {
  return (
    <div className='flex justify-between items-center w-full bg-slate-50 p-2 mt-4 dark:bg-slate-900'>
        <div className='space-y-1'>
            <h2 className='text-slate-600 font-sans dark:text-gray-300'>Meeting HR Department</h2>
            <h4 className='text-xs text-gray-400'>Yesterday, 12:20 PM</h4>
        </div>

        <div className='flex space-x-2'>
            <PushPinIcon className='text-gray-400'/>
            <MoreHorizIcon className='text-gray-400'/>
        </div>
    </div>
  )
}

export default AnnoucementItem