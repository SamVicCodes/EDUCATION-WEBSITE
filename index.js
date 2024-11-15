
window.addEventListener("scroll", () => {
   document.querySelector("nav").classList.toggle("window-scroll", scrollY > 30)
})


const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
   faq.addEventListener("click", () => {
      // Toggle the "open" class on the clicked FAQ
      faq.classList.toggle("open");

      // Select the icon within the clicked FAQ
      const faqIcon = faq.querySelector("i");

      // Check and update the icon's class
      if (faqIcon.className === "fa-solid fa-plus") {
         faqIcon.className = "fa-solid fa-minus"; // Change to minus
      } else {
         faqIcon.className = "fa-solid fa-plus"; // Change to plus
      }

      // Select the answer element
      const answer = faq.querySelector(".answer");

      // If the FAQ is open, set max-height to its scrollHeight, else set to 0
      if (faq.classList.contains("open")) {
         answer.style.maxHeight = `${answer.scrollHeight}px`; // Set max-height to the actual height of the answer
      } else {
         answer.style.maxHeight = `0`; // Reset max-height to 0
      }

      // Update aria-expanded attribute for accessibility
      faq.setAttribute("aria-expanded", faq.classList.contains("open"));
   });
});




// NAV MENU


const menu = document.querySelector(".menu");
const closeMenuIcon = document.querySelector(".close-menu");
const openMenuIcon = document.querySelector(".open-menu");

// Function to open the menu
openMenuIcon.addEventListener("click", () => {
   menu.style.display = "block";
   closeMenuIcon.style.display = "block";
   openMenuIcon.style.display = "none";
});

// Function to close the menu
closeMenuIcon.addEventListener("click", () => {
   closeMenu();
});

// Function to handle clicks outside the menu
document.addEventListener("click", (event) => {
   const isClickInsideMenu = menu.contains(event.target);
   const isClickOnIcons = openMenuIcon.contains(event.target) || closeMenuIcon.contains(event.target);

   if (!isClickInsideMenu && !isClickOnIcons) {
      closeMenu();
   }
});

// Function to close menu and toggle icons
function closeMenu() {
   menu.style.display = "none";
   closeMenuIcon.style.display = "none";
   openMenuIcon.style.display = "block";
}





