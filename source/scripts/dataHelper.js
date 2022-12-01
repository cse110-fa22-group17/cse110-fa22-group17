/**
 * Get the image of event.
 * 
 * Local storage only is able to store strings.
 * It is not possible to directly convert a File object into a string using JSON.stringify (it returns {}).
 * In planPage.html the file submission is not included in the event-form to prevent immediate string conversion.
 * Need to convert File object to data url first, then it can be stringifyied.
*/
export function getImg(data) {
    if (data && data.eImg) {
        return data.eImg;
    }
    return "./images/no-image.png";
}

/**
 * Get the title of event.
*/
export function getTitle(data) {
    if (data && data.eTitle) {
        return data.eTitle;
    }
    return "";
}

/**
 * Get the organizer of event.
*/
export function getOrg(data) {
    if (data && data.eOrg) {
        return data.eOrg;
    }
    return "";
}

/**
 * Get the start of event
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
 * Get the end of event
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
 * Get the location of event
*/
export function getLocation(data) {
    if (data && data.eMedium) {
        return data.eMedium;
    }
    return "";
}

/**
 * Helper method to convert 24 Hour time to 12 Hour
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