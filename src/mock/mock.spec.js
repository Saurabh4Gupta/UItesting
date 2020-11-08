import css from './cssStub';
import img from './imageMockFile';

describe('mock', () => {
  it('css', () => {
    expect(css).toBeDefined();
  })
  it('img', () => {
    expect(img).toBeDefined();
  })
})
