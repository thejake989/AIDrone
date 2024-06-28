// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
  
      const targetElement = document.querySelector(this.getAttribute("href"));
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
  
  // Simple form validation for the contact form
  document.querySelector("#contactForm").addEventListener("submit", function (e) {
    let isValid = true;
    const formElements = this.elements;
  
    for (let i = 0; i < formElements.length; i++) {
      if (formElements[i].type !== "submit" && formElements[i].value.trim() === "") {
        isValid = false;
        formElements[i].classList.add("border-red-500");
      } else {
        formElements[i].classList.remove("border-red-500");
      }
    }
  
    if (!isValid) {
      e.preventDefault();
      alert("Please fill in all required fields.");
    }
  });
  
  // Initialize Fancybox for all images with the data-fancybox attribute
  $(document).ready(function () {
    $('[data-fancybox="gallery"]').fancybox({
      // Options for Fancybox
      buttons: [
        "zoom",
        "share",
        "slideShow",
        "fullScreen",
        "download",
        "thumbs",
        "close",
      ],
      loop: true,
    });
  });
  