# CHANGELOG

## 1.1.0
* base64-web is now built using! [React](https://reactjs.org/)
* Text fields automatically resize
* Set various editor options using the options-menu

## 1.0.5
* Removed bower
* Removed winston
* Updated npm packages

## 1.0.4
* Fixed an issue which caused pasting a base64 strings in the decode pane to duplicate itself and decoding incorrect data.
* Added an error annotation to the decode pane whenever string is not a valid base64 string

## 1.0.3
* Added Ace Editor with support for multiple syntaxes in the left pane.

## 1.0.2
* Added support for sending queryparams to the Angular app and see the encoded and decoded strings directly. Use ?encode=string and ?decode=string. For example `http://localhost:8080/#/?encode=helloworld`

## 1.0.1
* Minor fix that caused text from left pane to be copied to cliboard when clicking the button in right pane.

## 1.0.0
Initial Version