import React from 'react'

interface ProgressBarProps {
    percentage: number,
}

const ProgressBar:React.FC<ProgressBarProps> = ({percentage}) => {
  return (
    <div className='w-full bg-blue-50 h-2 rounded m-2'>
        <div className='bg-blue-600 h-2 rounded' style={{width:`${percentage}%`}}></div>
    </div>
  )
}

export default ProgressBar;