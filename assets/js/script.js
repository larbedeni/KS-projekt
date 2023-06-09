// Scroll to the top of the page
function scrollToTop() {
  // Check if the browser supports the 'scrollBehavior' property
  if ('scrollBehavior' in document.documentElement.style) {
    // Modern browsers with smooth scrolling support
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  } else {
    // Fallback for browsers that do not support smooth scrolling
    smoothScrollTo(0, 500); // Adjust the duration (500ms) as desired
  }
}

// Workshops: on the button click scroll to the ancher point
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const topOffset = 100; // Adjust the desired top offset value

    const sectionTop = section.offsetTop - topOffset;
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    });
}

  
// Workshops: accordian
const mainEle = document.querySelectorAll(".accordian-q");
const conEle = document.querySelectorAll(".accordian-a");

const clearActive = () => {
    conEle.forEach(ele => {
        ele.classList.remove("accordian-active");
    });
};

mainEle.forEach(ele => {
    ele.addEventListener('click', event => {
        // console.log(ele.nextElementSibling);
        // clearActive();
        ele.nextElementSibling.classList.toggle("accordian-active");
        // ele.nextElementSibling.classList.add("active");
    });
});
