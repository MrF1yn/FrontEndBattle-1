gsap.to(".loader", {
    duration: 2,
    height: "0",
    top: "100%",
    ease: "Expo.easeInOut",
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

function scrollToId(event, id, scrollAmount) {
    event.preventDefault();
    const element = document.getElementById(id);
    const offset = element.getBoundingClientRect().top + window.scrollY;
    const targetScroll = offset - scrollAmount;
    window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
    });
}

gsap.to(".swiper", {
    x: "+=100",
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
    },
});

const video = document.getElementById("myVideo");
video.addEventListener("click", () => {
    video.muted = false;
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
    }
});
