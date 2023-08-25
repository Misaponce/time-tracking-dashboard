'use client'

import { MainCard, ActivityCard } from '@/components';

export default function Home() {

  const appLogic = (name: string) => {
    console.log(name)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 px-6 sm:p-24">
      <div className='main container w-full flex flex-col sm:flex-row gap-6'>
        <MainCard 
          handleClick={appLogic}
        />
        <ActivityCard />
      </div>
    </main>
  )
}
