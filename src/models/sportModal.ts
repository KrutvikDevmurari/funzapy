import mongoose from 'mongoose';

// Define schema for the sports document
const sportsSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    link: { type: String, required: true },
    image: { type: String, required: true },
    sportIcon: { type: String, required: true },
    sport: { type: String, required: true },
    team1: { type: String, required: true },
    team1Logo: { type: String, required: true },
    team2: { type: String, required: true },
    team2Logo: { type: String, required: true },
    title: { type: String, required: true },
    date: { type: String, required: true },
    questions: [{
        question: { type: String, required: true },
        options: [
            {
                alt: { type: String, required: true },
                text: { type: String, required: true }
            }
        ]
    }]
});


export default mongoose.models.sports || mongoose.model('sports', sportsSchema);


