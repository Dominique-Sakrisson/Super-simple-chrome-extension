# To Use:
1. Clone the project down to your machine

1. Open your chrome based browser

1. Navigate to   *chrome://extensions/*
    (if using other browsers based in chrome, you will be redirected)

1. Enable developer mode, located in the top right of browser window
    
    A few button options should now be in the browser window top left.

1. Select 'Load Unpacked'

1. Select the directory for the extension

1. Now the extension is loaded into your browser, you can enable it on web pages.

1. Navigate to a webpage, click the extensions icon (looks like a puzzle piece) and click the dark mode extension :)

### The purpose of this project is to create a chrome extension that can make any web page go dark mode. 



### The manifest file is the setup for the chrome extension

### Components of the manifest file

### the manifest_version
    
    specifies the verions of chrome to interact with
    is adviced to be 3

### background 
    
    JavaScript code that's run in a separate instance in the browser, and it's mostly used for listening to events and handling a browser wide state.

### permissions 
    
    The apis within chrome the app will be accessing

### action 
    
    are the components that will be rendered in the extension

### Popups

    The content displayed when the user opens the extension

### Content Script

    Code that is injected into the context of the webpage (regular web code html, css, js)

