Feature('Login');

Scenario('Test Negative Login', (I) => {
  I.amOnPage('https://trello.com');
  I.see('Trello');
  I.click('Log In');
  I.see('Terms of Service');
  I.click('Log In');
  I.wait(3);
  I.see('Missing email', {css:'#error > p'});
});

