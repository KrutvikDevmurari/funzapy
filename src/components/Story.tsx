import React, { useState } from "react";
import Modal from "react-modal";
import Stories from "react-insta-stories";
import { ChevronLeftIcon, ChevronRightIcon, PauseIcon, PlayIcon, ShareIcon, XMarkIcon } from "@heroicons/react/16/solid";



const StoriesComponent = ({ isOpen, story, closeModal }: any) => {
    const [isPaused, setIsPaused] = useState(false);
    const [currentStory, setCurrentStory] = useState(0);


    const stories = story.map((res: { image: string | undefined; text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }) => {
        return {
            content: () => (
                <div className="bg-salmon text-white p-8">
                    <h1>Hey All 👋</h1>
                    <img
                        className="max-w-full rounded"
                        src={res.image}
                        alt="Shivam's journey"
                    ></img>
                    <h4 className="mt-4">{res.text}</h4>
                </div>
            ),
        }
    })

    const handleNext = () => {
        if (currentStory < stories.length - 1) {
            setCurrentStory(currentStory + 1);
        }
    };

    const handlePrevious = () => {
        if (currentStory > 0) {
            setCurrentStory(currentStory - 1);
        }
    };

    const handlePause = () => {
        setIsPaused(true);
    };

    const handlePlay = () => {
        setIsPaused(false);
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={closeModal} className="modal h-screen" shouldCloseOnOverlayClick={true}>
            <div >
                <div className="stories flex justify-center">
                    <button className="story-button previous-button" onClick={handlePrevious} disabled={currentStory === 0}>
                        <ChevronLeftIcon className="h-6 w-6" />
                    </button>
                    <div className="mt-20 roudned-[50px] relative inline overflow-hidden"><Stories
                        loop
                        keyboardNavigation
                        defaultInterval={3000}
                        stories={stories}
                        // onStoryEnd={(s: any, st: any) => console.log("story ended", s, st)}
                        onAllStoriesEnd={(s: any, st: any) => {
                            closeModal()
                            setCurrentStory(0)
                        }}
                        // onStoryStart={(s: any, st: any) => console.log("story started", s, st)}
                        isPaused={isPaused}
                        width={456}
                        height={868}
                        currentIndex={currentStory}
                    />
                        <button onClick={closeModal} className="close-button absolute cursor-pointer top-[15px] z-[10000]  left-[10px]">
                            <XMarkIcon className="h-6 w-6 text-white " />
                        </button>
                        <div className="play-pause-container absolute top-[15px] cursor-pointer  z-[10000] text-white right-[40px]">
                            {isPaused ? (
                                <button className="play-button text-white " onClick={handlePlay}>
                                    <PlayIcon className="h-6 w-6 text-white " />
                                </button>
                            ) : (
                                <button className="pause-button text-white " onClick={handlePause}>
                                    <PauseIcon className="h-6 w-6 text-white " />
                                </button>
                            )}
                        </div>

                        <div className="absolute top-[15px] text-white cursor-pointer z-[10000] right-[10px]">
                            <ShareIcon className="h-6 w-6 text-white" />
                        </div>
                    </div>

                    <button className="story-button next-button" onClick={handleNext} disabled={currentStory === stories.length - 1}>
                        <ChevronRightIcon className="h-6 w-6" />
                    </button>
                </div>


            </div>
        </Modal>
    );
};

export default StoriesComponent;
