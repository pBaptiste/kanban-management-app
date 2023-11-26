"use client"
import React from 'react'
import { useThemeContext } from '@/context/theme-context'
import Image from 'next/image'

const ThemeSwitcher = () => {
    const { theme, setTheme } = useThemeContext()
    const isDarkTheme = theme === 'dark'

    const handleClick = () => {
        setTheme(isDarkTheme ? 'light' : 'dark')
    }

    return (
        <div className="flex justify-center items-center gap-[23.67px] bg-light-grey dark:bg-very-dark-grey transition duration-500 rounded-md py-[14px]">
            <div>
                <Image src='/assets/icon-light-theme.svg' alt='sun icon' width={19} height={19} />
            </div>
            <button onClick={handleClick}
                className={` w-[40px] h-[20px] bg-main-purple rounded-xl py-[3px] px-[3px] cursor-pointer`}>
                <div className={`bg-white rounded-full w-[14px] h-[14px] transition-transform duration-300 ${isDarkTheme && 'translate-x-5'}`}></div>
            </button>
            <div>
                <Image src='/assets/icon-dark-theme.svg' alt='moon icon' width={16} height={16} />
            </div>
        </div>
    )
}

export default ThemeSwitcher

