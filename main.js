const { app, ipcMain } = require('electron');

app.whenReady().then(() => {
  const { whitelist } = require('#kernel/core/patchers/CSPWhitelist');

  whitelist('github-api', /https:\/\/api\.github\.com/i);

  // Kyza please add some sort of addRule function to the csp patcher
  // addRule('font-src', `'self' https://fonts.gstatic.com`);
  // addRule('worker-src', `'self' https://assets.braintreegateway.com`);
});

// TODO: add ipc handler for re-enable plugin
ipcMain.handleOnce('CODE_SNIPPETS_UNWHITELIST', () => {
  const { unwhitelist } = require('#kernel/core/patchers/CSPWhitelist');

  unwhitelist('github-api');
});