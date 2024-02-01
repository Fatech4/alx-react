import { getFullYear, getFooterCopy, getLatestNotification } from './utils';
// functions.test.js
// Test functionA
const d = new Date();
let year = d.getFullYear();

test('getFullYear returns correct year', () => {
  expect(getFullYear()).toBe(year);
});

// Test functionB
test('getFooterCopy returns correct string', () => {
  expect(getFooterCopy(true)).toBe('Holberton School');
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

// Test functionC
test('getLatestNotification returns correct string', () => {
  expect(getLatestNotification()).toBe(
    '<strong>Urgent requirement</strong> - complete by EOD'
  );
});
