function obtenerArticulos(){
    fetch('https://example.com/api/data', {
method: 'POST',
body: JSON.stringify({ name: 'John Doe', email: 'john.doe@example.com' }),
headers: {
'Content-Type': 'application/json'
}
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
}