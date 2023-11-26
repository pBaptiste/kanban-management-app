"use client"
import React, { createContext, useContext, useState } from 'react'

type ThemeContextProviderProps = {
    children: React.ReactNode
}

type Theme = 'dark' | 'light'

type ThemeContext = {
    theme: Theme,
    setTheme: React.Dispatch<React.SetStateAction<Theme>>
}

export const ThemeContext = createContext<ThemeContext | null>(null)

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
    const [theme, setTheme] = useState<Theme>('dark')

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div className={`${theme === 'dark' && 'dark'}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider

export const useThemeContext = () => {
    const context = useContext(ThemeContext)

    if (!context) {
        throw new Error('useThemeContext must be used within a ThemeContextProvider')
    }

    return context
}