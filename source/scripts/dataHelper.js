/**
 * Takes a JSON object containing event-card data and returns
 * the stored data URL representing the image if it exists, 
 * else it returns a default image. 
 * @param {Object} data A JSON object containing event-card data
 * @returns {data url | image file} Data url or default image file
 */
 export function getImg(data) {
    if (data && data.eImg) {
        return data.eImg;
    }
    return "./images/no-image.png";
}

/**
 * Takes a JSON object containing event-card data and returns
 * the stored event title if it exists, else it returns an empty string.
 * @param {Object} data A JSON object containing event-card data
 * @returns {string} Event title string or empty string
 */
export function getTitle(data) {
    if (data && data.eTitle) {
        return data.eTitle;
    }
    return "";
}

/**
 * Takes a JSON object containing event-card data and returns
 * the stored event organizer if it exists, else it returns an empty string.
 * @param {Object} data A JSON object containing event-card data
 * @returns {string} Event organizer string or empty string
 */
export function getOrg(data) {
    if (data && data.eOrg) {
        return data.eOrg;
    }
    return "";
}

/**
 * Takes a JSON object containing event-card data and returns
 * the stored event location if it exists, else it returns an empty string.
 * @param {Object} data A JSON object containing event-card data
 * @returns {string} Event location string or empty string
 */
export function getLocation(data) {
    if (data && data.eMedium) {
        return data.eMedium;
    }
    return "";
}

/**
 * Takes a JSON object containing event-card data. If the start time exists, 
 * format the date to be more readable and time to 12-hour format and return.
 * Else return an empty string.
 * @param {Object} data A JSON object containing event-card data
 * @returns {string} Formatted event start date and time or empty string
*/
export function getStart(data) {
    if (data && data.startTime) {
        let startArr = data.startTime.split("T");
        let dateArray = startArr[0].split("-");
        let MMDDYYY = dateArray[1] + "-" + dateArray[2] + "-" + dateArray[0]
        return "Start: " + MMDDYYY + " Time: " + convertTime(startArr[1]);
    }
    return "";
}

/**
 * Takes a JSON object containing event-card data. If the end time exists, 
 * format the date to be more readable and time to 12-hour format and return.
 * Else return an empty string.
 * @param {Object} data A JSON object containing event-card data
 * @returns {string} Formatted event end date and time or empty string
*/
export function getEnd(data) {
    if (data && data.endTime) {
        let endArr = data.endTime.split("T");
        let dateArray = endArr[0].split("-");
        let MMDDYYY = dateArray[1] + "-" + dateArray[2] + "-" + dateArray[0]
        return "End: " + MMDDYYY + " Time: " + convertTime(endArr[1]);
    }
    return "";
}

/**
 * Takes a string representing time in 24-hour format and converts it into
 * 12-hour format.
 * @param {string} time A string representing time in 24-hour format
 * @returns {string} A string representing time in 12-hour format
*/
function convertTime(time) {
    let timeArr = time.split(":");
    var hourInt = parseInt(timeArr[0])
    var AMPM = "";
    if (hourInt > 12) {
        AMPM = "PM"
        hourInt = hourInt - 12;
    } else {
        AMPM = "AM"
    }
    return hourInt + ":" + timeArr[1] + " " + AMPM;
}