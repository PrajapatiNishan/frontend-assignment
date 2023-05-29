import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';
import { Children } from 'react';

export const metadata ={
    title: "musicworld",
    description: 'discover new music'

}

const Rootlayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradinet'>

                </div>
            </div>
            <main className='app'>
                <Nav />
                {children}
            </main>
        </body>
    </html>
  )
}

export default Rootlayout;