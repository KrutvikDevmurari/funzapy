import { NextRequest, NextResponse } from 'next/server';
import storeisModal from '../../../../models/storeisModal';
import connectDB from '@/lib/dbConnection';
// Function to add multiple entries to the "sports" collection
export const GET = async (req: NextRequest, res: NextResponse) => {
    try {
        const storiesName: any = req.nextUrl.searchParams.get('stories')
        await connectDB()
        if (!storiesName) {
            const data = await storeisModal.find()
            return NextResponse.json({ message: "Sucess", data: data }, { status: 200 })
        } else {
            const data = await storeisModal.find({ type: storiesName.toString() })
            return NextResponse.json({ message: "Sucess", data: data }, { status: 200 })
        }
    } catch (error) {
        console.error('Error adding sports entries:', error);
        return NextResponse.json({ message: error }, { status: 500 })
    }
};



