import { formHandler } from '../src/client/js/formHandler';

describe('Test handleSubmit', () => {
  it('should be a function', async () => {
    expect(typeof formHandler).toBe('function');
  });
});
