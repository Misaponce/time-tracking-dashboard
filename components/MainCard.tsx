'use client'

import React from 'react'
import UserCard from './UserCard'
import thumbnailImage from '../assets/images/image-jeremy.png';
import { CustomButton } from '.';
import { MainCardProps } from '@/types';

const MainCard = ({ handleClick }: MainCardProps) => {
  return (
    <div className='main-card rounded-xl h-full'>
        <UserCard 
            username='Jeremy Robson'
            thumbnail={thumbnailImage}
        />
        <ul className='flex sm:flex-col justify-around px-8 py-4 sm:p-4 sm:my-2 gap-5'>
            <li className='sm:w-4/5 sm:ms-6'>
              <CustomButton 
                text='Daily'
                name='daily'
                onClick={() => {handleClick('daily clicked')}}
              />
            </li>
            <li className='sm:w-4/5 sm:ms-6'>
              <CustomButton 
                text='Weekly'
                name='weekly'
                onClick={() => {handleClick('weekly clicked')}}
              />
            </li>
            <li className='sm:w-4/5 sm:ms-6'>
              <CustomButton 
                text='Monthly'
                name='monthly'
                onClick={() => {handleClick('monthly clicked')}}
              />
            </li>
        </ul>
    </div>
  )
}

export default MainCard