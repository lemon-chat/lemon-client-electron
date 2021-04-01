import electron from "electron"
const app = electron.app
const Menu = electron.Menu

const BrowserWindow = electron.BrowserWindow

import path from "path"
import isDev from "electron-is-dev"

let mainWindow: electron.BrowserWindow | null

function createWindow() {
  
  mainWindow = new BrowserWindow({
    width: 830,
    height: 510,
    minWidth: 800,
    minHeight: 500,
    backgroundColor: "#80FFFFFF",
    transparent: false,
    autoHideMenuBar: true
  })

  // 下面二者选一个，但其中有bug
  mainWindow.removeMenu()
  /*
  mainWindow.setMenu(null)
  mainWindow.webContents.once('did-finish-load', () => {
    if (mainWindow != null) {
      mainWindow.setMenuBarVisibility(false);
    }
  })
  Menu.setApplicationMenu(null)
  */

  if (!process.env.IS_TEST) mainWindow.webContents.openDevTools()

  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/static/index.html")}`
  )
  mainWindow.on("closed", () => (mainWindow = null))
}

app.on("ready", createWindow)

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit()
  }
})

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow()
  }
})