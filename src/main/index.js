import { app, BrowserWindow, Menu, ipcMain} from 'electron'
/**
 * 在生产中设置“静态”路径到静态文件
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\');
  
}

let mainWindow;
let newwin;
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  Menu.setApplicationMenu(null) //去掉菜单栏
  
  mainWindow = new BrowserWindow({
    height: 563,
    useContentSize: true,
    width: 1000,
    acceptFirstMouse: true
  })
  
  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })

}

// // 禁用缓存
// app.commandLine.appendSwitch("--disable-http-cache")

//支持谷歌命令行
// app.commandLine.appendSwitch('remote-debugging-port', '8315');
// app.commandLine.appendSwitch('host-rules', 'MAP * 127.0.0.1');


app.on('ready', function() {
  createWindow();
  // let extension = "C:/Users/Administrator/AppData/Local/Google/Chrome/User Data/Default/Extensions/geobniafmelcledgickglbajofpkllpl/3.1.0_0";
  // BrowserWindow.addDevToolsExtension(extension)
  /**
   * 兼容<a>的href _target 打开新页面
   */
  ipcMain.on('open-brower', (event, argu) => {
      if(!newwin) {
        newwin = new BrowserWindow({
          width: 800,
          height: 400,
          useContentSize: true,
          acceptFirstMouse: true,
          show: false
        });
        newwin.show();
        newwin.loadURL(argu);
        newwin.on('closed', () => {
          newwin = null
        });
      }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
