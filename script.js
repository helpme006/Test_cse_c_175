document.getElementById('fetchButton').addEventListener('click', function() {
    const apiUrl = 'https://api.github.com/users';

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const first10Data = data.slice(0, 10);

            const dataContainer = document.getElementById('dataContainer');
            dataContainer.innerHTML = '';

            first10Data.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = `Name: ${item.name}, Email: ${item.email}, Phone: ${item.phone}`;
                dataContainer.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});


