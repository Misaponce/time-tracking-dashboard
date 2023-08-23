import { MainCard } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 px-6 sm:p-24">
      <div className='main container w-full flex flex-col sm:flex-row gap-6'>
        <MainCard />
        <div className='flex-1'>cards</div>
      </div>
    </main>
  )
}
