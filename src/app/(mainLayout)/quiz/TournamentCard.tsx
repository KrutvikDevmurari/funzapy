import { setquizState } from '@/lib/features/quizSlice';
import { useAppDispatch } from '@/lib/store';
import Link from 'next/link';
import React from 'react';

const TournamentCard = ({ imageUrl, timerText, title, usersPlaying, entryCoins, howToPlay }: any) => {
    const dispatch = useAppDispatch()

    return (
        <div className="flex m-5 bg-white dark:text-slate-100 dark:bg-slate-900 shadow-lg rounded-lg relative">
            <div className="absolute animate-pulse bg-green-600 text-gray-100 px-2 py-1 text-xs font-bold shadow-xl -top-3 -right-3">
                Live
            </div>

            <div className="flex w-40 bg-cover bg-landscape relative -top-3 -left-3">
                <img alt={title} className="lazy rounded-md drop-shadow-2xl loaded" src={imageUrl} />
            </div>

            <div className="w-2/3">
                <p className="text-gray-600 dark:text-slate-300 text-xs">
                    <span className="singleline timerdiv singlelineText">Winner declaires in {timerText}</span>
                </p>

                <Link href={`/quiz/tournament/title/${title}`} onClick={() => { dispatch(setquizState(howToPlay)) }}>
                    <h1 className="text-gray-900 dark:text-slate-100 font-bold text-md line-clamp-2">{title}</h1>
                </Link>

                <div className="flex mt-1 items-center text-xs">
                    <div className="animate-ping w-2 h-2 align-middle mr-2 bg-green-400 rounded-full"></div>
                    {usersPlaying} Users Playing
                </div>

                <div className="flex flex-row justify-between items-center my-2">
                    <div className="flex text-shadow">
                        <img height="30px" width="30px" className="-ml-3" src="/images/coin.gif" alt="Coin" />
                        <div className="place-content-center text-gray text-xs ">
                            <span className="align-middle">Entry : {entryCoins} Coins</span>
                        </div>
                    </div>
                    <div>
                        <Link onClick={() => { dispatch(setquizState(howToPlay)) }} href={`/quiz/tournament/title/${title}`} className="bg-amber-500 uppercase py-1 px-2 rounded-sm text-white dark:text-black text-sm font-bold mr-2 border-b-2 border-primary-500">
                            Play
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TournamentCard;
