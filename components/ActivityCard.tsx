import React from 'react'

import { ActivityCardProps } from '@/types';

const ActivityCard = ({ activityData, selectedTimeframe }:ActivityCardProps) => {
    console.log(selectedTimeframe);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 w-full'>
        {activityData.map((activity, index) => {
            return  <div 
                        key={index} 
                        className={`${activity.title.toLocaleLowerCase().replace(' ', '-')}-activity 
                        rounded-xl 
                        pt-8
                        flex flex-col items-end justify-center`
                        }>
 
                        <div className='activity-display flex flex-col 
                                        rounded-xl h-full w-full p-8'>
                            <div className='flex-1 flex justify-between'>
                                <span className='text-xl'>{activity.title}</span>
                                <span className='text-lg'>...</span>
                            </div>
                            <div className='flex-1 flex justify-between items-end sm:items-start sm:flex-col mt-4'>
                                <span className='text-4xl '>{`${activity.timeframes[selectedTimeframe].current}hrs`}</span>
                                <span className='text-xl sm:text-base pb-2'>{`Last ${selectedTimeframe.charAt(0).toUpperCase() + selectedTimeframe.slice(1)} - ${activity.timeframes[selectedTimeframe].previous}hrs`}</span>
                            </div>
                        </div>
                    </div>
        })}
    </div> 
  )
}

export default ActivityCard