import Link from 'next/link';
import React from 'react';

interface GameCard {
    imageUrl: string,
    title: string,
    key: any
}

const GameCard = ({ imageUrl, title, key }: GameCard) => {
    return (
        <div key={key} className="my-2 px-2 overflow-hidden sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4">
            <div className="h-24 w-24">
                <Link href="">
                    <img className="rounded-lg shadow-md h-24 w-24" src={imageUrl} alt={title} />
                </Link>
            </div>
            <p className="text-center w-24 text-slate-800 dark:text-slate-100 text-shadow-sm">{title}</p>
        </div>
    );
};

export default GameCard;
