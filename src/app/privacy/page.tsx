import { FC } from 'react'
import Header from './PrivacyHeader'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return <div className='min-h-screen bg-[url("/images/mainBackground.svg")]'>
        <Header />

    </div>
}

export default page