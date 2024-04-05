const authModal = document.getElementById('authModal');
const postModal = document.getElementById('postModal');
const commentModal = document.getElementById('commentModal');
const closeButtons = document.querySelectorAll('.close');
const registerButton = document.getElementById('registerButton');
const loginButton = document.getElementById('loginButton');
const logoutButton = document.getElementById('logoutButton');
const newPostButton = document.getElementById('newPostButton');
const savePostButton = document.getElementById('savePostButton');
const saveCommentButton = document.getElementById('saveCommentButton');

closeButtons.forEach(button => {
    button.addEventListener('click', closeModal);
});

registerButton.addEventListener('click', () => {
    openModal('Register');
});

loginButton.addEventListener('click', () => {
    openModal('Login');
});

logoutButton.addEventListener('click', () => {
    
    toggleAuthenticated(false);
});


newPostButton.addEventListener('click', () => {
    openModal('New Post');
});

savePostButton.addEventListener('click', savePost);

saveCommentButton.addEventListener('click', saveComment);

function openModal(title) {
    document.getElementById('modalTitle').innerText = title;
    authModal.style.display = 'block';
}

function closeModal() {
    authModal.style.display = 'none';
    postModal.style.display = 'none';
    commentModal.style.display = 'none';
}
function savePost() {
    closeModal();
}

function saveComment() {
    closeModal();
}


function toggleAuthenticated(isAuthenticated) {
    if (isAuthenticated) {
        newPostButton.style.display = 'block';
        logoutButton.style.display = 'block';
        registerButton.style.display = 'none';
        loginButton.style.display = 'none';
    } else {
        newPostButton.style.display = 'none';
        logoutButton.style.display = 'none';
        registerButton.style.display = 'block';
        loginButton.style.display = 'block';
    }
}

function authenticate(username, password) {
    if (username === 'user' && password === 'password') {
        toggleAuthenticated(true);
        closeModal();
    } else {
        alert('Invalid username or password');
    }
}

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
