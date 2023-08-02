import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <ToastContainer />
        <Navbar />
        <div className='min-h-[90vh]'>

        {children}
        </div>
        <Footer />
        </body>
    </html>
  )
}
