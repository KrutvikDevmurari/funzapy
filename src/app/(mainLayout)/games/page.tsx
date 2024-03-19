import Header from '@/components/header'
import { FC } from 'react'
import GamesList from './GamesList'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return (
        <div className='pb-[200px]'>
            <Header />
            <GamesList />
        </div>
    )
}

export default page