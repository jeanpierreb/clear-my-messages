# Messages Cleaner

## Command line version

If you are comfortable using the command line you can simply copy and paste the commands listed below and it will achieve the same results. In fact, if you downnload the app, that is all that it's doing, except in a prettier way.

[Click here to Download the app][1]

Or

### Copy and paste the following into terminal 

Delete the files inside of Messages

`rm -Rf ~/Library/Messages/*; rm -Rf ~/Library/Containers/com.apple.ichat/Data/Library/Messages/Archive/*`

Restart OSX

`osascript -e 'tell app "loginwindow" to «event aevtrrst»'`

## Specifications

This is an [Electron][2] app, and uses [Materialize][3] for styling.

[1]: https://raw.githubusercontent.com/jeanpierreb/message-cleaner/tree/master/message-wipe-darwin-x64/message-wipe.app
[2]: https://electron.atom.io/
[3]: http://materializecss.com/
