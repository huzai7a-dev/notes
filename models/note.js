import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String,
        min: 3,
        max:255
    },
    description: {
        required: true,
        type: String,
        min: 3,
        max:255
    },
    status: {
        type: String,
        default:'note'
    }
})

const Note = mongoose.model('Note', noteSchema);

export default Note