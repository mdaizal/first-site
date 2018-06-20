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

var person = { // this is object literal
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

function createNewPerson(name) { // create object inside a function
    var obj = {};
    obj.name = name;
    obj.greeting = function() {
        console.log('Hi my name is', name);
    };
    return obj;
}

function Person(first, last, age, gender, interests) { // constructor function (or may be converted to as a class declaration). Function name first letter using capital letter (Paskal style?)
    this.name = {
        'first': first,
        'last': last,
    };
    this.age = age;
    this.gender = (gender === 'male')? 'he' : 'she'; // lazy conditional...what if input only 'm' or 'MALE'...do the big if
    // this.interests = interests; // what if there's more than one interest?
    // this.interests = (interests.length < 2)? interests[0] : interests[0] + ' and ' + interests[1]; // what if more than 2 interests?
    this.interests = interests;

    if (this.interests.length === 2) {
        this.printInterest = 'likes ' + this.interests[0] + ' and ' + this.interests[1];
    } else if (this.interests.length > 2) {
        var stringsToCombine = '';
        for(var i = 0; i < this.interests.length; i++) {
            if(this.interests.length - i !== 1) { // a little bit of math here and below
                stringsToCombine += (this.interests.length - i === 2)? this.interests[i] : this.interests[i] + ',';
            } else {
                stringsToCombine += ' and ' + this.interests[i];
            }
        }
        // console.log(stringsToCombine);
        this.printInterest = 'likes ' + stringsToCombine; // last item will get 'and' in front instead of ','. I think there is better solution but that's your part. Find it and share it.
    } else {
        this.printInterest = (this.interests.length !== 0)? 'likes ' + this.interests[0] : 'have no interests.';
    }
    // see modifying prototypes line 266
    // this.bio = function() {
    //     console.log(this.name.first, this.name.last,'is',this.age,'and', this.gender, this.printInterest);
    // };
    // this.greeting = function() {
    //     console.log('Hi my name is', this.name, 'and this is instance from a JS constructor.');
    // };
}

var person1 = new Person('Arnold','Schewpes',35,'male',['gaming', 'eating', 'sleeping']); // instance of Person class
var person2 = new Person('Arianna','Tudung',35,'female',['eating', 'more eating']);
var person3 = new Person('Siti', 'Nurhahaha',9,'female',['reading comic books']);
var person4 = new Person('Riha', 'Nna',23,'female',[]);
var person5 = new Person('Luffy', 'Monkey', 23, 'male', ['eating', 'camping', 'fighting', 'get new friends', 'pirating']);

var personA = new Object({ // create new object using Object() and put object literal inside.
    name: 'Bonaventura',
    age: 35,
    bio: function() {
        console.log('Hi, I am',this.name,'and I am',this.age,'years old.');
    }
});

var personB = new Object(); // this is not preferable. above is better.
personB.name = 'Hakan';
personB['age'] = 26; // better using dot notation (like personB.name above)
personB.bio = function() {
    console.log('Hi, I am',personB.name,'and I am',personB.age,'years old.');
};

var personC = Object.create(person1); // using create() (to create object instances without first creating constructors) and copy data from person1 above.
// you can create a new object based on any existing object

/*
    Object Prototype
*/

// modifying prototypes
Person.prototype.farewell = function() {
    console.log(this.name.first,'has left the building. Bye for now!');
};

// good practice: set property inside constructor but method definition set outside of the constructor.
Person.prototype.bio = function() {
    console.log(this.name.first, this.name.last,'is',this.age,'and', this.gender, this.printInterest);
};

Person.prototype.greeting = function() {
    console.log('Hi my name is', this.name, 'and this is instance from a JS constructor.');
};

/*
    Inheritance in JavaScript
*/

function Teacher(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender, interests); // this because inherit with constructor that have parameters

    this.subject = subject;
}

// but the Person prototype methods can't be inherited by Teacher(). so how? enter create() to the rescue
Teacher.prototype = Object.create(Person.prototype); // so all Person's prototype now can be accessed by Teacher constructor
Teacher.prototype.constructor = Teacher; // if not the constructor will set to Person() coz of line 291. We just want to inherit Person's prototype method so set Teacher constructor to itself.

// so now we can define new greeting method for Teacher
Teacher.prototype.greeting = function() {
    var prefix = (this.gender === 'male')? 'Mr.' : 'Mrs.'; // again lazy if. just for learning. irl may be have to use big if

    console.log('Hello my name is',prefix,this.name.first,'and I teach',this.subject + '.');
};

// lets create new Teacher
var teacher1 = new Teacher('Mary','Poppins',25,'female',['teaching','reading sci-fi books'],'Astrophysics');

/*
    Inheritance exercise: Create Student constructor
*/

function Student (first, last, age, gender, interests, study) {
    Person.call(this, first, last, age, gender, interests);

    this.study = study;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.greeting = function() {
    console.log('Yo my name is',this.name.first,'and I\'m studying',this.study + '.');
};

var student1 = new Student('Andrea','Pirlo',34,'male',['football'],'Physics and Football');

/*
    Inheriting from a constructor with no parameters
    example below.
*/

function Brick() { // no parameters...
    this.width = 10;
    this.height = 20;
}

function BlueBrick() {
    Brick.call(this); // ...so just put 'this' to inherit property inside the Brick constructor

    this.opacity = 0.5;
    this.color = 'blue';
}