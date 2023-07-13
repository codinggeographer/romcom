// Create variables targeting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var coverDescriptors1 = document.querySelector('.tagline-1');
var coverDescriptors2 = document.querySelector('.tagline-2');
var randomCoverButton = document.querySelector('.random-cover-button');
var makeNewButton = document.querySelector('.make-new-button');
var homeButton = document.querySelector('.home-button');
var formView = document.querySelector('.form-view');
var homeView = document.querySelector('.home-view');
var randomCoverButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var savedView = document.querySelector('.saved-view');

// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener('load', getRandomCover);
randomCoverButton.addEventListener('click', getRandomCover);
makeNewButton.addEventListener('click', showFormView);
viewSavedButton.addEventListener('click', showSavedView);
homeButton.addEventListener('click', showHomeView);

// Create your event handlers and other functions here 👇


// We've provided two functions to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2
  }
  return cover
};

function getRandomCover() {
  coverImage.src = covers[getRandomIndex(covers)]
  coverTitle.innerText = titles[getRandomIndex(titles)]
  coverDescriptors1.innerText = descriptors[getRandomIndex(descriptors)]
  coverDescriptors2.innerText = descriptors[getRandomIndex(descriptors)]
};

function showElements(elements) {
  elements.forEach(function(element) {
    element.classList.remove('hidden')
  })
};

function hideElements(elements) {
  elements.forEach(function(element) {
    element.classList.add('hidden')
  })
};

function showFormView() {
  hideElements([homeView, randomCoverButton, saveCoverButton])
  showElements([formView, homeButton])
};

function showSavedView() {
  hideElements([homeView, randomCoverButton, saveCoverButton])
  showElements([savedView, homeButton])
};

function showHomeView() {
  hideElements([formView, savedView])
  showElements([homeView, randomCoverButton, saveCoverButton])
  hideElements([homeButton])
};
