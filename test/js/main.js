const selectElems = document.querySelectorAll(".select-item");

selectElems.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    const currentElem = e.target.parentNode;
    currentElem.classList.toggle("active");
  });
});

const swiper = new Swiper(".swiper-container", {
  direction: "vertical",
  freeMode: true,
  freeModeMinimumVelocity: 0.4,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  mousewheel: {
    sensitivity: 0.4,
  },
});

const tabsBtn = document.querySelectorAll(".downloads-tab__top-btn");
const tabsItems = document.querySelectorAll(".downloads-tab__content");
const aside = document.querySelector('.downloads-aside')

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
  item.addEventListener("click", function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains("active")) {
      tabsBtn.forEach(function (item) {
        item.classList.remove("active");
      });

      tabsItems.forEach(function (item) {
        item.classList.remove("active");
      });

      currentBtn.classList.add("active");
      currentTab.classList.add("active");

      if (tabId === '#tab_2') {
        console.log('asd')
      }
    }
  });
}

document.querySelector(".downloads-tab__top-btn").click();
