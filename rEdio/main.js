const { app, BrowserWindow } = require('electron');

function createWindow() {
  // Create the browser window
  let win = new BrowserWindow({
    width: 290,
    height: 154,
    backgroundColor: '#333333',
    frame: false,
    resizable: false,
    webPreferences: {
      nodeIntegration: true
    }
  });
  
  // hide menu bar
  win.menuBarVisible = false;

  // load the index.html of the app
  win.loadFile('index.html');

  // Open the DevTools.
  // win.webContents.openDevTools();
}

app.whenReady().then(createWindow);