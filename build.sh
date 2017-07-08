rm -R ./clear-my-messages-darwin-x64 ./clear-my-messages.dmg
node_modules/.bin/electron-packager ./ --platform=darwin
hdiutil create -volname clear-my-messages -srcfolder ./clear-my-messages-darwin-x64 -ov -format UDZO clear-my-messages.dmg
rm -R ./clear-my-messages-darwin-x64

