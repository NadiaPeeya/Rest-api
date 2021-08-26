function loadAllPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayPosts(data))
}
loadAllPosts();
function displayPosts(posts) {
    const container = document.getElementById('posts')
    for (const post of posts) {
        const div = document.createElement('div')
        div.classList.add('post') //alada alada article or post e style korar karone class sobgular eki add hoise
        div.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        `;
        container.appendChild(div);
        // console.log(post);

    }
}


//for posting
function addAPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'My new Post',
            body: 'This is my description',
            userId: 1
        }),
        //ki dhoroner data pathachhi as header
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })// for post request 
        .then(response => response.json())
        .then(data => console.log(data))
}