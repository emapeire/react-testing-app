/* eslint-disable no-undef */
describe('My react application', () => {
  it('should look correct', () => {
    browser.url('/');
    browser.execute('/*@visual.init*/', 'My react app');
    browser.execute('/*@visual.snapshot*/', 'Home page');
  });
});
