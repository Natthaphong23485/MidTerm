window.onscroll = () => {
    let top = window.scrollY;
    let nav = document.querySelector("nav");

    nav.classList.toggle("sticky", top > 65);
};