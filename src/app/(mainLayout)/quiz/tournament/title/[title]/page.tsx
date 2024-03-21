'use client'
import Header from '@/components/header'
import { FC } from 'react'
import HowToPlayComponent from './HowToPlayComponent';


interface pageProps {

}

const page: FC<pageProps> = ({ }) => {

    return <div className='mb-[200px] min-h-screen bg-gray-100'>
        <Header />
        <HowToPlayComponent />
    </div>
}

export default page