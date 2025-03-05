document.addEventListener("DOMContentLoaded", function () {
    let links = document.querySelectorAll(".rightmenu ul li a");
    let currentPage = window.location.pathname.split("/").pop() || "index.html";

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".btn:nth-child(1)").addEventListener("click", function () {
        window.location.href = "blogs.html";
    });

    document.querySelector(".btn:nth-child(2)").addEventListener("click", function () {
        window.location.href = "aboutus.html";
    });
});
