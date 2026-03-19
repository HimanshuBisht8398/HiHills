import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import WhatsappChatButton from './components/WhatsappChatButton';


export const metadata = {
  title: 'Hi Hills',
  description: 'Your Ultimate Guide to Uttarakhand: Explore, Experience, and Embrace the Himalayas with Hi Hills Travel.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <WhatsappChatButton />
        <Footer />
      </body>
    </html>
  )
}
