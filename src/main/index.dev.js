/**
 * This file is used specifically and only for development. It installs
 * `electron-debug` & `vue-devtools`. There shouldn't be any need to
 *  modify this file, but it can be used to extend your development
 *  environment.
 */

/* eslint-disable */

// Install `electron-debug` with `devtron`
// require('electron-debug')({ showDevTools: true })



import { BrowserWindow } from 'electron'
// Install `vue-devtools`
require('electron').app.on('ready', () => {
  let installExtension = require('electron-devtools-installer')
  installExtension.default(installExtension.VUEJS_DEVTOOLS)
    .then(() => {
      console.log("======")
    })
    .catch(err => {
      console.log('Unable to install `vue-devtools`: \n', err)
    })

  BrowserWindow.addDevToolsExtension('G:/myProgram/dev/vue-devtools/packages/shell-chrome')
})

// Require `main` process to boot app
require('./index')
