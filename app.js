// import functions

// grab DOM elements
// set event listeners 
// get user input
    // use user input to update state 
const sectionButton = document.getElementById ('clickButton');
const nameSpan = document.getElementById('name');
const animalDiv = document.getElementById('animalDiv');
const animalButton = document.getElementById ('showImage');

sectionButton.addEventListener('click', ()=> {
    nameSpan.classList.toggle('hidden');
});
      // update DOM to reflect the new state
    
animalButton.addEventListener('click', () => {
    animalDiv.classList.toggle('hidden');
});  