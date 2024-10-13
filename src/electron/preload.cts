const electron = require("electron");

electron.contextBridge.exposeInMainWorld("electron", {
    subscribeStatitics: (callback: (statistics: any) => void) => {
        electron.ipcRenderer.on("statistics", (_, stats) => {
            callback(stats);
        })
    },
    getStaticData: () => console.log("static"),
})