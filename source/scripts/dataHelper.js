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
        return data.startTime;
    }
    return "";
}

/**
 * Get the end of event
*/
export function getEnd(data) {
    if (data && data.endTime) {
        return data.endTime;
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