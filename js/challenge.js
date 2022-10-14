let form = document.querySelector('#comment-form');
//let listprint = document.querySelector('#list')
form.addEventListener('submit', (e) => {
e.preventDefault();
// here should go the list of comments
listComments(e.target);
form.reset();
//console.log('Test')
})

function listComments(comments){
 console.log(comments);
    let li = document.createElement('li')
    li.textContent = comments;
    li.appendChild(comments)
}
