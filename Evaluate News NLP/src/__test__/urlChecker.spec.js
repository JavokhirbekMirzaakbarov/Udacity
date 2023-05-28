import { isValidURL } from '../client/js/urlChecker';

describe('function "isValidURL()" should exist', () => {
  test('should return true', async () => {
    expect(isValidURL).toBeDefined();
  });
});
describe('function "isValidURL()" should be a function', () => {
  test('should be a function', async () => {
    expect(typeof isValidURL).toBe('function');
  });
});

describe('checking "isValidURL()" for valid url', () => {
  const url = 'https://www.skillsyouneed.com/ips/dealing-with-criticism.html';

  test('should return true', () => {
    const response = isValidURL(url);
    expect(response).toBeDefined();
    expect(response).toBe(true);
  });
});

describe('checking "isValidURL()" for invalid url', () => {
  const url = 'some text';

  test('should return false', async () => {
    const response = isValidURL(url);
    expect(response).toBeDefined();
    expect(response).toBe(false);
  });
});
