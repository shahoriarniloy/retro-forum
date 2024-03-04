const searchDiscussion = async (searchText) => {
    const res3 = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`);
    const data3 = await res3.json();
    const sdiscussions = data3.posts;

    if (sdiscussions.length === 0) {
        alert('No Matching Categories Found')
    } else {
        displaySearchedDiscussions(sdiscussions);

        
    }
    
}



const displaySearchedDiscussions = sdiscussions => {

    const discussionContainer = document.getElementById('discussion-container');
    discussionContainer.innerHTML = '';
    sdiscussions.forEach(discussion => {
        const discussionCard = document.createElement('div');
        discussionCard.classList = `lg:w-[772px] w-full min-w-fit h-fit bg-indigo-400 bg-opacity-10 rounded-3xl border border-indigo-400 lg:py-8 lg:px-2 p-4 flex gap-6 mt-4`;
        const indicatorBackgroundColor = discussion.isActive ? 'bg-green-500 border-green-500' : 'bg-red-500 border-red-500';
        discussionCard.innerHTML = `


        <div class="indicator">
  <span class="indicator-item badge badge-secondary ${indicatorBackgroundColor}"></span> 
  <div class="grid w-32 h-32 bg-base-300 place-items-center">
  <img src="${discussion.image}" /></div>
</div>

                    <div class="flex flex-col">

                    <div class="flex gap-5">
                        <h3 class="text-sm lg:text-base text-black font-semibold">#${discussion.category}</h3>
                        <h3 class="text-sm lg:text-base text-black font-semibold">Author : ${discussion.author.name} </h3>
                    </div>
                    <div>
                    <h3 class="text-lg lg:text-sm font-extrabold">${discussion.title}</h3>
                    <p class="text-base lg:text-sm text-slate-900 font-semibold pt-4 ">${discussion.description}</p>
                    <hr class="border-dashed my-5">
                    </div>
                    <div class="flex  justify-between">
                        <div class="flex  lg:flex-row flex-col gap-8">
                            <div class="flex gap-4">
                                <img class="h-5 w-5 lg:h-[21px] lg:w-[21px]" src="images/tabler-icon-message-2.svg"
                                    alt="">
                                <h3 class="text-base lg:text-lg text-slate-900">${discussion.comment_count}</h3>
                            </div>
                            <div class="flex gap-4">
                                <img class="h-5 w-5 lg:h-[21px] lg:w-[21px]" src="images/tabler-icon-eye.svg" alt="">
                                <h3 class="text-base lg:text-lg text-slate-900">${discussion.view_count}</h3>
                            </div>
                            <div class="flex gap-4">
                                <img class="h-5 w-5 lg:h-[21px] lg:w-[21px]" src="images/tabler-icon-clock-hour-9.svg"
                                    alt="">
                                <h3 class="text-base lg:text-lg text-slate-900">${discussion.posted_time}</h3>
                            </div>
                        </div>


                        <img class="h-7 w-auto lg:h-[26px] lg:w-[26px]" src="images/email.svg" alt="">
                    </div>
                    </div>
        `;
        discussionContainer.appendChild(discussionCard);

    })

}




const handleSearch = () => {
 
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    if(searchText){

        searchDiscussion(searchText);

    }

    else{
        alert('Please Enter A Valid Category');
    }
    
}

