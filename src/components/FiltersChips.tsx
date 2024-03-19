import CommonHeaders from '@/components/CommonHeaders';
import React from 'react';
import Slider from 'react-slick';



const FiltersChips = ({ setDataFilter, dataFilter, header, setSelectTitlesFilter, data }: any) => {
    // Array containing data for each sports chip

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2
    };
    return (
        <>
            {(data.length > 0 && header) && <CommonHeaders text={header} color={"bg-[#4f46e5]"} />}
            <div className="slider-container">
                <Slider {...settings}>
                    {data.map((res: { imgSrc: any; text: any; }, index: any) => (
                        <FiltersChip key={index} dataFilter={dataFilter} setSelectTitlesFilter={setSelectTitlesFilter} setDataFilter={setDataFilter} imgSrc={res.imgSrc} text={res.text} />
                    ))}
                </Slider>
            </div>
        </>
    );
}



const FiltersChip = ({ imgSrc, text, setDataFilter, dataFilter, setSelectTitlesFilter }: any) => {
    return (
        <div className="my-2 px-2 cursor-pointer" onClick={() => {
            setDataFilter(text)
            setSelectTitlesFilter("")
        }}>
            <div className="flex h-12 w-16 justify-center">
                <div className="swiper-link-round min-w-[50px]">
                    <img className="rounded-full shadow-md h-12" src={imgSrc} alt={text} />
                </div>
            </div>
            <div className={`chip transition duration-300 ease inline-flex items-center justify-center w-16 h-5 mt-2 rounded-sm outline outline-1 dark:outline-gray-300 outline-gray-500 ${dataFilter === text ? "bg-gradient-to-l from-red-500 to-red-400 text-white" : "bg-white text-black"} `}>
                <p className="text-xs font-semibold line-clamp-1">{text}</p>
            </div>
        </div>
    );
}

export default FiltersChips;
