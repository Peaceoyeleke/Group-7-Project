const modal = document.getElementById('postModal');
const closeButton = document.getElementsByClassName('close')[0];
const newPostButton = document.getElementById('newPostButton');
const savePostButton = document.getElementById('savePostButton');
const postList = document.getElementById('postList');
const postTitleInput = document.getElementById('postTitle');
const postContentTextarea = document.getElementById('postContent');

function openModal() {
    modal.style.display = 'block';
    postTitleInput.value = '';
    postContentTextarea.value = '';
}

function closeModal() {
    modal.style.display = 'none';
}

function savePost() {
    const title = postTitleInput.value;
    const content = postContentTextarea.value;
    if (title && content) {
        const post = document.createElement('div');
        post.classList.add('post');
        post.innerHTML = `<h2>${title}</h2><p>${content}</p>`;
        postList.appendChild(post);
        closeModal();
    } else {
        alert('Please enter title and content');
    }
}

closeButton.addEventListener('click', closeModal);
newPostButton.addEventListener('click', openModal);
savePostButton.addEventListener('click', savePost);
