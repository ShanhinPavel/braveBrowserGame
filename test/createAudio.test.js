/* eslint-disable no-undef */
import createAudio from '../src/help_modules/createAudio';

describe('test random function', () => {
  const audioTag = createAudio();

  test('examine if function creates and returns audio node with className "audio"', () => {
    expect(audioTag.className).toEqual('audio');
  });
});
