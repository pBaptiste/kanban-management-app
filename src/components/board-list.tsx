"use client"
import React, { useState, useEffect } from 'react'
import { getBoards } from '@/app/actions'
import { ImSpinner2 } from "react-icons/im";

type Props = {
    setIsBoardFormOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const BoardList = ({ setIsBoardFormOpen }: Props) => {
    const [boards, setBoards] = useState<any[]>([])
    const [loading, setLoading] = useState(true);
    const [activeBoardId, setActiveBoardId] = useState<string>('clpd750q1000293r0egzdmrwt')

    const handleClick = (e: any) => {
        // setActiveBoardName(e.target.innerText)
        setActiveBoardId(e.target.id)
    }

    useEffect(() => {
        const fetchBoards = async () => {
            setLoading(true);
            const fetchedBoards = await getBoards(); // Call the server action `getBoards()`
            setBoards(fetchedBoards); // Update the state with the fetched boards data
            setLoading(false);
        };

        fetchBoards();
    }, [])

    return (
        <ul className="flex flex-col pr-5 ">
            {loading && <ImSpinner2 className="animate-spin text-very-dark-grey dark:text-white text-xl mx-auto" />}

            {boards?.map(board => (
                <li key={board.id}>
                    <button onClick={handleClick}
                        id={board.id}

                        className={`group flex gap-3 items-center font-bold text-[0.938rem] leading-[1.188rem] w-full py-[0.938rem] pl-6 lg:pl-8 hover:bg-main-purple hover:bg-opacity-10 hover:text-main-purple dark:hover:bg-white rounded-r-[100px] ${activeBoardId === board.id ? 'bg-main-purple text-white' : 'text-medium-grey'} transition duration-00`}>
                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" className={`group-hover:fill-main-purple ${activeBoardId === board.id ? 'fill-[#fff]' : 'fill-[#828FA3]'} transition duration-200`}>
                            <path
                                d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z" />
                        </svg>
                        {board.name}</button>
                </li>
            ))}

            <li>
                <button onClick={() => setIsBoardFormOpen(true)}
                    className="flex gap-3 items-center font-bold text-[0.938rem] leading-[1.188rem] text-main-purple pl-6 lg:pl-8 py-[0.938rem]">
                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" className="fill-[#635FC7]">
                        <path
                            d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z" />
                    </svg> + Create New Board
                </button>
            </li>
        </ul>
    )
}

export default BoardList