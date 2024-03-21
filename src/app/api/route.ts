import { NextResponse } from 'next/server';
import SportsModel from '../../models/sportModal';
import connectDB from '@/lib/dbConnection';
// Function to add multiple entries to the "sports" collection
export const GET = async () => {
    try {
        await connectDB()
        const entries = [
            {
                id: 1,
                link: 'https://www.funzapy.com/web/predict/61505',
                image: 'https://rcg.realgames.pro/images/fixtures/bg_1.webp',
                sportIcon: '/images/20210324144000013.webp',
                sport: 'Football',
                team1: 'TRAU FC',
                team1Logo: 'https://rcg.realgames.pro/images/teams/trau_fc_fb.png',
                team2: 'Rajasthan United',
                team2Logo: 'https://rcg.realgames.pro/images/teams/rajasthan_united_fb.jpeg',
                title: 'INDIA I-League -2024',
                date: '2024-03-15 11:00:00',
                questions: [
                    {
                        question: "Q1. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q2. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q3. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q4. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q5. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q6. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                ]
            },
            {
                id: 2,
                link: 'https://www.funzapy.com/web/predict/61695',
                image: 'https://rcg.realgames.pro/images/fixtures/bg_2.webp',
                sportIcon: '/images/20211026160500031760.webp',
                sport: 'Rugby',
                team1: 'Rebels',
                team1Logo: 'https://rcg.realgames.pro/images/teams/rebels_r.png',
                team2: 'Reds',
                team2Logo: 'https://rcg.realgames.pro/images/teams/reds_r.png',
                title: 'WORLD: SUPER RUGBY',
                date: '2024-03-15 08:35:00',
                questions: [
                    {
                        question: "Q1. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q2. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q3. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q4. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q5. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q6. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                ]
            },
            {
                id: 3,
                link: 'https://www.funzapy.com/web/predict/61619',
                image: 'https://rcg.realgames.pro/images/fixtures/r2.webp',
                sportIcon: '/images/20210519140300040.webp',
                sport: 'Baseball',
                team1: 'Chunichi Dragons',
                team1Logo: 'https://rcg.realgames.pro/images/teams/chunichi_dragons_bb.png',
                team2: 'Hanshin Tigers',
                team2Logo: 'https://rcg.realgames.pro/images/teams/hanshin_tigers_bb.png',
                title: 'JAPAN: NPB',
                date: '2024-03-15 09:00:00',
                questions: [
                    {
                        question: "Q1. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q2. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q3. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q4. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q5. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q6. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                ]
            },
            {
                id: 4,
                link: 'https://www.funzapy.com/web/predict/61620',
                image: 'https://rcg.realgames.pro/images/fixtures/r2.webp',
                sportIcon: '/images/20210519140300040.webp',
                sport: 'Baseball',
                team1: 'Fukuoka S. Hawks',
                team1Logo: 'https://rcg.realgames.pro/images/teams/fukuoka_s_hawks_bb.png',
                team2: 'Seibu Lions',
                team2Logo: 'https://rcg.realgames.pro/images/teams/seibu_lion_bb.png',
                title: 'JAPAN: NPB',
                date: '2024-03-15 09:00:00',
                questions: [
                    {
                        question: "Q1. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q2. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q3. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q4. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q5. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q6. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                ]
            },
            {
                id: 5,
                link: 'https://www.funzapy.com/web/predict/61696',
                image: 'https://rcg.realgames.pro/images/fixtures/bg_2.webp',
                sportIcon: '/images/20211026160500031760.webp',
                sport: 'Rugby',
                team1: 'Western Force',
                team1Logo: 'https://rcg.realgames.pro/images/teams/western_force_r.png',
                team2: 'Moana Pasifika',
                team2Logo: 'https://rcg.realgames.pro/images/teams/moana_pasifika_r.png',
                title: 'WORLD: SUPER RUGBY',
                date: '2024-03-15 11:00:00',
                questions: [
                    {
                        question: "Q1. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q2. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q3. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q4. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q5. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q6. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                ]
            },
            {
                id: 6,
                link: 'https://www.funzapy.com/web/predict/61478',
                image: 'https://rcg.realgames.pro/images/fixtures/BG8.webp',
                sportIcon: '/image/image/20210428110500020.webp',
                sport: 'Basketball',
                team1: 'Darussafaka',
                team1Logo: 'https://rcg.realgames.pro/images/teams/darussafaka_bab.png',
                team2: 'Samsunspor',
                team2Logo: 'https://rcg.realgames.pro/images/teams/samsunspor_bab.png',
                title: 'TURKEY : Super Lig : 2024',
                date: '2024-03-15 15:00:00',
                questions: [
                    {
                        question: "Q1. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q2. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q3. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q4. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q5. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q6. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                ]
            },
            {
                id: 7,
                link: 'https://www.funzapy.com/web/predict/61489',
                image: 'https://rcg.realgames.pro/images/fixtures/bg_4.webp',
                sportIcon: '/image/image/20210324144000013.webp',
                sport: 'Football',
                team1: 'Ben Aknoun',
                team1Logo: 'https://rcg.realgames.pro/images/teams/ben_aknoun_fb.png',
                team2: 'Magra',
                team2Logo: 'https://rcg.realgames.pro/images/teams/magra_fb.png',
                title: 'ALGERIA: LIGUE 1',
                date: '2024-03-15 14:30:00',
                questions: [
                    {
                        question: "Q1. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q2. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q3. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q4. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q5. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q6. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                ]
            },
            {
                id: 8,
                link: 'https://www.funzapy.com/web/predict/61505',
                image: 'https://rcg.realgames.pro/images/fixtures/bg_1.webp',
                sportIcon: '/image/image/20210324144000013.webp',
                sport: 'Football',
                team1: 'TRAU FC',
                team1Logo: 'https://rcg.realgames.pro/images/teams/trau_fc_fb.png',
                team2: 'Rajasthan United',
                team2Logo: 'https://rcg.realgames.pro/images/teams/rajasthan_united_fb.jpeg',
                title: 'INDIA I-League -2024',
                date: '2024-03-15 11:00:00',
                questions: [
                    {
                        question: "Q1. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q2. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q3. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q4. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q5. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q6. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                ]
            },
            {
                id: 9,
                link: 'https://www.funzapy.com/web/predict/61647',
                image: 'https://rcg.realgames.pro/images/fixtures/r2.webp',
                sportIcon: '/image/image/20210519140300040.webp',
                sport: 'Baseball',
                team1: 'Tampa Bay Rays',
                team1Logo: 'https://rcg.realgames.pro/images/teams/tampa_bay_rays_bb.png',
                team2: 'Baltimore Orioles',
                team2Logo: 'https://rcg.realgames.pro/images/teams/baltimore_orioles_bb.png',
                title: 'USA: MLB',
                date: '2024-03-15 17:05:00',
                questions: [
                    {
                        question: "Q1. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q2. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q3. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q4. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q5. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q6. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                ]
            },
            {
                id: 10,
                link: 'https://www.funzapy.com/web/predict/61487',
                image: 'https://rcg.realgames.pro/images/fixtures/volleyball.webp',
                sportIcon: '/image/image/20210720152000059535.webp',
                sport: 'Volleyball',
                team1: 'Belchatow',
                team1Logo: 'https://rcg.realgames.pro/images/teams/belchatow_vb.png',
                team2: 'GKS Katowice',
                team2Logo: 'https://rcg.realgames.pro/images/teams/gks_katowice_vb.png',
                title: 'POLAND: PLUSLIGA - 2024',
                date: '2024-03-15 16:30:00',
                questions: [
                    {
                        question: "Q1. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q2. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q3. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q4. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q5. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                    {
                        question: "Q6. Which team will score more Shots on Goal ?",
                        options: [
                            { alt: "404285", text: "Rajasthan United" },
                            { alt: "404285", text: "TRAU FC" },
                            { alt: "404285", text: "both equal" }
                        ]
                    },
                ]
            },
        ];
        // Use Promise.all() to concurrently add all entries
        const savedEntries = await Promise.all(entries.map(async (entryData: any) => {
            // Create a new document using the provided data
            const newEntry = await SportsModel.create(entryData)
            await newEntry.save();
            // Save the new document to the database

        }));
        // const newEntry: any = await SportsModel.insertMany(entries)


        return NextResponse.json({ message: "Sucess" }, { status: 200 })
    } catch (error) {
        console.error('Error adding sports entries:', error);
        return NextResponse.json({ message: error }, { status: 500 })
    }
};

// Array containing the entries you provided


