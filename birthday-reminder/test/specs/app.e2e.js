describe('My birthday-reminder application', () => {
  it('should look correct', async () => {
    await browser.url('/');
    await browser.execute('/*@visual.init*/', 'My birthday-reminder app');
    await browser.execute('/*@visual.snapshot*/', 'Home page');
  
    await $('[data-testid="clear"]').click();
    await browser.execute('/*@visual.snapshot*/', 'Empty page');

    const result = await browser.execute('/*@visual.end*/');
    expect(result).toBeNull();
  });
});
