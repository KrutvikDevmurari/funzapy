"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import PrivacyPolicy from './PrivacyPolicy';

function Header() {
    const [activeTab, setActiveTab] = useState("tab-us")
    const changeActiveTab = (event: any, tab: string) => {
        setActiveTab(tab)
    };

    return (
        <>
            <header className="sticky top-0 z-50 bg-amber-300 app-width flex-auto">
                <ul className="flex mb-0 list-none flex-wrap pt-3 pb-px flex-row">
                    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center cursor-pointer">
                        <div id="tab-us" className={`text-xs font-bold uppercase px-5 py-3 block leading-normal  border-b-2  ${activeTab === "tab-us" ? "border-[#4f46e5] text-[#4f46e5]" : " text-white"}`} onClick={(event) => changeActiveTab(event, 'tab-us')}>
                            <i className="fas fa-space-shuttle text-base mr-1"></i> Non india users
                        </div>
                    </li>
                    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center cursor-pointer">
                        <div id="tab-india" className={`text-xs font-bold uppercase px-5 py-3 block leading-normal  border-b-2  ${activeTab === 'tab-india' ? "border-[#4f46e5] text-[#4f46e5]" : " text-white"}`} onClick={(event) => changeActiveTab(event, 'tab-india')}>
                            <i className="fas fa-cog text-base mr-1"></i> India Users
                        </div>
                    </li>
                    <li>
                        <Link type="button" href="/quiz" className="text-black mt-2 float-right absolute mr-2 right-0 h-10 bg-white rounded-md p-2 inline-flex items-center justify-center hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </Link>
                    </li>
                </ul>
            </header>
            <div className='relative flex flex-col min-w-0 break-words w-full mb-6 rounded'>
                <div className='px-2 py-2 flex-auto'>
                    <div className='tab-content tab-space'>
                        <PrivacyPolicy activeTab={activeTab} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
