import React from 'react'
import UserCard from './UserCard'
import thumbnailImage from '../assets/images/image-jeremy.png';

const MainCard = () => {
  return (
    <div className='main-card rounded-xl h-full'>
        <UserCard 
            username='Jeremy Robson'
            thumbnail={thumbnailImage}
        />
        <ul className='flex sm:flex-col justify-around px-8 py-4 sm:p-4 sm:my-2 gap-5'>
            <li className='sm:w-4/5 sm:ms-6'>Daily</li>
            <li className='sm:w-4/5 sm:ms-6'>Wakly</li>
            <li className='sm:w-4/5 sm:ms-6'>Monthly</li>
        </ul>
    </div>
  )
}

export default MainCard