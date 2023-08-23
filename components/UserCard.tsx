import { UserCardProps } from '@/types'
import Image from 'next/image'
import React from 'react'

const UserCard = ({ thumbnail, username }: UserCardProps) => {
  return (
    <div className='user-card rounded-xl px-10 py-8 h-full sm:pb-5'>
        <div className='flex sm:flex-col items-center justify-evenly'>
            <div className='thumbnail-wrapper border-4 rounded-full border-white mr-2 self-start sm:mb-5'>
                <Image 
                    src={thumbnail} 
                    width={70} 
                    height={70} 
                    alt={`${username}-thumbnail`}
                />
            </div>
            <div className='flex flex-col sm:mt-5 sm:mb-10'>
                <h2 className='text-sm text-gray-300'>Report for</h2>
                <span className='text-3xl sm:w-2/4'>{username}</span>
            </div>
        </div>
    </div>
  )
}

export default UserCard