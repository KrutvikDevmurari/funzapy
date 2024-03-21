"use client"
import Link from 'next/link';
import React from 'react';

const TournamentHeader: React.FC<{ tournamentName: string }> = ({ tournamentName }) => {
    return (
        <div className="flex py-4 align-middle min-w-full bg-indigo-500 h-32 rounded-b-3xl">
            <Link href="#" className="link backarrow ml-2">
                <img className="lazy loaded" width="32" height="32" data-src="/favicon/back.png" alt="Back" loading="lazy" src="/images/back.png" data-ll-status="loaded" />
            </Link>
            <div className="w-full text-xs font-bold text-primary-50 text-center" id="tname">
                {tournamentName}
            </div>
            <Link href="#" id="share" className="mr-2">
                <img className="lazy loaded" width="32" height="32" data-src="/favicon/share.png" alt="Back" loading="lazy" src="/images/share.png" data-ll-status="loaded" />
            </Link>
        </div>
    );
};

export default TournamentHeader;