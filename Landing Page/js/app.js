/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const sections = document.querySelectorAll("section");
const navbar = document.querySelector("#navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

const createElement = (elementType) => document.createElement(elementType);

// Function to determine which section is in view
const getActiveSection = () => {
  let activeSection;
  let smallestDistance = Infinity;

  sections.forEach((section) => {
    // Get position of section relative to the viewport
    const rect = section.getBoundingClientRect();

    // Calculate the distance from the top of section to the top of the viewport
    const distance = Math.abs(rect.top);

    if (distance < smallestDistance) {
      smallestDistance = distance;
      activeSection = section;
    }
  });

  return activeSection;
};

// Function to update the active section
const updateActiveSection = () => {
  const activeSection = getActiveSection();

  // Add "active" class to the active section and corresponding nav item
  activeSection.classList.add("active");
  document
    .querySelector(`li:has(a[href='#${activeSection.id}'])`)
    .classList.add("active");

  // Remove "active" class from all other sections and nav items
  sections.forEach((section) => {
    if (section !== activeSection) {
      section.classList.remove("active");
      document
        .querySelector(`li:has(a[href='#${section.id}'])`)
        .classList.remove("active");
    }
  });
};
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
sections.forEach((section) => {
  const liElement = createElement("li");
  const aElement = createElement("a");
  aElement.classList.add("menu__link");
  aElement.href = `#${section.id}`;
  aElement.innerHTML = section.dataset.nav;
  liElement.appendChild(aElement);
  navbar.appendChild(liElement);
});

// Call updateActiveSection on page load and scroll events
document.addEventListener("DOMContentLoaded", updateActiveSection);
document.addEventListener("scroll", updateActiveSection);

// Scroll to anchor ID using scrollTO event
// Get all nav links on the page
const navLinks = document.querySelectorAll("nav li a");

// Add click event listener to each nav link
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    // Get ID of the section to scroll
    const sectionId = link.getAttribute("href");

    // Get corresponding section element
    const section = document.querySelector(sectionId);

    // Scroll section into the view
    section.scrollIntoView({ behavior: "smooth" });
  });
});

/**
 * End Main Functions
 * Begin Events
 *
 */
