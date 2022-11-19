/**
 * Get the image of event.
 * 
 * It is not possible to directly convert a File object into JSON using JSON.stringify (it returns {})
 * In planPage.html the file submission is not included in the event-form to prevent string conversion
 * This might help with implementation: https://web.dev/read-files/
*/
const eventImg = document.querySelector('#eImg');
eventImg.addEventListener('change', (event) => {
    console.log(event.target.files);
});

export function getImg(data) {
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        data.push({eImg: event.target.result});
    });
    return data.eImg
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