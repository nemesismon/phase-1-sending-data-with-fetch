// Add your code here

function submitData(userName, userEmail) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({
            name: `${userName}`,
            email: `${userEmail}`,
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let idDisplay = document.createElement('p');
        idDisplay.innerHTML = `<p>${data.id}</p>`;
        document.querySelector('body').appendChild(idDisplay);
    })
    .catch(error => {
        console.log(error);
        alert('Unauthorized Access');
        let errorDisplay = document.createElement('p');
        errorDisplay.innerHTML = `<p> Unauthorized Access </p>`;
        document.querySelector('body').appendChild(errorDisplay);
    });
}