'use client'

import { CustomButtonProps } from '@/types'
import React from 'react'

const CustomBotton = ({title,containerStyles,handleClick,btnType}:CustomButtonProps) => {
  return (
    <button
        disabled={false}
        type={"button" || btnType}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
    >
        <span className={`flex-1`}>
            {title}
        </span>
    </button>
  )
}

export default CustomBotton