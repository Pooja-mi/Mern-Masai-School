document.getElementById('fetchData').addEventListener('click', fetchData);

function fetchData() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = 'Loading...';

    // Using Dog API to fetch a random dog image
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Clear previous content
            outputDiv.innerHTML = '';
            // Display the dog image
            const img = document.createElement('img');
            img.src = data.message;
            img.alt = 'Random Dog Image';
            img.style.maxWidth = '100%';
            outputDiv.appendChild(img);
        })
        .catch(error => {
            outputDiv.innerHTML = `Error: ${error.message}`;
        });
}

// // Get the button and data display elements
// const fetchDataBtn = document.getElementById('fetchDataBtn');
// const dataDisplay = document.getElementById('dataDisplay');

// // Function to fetch data from Dog API
// function fetchDogImage() {
//     fetch('https://dog.ceo/api/breeds/image/random')
//         .then(response => {
//             // Check if the response is successful
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             // Clear any previous content
//             dataDisplay.innerHTML = '';

//             // Display the dog image
//             const img = document.createElement('img');
//             img.src = data.message;
//             dataDisplay.appendChild(img);
//         })
//         .catch(error => {
//             // Display an error message if something goes wrong
//             dataDisplay.innerHTML = `<p class="error">Error: ${error.message}</p>`;
//         });
// }

// // Add an event listener to the button to trigger the fetch
// fetchDataBtn.addEventListener('click', fetchDogImage);
