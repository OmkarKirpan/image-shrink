const { app, BrowserWindow } = require("electron");

let mainWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    title: "ImageShrink",
    width: 500,
    height: 600,
    // icon: './assets/icons/Icon.png',  //<-- Add icon here
  });

  mainWindow.loadFile(`./app/index.html`);
}

app.on("ready", createMainWindow);
