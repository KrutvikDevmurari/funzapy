import { FC, useEffect, useState } from 'react'
import StoriesCard from './StoriesCard'
import axios from 'axios'
import StoriesComponent from '@/components/Story'
import Spinner from '@/components/Loader'

interface StoriesListProps {
    toggleModal: any,
    selectSportsFilter: string,
    isOpen: boolean
}

const StoriesList: FC<StoriesListProps> = ({ toggleModal, selectSportsFilter, isOpen }: any) => {
    const [storiesData, setStoriesData] = useState<any>([])
    const [story, setstory] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        (async () => {
            setIsLoading(true)
            const response = await axios.get(`/api//stories/get?stories=${selectSportsFilter}`)
            setStoriesData(response.data.data)
            setIsLoading(false)
        })()
    }, [selectSportsFilter])

    return (
        <div className='grid grid-cols-2 gap-4 px-4 pt-2'>
            {isLoading ? <Spinner /> : storiesData?.map((res: { imageUrl: string; title: string, stories: any }) => {
                return (
                    <StoriesCard toggleModal={toggleModal} setstory={setstory} stories={res.stories} imageUrl={res.imageUrl} title={res.title} />
                )
            })}
            <StoriesComponent setStoriesData={setStoriesData} story={story} isOpen={isOpen} closeModal={toggleModal} />
        </div>
    )
}

export default StoriesList