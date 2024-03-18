import Link from 'next/link';
import React from 'react';

const BottomNavigation = () => {
    return (
        <div className="app-width fixed inset-x-0 bottom-0 z-50 w-[500px]">
            <div id="bottom-navigation"
                className="text-black mb-5 rounded-xl mx-5 shadow-lg shadow-gray-500/300 z-10 bg-amber-300 drop-shadow-2xl">
                <div id="tabs" className="flex justify-between">
                    <NavigationLink href="/web/quiz" tabClass="tab-home" text="Tournaments" svgContent={(
                        <img src="/images/menuicon2.svg" alt="Stories" className="inline-block mb-1" style={{ width: '25px', height: '25px' }} />
                    )} />

                    <NavigationLink href="/predictions" tabClass="tab-explore" text="Sports" svgContent={(
                        <img src="/images/menuicon2.svg" alt="Stories" className="inline-block mb-1" style={{ width: '25px', height: '25px' }} />
                    )} />

                    <NavigationLink href="/web/stories" tabClass="tab-account" text="Stories" svgContent={(
                        <>
                            <img src="/images/menuicon3.webp" alt="Stories" className="inline-block mb-1" style={{ width: '25px', height: '25px' }} />
                            <span className="absolute animate-ping inline-block w-2 h-2 bg-blue-600 rounded-full"></span>
                        </>
                    )} />

                    <NavigationLink href="/web/games" tabClass="tab-kategori" text="Games" svgContent={(
                        <img src="/images/menuicon4.svg" alt="Stories" className="inline-block mb-1" style={{ width: '25px', height: '25px' }} />
                    )} />
                </div>
            </div>
        </div>
    );
}

const NavigationLink = ({ href, tabClass, text, svgContent }: any) => {
    return (
        <Link href={href} className="w-full focus:text-teal-500 cursor-pointer hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
            {svgContent}
            <span className={`tab ${tabClass} block text-xs`}>{text}</span>
        </Link>
    );
}

export default BottomNavigation;
