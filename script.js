window.onload = () => {
    if (window.scrollY > 80) {
        document.querySelector('.top-navbar .home-secton').classList.add('active1');
    }
    else {
        document.querySelector('.top-navbar .home-secton').classList.remove('active1');
    }
    fadeOut();
}
function loader() {
    document.querySelector(".load-container").classList.add("active1")
}
function fadeOut() {
    setTimeout(loader, 4000)
}