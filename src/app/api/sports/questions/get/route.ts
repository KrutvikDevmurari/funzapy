import { NextRequest, NextResponse } from 'next/server';
import SportsModel from '../../../../../models/sportModal';
import connectDB from '@/lib/dbConnection';
// Function to add multiple entries to the "sports" collection
export const GET = async (req: NextRequest, res: NextResponse) => {
    try {
        const id: any = req.nextUrl.searchParams.get('id')
        await connectDB()
        if (!id) {
            return NextResponse.json({ message: "Failure Id not found", data: [] }, { status: 404 })
        } else {
            const data = await SportsModel.find({ id: id.toString() })
            return NextResponse.json({ message: "Sucess", data: data }, { status: 200 })
        }
    } catch (error) {
        console.error('Error adding sports entries:', error);
        return NextResponse.json({ message: error }, { status: 500 })
    }
};



