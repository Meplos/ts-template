import {Greet} from '../src/Greet';

describe('Greet test', () => {
  it('greet', () => {
    const greet = new Greet();
    expect(greet.greet()).toBe('World');
  });
});
