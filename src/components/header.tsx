"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import MobileMenu from './mobile-menu'

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isEditMenuOpen, setIsEditMenuOpen] = useState(false)
    const [isTaskFormOpen, setIsTaskFormOpen] = useState(false)
    const [isBoardFormOpen, setIsBoardFormOpen] = useState(false)
    const [isEditBoardFormOpen, setIsEditBoardFormOpen] = useState(false)
    const [isDeleteBoardFormOpen, setIsDeleteBoardFormOpen] = useState(false)
    const activeBoardName = "Platform Launch"

    const handleEditBoard = () => {
        setIsEditBoardFormOpen((prev) => true)
        setIsEditMenuOpen((prev) => false)
    }

    const handleDeleteBoard = () => {
        setIsDeleteBoardFormOpen((prev) => true)
        setIsEditMenuOpen((prev) => false)
    }

    return (
        <header className='relative flex items-center justify-between bg-white dark:bg-dark-grey transition duration-500 px-4 py-[20px] md:px-6 md:py-7 lg:pt-[29px] lg:pb-[37px]'>
            {/* Mobile Logo & Mobile Menu Toggle */}
            <div className='flex items-center gap-4'>
                <Image src='/assets/logo-mobile.svg' alt='Website Logo - Mobile Icon' width={24} height={25} className='md:hidden' />
                <button
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                    className='flex gap-2 items-center font-bold text-[1.125rem] leading-[1.438rem] md:text-[1.25rem] md:leading-[1.563rem] lg:text-2xl lg:leading-[1.875rem] text-custom-black dark:text-white'>
                    {activeBoardName}
                    <div className='md:hidden'>
                        {<Image src={isMobileMenuOpen ? '/assets/icon-chevron-up.svg' : '/assets/icon-chevron-down.svg'} alt={isMobileMenuOpen ? 'Chevron up icon' : 'Chevron down icon'} width={10} height={7} />}
                    </div>
                </button>
            </div>

            {/* New Task button & Task Edit/Delete Menu */}
            <div className='flex items-center gap-4 md:gap-6'>
                <button onClick={() => setIsTaskFormOpen((prev) => true)}
                    className='bg-main-purple hover:bg-main-purple-hover px-[18px] py-[10px] md:px-6 md:py-[0.938rem] rounded-3xl text-white font-bold text-[0.938rem] leading-[1.188rem] transition duration-300'>
                    <Image src='/assets/icon-add-task-mobile.svg' alt='Add Task - Cross Icon' className='md:hidden' width={12} height={12} />
                    <p className='hidden md:block'>+ Add New Task</p>
                </button>

                <button onClick={() => setIsEditMenuOpen((prev) => !prev)}>
                    <Image src='/assets/icon-vertical-ellipsis.svg' alt='Open Edit/Delete Menu - Ellipsis Icon' width={5} height={20} />
                </button>

                <AnimatePresence>
                    {isEditMenuOpen && (
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className={`absolute top-[90px] right-[25px] bg-white dark:bg-very-dark-grey rounded-lg mobile-board py-4 pl-4 flex flex-col items-start gap-4 w-[192px]`}>
                            <button
                                onClick={handleEditBoard}
                                className='font-medium text-[0.813rem] leading-[1.438rem] text-medium-grey'>Edit Board</button>
                            <button
                                onClick={handleDeleteBoard}
                                className='font-medium text-[0.813rem] leading-[1.438rem] text-custom-red'>Delete Board</button>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>

            <AnimatePresence>
                {isMobileMenuOpen && <MobileMenu setIsMobileMenuOpen={setIsMobileMenuOpen} setIsBoardFormOpen={setIsBoardFormOpen} />}
            </AnimatePresence>
        </header>
    )
}

export default Header