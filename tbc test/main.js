function addSliderBehavior(sliderId, prevArrowId, nextArrowId) {
    const slider = document.getElementById(sliderId);
    const prevArrow = document.getElementById(prevArrowId);
    const nextArrow = document.getElementById(nextArrowId);
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; // Adjust the multiplier for faster/slower scrolling
        slider.scrollLeft = scrollLeft - walk;
    });

    if (prevArrow && nextArrow) {
        prevArrow.addEventListener('click', () => {
            slider.scrollLeft -= slider.clientWidth; // Scroll one slider view left
        });

        nextArrow.addEventListener('click', () => {
            slider.scrollLeft += slider.clientWidth; // Scroll one slider view right
        });
    }
}

addSliderBehavior('slider-wrapper-1', 'prev1', 'next1');
addSliderBehavior('slider-wrapper-2', 'prev2', 'next2');


document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".navbar .drp-dwn");
    const dropdownMenus = document.querySelectorAll(".navbar .dropdown-menu");

    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener("click", function (event) {
            event.preventDefault();
            dropdowns.forEach((d) => d.classList.remove("active"));
            dropdown.classList.add("active");

            dropdownMenus.forEach((menu) => {
                if (menu.previousElementSibling === dropdown) {
                    menu.style.display = "block";
                } else {
                    menu.style.display = "none";
                }
            });
        });
    });

    document.addEventListener("click", function (event) {
        if (!event.target.closest(".navbar")) {
            dropdowns.forEach((dropdown) => dropdown.classList.remove("active"));
            dropdownMenus.forEach((menu) => {
                menu.style.display = "none";
            });
        }
    });
});