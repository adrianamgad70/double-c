import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { MyCard } from '@/components/component/MyCard'
import { MyHeader } from '@/components/component/Myheader'
import Sidebar from '@/components/component/sidebar'





const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'double c closthes store',
  description: 'wear ur own style',
}

 

export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={inter.className}>  {children} 
      <MyHeader />
      <header className='mt-4'>
      <MyCard /></header>
      <Sidebar />
      </body>
    </html>
  ) 
}

