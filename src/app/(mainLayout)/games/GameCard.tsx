import React from 'react';

interface GameCard {
    imageUrl: string,
    title: string
}

const GameCard = ({ imageUrl, title }: GameCard) => {
    return (
        <div className="my-2 px-2 overflow-hidden sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4">
            <div className="h-24 w-24">
                <a href="https://www.funzapy.com/web/game/start/40">
                    <img className="rounded-lg shadow-md h-24 w-24" src={imageUrl} alt={title} />
                </a>
            </div>
            <p className="text-center w-24 text-slate-800 dark:text-slate-100 text-shadow-sm">{title}</p>
        </div>
    );
};

export default GameCard;
