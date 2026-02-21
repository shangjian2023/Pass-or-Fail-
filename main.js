const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');

// 保持窗口对象的全局引用，防止被垃圾回收
let mainWindow;

function createWindow() {
    // 创建浏览器窗口
    mainWindow = new BrowserWindow({
        width: 520,
        height: 800,
        minWidth: 480,
        minHeight: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        },
        icon: path.join(__dirname, 'assets', 'icon.ico'),
        title: '期末求生计算器',
        show: false, // 先不显示，等加载完成后再显示
        backgroundColor: '#F0F4F8'
    });

    // 加载应用页面
    mainWindow.loadFile(path.join(__dirname, '期末求生计算器', 'index.html'));

    // 窗口加载完成后显示
    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
        
        // 开发环境下打开开发者工具
        // mainWindow.webContents.openDevTools();
    });

    // 窗口关闭时的处理
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

// Electron 初始化完成
app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        // macOS 上点击 dock 图标时重新创建窗口
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

// 所有窗口关闭时退出应用
app.on('window-all-closed', () => {
    // macOS 上通常应用在窗口关闭时仍然保持运行
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// 防止多开
const gotTheLock = app.requestSingleInstanceLock();

if (!gotTheLock) {
    app.quit();
} else {
    app.on('second-instance', () => {
        // 当尝试运行第二个实例时，聚焦到第一个实例的窗口
        if (mainWindow) {
            if (mainWindow.isMinimized()) {
                mainWindow.restore();
            }
            mainWindow.focus();
        }
    });
}
