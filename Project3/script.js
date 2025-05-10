document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('post');

    if (postId) {
        // Single post
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(post => {
                const postDiv = document.getElementById('post');
                postDiv.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                    <a href="index.html">← Back to posts</a>
                `;
            });
    } else {
        // All posts
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => {
                const postsDiv = document.getElementById('posts');
                posts.forEach(post => {
                    const postElement = document.createElement('div');
                    postElement.classList.add('post');
                    postElement.innerHTML = `
                        <h3>${post.title}</h3>
                        <p>${post.body.slice(0, 100)}...</p>
                        <button onclick="window.location.href='post.html?post=${post.id}'">Read More</button>
                    `;
                    postsDiv.appendChild(postElement);
                });
            });
    }
});