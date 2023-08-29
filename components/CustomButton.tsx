import { CustomButtonProps } from '@/types'
import React from 'react'

const CustomButton = ({ text, onClick, isActive }: CustomButtonProps) => {
  return (
    <button onClick={onClick} className={`${isActive ? 'opacity-100 font-semibold' : 'opacity-60'}`}>
        {text}
    </button>
  )
}

export default CustomButton