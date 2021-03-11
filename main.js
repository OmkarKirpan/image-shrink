const { app, BrowserWindow } = require("electron");

let mainWindow;

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    title: "ImageShrink",
    width: 500,
    height: 600,
    // icon: './assets/icons/Icon.png',  //<-- Add icon here
  });

  //   mainWindow.loadURL(`file://${__dirname}/app/index.html`);
  mainWindow.loadFile(`./app/index.html`);
}

app.on("ready", createMainWindow);
