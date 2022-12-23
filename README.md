# Reactjs Code Challenge - Chat

v1.0

## Description

This is a test to assess your React and Typescript skills.

You are allowed to use npm to install modules to build your application if you think it will help you. The focus will be on your coding skills, build tools are just details.

Please create a branch starting from master, commit your changes, and when ready make a PR (Merge request/Pull request) to master with the install and run instructions. If something is not clear, please ask.

## 1 Some Questions

Please edit the code snippets with your solution:

1. How can you implement a private method of `People`?

```js
function People() {
}
```

2. How can you implement a static method of `People`?

```js
function People() {
}
```

3. How can you pass a "strategy" to People, to make "Mark" say the time reading it from a variable that is not readable from People's scope?

```js
// file: People.js - here you cannot use Date, etc

function People() {
  var sentence = 'The time is: ';

  this.sayTheTime = function() {
    return sentence;
  }
}
```

```js
// file: script.js

var mark = new People();
mark.sayTheTime();
```

## 2 Coding exercise

Implement, using React, a very simple CHAT web application that runs exclusively in the browser.
UI will be composed by a Messages'List and a TextInput.

Every TAB in the browser represents a user that sends messages in the same chat room.

Here are the main use cases:

- Everytime a new Tab is opened the user is prompted for a username, and a new "chat user" joins the conversation.
- User can fill the TextInput, and pressing "Enter" the message will be sent to the Messages'List together with username and datetime, these will appear in the Messages'List in a well-styled way (some CSS required).
- Every tab of the browser is updated with new messages in real-time.
- If TextInput is empty when "Enter" is pressed an error will appear.
- User can delete a Message by pressing some icon that appear only on mouseover, contained in the Message element.
- Messages will appear from bottom to top in the Messages'List.

_Bonus 1_: Use modern browser capabilities to persist the state of the application by allowing the page to be refreshed without losing data. Users must be able to re-join the conversation by re-using a previously created “login session” (each tab/user should be asked to join the first time only). Don’t worry about “security” in this step.

_Bonus 2_: When the ArrowUp is pressed in a TextInput, that input will be filled with the last message sent by that user (if exists), and when is pressed Enter again, that last message is replaced with the edited message.

_Bonus 3_: Using CSS3 transitions, animate the text-color of every message added to the list, starting from a "Color 1" when created and ending with a "Color 2" using a transition with a duration of 10 seconds.

```
  TAB 1                                   TAB 2
|-------- MessagesList -------|         |-------- MessagesList -------|
|                             |         |                             |
|                             |         |                             |
|                             |         |                             |
|                             |         |                             |
|16:07 zelda                  |         |                  zelda 16:07|
| Hey, how you doing?         |         |         Hey, how you doing? |
|                             |         |                             |
|                   goku 16:10|         |16:10 goku                   |
|     Shh!, Doing a challenge |         | Shh!, Doing a challenge     |
|-----------------------------|         |-----------------------------|

zelda        [________________]         goku         [________________]
```

## 3 Testing exercise

Please set up a testing solution that allows to test the code you have created during step 2.

## Tips

This Chat is very successful, it should be designed to support hundreds of messages for few months.

Please build a UI that it's easy to understand.

Take into account that every Merge Request will be processed and reviewed like any other Merge Request inside Company, so expect that, after requesting a review, it has to be scheduled and that there might be some change requests ;)
