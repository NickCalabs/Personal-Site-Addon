var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var button = buttons.ActionButton({
  id: "my-button",
  label: "my button",
  icon: {
    "16": "./icon.jpg",
    "32": "./icon.jpg",
    "64": "./icon.jpg"
  },
  onClick: handleClick
});

function handleClick(state) {
  tabs.open("http://nickcalabro.com/");
}