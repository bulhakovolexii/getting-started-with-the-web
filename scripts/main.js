var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/Pumpkin-cat-with-raindrops-visible.jpg') {
        myImage.setAttribute('src', 'images/Pumpkin-cat-with-raindrops-infrared.jpg');
    } else {
        myImage.setAttribute('src', 'images/Pumpkin-cat-with-raindrops-visible.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Буль ласка, введіть своє ім\'я');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Привіт, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Привіт, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}