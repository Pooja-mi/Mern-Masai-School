// Function to change the button color when clicked
function handleClick(event) {
    event.target.style.backgroundColor = 'lightblue';
}
// Display click message below the button
const clickMessageId = event.target.id.replace('btn', 'click-message');
document.getElementById(clickMessageId).innerText = 'Button ' + event.target.id.replace('btn', '') + ' clicked!';

// Function to display the message when mouseover happens
function handleMouseOver(event) {
    const messageId = event.target.id.replace('btn', 'message');
    document.getElementById(messageId).style.display = 'block';
}

// Function to hide the message when mouseout happens
function handleMouseOut(event) {
    const messageId = event.target.id.replace('btn', 'message');
    document.getElementById(messageId).style.display = 'none';
}

// Function to hide the button when double-clicked
function handleDoubleClick(event) {
    event.target.style.display = 'none';
}

// Attaching event listeners to each button
document.getElementById('btn1').addEventListener('click', handleClick);
document.getElementById('btn1').addEventListener('mouseover', handleMouseOver);
document.getElementById('btn1').addEventListener('mouseout', handleMouseOut);
document.getElementById('btn1').addEventListener('dblclick', handleDoubleClick);

document.getElementById('btn2').addEventListener('click', handleClick);
document.getElementById('btn2').addEventListener('mouseover', handleMouseOver);
document.getElementById('btn2').addEventListener('mouseout', handleMouseOut);
document.getElementById('btn2').addEventListener('dblclick', handleDoubleClick);

document.getElementById('btn3').addEventListener('click', handleClick);
document.getElementById('btn3').addEventListener('mouseover', handleMouseOver);
document.getElementById('btn3').addEventListener('mouseout', handleMouseOut);
document.getElementById('btn3').addEventListener('dblclick', handleDoubleClick);
