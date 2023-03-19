let input = document.getElementById('comment_input');
let box = document.getElementById('box');
let containerMain = document.getElementById('container_main');
let container = document.getElementById('container');
let counterText = document.getElementById('counter');
let counter = -1;

updateCounter();

input.addEventListener('keypress', (e) => {
    
    if(e.key=="Enter" && e.target.value != "") {

        const newComment = {
            text: e.target.value,
            like: 0
        }

        e.target.value = "";

        createNodeComment(newComment);
    }
});

function createNodeComment(comment) {
    let box = document.createElement('div');
    box.className = 'box';

    let text = document.createElement('p');
    text.innerHTML = comment.text;

    let btn = document.createElement('button');
    btn.innerText = 'Like ' + comment.like;

    box.appendChild(text);
    box.appendChild(btn);
    container.appendChild(box);

    updateCounter();

    btn.addEventListener('click', () => {
        comment.like++;
        btn.innerText = 'Like ' + comment.like;
    })
}

function updateCounter() {
    counter++;
    counterText.innerText = 'Comments: ' + counter;
}