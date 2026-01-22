document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector('.carousel-track');

    if (track) {
        // Clone all children to create a seamless loop
        const cards = Array.from(track.children);
        cards.forEach(card => {
            const clone = card.cloneNode(true);
            track.appendChild(clone);
        });
    }

    // Back to Top Button Logic
    const mybutton = document.getElementById("backToTop");

    if (mybutton) {
        window.onscroll = function () { scrollFunction() };
    }

    function scrollFunction() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    if (mybutton) {
        mybutton.addEventListener('click', function () {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
    }
});
