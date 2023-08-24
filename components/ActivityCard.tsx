import React from 'react'
// importing the json file with the activity data
import activities from '../activities.json';

const ActivityCard = () => {

  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 w-full'>
        {/* card 1 */}
        {activities.map((activity, index) => {
            return  <div 
                        key={index} 
                        className={`${activity.title.toLocaleLowerCase().replace(' ', '-')}-activity 
                        rounded-xl 
                        pt-10
                        flex flex-col items-end justify-center`
                        }>
                        
                        <div className='activity-display flex justify-center items-center 
                                        rounded-xl h-full w-full p-6'>
                            <div className='flex-1 flex flex-col ps-2'>
                                <span className='text-base'>{activity.title}</span>
                                <span className='text-4xl mt-4'>{`${activity.timeframes.weekly.current}hrs`}</span>
                            </div>
                            <div className='flex-1 flex flex-col text-right pe-2 py-2'>
                                <span className='text-lg'>...</span>
                                <span className='text-xl sm:text-base mt-4'>{`Last Week - ${activity.timeframes.weekly.previous}hrs`}</span>
                            </div>
                        </div>
                    </div>
        })}
    </div> 
  )
}

export default ActivityCard