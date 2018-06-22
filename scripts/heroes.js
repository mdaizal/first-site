var header = document.querySelector('header');
var section = document.querySelector('section');

var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var superHeroes = request.response;
    populateHeader(superHeroes);
    showHeroes(superHeroes);
};

// modern way to fetch json data
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data
// open browser's console to view results
fetch(requestURL).then(function(res) {
  res.json().then(function(res){
    var heroes = res;
    // console.log(heroes); // uncomment to view fetched json data
    console.log('Squad name:', heroes.squadName);
    console.log('Hometown:', heroes.homeTown);
    console.log('Year established:', heroes.formed);
    console.log('Secret base:', heroes.secretBase);
    console.log('Squad status:', (heroes.active)? 'Active' : 'Disbanded');

    console.log('Team members:');
    var members = heroes.members;
    for (var i = 0; i < members.length; i++) {
      console.log('--->', members[i].name);
    }

    console.log('Team members profiles:');
    for (var j = 0; j < members.length; j++) {
      console.log(members[j].name.toUpperCase());
      console.log('   Age:', members[j].age);
      console.log('   Secret Identity:', members[j].secretIdentity);
      console.log('   Super powers:');
      var powers = members[j].powers;
      for (var k = 0; k < powers.length; k++) {
        console.log('     ->', powers[k]);
      }
    }
  });
});

function populateHeader(jsonObj) {
    var myH1 = document.createElement('h1');
    myH1.textContent = jsonObj.squadName; //jsonObj['squadName'];
    header.appendChild(myH1);
  
    var myPara = document.createElement('p');
    myPara.textContent = 'Hometown: ' + jsonObj.homeTown + ' // Formed: ' + jsonObj.formed; //jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
    header.appendChild(myPara);
  }

  function showHeroes(jsonObj) {
    var heroes = jsonObj.members; // jsonObj['members'];
        
    for (var i = 0; i < heroes.length; i++) {
      var myArticle = document.createElement('article');
      var myH2 = document.createElement('h2');
      var myPara1 = document.createElement('p');
      var myPara2 = document.createElement('p');
      var myPara3 = document.createElement('p');
      var myList = document.createElement('ul');
  
      myH2.textContent = heroes[i].name;
      myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
      myPara2.textContent = 'Age: ' + heroes[i].age;
      myPara3.textContent = 'Superpowers:';
          
      var superPowers = heroes[i].powers;
      for (var j = 0; j < superPowers.length; j++) {
        var listItem = document.createElement('li');
        listItem.textContent = superPowers[j];
        myList.appendChild(listItem);
      }
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);
    }
  }