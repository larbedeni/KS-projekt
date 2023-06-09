<template>
  <section class="hero-home">
      <div class="hero-column">
          <div class="hero-text-box">
              <h1>Edminor</h1>
              <h2>Raw essence of pottery-making</h2>
          </div>
          <div class="hero-img">
              <img
                  class="hero-img-1"
                  src="src/assets/images/landing_img_1.png"
                  alt=""
              />
          </div>
      </div>
      <div class="hero-column">
          <img
              class="hero-img-2"
              src="src/assets/images/landing_img_2.png"
              alt=""
          />
          <div class="hero-about">
              <h2>Online Community</h2>
              <p>
                  Welcome to Edminor Pottery, a thriving pottery business and online
                  community dedicated to the art of pottery making. Whether you're a beginner or
                  an experienced potter, our workshops offer valuable insights,
                  techniques, and inspiration to enhance your skills. Don't miss out
                  on our latest updates, exclusive offers, and community events! Join
                  our newsletter and become part of the Edminor Pottery community
                  today. Let's shape clay and create together!
              </p>
              <div class="btn" id="btn-join-now" @click="showPopup">JOIN NOW</div>
          </div>
      </div>
      <NewsPopup
          v-show="isPopupVisible"
          @close="closePopup"
      >
      </NewsPopup>
  </section>
</template>

<script>
import NewsPopup from "../components/NewsPopup.vue";
export default {
    components: {NewsPopup},
    data() {
        return {
            isPopupVisible: false,
        };
    },
    methods: {
        showPopup() {
            this.isPopupVisible = true;
        },
        closePopup() {
            this.isPopupVisible = false;
        }
    }
}
</script>