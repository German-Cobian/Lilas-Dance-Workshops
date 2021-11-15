function toggleDisplayP1() {
  var x = document.getElementById('port1');
  if (x.classList.contains('hide')) {
    x.classList.remove('hide');
  } else {
    x.classList.add('hide');
  }
};

function toggleDisplayP2() {
  var x = document.getElementById('port2');
  if (x.classList.contains('hide')) {
    x.classList.remove('hide');
  } else {
    x.classList.add('hide');
  }
};

function toggleDisplayP3() {
  var x = document.getElementById('port3');
  if (x.classList.contains('hide')) {
    x.classList.remove('hide');
  } else {
    x.classList.add('hide');
  }
};

function toggleDisplayP4() {
  var x = document.getElementById('port4');
  if (x.classList.contains('hide')) {
    x.classList.remove('hide');
  } else {
    x.classList.add('hide');
  }
};

function toggleDisplayS1() {
  var x = document.getElementById('span1');
  if (x.classList.contains('hide')) {
    x.classList.remove('hide');
  } else {
    x.classList.add('hide');
  }
};

function toggleDisplayS2() {
  var x = document.getElementById('span2');
  if (x.classList.contains('hide')) {
    x.classList.remove('hide');
  } else {
    x.classList.add('hide');
  }
};

function toggleDisplayS3() {
  var x = document.getElementById('span3');
  if (x.classList.contains('hide')) {
    x.classList.remove('hide');
  } else {
    x.classList.add('hide');
  }
};

function toggleDisplayS4() {
  var x = document.getElementById('span4');
  if (x.classList.contains('hide')) {
    x.classList.remove('hide');
  } else {
    x.classList.add('hide');
  }
};

function toggleDisplayE1() {
  var x = document.getElementById('eng1');
  if (x.classList.contains('hide')) {
    x.classList.remove('hide');
  } else {
    x.classList.add('hide');
  }
};

function toggleDisplayE2() {
  var x = document.getElementById('eng2');
  if (x.classList.contains('hide')) {
    x.classList.remove('hide');
  } else {
    x.classList.add('hide');
  }
};

function toggleDisplayE3() {
  var x = document.getElementById('eng3');
  if (x.classList.contains('hide')) {
    x.classList.remove('hide');
  } else {
    x.classList.add('hide');
  }
};

function toggleDisplayE4() {
  var x = document.getElementById('eng4');
  if (x.classList.contains('hide')) {
    x.classList.remove('hide');
  } else {
    x.classList.add('hide');
  }
};

// addEventListener for the nav
const portuguesSection = document.getElementById('portugues'); //sections
const españolSection = document.getElementById('español');
const englishSection = document.getElementById('english');

const portuguesNav = document.querySelector('.portugues');
const españolNav = document.querySelector('.español');
const englishNav = document.querySelector('.english');

portuguesSection.style.display = 'block';
españolSection.style.display = 'none';
englishSection.style.display = 'none';

portuguesNav.onclick = function () {
  portuguesSection.style.display = 'block';
  españolSection.style.display = 'none';
  englishSection.style.display = 'none';
};

españolNav.onclick = function () {
  portuguesSection.style.display = 'none';
  españolSection.style.display = 'block';
  englishSection.style.display = 'none';
};

englishNav.onclick = function () {
  portuguesSection.style.display = 'none';
  españolSection.style.display = 'none';
  englishSection.style.display = 'block';
};

