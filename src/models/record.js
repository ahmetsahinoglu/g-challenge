import mongoose from 'mongoose';

let recordSchema = new mongoose.Schema({
    createdAt: { type: Date },
    counts: { type: Array },
    key: { type: String },
    value: { type: String },
});

export const recordModel = () => {
    return mongoose.model('Record', recordSchema);
};

