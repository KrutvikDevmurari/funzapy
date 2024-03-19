import Header from '@/components/header'
import { FC } from 'react'
import SportsSlider from './SportsSlider'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return <div>
        <Header />
        <SportsSlider />
    </div>
}

export default page