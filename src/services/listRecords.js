import { LOGGER, requestUtil } from "../helpers";
import { exception, messages } from "../exceptions";
import { listRecordsByGivenParameters } from "../db";

export const listRecords = (req, res) => {
    const { startDate, endDate, minCount, maxCount } = req.body;

    if (!requestUtil.checkParamsCount(req)) {
        return exception.MISSING_PARAMETERS(req, res);
    }
    if (!requestUtil.checkParamsType(req)) {
        return exception.INVALID_PARAMETERS(req, res);
    }

    if (minCount > maxCount) {
        return exception.MIN_MAX_PROBLEM(req, res);
    }

    const formattedStartDate = new Date(startDate);
    const formattedEndDate = new Date(endDate);

    listRecordsByGivenParameters(formattedStartDate, formattedEndDate, minCount, maxCount)
        .then((result) => {
            LOGGER.info(undefined, "Success to get records.");
            let code = 0;
            return res.status(200).send({ record: result, code, msg: messages[code] })
        }).catch(exception.SOMETHING_WENT_WRONG(req, res));

};