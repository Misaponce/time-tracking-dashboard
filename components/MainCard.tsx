import React from 'react'
import UserCard from './UserCard'
import thumbnailImage from '../assets/images/image-jeremy.png';

const MainCard = () => {
  return (
    <div className='main-card rounded-xl'>
        <UserCard 
            username='Jeremy Robson'
            thumbnail={thumbnailImage}
        />
        <ul className='flex sm:flex-col justify-between px-8 py-4 sm:p-4 gap-3'>
            <li>Daily</li>
            <li>Wakly</li>
            <li>Monthly</li>
        </ul>
    </div>
  )
}

export default MainCard