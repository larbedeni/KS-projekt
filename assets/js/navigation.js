// Function to handle the navigation behavior
function handleNavigation() {
  // Remove active class from all num elements
  const nums = document.querySelectorAll('.num');
  nums.forEach(num => {
    num.classList.remove('active');
  });

  // Get the current page URL
  const currentPageUrl = window.location.href;

  // Add active class to the corresponding navigation link based on the current page
  if (currentPageUrl.includes('index.html') || currentPageUrl === '') {
    document.querySelector('.nav-link.home .num').classList.add('active');
  } else if (currentPageUrl.includes('about.html')) {
    document.querySelector('.nav-link:nth-child(2) .num').classList.add('active-white');
  } else if (currentPageUrl.includes('workshops.html')) {
    document.querySelector('.nav-link:nth-child(3) .num').classList.add('active-white');
  } else if (currentPageUrl.includes('contact.html')) {
    document.querySelector('.nav-link:nth-child(4) .num').classList.add('active');
  }

  // Change navigation items color on the home page
  if (currentPageUrl.includes('index.html')) {
    document.querySelector('.nav-bar').classList.add('home-page');
    document.querySelector('.nav-link').classList.add('home-page');
  }

  // Change navigation items color on the about page
  if (currentPageUrl.includes('about.html')) {
    document.querySelector('.nav-bar').classList.add('about-page');
    document.querySelector('.nav-link').classList.add('about-page');
    document.querySelector('.nav-link:nth-child(2)').classList.add('about-page');
    document.querySelector('.nav-link:nth-child(3)').classList.add('about-page');
    document.querySelector('.nav-link:nth-child(4)').classList.add('about-page');
  }

   // Change navigation items color on the workshops page
   if (currentPageUrl.includes('workshops.html')) {
    document.querySelector('.nav-bar').classList.add('workshops-page');
    document.querySelector('.nav-link').classList.add('workshops-page');
    document.querySelector('.nav-link:nth-child(2)').classList.add('workshops-page');
    document.querySelector('.nav-link:nth-child(3)').classList.add('workshops-page');
    document.querySelector('.nav-link:nth-child(4)').classList.add('workshops-page');
  }

  // Move navigation to top or bottom based on the current page
  if (currentPageUrl.includes('index.html') || currentPageUrl === '') {
    navBar.classList.add('move-bottom');
    navBar.classList.remove('move-top');
    
  } else {
    navBar.classList.add('move-top');
    navBar.classList.remove('move-bottom');
  }
}

// Function to load the navigation HTML file
function loadNavigation() {
  // Get the navigation container element¸
  const navigationContainer = document.getElementById('navigation');

  // Fetch the navigation HTML file
  fetch('../components/navigation.html')
    .then(response => response.text())
    .then(data => {
      // Insert the retrieved content into the navigation container
      navigationContainer.innerHTML = data;

      // Get the navigation element
      const navBar = document.getElementById('navBar');

      // Call the handleNavigation function to update the navigation based on the current page
      handleNavigation();
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Add event listener when the page finishes loading
document.addEventListener('DOMContentLoaded', function() {
  // Load the navigation HTML file
  loadNavigation();
});
