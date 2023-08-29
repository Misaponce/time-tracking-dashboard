import React from 'react'

import { ActivityCardProps, IconMap } from '@/types';
import * as Icons from '@/assets/index';
import Dots from '@/assets/images/icon-ellipsis.svg';
import Image from 'next/image';

const ActivityCard = ({ activityData, selectedTimeframe }:ActivityCardProps) => {

    const iconMap: IconMap = {
        Work: Icons.IconWork,
        Play: Icons.IconPlay,
        Exercise: Icons.IconExercise,
        SelfCare: Icons.IconSelfCare,
        Social: Icons.IconSocial,
        Study: Icons.IconStudy,
      };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 w-full'>
        {activityData.map((activity, index) => {

            return  <div 
                        key={index} 
                        className={`${activity.title.toLocaleLowerCase().replace(' ', '-')}-activity 
                        rounded-xl 
                        flex flex-col items-end justify-end relative z-10`
                        }>
                        <Image src={iconMap[activity.title.replace(' ', '')]} 
                                alt='Icon-Activity' 
                                height={80}
                                width={80}
                                className='absolute z-0 -top-2'
                        />
                        <div className='activity-display flex flex-col 
                                        rounded-xl h-3/4 w-full px-8 py-10 relative z-10
                                        justify-center'>
                            <div className='flex-1 flex justify-between'>
                                <span className='text-xl'>{activity.title}</span>
                                <span className='mt-3 cursor-pointer opacity-30 hover:opacity-100'>
                                    <Image src={Dots} alt='Dots-Info'/>
                                </span>
                            </div>
                            <div className='flex-1 flex justify-between items-end sm:items-start sm:flex-col mt-4'>
                                <span className='text-4xl '>{`${activity.timeframes[selectedTimeframe].current}hrs`}</span>
                                <span className='text-xl sm:text-base pb-2'>
                                    {`Last ${selectedTimeframe !== 'daily' ? selectedTimeframe.charAt(0).toUpperCase() + selectedTimeframe.slice(1,-2) : 'Day'} - ${activity.timeframes[selectedTimeframe].previous}hrs`}
                                </span>
                            </div>
                        </div>
                    </div>
        })}
    </div> 
  )
}

export default ActivityCard