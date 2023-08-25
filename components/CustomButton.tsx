import { CustomButtonProps } from '@/types'
import React from 'react'

const CustomButton = ({ text, onClick, name }: CustomButtonProps) => {
  return (
    <button onClick={onClick} name={name}>
        {text}
    </button>
  )
}

export default CustomButton