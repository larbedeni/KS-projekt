<template>
    <section id="workshops-section-testimonials">
        <div id="testimonials-text-box">
            <h2>Testimonials</h2>
            <p>
                Discover the power of pottery through heartfelt testimonials from our
                workshop participants. Be inspired by their stories of growth,
                creativity, and the joy found in our workshops. Join us and embark on
                your own transformative pottery journey today.
            </p>
            <div class="testimonial"
                 v-for="(testimonial, index) in testimonials"
                 :key="index"
                 :class="{'accordian-active': testimonial.isOpen}"
                 v-show="activeTestimonialIndex === index"
            >
                <div class="testimonial-text-box">
                    <div class="circular-image-frame">
                        <img :src="testimonial.src" id="image" alt="" />
                    </div>
                    <div class="slider-row">
                        <div id="prev-btn" class="custom-icon" @click="activeTestimonialIndex = (activeTestimonialIndex - 1 + testimonials.length) % testimonials.length"></div>
                        <div id="testimonial-content">
                            <p>{{testimonial.text}}</p>
                            <div class="testimonial-name">{{ testimonial.name }}</div>
                        </div>
                        <div id="next-btn" class="custom-icon" @click="activeTestimonialIndex = (activeTestimonialIndex + 1) % testimonials.length"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Testimonials",
    data() {
        return {
            activeTestimonialIndex: 0,
            testimonials: [
                {
                    name: 'Emily',
                    text: "Participating in the online pottery workshop was a game-changer for me! The step-by-step guidance and interactive sessions made it easy to learn and experiment with clay from the comfort of my own home. I never thought I could create such beautiful pottery pieces. It's an incredible feeling to see my artistic vision come to life. Thank you, Edminor, for unlocking my creativity!",
                    src: 'src/assets/images/emily.jpg'
                },
                {
                    name: 'James',
                    text: "I can't recommend the online pottery workshop enough! As a busy professional, I never thought I'd have the time to pursue pottery. But Edminor's virtual classes allowed me to explore my passion at my own pace. The instructors were knowledgeable and supportive, offering personalized feedback that helped me improve my skills. It's amazing how pottery has become my ultimate stress-reliever. Joining this workshop was truly a life-changing experience!",
                    src: 'src/assets/images/james.jpg'
                },
                {
                    name: 'Sarah',
                    text: "The online pottery masterclass by Edminor exceeded all my expectations. The virtual sessions were engaging, and the instructors made the complex techniques seem so approachable. I was amazed at how quickly I progressed, thanks to the clear demonstrations and expert guidance. The best part was connecting with other pottery enthusiasts from different parts of the world. The sense of community and shared passion made this workshop unforgettable.",
                    src: 'src/assets/images/sarah.jpg'
                },
                {
                    name: 'Michael',
                    text: "I've always been drawn to pottery, and Edminor's online workshop was the perfect opportunity to dive into this ancient craft. From the fundamentals to advanced techniques, the comprehensive curriculum covered it all. The instructors' enthusiasm and dedication inspired me to push my boundaries and explore new artistic avenues. I'm proud to say that I've created pottery pieces that I never thought possible. This workshop has ignited a lifelong love for pottery.",
                    src: 'src/assets/images/michael.jpg'
                },
                {
                    name: 'Lisa',
                    text: "Joining the online pottery workshop by Edminor was one of the best decisions I've made. The flexibility to learn at my own pace and the convenience of online classes made it accessible for me, even with a busy schedule. The instructors' passion for pottery was infectious, and their personalized guidance helped me refine my skills. The satisfaction of molding clay with my hands and witnessing it transform into beautiful pottery is truly indescribable. This workshop has reawakened my creativity and brought immense joy into my life.",
                    src: 'src/assets/images/lisa.jpg'
                }
            ],
        };
    },
    methods: {
        toggleAnswer(faq) {
            faq.isOpen = !faq.isOpen;
        },
        switchImage() {
            this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
        },
    },
    mounted() {
        setInterval(this.switchImage, 3000);
    },
}
</script>

<style scoped>


#workshops-section-testimonials{
    background-color: #DEDEDE ;
    color: black;
    border: 1px white solid;
}

#testimonials-text-box{
    position: relative;
    text-align: center;
    margin-top: 60px;
    padding-left: 60px;
    padding-right: 60px;
}

#testimonials-text-box p{
    margin-top: 30px;
    max-width: 45rem;
    margin-left: auto;
    margin-right: auto;
}

.testimonial{
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
    position: relative;
    margin-bottom: 80px;
}


.testimonial-text-box{
    max-width: 40rem;
    height: 20rem;
    border-radius: 10px;
    border: 1px solid black;
    margin-left: auto;
    margin-right: auto;
    box-shadow:  15px 15px rgba(0,0,0,0.08);
}

.circular-image-frame{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 1px solid black;
    overflow: hidden;
    position: absolute;
    left: 50%;
    translate: -50%;
    top: -40px;
}

.circular-image-frame img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.slider-row{
    display: flex;
    position: relative;
    height: 100%;
}

#prev-btn{
    height: 50px;
    width: 50px;
    background-image: url('src/assets/icons/icons8-left-50.png');
    background-repeat: no-repeat;
    position: absolute;
    top: 8rem;
    left: -7rem;
}

#next-btn{
    height: 50px;
    width: 50px;
    background-image: url('src/assets/icons/icons8-right-50.png');
    background-repeat: no-repeat;
    position: absolute;
    top: 8rem;
    right: -7rem;
}

#prev-btn, #next-btn:hover {
    cursor: pointer;
}

#testimonial-content{
    margin-left: 40px;
    margin-right: 40px;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: italic;
}

.testimonial-name{
    position:absolute;
    bottom: 20px;
    right: 0px;
    font-size: 1.2em;
    font-style: italic;
}
</style>