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
    while(listMakanan.hasChildNodes()) {
        listMakanan.removeChild(listMakanan.firstChild);
    }
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