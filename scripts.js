let historyStack = [];

function navigateTo(pageId) {
    const currentPage = document.querySelector('.container:not(.hidden)');
    if (currentPage) {
        historyStack.push(currentPage.id);
        currentPage.classList.add('hidden');
    }
    document.getElementById(pageId).classList.remove('hidden');
}

function goBack() {
    const currentPage = document.querySelector('.container:not(.hidden)');
    currentPage.classList.add('hidden');
    const previousPageId = historyStack.pop();
    document.getElementById(previousPageId).classList.remove('hidden');
}

function goHome() {
    const currentPage = document.querySelector('.container:not(.hidden)');
    currentPage.classList.add('hidden');
    historyStack = [];
    document.getElementById('mainPage').classList.remove('hidden');
}
