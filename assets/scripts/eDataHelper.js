/**
 * Get the image of event.
*/
 export function getImg(data) {
    if (data && data.image) {
        return data.image;
    }
    return "assets/images/Clueless.png";
}

/**
 * Get the title of event.
*/
export function getTitle(data) {
    if (data && data.title) {
        return data.title;
    }
    return "";
}