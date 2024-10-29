const hamb = document.querySelector(".hamb");
const navList = document.querySelector(".menu-overlay");

hamb.addEventListener("click", function() {
	navList.classList.toggle("active");
	hamb.classList.toggle("click");
})



document.addEventListener("scroll", function() {
    const elements = document.querySelectorAll(".animate-on-scroll");

    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // When the element comes into view
        if (position < windowHeight - 100) {
            element.classList.add("show");
        }
    });
});

