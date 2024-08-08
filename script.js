let mobileNav = document.querySelector(".mobile-nav");
let hamburgerMenu = document.querySelector(".hamburger-menu img");
let mobileLinks = document.querySelectorAll(".overlay-content a");
let about = document.querySelector("#about");
let aboutImg = document.querySelector(".img-wrapper img");
let staggedNav = gsap.from(".mobile-nav nav ul li a", {
  paused: true,
  opacity: 0,
  yPercent: 50,
  stagger: 0.2,
  ease: "Power2.easeInOut",
});

function toggleNav() {
  mobileNav.classList.toggle("active");
  if (mobileNav.classList.contains("active")) {
    hamburgerMenu.src = "/images/icon-close.svg";
    staggedNav.play();
  } else {
    hamburgerMenu.src = "/images/icon-hamburger.svg";
  }
}
for (let i = 0; i < mobileLinks.length; i++) {
  const mobileLink = mobileLinks[i];
  mobileLink.addEventListener("click", () => {
    mobileNav.classList.remove("active");
    hamburgerMenu.src = "/images/icon-hamburger.svg";
  });
}
