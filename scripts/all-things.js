var makanan = ['Nasi Ayam', 'Nasi Tomato', 'Mee Goreng', 'Mee Basah', 'Mee Kungfu', 'Mihun Goreng', 'Nasi Padang', 'Nasi Kerabu'];

var listMakanan = document.getElementById('listMakanan'); // search by id

var userInputMakan = document.querySelector('.filterBox'); // search by class. don't forget to put '.' infront
var buttonFilterMakan = document.querySelector('.filterButton');
var resetFilter = document.querySelector('.resetFilter');

function filterMakanan(input) {
    for (var i = 0; i < makanan.length; i ++) {
        var makanItem = makanan[i];
        if(makanItem.toLowerCase().indexOf(input) !== -1){
            var result = makanan[makanan.indexOf(makanItem)];
            createMakananItem(result);
        } else if (input === null) {
            createMakananItem(makanItem);
        }
    }
}

function createMakananItem(makanan) {
    var createList = document.createElement('li');
    createList.textContent = makanan;
    listMakanan.appendChild(createList);
}

function clearListWhenSearch() {
    // while(listMakanan.hasChildNodes()) {
    //     listMakanan.removeChild(listMakanan.firstChild);
    // }
    listMakanan.innerHTML = ''; // NOW I'VE FOUND THE SIMPLER SOLUTION!!!
}

function resetMakananFilter() {
    clearListWhenSearch();
    filterMakanan(null);
    userInputMakan.value = '';
    userInputMakan.focus();
}

filterMakanan(userInputMakan.value);

buttonFilterMakan.onclick = function() { // add 'onclick' event to button
    if(userInputMakan.value !== '') {
        clearListWhenSearch();
        filterMakanan(userInputMakan.value.toLowerCase());
    } else {
        resetMakananFilter();
    }
}; // don't forget to put semicolon if using this style;

resetFilter.addEventListener('click', resetMakananFilter); // another example to add event 'onclick' to button.

// add menu

var newMenu = document.querySelector('.newMenuField');
var addNew = document.querySelector('.addNewMenuButton');
var cancel = document.querySelector('.cancelButton');

function addNewMenu() {
    var menu = newMenu.value;
    if(menu !== '') {
        makanan.push(menu);
        createMakananItem(menu);
        newMenu.value = '';
    }
}

function cancelAdd () {
    newMenu.value = '';
}

addNew.addEventListener('click', addNewMenu);
cancel.addEventListener('click', cancelAdd);

/*
    CALENDAR EXERCISE
*/

var months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];

var monthsPicker = document.querySelector('.monthsPicker');
var embedMonth = document.querySelector('.embedMonth');
var calendar = document.querySelector('.calendar');

// append months array data to monthsPicker
var option = document.createElement('option');
option.textContent = '-Select Month-';
option.value = '-';
monthsPicker.appendChild(option);

for (var i = 0; i < months.length; i++) {
    var option2 = document.createElement('option');
    option2.textContent = months[i];
    option2.value = months[i];
    monthsPicker.appendChild(option2);
}
// end append

monthsPicker.onchange = function() {
    var select = monthsPicker.value;
    var days = 31;
    if(select === 'FEBRUARY') {
        days = 28;
    } else if (select === 'APRIL' || select === 'JUNE' || select === 'SEPTEMBER' || select === 'NOVEMBER') {
        days = 30;
    }
    createCalendar(select, days);
    console.log(select + ' ' + days);
};

function createCalendar(month, days) {
    calendar.innerHTML = '';
    for(var i = 1; i <= days; i++) // no need to put .length COZ IT'S NOT A FUKKEN ARRAY BIATCHHH!! Please don't repeat this noobs mistakes again.
    {
        var list = document.createElement('li');
        list.textContent = i;
        calendar.appendChild(list);
    }
    embedMonth.innerHTML = month.toString();
}

/*
    Launch Countdown Exercise
*/

var output = document.querySelector('.output');
var para = document.createElement('p');

var countDown = 10;

do {
    if(countDown === 10) {
        para.textContent = 'Countdown in 10 ';
    }
    countDown--;
    para.textContent += (countDown !== 0) ? countDown + ' ' : ' Blast Off';
    output.appendChild(para);
} while (countDown !== 0);

/*
    Filling in a guest list exercise

    -- for results see console in browser. too lazy to put in html
*/

var guestList = ['Arissa', 'Amsyar', 'Aisha', 'Juliza', 'Aizal', 'Karim', 'Ramlan', 'Maya'];
var refusedGuests = 'Refused guests: ';
var admittedGuests = 'Admitted guests: ';

for( var i = 0; i < guestList.length; i++) {
    var guest = guestList[i];
    if(guest === 'Karim' || guest === 'Ramlan' || guest === 'Maya') {
        refusedGuests += guest + ',';
        
    } else {
        admittedGuests += guest + ',';
    }
    
}

console.log(refusedGuests); // Refused guests: Karim,Ramlan,Maya, <- we need to get rid of the last comma and change with period
//console.log('Last index of comma in \'refusedGuests\' string: ' + refusedGuests.lastIndexOf(',')); // return 33. using this. see below.
//console.log(refusedGuests[refusedGuests.length-1]); // return ','...the last one in the string. just to remember lol.
// console.log(refusedGuests.replace(refusedGuests[33], '.')); // this will not work as it will still search the first occurence of ',' inside the string
refusedGuests = refusedGuests.slice(0,refusedGuests.lastIndexOf(',')) + '.';
console.log(refusedGuests);

console.log(admittedGuests); // this too
admittedGuests = admittedGuests.slice(0, admittedGuests.length-1) + '.'; // another solution
console.log(admittedGuests);

/*
    Object Basics
*/

var person = {
    name: {
        first: 'Bob',
        second: 'Smith'
    },
    age: 32,
    gender: 'male',
    interests: ['music', 'skiing'],
    bio: function() {
        console.log(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old.');
    },
    greeting: function() {
        console.log('Hi, my name is ' + this.name[0] + ' ' + this.name[1] + ' and I like ' + this.interests[0] + ' and ' + this.interests[1]);
    }
};

function createNewPerson(name) {
    var obj = {};
    obj.name = name;
    obj.greeting = function() {
        console.log('Hi my name is', name);
    };
    return obj;
}

function Person(name) {
    this.name = name;
    this.greeting = function() {
        console.log('Hi my name is', this.name, 'and this is instance from a JS constructor.');
    };
}

var person1 = new Person('Aizal');
var person2 = new Person('Juliza');