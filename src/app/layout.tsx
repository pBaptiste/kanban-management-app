import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import ThemeContextProvider from '@/context/theme-context'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kanban Management App',
  description: 'Streamline your workflow with our powerful Kanban management app. Organize tasks, collaborate seamlessly, and boost productivity with visual boards, customizable columns, and drag-and-drop functionality. Stay in control of your projects, track progress, and manage deadlines effortlessly. Experience efficient task management like never before!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jakarta.className}>
        <ThemeContextProvider>
          {children}
        </ThemeContextProvider>
      </body>

    </html>
  )
}
