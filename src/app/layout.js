import './globals.css'
import { Inter } from 'next/font/google'
import Navbar  from '@/Components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Guess Colors Earn Rewards',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <main className='w-10xl '>
          {children}
        </main>
      </body>
    </html>
  )
}
