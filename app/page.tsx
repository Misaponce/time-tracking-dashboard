'use client'

import { MainCard, ActivityCard } from '@/components';
// importing the json file with the activity data
import activities from '../activities.json';
import { useState } from 'react';

export default function Home() {

  const [activityData, setActivityData] = useState(activities);
  const [selectedTimeframe, setSelectedTimeframe] = useState('weekly');

  const handlePrintActivities = (name: string) => {
    // Filtering data based on option selected
    const updatedActivityData = activities.map((activity) => {
      if (name === 'daily') {
        //using spread operator to create a copy of activiy object
        //but updating timeframe to the selected
        return {...activity, timeframe: activity.timeframes.daily};
      } else if (name === 'weekly') {
        return {...activity, timeframe: activity.timeframes.weekly};
      } else if (name === 'monthly') {
        return {...activity, timeframe: activity.timeframes.monthly}; 
      }

      return activity;
    });

    setActivityData(updatedActivityData)
    setSelectedTimeframe(name);

  }

  // To handle selected time frame opacity effect


  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 px-6 sm:p-24">
      <div className='main container w-full flex flex-col sm:flex-row gap-6'>
        <MainCard 
          handleClick={handlePrintActivities}
        />
        <ActivityCard 
          activityData={activityData}
          selectedTimeframe={selectedTimeframe}
        />
      </div>
    </main>
  )
}
