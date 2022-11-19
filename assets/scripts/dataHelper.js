/**
 * Get the image of event.
*/
 export function getImg(data) {
    if (typeof data.img === 'object') {
        return '../images/Clueless.png';
    }
    return data.img;
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