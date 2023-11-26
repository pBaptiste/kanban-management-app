"use client"
import React, { useRef, useEffect, useState, Suspense } from 'react'
import { motion } from 'framer-motion'
import ThemeSwitcher from './theme-switcher'
import BoardList from './board-list'

type Props = {
    setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
    setIsBoardFormOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileMenu = ({ setIsMobileMenuOpen, setIsBoardFormOpen }: Props) => {
    const mobileMenuRef = useRef<HTMLDivElement | null>(null)

    const handleClick = (e: any) => {
        // setActiveBoardName(e.target.innerText)
        //setActiveBoardId(e.target.id)
        setIsMobileMenuOpen(false)
    }

    const handleOutsideClick = (e: MouseEvent) => {
        if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
            setIsMobileMenuOpen(false);
        }
    };

    useEffect(() => {
        // Add a click event listener to the document to handle outside clicks
        document.addEventListener('click', handleOutsideClick);

        // Cleanup the event listener when the component unmounts
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    },); // Empty dependency array to run the effect only once

    const handleBoard = () => {
        setIsMobileMenuOpen(false)
        setIsBoardFormOpen(true)
    }

    return (
        <div
            className='fixed top-0 left-0 flex items-start justify-center w-full h-full bg-black bg-opacity-50 md:hidden'>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.25 }}
                ref={mobileMenuRef} className="bg-white dark:bg-dark-grey rounded-lg py-4 pr-6 mobile-board w-[264px] mt-20">
                <h3 className="font-bold text-xs leading-[0.938rem] tracking-[2.4px] uppercase text-medium-grey ml-6 mb-[19px]">
                    {/* All Boards ({boardList.length}) */} All Boards
                </h3>

                <BoardList setIsBoardFormOpen={setIsBoardFormOpen} />

                <div className="ml-4">
                    <ThemeSwitcher />
                </div>
            </motion.div>

        </div>
    )
}

export default MobileMenu