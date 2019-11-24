import express from 'express';
import cors from "cors";
import bodyParser from 'body-parser';
import morgan from "morgan";
import fs from "fs";
import path from "path";
import { connectDB } from "db";
import { listRecords } from "services";
import { LOGGER } from "./heplers";

export const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;
const router = express.Router();

let accessLogStream = fs.createWriteStream(path.join(__dirname, '../audit.log'), { flags: 'a' });
app.use(morgan('combined', { stream: accessLogStream }));

connectDB(process.env.MONGO_URL)
    .then(() => {
        LOGGER.info(undefined, "Connected to DB!");
    })
    .catch(err => {
        LOGGER.error("DB", "Could not connected to the DB!", err);
        throw new Error(err);
    });

app.use('/v1', router);
router.post('/record-list', listRecords);

export const server = app.listen(port, () => {
    LOGGER.info(undefined, `Server started on port :${port}`);
});



