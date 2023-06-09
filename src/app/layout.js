import Header from './components/Header'
import './globals.css'
import { Inter, Mulish } from 'next/font/google'


const mulish = Mulish({
  weights: [300 ,400, 600],
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
