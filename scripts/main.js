var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';

var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/y15zr-kuning.jpg') {
        myImage.setAttribute('src', 'images/y15zr-kuning-alt.jpg');
    } else {
        myImage.setAttribute('src', 'images/y15zr-kuning.jpg');
    }
};

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Yamaha is cool, ' + myName;
}

if(!localStorage.getItem('name')) { // first load page if no name stored in local storage will popup the prompt box to enter name
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Suzuki is cool too,' + storedName; // if already has name when reload still retain name but change the latter words (just for testing)
}

var myButton = document.getElementById('change');

myButton.onclick = function() {
    setUserName();
};

function addNewMotorItem(e) {
    var uList = document.getElementById('motorItem');
    var listItem = document.createElement('li');
    var newItem = prompt('Add new item:');
    if (newItem != null) {
        listItem.textContent = newItem;
        uList.appendChild(listItem);
    }
}

var motorButton = document.getElementById('newItem');

function motorButton() { //motorButton.onclick = () => { // arrow function only use in ES6
    addNewMotorItem();
}