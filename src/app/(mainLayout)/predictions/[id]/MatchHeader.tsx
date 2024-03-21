'use client'
import React from 'react';
import { useRouter } from 'next/navigation'

const MatchHeader = () => {
    const router = useRouter()
    return (
        <div className="flex w-full h-40">
            <div className="link backarrow ml-2 absolute mt-2 z-10" onClick={router.back}>
                <img className="lazy loaded" width="28" height="28" data-src="/images/back.png" alt="Back" loading="lazy" src="/images/back.png" data-ll-status="loaded" />
            </div>
            <img className="absolute brightness-50 w-full z-0 h-40" src="https://rcg.realgames.pro/images/fixtures/bg_1.webp" alt="Background" />

            <img className="flex relative top-8  w-16 h-16 ml-3" src="https://rcg.realgames.pro/images/teams/trau_fc_fb.png" alt="Team 1" />

            <div className="grow text-center w-full text-white relative top-10">
                INDIA I-League -2024
                <div className="text-amber-400 text-center shadow drop-shadow-sm">Predict Now</div>
            </div>

            <img className="flex top-8 relative w-16 h-16 float-right right-0 mr-3" src="https://rcg.realgames.pro/images/teams/rajasthan_united_fb.jpeg" alt="Team 2" />
        </div>
    );
}

export default MatchHeader;
