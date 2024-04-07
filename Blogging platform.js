// Sample data for demonstration (replace with actual data from your backend)
let currentUser = null;
let posts = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post.', comments: [] },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.', comments: [] }
];

// Function to display home page with posts
function displayHomePage() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = '';
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <h3>Comments:</h3>
            <ul>
                ${post.comments.map(comment => `<li>${comment}</li>`).join('')}
            </ul>
            <textarea id="comment_${post.id}" placeholder="Add your comment"></textarea>
            <button onclick="addComment(${post.id})">Add Comment</button>
        `;
        mainContent.appendChild(postElement);
    });
}

// Function to display create post page
function displayCreatePostPage() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <h2>Create New Post</h2>
        <form id="createPostForm">
            <label for="title">Title:</label>
            <input type="text" id="title" required>
            <label for="content">Content:</label>
            <textarea id="content" required></textarea>
            <button type="submit">Create Post</button>
        </form>
    `;
    document.getElementById('createPostForm').addEventListener('submit', createPost);
}

// Function to handle login
function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    // Perform actual login/authentication here
    currentUser = username;
    closeLoginModal();
    // Display home page after login
    displayHomePage();
}

//function welcome
function welcome(){
    var username = document.getElementById("username").value;
    alert("Hi," + username + "!");
}

// Function to add a comment to a post
function addComment(postId) {
    const comment = document.getElementById(`comment_${postId}`).value;
    posts.find(post => post.id === postId).comments.push(comment);
    displayHomePage();
}

// Function to create a new post
function createPost(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const newPost = { id: posts.length + 1, title, content, comments: [] };
    posts.push(newPost);
    displayHomePage();
}

// Function to open login modal
function openLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
}

// Function to close login modal
function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

// Event listeners
document.getElementById('loginForm').addEventListener('submit', login);
document.getElementById('homeLink').addEventListener('click', displayHomePage);
document.getElementById('createPostLink').addEventListener('click', displayCreatePostPage);
document.getElementById('logoutLink').addEventListener('click', () => {
    currentUser = null;
    displayHomePage();
});

// Initial display
if (currentUser) {
    displayHomePage();
} else {
    openLoginModal();
}
