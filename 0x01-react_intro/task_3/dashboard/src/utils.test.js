// Imported the functions to run the tests on
import { getFooterCopy, getFullYear, getLatestNotification } from './utils'

// Running tests
// Testing getFullYear()
test('returns current year', () => {
    expect(getFullYear()).toBe(2024);
});

// Test getFooterCopy()
test('correct footer copy', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

// Test getLatestNotification
test('returns rigth Notification', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});
