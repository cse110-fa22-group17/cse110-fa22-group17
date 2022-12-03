import {  getTitle, getEnd, getStart, getLocation } from "../source/scripts/dataHelper.js";

const posOrNeg = require('./example');

test('should return damage sentence when called correctly', () => {
  const result = posOrNeg('Alex', 10);
  expect(result).toBe('Alex says 10');

});

let data = {
  "eTitle": "Event Title",
  "eOrg": "UCSD",
  "eDesc": "This is my description",
  "eMedium": "9500 Gilman Dr, La Jolla, CA 92093",
  "startTime": "2022-12-03T12:22",
  "endTime": "2022-11-30T14:17"
}

test('Should return the title of the defined event', () => {
  const title = getTitle(data);
  expect(title).toBe('Event Title');
});

test('Should return the location of the defined event', () => {
  const title = getLocation(data);
  expect(title).toBe('9500 Gilman Dr, La Jolla, CA 92093');
});

test('Should return the formatted start time of the defined event', () => {
  const title = getStart(data);
  expect(title).toBe('Start: 12-03-2022 Time: 12:22 AM');
});

test('Should return the formatted end time of the defined event', () => {
  const title = getEnd(data);
  expect(title).toBe('End: 11-30-2022 Time: 2:17 PM');
});


