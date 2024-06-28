let menu = window.document.querySelector("#menu-bar");
let navbar = window.document.querySelector(".navbar");

//aparecer o navbar e trocar o icone do button
menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
}

//resetar tudo caso tenha um scroll quando o navbar estiver aberto
window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");

    if (window.scrollY > 60) {
        document.querySelector("#scroll-top").classList.add("active");
    } else {
        document.querySelector("#scroll-top").classList.remove("active");
    }
};

function loader() {
    document.querySelector(".loader-container").classList.add("fade-out");
}

function fadeout() {
    setInterval(loader, 3000);
}

window.onload = fadeout();