const trace = (requestUrl, title, stack, message, extra) => {
    if (!isTest) {
        console.group(`TITLE --> ${title || ""}  CALL --> ${requestUrl || ""}  TIME --> ${new Date()}`);
        console.error(`RESPONSE_STACKTRACE => ${stack || ""} \nRESPONSE_MESSAGE => ${message || ""} \nEXTRA => ${extra || ""} \nERROR_STACKTRACE => ${new Error("Trace").stack || ""}\n\n\n`);
        console.groupEnd();
    }
};

const info = (title = "INFO", message) => {
    if (!isTest) {
        console.group(title);
        console.log(`${message} -- ${new Date()}`);
        console.groupEnd();
    }
};

const error = (title = "ERROR", message, stack) => {
    if (!isTest) {
        console.group(title);
        console.error(`${message} -- ${new Date()}`);
        console.error(stack);
        console.groupEnd();
    }
};

const isTest = process.env.NODE_ENV === "test";

export const LOGGER = {
    trace, info, error
};
