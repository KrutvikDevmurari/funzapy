import { FC } from 'react'
import CongratsScreen from './CongratsScreen'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return <div className='min-h-screen pt-5 bg-[url("/images/mainBackground.svg")]'>
        <CongratsScreen />
    </div>
}

export default page