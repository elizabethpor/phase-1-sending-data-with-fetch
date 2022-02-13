function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({name: name, email: email})
    })
    .then(response => response.json())
    .then(object => {
        console.log(object)
        console.log(object.id)
        const body = document.querySelector('body');
        const p = document.createElement('p');
        p.textContent = object.id;
        body.append(p);
    })
    .catch(error => {
        console.log(error.message)
        const body = document.querySelector('body');
        const p = document.createElement('p');
        p.textContent = error.message;
        body.append(p)
    });


};

submitData('Steve', 'steve@steve.com');
