'use client'

import React from 'react';

const TabMenu = () => {
    return (
        <ul className="flex mb-0 list-none flex-wrap flex-row w-full">
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <div className="text-xs cursor-pointer font-bold uppercase px-5 py-3 text-[#eab308] block leading-normal border-b-2 border-[#eab308]">
                    <i className="fas fa-space-shuttle text-base mr-1"></i> Predictions
                </div>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <div className="text-xs font-bold cursor-pointer uppercase px-5 py-3 block leading-normal text-gray-300">
                    <i className="fas fa-cog text-base mr-1"></i> My Matches
                </div>
            </li>
        </ul>
    );
};

export default TabMenu;
