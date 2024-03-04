function addTitle(title, viewCount) {
    const discussionTitle = document.createElement('h3');
    discussionTitle.textContent = title;

    const discussionViewCount = document.createElement('h3');
    discussionViewCount.textContent = viewCount;

    const titleContainer = document.querySelector('.title-container');
    titleContainer.appendChild(discussionTitle);

    const viewCountContainer = document.querySelector('.view-count-container');
    viewCountContainer.textContent = viewCount;
}
