let darkBackgroundColor = "#000"

//run when the user firest installs the extension
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({color}) // use sync to store persistent data
    console.log("button Color Set");
})
