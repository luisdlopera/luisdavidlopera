const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

function anclas(e) {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href");
    const targetPosition = document.querySelector(targetId).offsetTop;

    window.scrollTo({
        top: targetPosition - 120,
        behavior: "smooth"
    });
}

for (let i = 0; i < navLinks.length; i++) {
    const link = navLinks[i];
    link.addEventListener("click", anclas);
}