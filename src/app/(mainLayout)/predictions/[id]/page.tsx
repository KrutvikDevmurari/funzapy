import React from 'react'
import MatchHeader from './MatchHeader'
import MainComponent from './Questions'

const page = () => {
    return (
        <div className='flex flex-col gap-[10px] pb-[200px]'>
            <MatchHeader />
            <MainComponent />
        </div>
    )
}

export default page