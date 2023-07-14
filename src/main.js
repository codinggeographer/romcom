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
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var savedView = document.querySelector('.saved-view');
var makeMyBookButton = document.querySelector('.create-new-book-button');
var savedCoverSection = document.querySelector('.saved-covers-section');


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
makeMyBookButton.addEventListener('click', createNewCover);
saveCoverButton.addEventListener('click', saveCover);

// Create your event handlers and other functions here 👇
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
  var image = covers[getRandomIndex(covers)]
  var title = titles[getRandomIndex(titles)]
  var descriptor1 = descriptors[getRandomIndex(descriptors)]
  var descriptor2 = descriptors[getRandomIndex(descriptors)]
  currentCover = createCover(image, title, descriptor1, descriptor2)
  displayCover()
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
  loadSavedCovers()
};

function showHomeView() {
  hideElements([formView, savedView])
  showElements([homeView, randomCoverButton, saveCoverButton])
  hideElements([homeButton])
};

function createNewCover(event) {
  event.preventDefault();
  var imgSrc = document.querySelector('.user-cover').value;
  var title = document.querySelector('.user-title').value;
  var descriptor1 = document.querySelector('.user-desc1').value;
  var descriptor2 = document.querySelector('.user-desc2').value;
  userInputArray(imgSrc, title, descriptor1, descriptor2);
  currentCover = createCover(imgSrc, title, descriptor1, descriptor2)
  displayCover()
  showHomeView()
};

function userInputArray(imgSrc, title, descriptor1, descriptor2) {
  if (!covers.includes(imgSrc)) {
    covers.push(imgSrc);
  }
  if (!titles.includes(title)) {
    titles.push(title);
  }
  if (!descriptors.includes(descriptor1)) {
    descriptors.push(descriptor1);
  }
  if (!descriptors.includes(descriptor2)) {
    descriptors.push(descriptor2);
  }
};

function displayCover() {
  coverImage.src = currentCover.coverImg;
  coverTitle.innerText = currentCover.title;
  coverDescriptors1.innerText = currentCover.tagline1;
  coverDescriptors2.innerText = currentCover.tagline2;
};

function saveCover() {
  if (!savedCovers.includes(currentCover)){
    savedCovers.push(currentCover)
    console.log('saved covers')
  }
};

function loadSavedCovers() {
  console.log(savedCovers)
  savedCoverSection.innerHTML = '';
  for (var i = 0; i < savedCovers.length; i++){
    savedCoverSection.innerHTML += `<section class= "saved-covers" id="${savedCovers[i].id}">
    <img src="${savedCovers[i].coverImg}" 
    alt="saved covers">
    <h2>${savedCovers[i].title}</h2>
    <h3>${savedCovers[i].tagline1}</h3>
    <h3>${savedCovers[i].tagline2}</h3>
  </section><br>`

  }
};