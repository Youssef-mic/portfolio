import './globals.css'
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: '300' })

export const metadata = {
  title: 'Youssef Micheal',
  description: 'Web & C++ developer young, ambitios and practical.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>{children}</body>
    </html>
  )
}
