'use client';

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { CustomBotton } from '.'

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
            <Link href={'/'} className='flex justify-center items-center'>
                <Image 
                    src='/logo.svg'
                    alt='Company Logo'
                    width={118}
                    height={18}
                    className='object-contain'
                />
            </Link>
            <CustomBotton 
              title='Sign In'
              btnType='button'
              containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
              handleClick={() => {console.log('Sign in functionality goes here!')}}
            />
        </nav>
    </header>
  )
}

export default Navbar