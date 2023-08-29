'use client'

import React, { useState } from 'react'
import UserCard from './UserCard'
import thumbnailImage from '../assets/images/image-jeremy.png';
import { CustomButton } from '.';
import { MainCardProps } from '@/types';

const MainCard = ({ handleClick }: MainCardProps) => {

  //To handle selected option and apply 'Active' effect
  const [selectedOption, setSelectedOption] = useState('weekly');

  const handleSelectedOption = (option: string) => {
    setSelectedOption(option);
  }

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
                onClick={() => {handleClick('daily'); handleSelectedOption('daily')}}
                isActive={selectedOption === 'daily'}
              />
            </li>
            <li className='sm:w-4/5 sm:ms-6'>
              <CustomButton 
                text='Weekly'
                onClick={() => {handleClick('weekly'); handleSelectedOption('weekly')}}
                isActive={selectedOption === 'weekly'}
              />
            </li>
            <li className='sm:w-4/5 sm:ms-6'>
              <CustomButton 
                text='Monthly'  
                onClick={() => {handleClick('monthly'); handleSelectedOption('monthly')}}
                isActive={selectedOption === 'monthly'}
              />
            </li>
        </ul>
    </div>
  )
}

export default MainCard