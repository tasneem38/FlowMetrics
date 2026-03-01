// Navbar shrink + mobile menu + scroll reveal
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".nav");
    const burger = document.querySelector("#burger");
    const mobileMenu = document.querySelector("#mobileMenu");

    // Shrink navbar on scroll
    const onScroll = () => {
        if (!nav) return;
        if (window.scrollY > 14) nav.classList.add("shrink");
        else nav.classList.remove("shrink");
    };
    window.addEventListener("scroll", onScroll);
    onScroll();

    // Mobile menu toggle
    if (burger && mobileMenu) {
        burger.addEventListener("click", () => {
            mobileMenu.classList.toggle("open");
        });
        // Close when clicking a link
        mobileMenu.querySelectorAll("a").forEach(a => {
            a.addEventListener("click", () => mobileMenu.classList.remove("open"));
        });
    }

    // Scroll reveal
    const reveals = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
        (entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) e.target.classList.add("show");
            });
        },
        { threshold: 0.14 }
    );
    reveals.forEach((el) => io.observe(el));
});