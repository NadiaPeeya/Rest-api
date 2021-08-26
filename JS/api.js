function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json()) //response ke json ane java script er object e transfer kore 
        .then(data => console.log(data))
}


function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => console.log(data))
}
// loadPosts() //function call kore dile click korar dorkar pore na

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())// fetch ke call korar por jei response ta pabo take json e convert korte hobe
        .then(data => displayUsers(data))// calling function for watchihng data 
}
function displayUsers(data) { //bair theke pathanor jonno parameter dite hobe
    // console.log(data); //emne ase array er moton it means array of object akare
    for (const user of data) {
        const ul = document.getElementById('users')//loop through kore bar bar ul guli ke antesi
        const li = document.createElement('li')//loop er moddhe prottekba{r li create kortesi
        li.innerText = `name: ${user.name} email: ${user.email} adress: ${user.adress}`;
        ul.appendChild(li);
        console.log(ul);

    }
}
