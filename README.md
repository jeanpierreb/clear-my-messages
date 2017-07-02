# Clear My Messages

![Screenshot](/img/screenshot.png "Screenshot")

This is an [Electron][2] app, that uses [Materialize][3] for styling, and a bit of jQuery for event handling. Its meant to do one and only one thing. Delete your Messages history from any Mac that you run it on.

## Command line version

If you are comfortable using the command line you can simply copy and paste the commands listed below and it will achieve the same results. In fact, if you downnload the app, that is all that it's doing, except with buttons and colors.

```bash
rm -Rf ~/Library/Messages/*
rm -Rf ~/Library/Containers/com.apple.ichat/Data/Library/Messages/Archive/*
osascript -e 'tell app "loginwindow" to «event aevtrrst»'
```

[Download the app][1]
[1]: https://github.com/jeanpierreb/clean-my-messages/raw/master/clear-my-messages.dmg
[2]: https://electron.atom.io/
[3]: http://materializecss.com/

