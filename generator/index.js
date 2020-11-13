/*
 * @Author: your name
 * @Date: 2020-11-13 14:37:01
 * @LastEditTime: 2020-11-13 14:45:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qc_new_websited:\projects\recorder\src\index.js
 */
const { app, BrowserWindow } = require('electron');

function createWindow () {
  const win = new BrowserWindow({
    width: 366,
    height: 332,
    autoHideMenuBar : true,
    resizable: false
  });

  win.loadFile(`src/index.html`);
  win.setAlwaysOnTop(true);
  // win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});