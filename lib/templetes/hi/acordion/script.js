// Detect if user intent is to use keyboard to tab around the page
// This is used to apply focus states to elements for these users
document.body.addEventListener('keydown', function(event) {
    if (event.keyCode === 9) {
        document.body.classList.add('using-keyboard');
    }
});

document.body.addEventListener('mousedown', function() {
    document.body.classList.remove('using-keyboard');
});