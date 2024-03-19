import React from 'react';

interface StoriesCard {
    imageUrl: string,
    title: string,
    toggleModal: any,
    stories: any,
    setstory: any
}

const StoriesCard = ({ imageUrl, title, toggleModal, stories, setstory }: StoriesCard) => {
    return (
        <div className="relative cursor-pointer" onClick={() => {
            toggleModal()
            setstory(stories)
        }}>
            <img
                alt={title}
                className="lazy object-cover w-auto h-auto loaded"
                data-src={imageUrl}
                loading="lazy"
                src={imageUrl}
                data-ll-status="loaded"
            />
            <div className="bg-gradient-to-t from-black via-transparent to-transparent  p-2 absolute w-full inset-x-0 bottom-0 h-32"></div>
            <div className="p-2 absolute w-full inset-x-0 bottom-0">
                <div className="bottom-0 text-white text-shadow-lg text-sm line-clamp-2 pb-0 pr-2">
                    {title}
                </div>
            </div>
        </div>
    );
}

export default StoriesCard;
