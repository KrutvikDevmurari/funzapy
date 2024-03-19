import mongoose from 'mongoose';

// Define the schema
const storySchema = new mongoose.Schema({
    imageUrl: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
    },
    stories: [
        {
            image: String,
            text: String
        }
    ]
});

// Create a model from the schema
export default mongoose.models.stories || mongoose.model('stories', storySchema);