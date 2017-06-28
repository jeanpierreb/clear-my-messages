# Messages Wipe

In order to delete your message history you must follow a few steps

1. Sign out of iMessage

2. Quit iMessage completely <cmd -q>

3. Run the following commands to delete your history 
	`rm -Rf ~/Library/Messages/*; rm -Rf ~/Library/Containers/com.apple.ichat/Data/Library/Messages/Archive/*`

4. Restart your computer

## Technical notes

How we reset your computer with a dialogue.

`osascript -e 'tell app "loginwindow" to «event aevtrrst»'`

