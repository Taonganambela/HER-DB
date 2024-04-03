import React from 'react'
import LineChart from '../LineChart'
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';

type Card2Props = {
    graph_color: string,
    topText: string,
    bottomText: string,
    count: number,
   boxColor: string,
   drop?: boolean,
   percentage: number
}

function Card2({graph_color, topText, bottomText, count, boxColor, drop, percentage}: Card2Props) {
  return (
    <div className='p-4 flex items-center flex-[0.48] h-[200px] shadow-lg dark:shadow-neutral-500 mt-10 dark:bg-slate-900'>
        <div className='space-y-4'>
        <h2 className='font-sans font-medium text-slate-600 w-32 dark:text-gray-200'>{topText}</h2>

        <h1 className='text-6xl text-bkg dark:text-content'>{count}</h1>
        <h3 className='w-20 text-gray-500 dark:text-gray-200'>{bottomText}</h3>
        </div>

        <div className='relative'>
            <div className={`flex flex-col items-center text-sm absolute left-12 -top-7 font-semibold ${graph_color}`}>
            <h3 >{percentage}%</h3>
            <NorthIcon className='text-xs' />
            </div>
            <LineChart data={[0, 250, 180, 200, 350, 400]} width={100} height={50} color={drop ? 'red': 'purple'} />
            <h2 className={`text-sm p-1 text-black rounded-md absolute -bottom-12 w-44 text-center ${boxColor}`}>+{percentage}% Past 6 months</h2>
        </div>
        
    </div>
  )
}

export default Card2