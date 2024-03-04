const loadPosts = async () => {


    const res2 = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data2 = await res2.json();

    displayPosts(data2);




}

const displayPosts = (posts) => {
    const postsContainer = document.getElementById('posts-container');

    posts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.classList = `card card-compact w-full min-w-[350px] bg-gray-100 shadow-xl`;
        postCard.innerHTML = `
        <figure class="px-5 pt-5"><img class="rounded-lg"
        src="${post.cover_image}" alt="Shoes" />
</figure>
<div class="card-body ">
    <div class="flex">
        <img class="h-6 w-6" src="images/calender.svg" alt="">
        <h3 class="text-sm text-gray-500">${post.author.posted_date ? post.author.posted_date : 'No publish date'}</h3>
    </div>
    <h2 class="card-title text-lg text-black font-bold">${post.title}</h2>
    <p class="text-gray-500 text-sm">${post.description}</p>
    <div class="card-actions mt-3">
        <div>
            <img class="h-11 w-11 rounded-full" src="${post.profile_image}" alt="">
        </div>
        <div>
            <h3 class="text-sm text-black font-bold">${post.author.name}</h3>
            <h3 class="text-xs text-gray-500">${post.author.designation ? post.author.designation : 'Unknown'}</h3>
        </div>
    </div>
</div>
        
        `;
        postsContainer.appendChild(postCard);



    })
};


loadPosts();