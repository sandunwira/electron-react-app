const { app, BrowserWindow } = require('electron')
const path = require('path')

// Handle creating/removing shortcuts on Windows when installing/uninstalling
if (require('electron-squirrel-startup')) {
	app.quit()
}

function createWindow() {
	// Create the browser window
	const mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js')
		}
	})

	// In development mode, load from the Vite dev server
	if (process.env.NODE_ENV === 'development') {
		mainWindow.loadURL('http://localhost:5173/')
		// Open DevTools
		mainWindow.webContents.openDevTools()
	} else {
		// In production, load the built index.html
		mainWindow.loadFile(path.join(__dirname, '../dist/index.html'))
	}
}

// This method will be called when Electron has finished initialization
app.whenReady().then(() => {
	createWindow()

	app.on('activate', function () {
		// On macOS it's common to re-create a window in the app when the
		// dock icon is clicked and there are no other windows open
		if (BrowserWindow.getAllWindows().length === 0) createWindow()
	})
})

// Quit when all windows are closed, except on macOS
app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') app.quit()
})