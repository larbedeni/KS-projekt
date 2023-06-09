// Testimonial data
const testimonials = [
    {
      name: 'Emily',
      text: "Participating in the online pottery workshop was a game-changer for me! The step-by-step guidance and interactive sessions made it easy to learn and experiment with clay from the comfort of my own home. I never thought I could create such beautiful pottery pieces. It's an incredible feeling to see my artistic vision come to life. Thank you, Edminor, for unlocking my creativity!",
      image: '../assets/images/emily.jpg'
    },
    {
      name: 'James',
      text: "I can't recommend the online pottery workshop enough! As a busy professional, I never thought I'd have the time to pursue pottery. But Edminor's virtual classes allowed me to explore my passion at my own pace. The instructors were knowledgeable and supportive, offering personalized feedback that helped me improve my skills. It's amazing how pottery has become my ultimate stress-reliever. Joining this workshop was truly a life-changing experience!",
      image: '../assets/images/james.jpg'
    },
    {
      name: 'Sarah',
      text: "The online pottery masterclass by Edminor exceeded all my expectations. The virtual sessions were engaging, and the instructors made the complex techniques seem so approachable. I was amazed at how quickly I progressed, thanks to the clear demonstrations and expert guidance. The best part was connecting with other pottery enthusiasts from different parts of the world. The sense of community and shared passion made this workshop unforgettable.",
      image: '../assets/images/sarah.jpg'
    },
    {
      name: 'Michael',
      text: "I've always been drawn to pottery, and Edminor's online workshop was the perfect opportunity to dive into this ancient craft. From the fundamentals to advanced techniques, the comprehensive curriculum covered it all. The instructors' enthusiasm and dedication inspired me to push my boundaries and explore new artistic avenues. I'm proud to say that I've created pottery pieces that I never thought possible. This workshop has ignited a lifelong love for pottery.",
      image: '../assets/images/michael.jpg'
    },
    {
      name: 'Lisa',
      text: "Joining the online pottery workshop by Edminor was one of the best decisions I've made. The flexibility to learn at my own pace and the convenience of online classes made it accessible for me, even with a busy schedule. The instructors' passion for pottery was infectious, and their personalized guidance helped me refine my skills. The satisfaction of molding clay with my hands and witnessing it transform into beautiful pottery is truly indescribable. This workshop has reawakened my creativity and brought immense joy into my life.",
      image: '../assets/images/lisa.jpg'
    }
  ];
  
  // Elements
  const testimonialContent = document.getElementById('testimonial-content');
  const testimonialImage = document.getElementById('image');
  const prevButton = document.getElementById('prev-btn');
  const nextButton = document.getElementById('next-btn');
  
  // Variables
  let currentTestimonialIndex = 0;
  
  // Display initial testimonial
  displayTestimonial(currentTestimonialIndex);
  
  // Event listeners
  prevButton.addEventListener('click', showPreviousTestimonial);
  nextButton.addEventListener('click', showNextTestimonial);
  
// Function to display a testimonial
function displayTestimonial(index) {
    const testimonial = testimonials[index];
    testimonialContent.innerHTML = `
      <p>${testimonial.text}</p>
      <div class="testimonial-name">${testimonial.name}</div>
    `;
    testimonialImage.src = testimonial.image;
    testimonialImage.alt = testimonial.name;
  }
  // Function to show the previous testimonial
  function showPreviousTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
    displayTestimonial(currentTestimonialIndex);
  }
  
  // Function to show the next testimonial
  function showNextTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    displayTestimonial(currentTestimonialIndex);
  }