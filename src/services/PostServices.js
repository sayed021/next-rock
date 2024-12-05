export async function getPosts( currentPage=1, parPage=10 ) {
    console.log(`Item par page=${parPage} -currentPage ${currentPage} * ${parPage} = ${(currentPage -1)*parPage}`);
    const _posts = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${parPage}&_start=${(currentPage -1)*parPage}`,
        {
            next: { revalidate: 60 }
        }
    );

    const allPost = await getAllPosts();
    const posts = await _posts.json(); 

    return {
        posts,
        totalPost: allPost.length
    };
}

export async function getAllPosts() {
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts`,
        {
            next: {
                revalidate: 60
            }
        }
    );
    return posts.json();
}

// Single post
export async function getPost(postId) {
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    
    const post = await posts.json()
    const allPost = await getAllPosts();

    return {
        post,
        totalPost: allPost.length
    }
}

export async function getPostComments(postId) {
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);

    return await posts.json();
    
}