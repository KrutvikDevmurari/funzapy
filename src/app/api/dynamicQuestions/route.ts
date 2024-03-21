import { NextRequest, NextResponse } from 'next/server';
import SportsModel from '../../../models/sportModal';
import connectDB from '@/lib/dbConnection';
// Function to add multiple entries to the "sports" collection
export const GET = async (req: NextRequest, res: NextResponse) => {
    try {
        const sportsName: any = req.nextUrl.searchParams.get('sport')
        const title: any = req.nextUrl.searchParams.get('title')
        await connectDB()
        if (!sportsName || sportsName === "All") {
            const data = await SportsModel.find()
            return NextResponse.json({ message: "Sucess", data: data }, { status: 200 })
        } else if (sportsName && !title) {
            const data = await SportsModel.find({ sport: sportsName.toString() })
            return NextResponse.json({ message: "Sucess", data: data }, { status: 200 })
        } else if (sportsName && title) {
            const data = await SportsModel.find({ sport: sportsName.toString(), title: `${title.toString()}` })
            return NextResponse.json({ message: "Sucess", data: data }, { status: 200 })
        }

    } catch (error) {
        console.error('Error adding sports entries:', error);
        return NextResponse.json({ message: error }, { status: 500 })
    }
};



