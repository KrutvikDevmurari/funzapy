'use client'
import Spinner from '@/components/Loader';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

const MathcWiseFilter = ({ selectSportsFilter, setSelectTitlesFilter, selectTitlesFilter }: any) => {
    const [titles, setTitles] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        (async () => {
            setIsLoading(true)
            const getData = await axios.get(`/api/sports/get?sport=${selectSportsFilter}`)
            const uniqueTitlesSet: any = new Set(getData.data.data.map((res: { title: any; }) => res.title));
            const uniqueTitles: any = [...uniqueTitlesSet];
            setTitles(uniqueTitles)
            setIsLoading(false)
        })()
    }, [selectSportsFilter])
    const settings = {
        key: 0,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
    };

    return (
        <div className="slider-container">
            {isLoading ? <Spinner /> : titles.length > 0 && <Slider {...settings}>
                {titles?.map((prediction: any) => (
                    <div
                        key={prediction}
                        onClick={() => setSelectTitlesFilter(prediction)}
                        className={`subcat chips cs15 inline-flex max-w-[240px]  items-center outline-gray-500 justify-center h-5 my-2 ml-2 px-1 shadow rounded-sm outline outline-1 dark:outline-gray-300 whitespace-nowrap cursor-pointer  transition duration-300 ease  ${selectTitlesFilter === prediction ? "bg-gradient-to-l from-red-500 to-red-400 text-white" : "text-gray-500 "}`}
                    >
                        {prediction}
                    </div>
                ))}
            </Slider>}
        </div>
    );
}

export default MathcWiseFilter;
