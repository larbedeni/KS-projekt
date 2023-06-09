
<template>
  <body class="dark-background">
    <a id="top"></a>
    <section id="workshops-section-hero" class="workshops-section">
      <div id="workshops-hero-textbox">
        <p>New Date</p>
        <p class="date">July 20th, 2023</p>
        <h1>Edminor Masterclass</h1>
        <h3>
          Sign up for our next online workshop and masterclass. Join our
          exclusive community of pottery artists.
        </h3>
        <div id="btn-white" class="btn" @click="scrollToNextSection">
          SIGN UP
        </div>
      </div>
      <div class="carousel">
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image.src"
          :alt="image.alt"
          v-show="currentIndex === index"
        />
      </div>
      <div class="dots">
        <div
          class="dot"
          v-for="(dot, index) in dots"
          :key="index"
          :class="{ active: currentIndex === index }"
          @click="handleDotClick(index)"
        ></div>
      </div>
    </section>

    <section id="workshop-section-registration" ref="registrationSection">
      <div id="registration-text-box">
        <div>
          <h2 class="date">Registration Form</h2>
          <h2 class="date">Date: July 20th, 2023</h2>
        </div>
        <h1>Edminor Masterclass</h1>
        <h3>
          Fill out the registration form and sign up for our free online btn
          masterclass and workshop.
        </h3>
        <form class="registration-form" action="">
          <label for="firstname">First Name:*</label>
          <input
            type="text"
            id="firstname"
            v-model="first_name"
            class="input-field"
            required
            name="firstname"
            placeholder="Your First Name"
          />
            <div class="input-error" v-if="firstNameError">
                {{ firstNameError }}
            </div>
          <label for="lastname">Last Name:*</label>
          <input
            type="text"
            class="input-field"
            v-model="last_name"
            id="lastname"
            required
            name="lastname"
            placeholder="Your Last Name"
          />
            <div class="input-error" v-if="lastNameError">
                {{ lastNameError }}
            </div>
          <label for="email">E-mail:*</label>
          <input
            type="email"
            name="email"
            v-model="email"
            class="input-field"
            required
            id="email"
            placeholder="Your E-mail"
          />
            <div class="input-error" v-if="emailError">
                {{ emailError }}
            </div>
            <VueRecaptcha
                class="recaptcha-box"
                :sitekey="siteKey"
                :load-recaptcha-script="true"
                @verify="handleSuccess"
                @error="handleError"
            ></VueRecaptcha>
            <div class="input-error" v-if="recaptchaError">
                {{ recaptchaError }}
            </div>
          <input
            class="btn"
            id="btn-workshops"
            type="button"
            @click="submitForm"
            value="REGISTER"
          />
        </form>
        <p id="additional-info">
          The comprehensive schedule and esteemed facilitators for the workshops
          will be unveiled at a later juncture. All participants who have signed
          up will receive this information conveniently delivered to their
          registered email addresses.
        </p>
      </div>
    </section>

    <section class="banner"></section>

    <Testimonials></Testimonials>
    <Accordian></Accordian>
    <div id="back-to-top-btn-container">
      <a href="#" id="back-to-top-btn"></a>
    </div>
  </body>
</template>

<script>
import Accordian from "../components/Accordian.vue";
import Testimonials from "../components/Testimonials.vue";
import { VueRecaptcha } from 'vue-recaptcha';

export default {
  components: {Accordian, Testimonials, VueRecaptcha},
  data() {
    return {
        first_name: "",
        last_name: "",
        email: "",
        firstNameError: "",
        lastNameError: "",
        emailError: "",
        recaptchaError: "",
      images: [
        { src: "src/assets/images/workshops-carousel-img1.png", alt: "" },
        { src: "src/assets/images/workshops-carousel-img2.png", alt: "" },
        { src: "src/assets/images/workshops-carousel-img3.png", alt: "" },
      ],
      dots: Array.from({ length: 3 }),
      currentIndex: 0,
    };
  },
  mounted() {
    setInterval(this.switchImage, 3000);
  },
  computed: {
    siteKey() {
      return '6LfeYoEmAAAAAKFA86AJJhbUc6eXOn6GBcjW5xrH';
    },
  },
  methods: {
    scrollToNextSection() {
      const registrationSection = this.$refs.registrationSection;
      if (registrationSection) {
        registrationSection.scrollIntoView({ behavior: "smooth" });
      }
    },
    switchImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    handleDotClick(index) {
      this.currentIndex = index;
    },
      submitForm() {
          if (this.email.length <= 0 || !this.isValidEmail(this.email)) {
              this.showSuccess = false;
              this.emailError = "Please enter a valid e-mail address.";
          } else {
              this.emailError = "";
          }
          if (this.first_name.length <= 0) {
              // Fail
              this.showSuccess = false;
              this.firstNameError = "Please enter your first name.";
          } else {
              this.firstNameError = "";
          }
          if (this.last_name.length <= 0) {
              // Fail
              this.showSuccess = false;
              this.lastNameError = "Please enter your last name.";
          } else {
              this.lastNameError = "";
          }
          if (!this.recaptchaSuccess) {
              // Success
              this.showSuccess = true;
              this.recaptchaError = "Please confirm that you are not a robot.";
          } else {
              this.recaptchaError = "";
          }

          if (this.emailError === "" && this.firstNameError === "" && this.lastNameError === "" && this.recaptchaError === "") {
              this.$router.go()
          }
      },
      isValidEmail(email) {
          let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          return email.match(validRegex)
      },
      handleSuccess(error) {
          this.recaptchaSuccess = true;
      },
      handleError(error) {
          console.log(error)
          this.recaptchaSuccess = false;
      },
  },
};
</script>


<style scoped>
#workshop-section-registration{
  color: white;
}

.recaptcha-box {
    margin-top: 15px;
    margin-bottom: 15px;
}
</style>