import Header from '@/components/header'
import { FC } from 'react'
import SportsSlider from './SportsSlider'
import TournamentList from './TournamentList'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return <div className='mb-[200px]'>
        <Header />
        <SportsSlider />
        <TournamentList />
    </div>
}

export default page