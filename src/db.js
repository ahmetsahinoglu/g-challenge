import mongoose from 'mongoose';
import { recordModel } from "./models";

export const connectDB = async (url) => {
    return await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
};

export const disconnectDB = (done) => {
    return mongoose.disconnect(done);
};

export const listRecordsByGivenParameters = (startDate, endDate, minCount, maxCount) => {
    return recordModel().aggregate([
        {
            $match: {
                $and: [{ "createdAt": { $gte: startDate } }, { "createdAt": { $lte: endDate } }]
            },
        },
        {
            $project: {
                key: 1, createdAt: 1, _id: 0,
                totalCount: { $sum: '$counts' },
            }
        },
        {
            $match: {
                $and: [{ "totalCount": { $gte: minCount } }, { "totalCount": { $lte: maxCount } }]
            }
        }
    ]).exec();
};
