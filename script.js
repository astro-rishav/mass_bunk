document.getElementById('detailsButton').addEventListener('click', function() {
    const details = document.getElementById('details');
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
});
