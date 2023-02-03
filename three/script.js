var selector = document.querySelectorAll('.photo');
selector.forEach( item => { item.addEventListener('click', event => {
    var selectorOne = document.querySelector('.content_photo_right');
    selectorOne.innerHTML = item.innerHTML; 
})
});