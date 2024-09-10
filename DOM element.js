// Change the heading's text color to blue
const heading = document.getElementById('main-heading');
heading.style.color = 'blue';

// Change the text color of paragraphs with class 'text-content' to blue
const textContentParagraphs = document.getElementsByClassName('text-content');
for (let i = 0; i < textContentParagraphs.length; i++) {
    textContentParagraphs[i].style.color = 'blue';
}

// Change the background color of the container div to light grey
const containerDiv = document.querySelector('.container');
containerDiv.style.backgroundColor = '#f0f0f0';

// Select all paragraphs inside the container and change their text content
const containerParagraphs = containerDiv.querySelectorAll('p');
containerParagraphs.forEach(paragraph => {
    paragraph.textContent = "This content has been updated by JavaScript.";
});