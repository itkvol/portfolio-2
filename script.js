let nextBtn = document.querySelector(".swiper-button-next");

let click = () => {
  nextBtn.click();
};

let mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination"
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

let startSlider = setInterval(() => {
  click();
}, 5000);

let stopSlider = () => {
  clearInterval(startSlider);
};

menu.onclick = () => {
  let x = document.querySelector("#myTopnav");

  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  document.querySelector(".topnav.responsive")
    ? stopSlider()
    : (startSlider = setInterval(() => {
        click();
      }, 5000));
};

let sections = document.getElementsByTagName("section");

for (let i = 0; i < sections.length; i++) {
  sections[i].onclick = () => {
    let x = document.querySelector("#myTopnav");

    if (x.className === "topnav responsive") {
      x.className = "topnav";
    }
  };
}

let mainNavLinks = document.querySelectorAll(".topnav>a");

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY + 200;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});
