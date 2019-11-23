const checkParamsCount = (req) => {
    const { startDate, endDate, minCount, maxCount } = req.body;
    return Object.keys(req.body).length === 4 && startDate && endDate && minCount && maxCount;
};

const checkParamsType = (req) => {
    const { startDate, endDate, minCount, maxCount } = req.body;

    const regExp = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;

    return typeof startDate === 'string' && startDate.match(regExp) &&
        typeof endDate === 'string' && endDate.match(regExp) &&
        typeof minCount === 'number' && typeof maxCount == 'number';
};

export const requestUtil = {
    checkParamsCount, checkParamsType
};



