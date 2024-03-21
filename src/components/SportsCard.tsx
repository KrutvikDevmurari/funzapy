"use client"
import React from 'react';
import { useRouter } from 'next/navigation'


const SportsCard = ({ matchData, color }: any) => {
    const router = useRouter()
    return (
        <div key={matchData.id} className="flex m-3 bg-transparent shadow-lg relative drop-shadow-lg h-32 cursor-pointer" onClick={() => router.push(`/predictions/${matchData.id}`, { scroll: false })}>
            <div>
                <img
                    alt={matchData.title}
                    className="lazy absolute brightness-50 z-0 fixtureimg h-32 rounded-md w-full loaded"
                    data-src={matchData.image}
                    loading="lazy"
                    src={matchData.image}
                    data-ll-status="loaded"
                />

                <div className="absolute bg-black opacity-30 z-0 fixtureimg h-32 rounded-md w-full"></div>

                <div className="absolute w-full grid grid-cols-3 justify-center">
                    <div className="absolute text-white text-xs m-2 ">
                        <img
                            className="mr-1"
                            width="15px"
                            height="15px"
                            src={matchData.sportIcon}
                            alt={matchData.sport}
                        />
                        <div className="transform -rotate-180 mt-2" style={{ writingMode: 'vertical-lr' }}>
                            {matchData.sport}
                        </div>
                    </div>
                    <div className="flex flex-col justify-center text-white ml-5 mt-2">
                        <img
                            className="lazy absolute top-8 w-16 h-16 ml-3 loaded"
                            alt={matchData.team1}
                            data-src={matchData.team1Logo}
                            loading="lazy"
                            src={matchData.team1Logo}
                            data-ll-status="loaded"
                        />
                    </div>
                    <div className="col">
                        <div className="relative top-6 text-yellow-300 text-shadow-md text-xl text-center w-full font-bold">
                            <div className="nameacr line-clamp-1">{matchData.team1}</div>
                            <div>VS</div>
                            <div className="nameacr line-clamp-1">{matchData.team2}</div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-end text-white mr-5 text-right mt-2">
                        <img
                            className="lazy absolute top-8 w-16 h-16 float-right right-0 mr-3 loaded"
                            alt={matchData.team2}
                            data-src={matchData.team2Logo}
                            loading="lazy"
                            src={matchData.team2Logo}
                            data-ll-status="loaded"
                        />
                    </div>
                </div>

                <div className="text-center w-full text-white absolute top-0 text-shadow-md line-clamp-1">{matchData.title}</div>
                <div className="absolute w-full flex justify-center top-28">
                    <div className={`${color !== undefined ? `${color} text-black` : " bg-[#818cf8] text-white"} rounded-sm px-2  shadow text-sm text-shadow-sm`}>
                        <span className="timerdiv" id={`timer${matchData.id}`} >{matchData.date}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SportsCard;
