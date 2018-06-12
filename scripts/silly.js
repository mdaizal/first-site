// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
    return array[Math.floor(Math.random()*array.length)];
}

// 2. RAW TEXT STRINGS

var storyText = 'It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

var insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
var insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
var insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

    var newStory = storyText;
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);

    if(customName.value != '') {
        var name = customName.value;
        newStory = newStory.replace('Bob', name);
    }

    if(document.getElementById('uk').checked) {
        var stone = 300 * 0.071429;
        var weight = Math.round(stone);
        stone = weight + ' stone';

        var centigrade = (94-32)/1.8;
        var temperature =  Math.round(centigrade);
        centigrade = temperature + ' centigrade';

        newStory = newStory.replace('94 farenheit', centigrade);
        newStory = newStory.replace('300 pounds', stone);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
    // assesment completed without peeking into source codes
}