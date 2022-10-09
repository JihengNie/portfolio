var navHome = document.querySelector('.nav-home');
var navAbout = document.querySelector('.nav-about');
var navMath = document.querySelector('.nav-math');
var navProjects = document.querySelector('.nav-projects');
var navContact = document.querySelector('.nav-contacts');
var navBar = document.querySelector('.nav-bar');

var currentViewStyle = 'w3-bar-item w3-button w3-padding-large w3-black';
var defaultStyle = 'w3-bar-item w3-button w3-padding-large w3-hover-black';

navBar.addEventListener('click', navBarClick);

function navBarClick(event) {
  if (event.target.className === 'nav-about ' + defaultStyle) {
    viewSwapping('about');
  } else if (event.target.className === 'nav-math ' + defaultStyle) {
    viewSwapping('math');
  } else if (event.target.className === 'nav-projects ' + defaultStyle) {
    viewSwapping('projects');
  } else if (event.target.className === 'nav-contacts ' + defaultStyle) {
    viewSwapping('contacts');
  }
}

function viewSwapping(view) {
  var navArray = [navHome, navAbout, navMath, navProjects, navContact];
  for (var i = 0; i < navArray.length; i++) {
    navArray[i].className = defaultStyle;
  }
  if (view === 'home') {
    navHome.className = 'nav-home ' + currentViewStyle;
  } else if (view === 'about') {
    navAbout.className = 'nav-about ' + currentViewStyle;
  } else if (view === 'math') {
    navMath.className = 'nav-math ' + currentViewStyle;
  } else if (view === 'projects') {
    navProjects.className = 'nav-projects ' + currentViewStyle;
  } else if (view === 'contact') {
    navContact.className = 'nav-contacts ' + currentViewStyle;
  }
}
