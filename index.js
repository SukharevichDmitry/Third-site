function showLoadingScreen(pipedriveUrl) {
    document.getElementById('loading-screen').style.display = 'flex';
    window.location.href = pipedriveUrl;
}

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const pipedriveUrl = urlParams.get('url');

    if (pipedriveUrl) {
        document.getElementById('view-details-link').addEventListener('click', function() {
            showLoadingScreen(pipedriveUrl);
        });
    } else {
        console.error('URL Pipedrive не найден.');
    }
};
