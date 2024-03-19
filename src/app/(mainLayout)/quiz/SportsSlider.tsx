'use client'

import CategoryHeader from '@/components/categoryHeader'
import { FC, useEffect, useState } from 'react'
import Slider from 'react-slick';
import SportsCard from '@/components/SportsCard';
import axios from 'axios';
import Spinner from '@/components/Loader';

interface SportsSliderProps {

}

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1
};

const SportsSlider: FC<SportsSliderProps> = ({ }) => {
    const [MatchData, setMatchData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        (async () => {
            setIsLoading(true)
            const getData = await axios.get(`/api/sports/get?sport=Football`)
            setMatchData(getData.data.data)
            setIsLoading(false)
        })()
    }, [])
    return <div>
        {!isLoading ? (MatchData.length > 0 ? <>
            <CategoryHeader category="Sports Predictions" url="/predictions" />
            <Slider {...settings}>
                {MatchData.map((res: { imgSrc: any; text: any; }) => (
                    <SportsCard matchData={res} color={'bg-[#fed7aa]'} />
                ))}
            </Slider></> : <p>No Data Found</p>) : <Spinner />}
    </div>
}

export default SportsSlider