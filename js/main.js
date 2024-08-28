document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("main-header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      // Change '50' to the scroll position you want
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});
function menu() {
  document.querySelector(".resp-menu").classList.toggle("menu-open");
  document.querySelector("#main-header").classList.toggle("menu-openburger");
}
const items = document.querySelectorAll("#acordian1 button");
const items2 = document.querySelectorAll("#acordian2 button");
const items3 = document.querySelectorAll("#acordian3 button");
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  // if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  // }/
}
function toggleAccordion2() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items2.length; i++) {
    items2[i].setAttribute("aria-expanded", "false");
  }

  // if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  // }
}
function toggleAccordion3() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items3.length; i++) {
    items3[i].setAttribute("aria-expanded", "false");
  }

  // if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  // }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));
items2.forEach((item) => item.addEventListener("click", toggleAccordion2));
items3.forEach((item) => item.addEventListener("click", toggleAccordion3));

document.addEventListener("DOMContentLoaded", function () {
  const lazyLoadVideos = document.querySelectorAll("video.lazy-load");

  if ("IntersectionObserver" in window) {
    let lazyVideoObserver = new IntersectionObserver(function (
      entries,
      observer
    ) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          let lazyVideo = entry.target;
          let sources = lazyVideo.querySelectorAll("source");
          sources.forEach(function (source) {
            source.src = source.dataset.src;
          });
          lazyVideo.load();
          lazyVideo.classList.add("loaded");
          lazyVideoObserver.unobserve(lazyVideo);
        }
      });
    });

    lazyLoadVideos.forEach(function (lazyVideo) {
      lazyVideoObserver.observe(lazyVideo);
    });
  } else {
    // Fallback for older browsers
    let lazyLoadThrottleTimeout;
    function lazyLoad() {
      if (lazyLoadThrottleTimeout) {
        clearTimeout(lazyLoadThrottleTimeout);
      }

      lazyLoadThrottleTimeout = setTimeout(function () {
        let scrollTop = window.pageYOffset;
        lazyLoadVideos.forEach(function (video) {
          if (video.offsetTop < window.innerHeight + scrollTop) {
            let sources = video.querySelectorAll("source");
            sources.forEach(function (source) {
              source.src = source.dataset.src;
            });
            video.load();
            video.classList.add("loaded");
          }
        });
        if (lazyLoadVideos.length === 0) {
          document.removeEventListener("scroll", lazyLoad);
          window.removeEventListener("resize", lazyLoad);
          window.removeEventListener("orientationchange", lazyLoad);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
    window.addEventListener("orientationchange", lazyLoad);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const lazyLoadImages = document.querySelectorAll("img.lazy-load");

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function (
      entries,
      observer
    ) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.add("loaded");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyLoadImages.forEach(function (lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Fallback for older browsers
    let lazyLoadThrottleTimeout;
    function lazyLoad() {
      if (lazyLoadThrottleTimeout) {
        clearTimeout(lazyLoadThrottleTimeout);
      }

      lazyLoadThrottleTimeout = setTimeout(function () {
        let scrollTop = window.pageYOffset;
        lazyLoadImages.forEach(function (img) {
          if (img.offsetTop < window.innerHeight + scrollTop) {
            img.src = img.dataset.src;
            img.classList.add("loaded");
          }
        });
        if (lazyLoadImages.length === 0) {
          document.removeEventListener("scroll", lazyLoad);
          window.removeEventListener("resize", lazyLoad);
          window.removeEventListener("orientationchange", lazyLoad);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
    window.addEventListener("orientationchange", lazyLoad);
  }


  console.log("DOMContentLoaded event fired");
  const picchangediv = document.getElementById("capab");
  if (picchangediv) {
    const accordionButtons = document.querySelectorAll(
      ".accordion-itempic button"
    );
    const bgVideoDiv = document.querySelector(".bg-video");

    if (bgVideoDiv) {
      console.log("bgVideoDiv found");

      const imageElement = bgVideoDiv.querySelector("img");
      imageElement.src =
        "https://cotech.s3.ap-south-1.amazonaws.com/cotech-website/images/new-images/AIAssistant.png";

      accordionButtons.forEach((button) => {
        button.addEventListener("click", function () {
          const imageSrc = this.getAttribute("data-image-src");
          console.log("Changing image src to:", imageSrc);
          imageElement.classList.remove("zoomin");
          imageElement.src = imageSrc;
      

          // Force a reflow to reset the animation
          void imageElement.offsetWidth;

          imageElement.onload = () => {
           
              imageElement.classList.add("zoomin");
           // 500 milliseconds = 0.5 seconds
          };
          if (imageSrc) {
            if (
              imageSrc ==
              "https://cotech.s3.ap-south-1.amazonaws.com/cotech-website/images/new-images/AIpredictive.png"
            ) {
              imageElement.classList.add("predictive");
              imageElement.classList.remove("aiar");
            } else if (
              imageSrc ==
              "https://cotech.s3.ap-south-1.amazonaws.com/cotech-website/images/new-images/AI-ARvi.png"
            ) {
              imageElement.classList.add("aiar");
              imageElement.classList.remove("predictive");
            } else {
              imageElement.classList.remove("aiar");
              imageElement.classList.remove("predictive");
            }
          }
        });
      });
    } else {
      console.error("bgVideoDiv not found");
    }
  }



  // --------------feature page image loaded
  document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fadeup");

    const observerOptions = {
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target); // Stop observing once the animation is triggered
        }
      });
    }, observerOptions);

    fadeElements.forEach((element) => {
      observer.observe(element);
    });
  });
  const fadeElementsdiv = document.querySelectorAll(".fadeup");

  const observerOptions = {
    threshold: 0.1, // Trigger when 10% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      } else {
        entry.target.classList.remove("animate");
      }
    });
  }, observerOptions);

  fadeElementsdiv.forEach((element) => {
    observer.observe(element);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const targetDiv = document.getElementById("target-div");

  function isElementInViewport(element, offset = 0) {
    if (element) {
      const rect = element.getBoundingClientRect();
      return rect.top < window.innerHeight - offset && rect.bottom > offset;
    }
  }

  function onScroll() {
    if (isElementInViewport(targetDiv, 300)) {
      targetDiv.classList.add("in-view");
    } else {
      if (targetDiv) {
        targetDiv.classList.remove("in-view");
      }
    }
  }

  document.addEventListener("scroll", onScroll);
  window.addEventListener("resize", onScroll);
  onScroll(); // Initial check in case the element is already in view on load

  document.querySelectorAll(".subscribeClose").forEach((svg) => {
    svg.addEventListener("click", () => {
      svg.parentNode.closest(".error_sub").style.display = "none";
      document.getElementById("exampleInputEmail1").value = "";
    });
  });

  
  
function menu() {
  document.querySelector(".resp-menu").classList.toggle("menu-open");
  document.querySelector("#main-header").classList.toggle("menu-openburger");
}




const sliderContainer2 = document.querySelector('.slider-container-new');
const slider2 = document.querySelector('.slider2');
const slides2 = document.querySelectorAll('.slide2');
const lines2 = document.querySelectorAll('.line2');

let currentIndex = 0;
let scrollTimeout = null;

if (slider2) {
  slider2.addEventListener('wheel', (e) => {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(() => {
      if (e.deltaY > 0) {
        if (currentIndex < slides2.length - 1) {
          currentIndex++;
        }
      } else if (e.deltaY < 0) {
        if (currentIndex > 0) {
          currentIndex--;
        }
      }
      scrollToSlide(currentIndex);
      updateActiveLine();
    }, 100); // debounce for 100ms
  });
  slider2.addEventListener('touchmove', () => {
    updateActiveLine();
  });
}


function scrollToSlide(index) {
  const sliderRect = slider2.getBoundingClientRect();
  const slideRect = slides2[index].getBoundingClientRect();
  const scrollPosition = slideRect.top - sliderRect.top + slider2.scrollTop;

  slider2.scrollTo({
    top: scrollPosition,
    behavior: 'smooth'
  });
}
function updateActiveLine() {
  lines2.forEach((line, index) => {
    line.classList.toggle('active', index === currentIndex);
  });
  slides2.forEach((slide, index) => {
    slide.classList.toggle('active', index === currentIndex);
  });
}




const sliderContainer22 = document.querySelector('.slider-container-new2');
const slider22 = document.querySelector('.slider22');
const slides22 = document.querySelectorAll('.slide22');
const lines22 = document.querySelectorAll('.line22');

let currentIndex2 = 0;
let scrollTimeout2 = null;

if (slider22) {
  slider22.addEventListener('wheel', (e) => {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(() => {
      if (e.deltaY > 0) {
        if (currentIndex2 < slides22.length - 1) {
          currentIndex2++;
        }
      } else if (e.deltaY < 0) {
        if (currentIndex2 > 0) {
          currentIndex2--;
        }
      }
      scrollToSlide2(currentIndex2);
      updateActiveLine2();
    }, 100); // debounce for 100ms
  });
  slider22.addEventListener('touchmove', () => {
    updateActiveLine2();
  });
}


function scrollToSlide2(index) {
  const sliderRect = slider22.getBoundingClientRect();
  const slideRect = slides22[index].getBoundingClientRect();
  const scrollPosition = slideRect.top - sliderRect.top + slider22.scrollTop;

  slider22.scrollTo({
    top: scrollPosition,
    behavior: 'smooth'
  });
}
function updateActiveLine2() {
  lines22.forEach((line, index) => {
    line.classList.toggle('active', index === currentIndex2);
  });
  slides22.forEach((slide, index) => {
    slide.classList.toggle('active', index === currentIndex2);
  });
};

});


const emailInput = document.getElementById('exampleInputEmail1');
        const errorMessage = document.getElementById('error2');

        // Simple email regex pattern for validation
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        // Add an event listener to the email input for real-time validation
        emailInput.addEventListener('input', function() {
            const email = emailInput.value;

            // Check if the email matches the pattern
            if (emailPattern.test(email)) {
                errorMessage.style.display = 'none'; // Clear error message if valid
            } else {
              errorMessage.style.display = 'block';
            }
        });
