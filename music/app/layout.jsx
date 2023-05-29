import '@styles/globals.css';
import { Children } from 'react';

export const metadata ={
    title: "musicworld",
    description: 'discover new music'

}

const Rootlayout = () => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradinet'>

                </div>
            </div>
            <main className='app'>
                {children}
            </main>
        </body>
    </html>
  )
}

export default Rootlayout;