import React from 'react'

type Card1Props = {
    color: string,
    topText: string,
    bottomText: string,
    count: number,
    bottomTextColor: string
}

function Card1({color, topText, bottomText, count, bottomTextColor}: Card1Props) {
  return (
    <div className={`p-4 ${color} rounded-md flex-[0.32] h-[180px]`}>
        <div className='flex flex-col justify-start space-y-2'>
            <h2 className='font-sans font-medium text-slate-600'>{topText}</h2>
            <h1 className='text-6xl text-bkg'>{count}</h1>
            <h2 className={`${bottomTextColor} font-medium`}>{bottomText}</h2>
        </div>
    </div>
  )
}

export default Card1