var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for (var i = 1; i<=5 ; i++) {
  var newImage = document.createElement('img');
  var attachImage = 'images/pic' + i + '.jpg';
  newImage.setAttribute('src', attachImage);
  newImage.addEventListener('click', changeImage);
  thumbBar.appendChild(newImage);
}

function changeImage(e) {
  //console.log(e.target.getAttribute('src'));
  img = e.target.getAttribute('src');
  displayedImage.setAttribute('src', img);
}

/* Wiring up the Darken/Lighten button */
function overlayImage() {
  var btnClass = btn.getAttribute('class');
  switch (btnClass) {
    case 'dark':
      btn.setAttribute('class', 'light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
      break;
    case 'light':
      btn.setAttribute('class', 'dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
      break;
    default:
      break;
  }
}

btn.addEventListener('click', overlayImage);