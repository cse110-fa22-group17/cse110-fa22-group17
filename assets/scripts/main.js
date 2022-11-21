window.addEventListener('DOMContentLoaded', init);

// Starts the program, all function calls trace back here
function init() {
  let events = getEventFromStorage();
  addEventsToDoc(events);
  if (document.querySelector('#event-form')) {
    initFormHandler();
  }
}


/**
 * Reads 'events' from localStorage and returns an array of
 * all of the events found (parsed, not in string form). If
 * nothing is found in localStorage for 'event', an empty array
 * is returned.
 * @returns {Array<Object>} An array of events found in localStorage
 */
function getEventFromStorage() {
  return JSON.parse(window.localStorage.getItem('events')) || [];
}


/**
 * Takes in an array of events, converts it to a string, and then
 * saves that string to 'events' in localStorage
 * @param {Array<Object>} events An array of events
 */
function saveEventsToStorage(events) {
  localStorage.setItem('events', JSON.stringify(events));
}


/**
 * Takes in an array of events and for each event creates a
 * new <event-card> element, adds the event data to that card
 * using element.data = {...}, and then appends that new event
 * to <main>
 * @param {Array<Object>} events An array of events
 */
function addEventsToDoc(events) {
  let main = document.querySelector('main');

  if (events == null) {
    return;
  }

  for (const event of events) {
    let eventCard = document.createElement('event-card');
    eventCard.data = event;
    main.append(eventCard);
  }
}


/**
 * Takes in a FormData object and uses all of its the key,value
 * pairs to create a JSON object to be stored onto LocalStorage
 * @param {Array<Object>} formData A FormData object 
 */
function convertForm2JSON(formData) {
  let eventObj = {};
  for (const [key, value] of formData.entries()) {
    eventObj[key] = value;
  }
  return eventObj;
}


/**
 * Adds the necessary event handlers to <form> 
 */
function initFormHandler() {
  let main = document.querySelector('main')
  let eventForm = document.querySelector('#event-form');
  let cancelbtn = document.querySelector('#cancelbtn');

  const imgFile = document.querySelector('#imgFile');
  const eImg = document.querySelector('#eImg');
  let dataURL;

  // Displays image file via dataurl and saves it to be stored locally when form is submitted
  imgFile.addEventListener('change', (event) => {
    const file = imgFile.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        eImg.src = reader.result;
        dataURL = reader.result;
    });
    reader.readAsDataURL(file);
  });

  // Creates event-card from form data and saves it locally
  eventForm.addEventListener('submit', e => {
    e.preventDefault;
    const formData = new FormData(eventForm);
    let eventObj = convertForm2JSON(formData);

    eventObj.eImg = dataURL;

    let eventCard = document.createElement('event-card');
    eventCard.data = eventObj;
    main.append(eventCard);
    
    let localEvents = getEventFromStorage();
    localEvents.push(eventObj);
    saveEventsToStorage(localEvents);
  });

  cancelbtn.addEventListener('click', f => {
    f.preventDefault;
    window.location.href ="/assets/reference/homePage.html";
  });
}