/**
 * Get the image of event.
*/
 export function getImg(data) {
    if (data && data.img) {
        return data.img;
    }
    return "./assets/images/Clueless.png";
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