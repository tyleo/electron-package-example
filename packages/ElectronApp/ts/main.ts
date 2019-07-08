import * as Electron from "electron";
import * as Path from "path";

import * as ElectronApp from "ElectronApp";

function createWindow() {
  // Create the browser window.
  let win = new Electron.BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // and load the index.html of the app.
  win.loadFile(
    Path.resolve(`file://${__dirname}`, `../resources/app.asar/html/index.html`)
  );
}

Electron.app.on("ready", createWindow);

ElectronApp.Run();
