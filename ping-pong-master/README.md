# Ping-Pong Game

#### A game that allows a user to enter a number and return a count of the number, excluding numbers divisible by 3 and five, which return "ping", "pong", or "ping-pong". Created 9/22/2017.

#### By **Jessie Waite**

## Description

A website created with HTML, CSS, Bootstrap, Javascript and jQuery to allow a user to play a simple ping-pong game. The game allos the user to enter a number and return a count of the number, starting at 1. The game replaces numbers divisible by 3 with the word "ping", numbers divisible by 5 with the word "pong", and numbers divisible by 15 with the word "ping-pong". The game uses an HTML/CSS/Bootstrap user-interface, and javaScript/jQuery to process the user's entry into the appropriate output.


### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Webpage** | Ping-Pong Game | Webpage with user input form |
| **The program takes the number input by the user and returns a count, starting at 1. **| User Input: "4" | Output: "1,2,3,4" |
| **The program replaces numbers divisible by 3 with the word “ping”.**| Input: "4" | Output: "1, 2, “ping”, 4" |
| **The program replaces numbers divisible by 5 with the word “pong”.** | Input: "6" | Output: "1, 2, “ping", 4, “pong”, 6" |
| **The program replaces numbers divisible by 15 are replaced with “ping-pong”.**| Input: "16" | Page Displays: 1, 2, “ping”, 4, “pong”, “ping”, 7, 8, “ping”, “pong”, 11, “ping”, 13, 14, 	“ping-pong”, 16|
| **The user can enter a new number into the input field and see results over and over again.| Input: "3", "2" | Page Displays: 1,2, "ping" ; 1,2 |[[]
'']

## Setup/Installation Requirements

* _Clone the "ping-pong" repository to your desktop from GitHub here: https://github.com/jbellwaite/ping-pong.git_
* _Open the "ping-pong" folder_
* _Open a web-browser, preferably Chrome._
* _Drag "index.html" into an open tab in your web browser to open the application._
* _Once open in the web browser, enter a number, and press "play!". The application will then return a count to your number, returning "ping" in place of numbers divisible by 3, "pong" in place of numbers divisible by 5, and "ping-pong" in place of numbers divisible by 15.

_Use a text editor like Atom to edit code._

## GitHub GH-Pages link
_https://jbellwaite.github.io/ping-pong/_

## Known Bugs
* I refactored to make sure by back-end logic did not contain any HTML elements, and added a forEach loop to include "<li>" tags around each of the list items. However, for some reason, there is an extra empty bullet at the end of the list. I think it has something to do with the forEach loop, but for some reason I couldn't get a for loop to work in its place... I'm definitely doing something wrong there. But, I got it to work. 

## Technologies Used
* javaScript and jQuery
  * CSS
  * HTML
  * Bootstrap

## Support and contact details

_Email Jessie with comments or questions._
_jess.bell@me.com_

### License

*{This software is not licensed under the MIT license}*

Copyright (c) 2017 **_{Jessie Bell Waite}_**
