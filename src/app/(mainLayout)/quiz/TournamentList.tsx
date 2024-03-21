'use client'
import React, { useEffect, useState } from 'react';
import TournamentCard from './TournamentCard';

const TournamentList = () => {
    const initialTournaments = [
        {
            id: 1,
            imageUrl: '/images/doctor_strange_multiverse.webp',
            timerText: '00 : 55 : 02',
            title: 'Play Doctor Strange Quiz and Win upto 60k 🪙',
            usersPlaying: 210,
            entryCoins: 5,
            howToPlay: [
                "You got 90 seconds.", "Answer as many questions as you can.", "Entry Fees : 10"
            ]
        },
        {
            id: 2,
            imageUrl: '/images/genralgk.webp',
            timerText: '00 : 55 : 02',
            title: 'Check your GK & Win Upto 70000 Coins',
            usersPlaying: 430,
            entryCoins: 10,
            howToPlay: [
                "You got 90 seconds.", "Answer as many questions as you can.", "Entry Fees : 10"
            ]
        },
        {
            id: 3,
            imageUrl: '/images/harry_potter_quiz.webp',
            timerText: '01 : 26 : 28',
            title: 'Play Harry Potter Quiz & Win Upto 40000 Coins',
            usersPlaying: 351,
            entryCoins: 10,
            howToPlay: [
                "You got 90 seconds.", "Answer as many questions as you can.", "Entry Fees : 10"
            ]
        },
        {
            id: 4,
            imageUrl: '/images/aashram.webp',
            timerText: '01 : 51 : 52',
            title: 'Play AASHRAM Series & win Upto : 70,000 coins',
            usersPlaying: 324,
            entryCoins: 10,
            howToPlay: [
                "You got 90 seconds.", "Answer as many questions as you can.", "Entry Fees : 10"
            ]
        },
        {
            id: 5,
            imageUrl: '/images/bhool_bhulaiyaa_2_quiz.webp',
            timerText: '02 : 51 : 15',
            title: 'Play Bhool Bhulaiyaa 2 & win Upto : 20000 coins',
            usersPlaying: 409,
            entryCoins: 0,
            howToPlay: [
                "You got 90 seconds.", "Answer as many questions as you can.", "Entry Fees : 10"
            ]
        },
    ];

    const [tournaments, setTournaments] = useState(initialTournaments);

    useEffect(() => {
        const timer = setInterval(() => {
            setTournaments(prevTournaments => {
                return prevTournaments.map(tournament => {
                    const [hours, minutes, seconds] = tournament.timerText.split(' : ');

                    let remainingHours = parseInt(hours);
                    let remainingMinutes = parseInt(minutes);
                    let remainingSeconds = parseInt(seconds);

                    if (remainingSeconds > 0) {
                        remainingSeconds--;
                    } else {
                        if (remainingMinutes > 0) {
                            remainingMinutes--;
                            remainingSeconds = 59;
                        } else {
                            if (remainingHours > 0) {
                                remainingHours--;
                                remainingMinutes = 59;
                                remainingSeconds = 59;
                            }
                        }
                    }

                    const formattedTime = `${remainingHours.toString().padStart(2, '0')} : ${remainingMinutes.toString().padStart(2, '0')} : ${remainingSeconds.toString().padStart(2, '0')}`;

                    return { ...tournament, timerText: formattedTime };
                });
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className='mt-10'>
            {tournaments.map(tournament => (
                <TournamentCard
                    key={tournament.id}
                    imageUrl={tournament.imageUrl}
                    timerText={tournament.timerText}
                    title={tournament.title}
                    usersPlaying={tournament.usersPlaying}
                    entryCoins={tournament.entryCoins}
                    howToPlay={tournament.howToPlay}
                />
            ))}
        </div>
    );
};

export default TournamentList;

