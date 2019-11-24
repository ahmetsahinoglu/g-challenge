import { messages } from "./messages";
import { LOGGER } from "../helpers";

const status = {
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
};

const renderResponseBody = (res, status, code) => {
    return res.status(status).json({
        code: code,
        msg: messages[code]
    });
};

const MISSING_PARAMETERS = (req, res) => {
    LOGGER.trace(req.originalUrl, "MISSING_PARAMETERS", `Missing parameters for this operation ${req.originalUrl}`);
    renderResponseBody(res, status.BAD_REQUEST, 1);
};

const INVALID_PARAMETERS = (req, res) => {
    LOGGER.trace(req.originalUrl, "INVALID_PARAMETERS", `Invalid parameters for this operation ${req.originalUrl}`);
    renderResponseBody(res, status.BAD_REQUEST, 2);
};

const MIN_MAX_PROBLEM = (req, res) => {
    LOGGER.trace(req.originalUrl, "MIN_MAX_PROBLEM", `Min max problem this for operation ${req.originalUrl}`);
    renderResponseBody(res, status.BAD_REQUEST, 3);
};

const SOMETHING_WENT_WRONG = (req, res) => err => {
    LOGGER.trace(req.originalUrl, "SOMETHING_WENT_WRONG", err.stack || err, err.message || err);
    renderResponseBody(res, status.INTERNAL_SERVER_ERROR, 4);
};

export const exception = {
    MISSING_PARAMETERS, INVALID_PARAMETERS, MIN_MAX_PROBLEM, SOMETHING_WENT_WRONG
};
