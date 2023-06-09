<template>
    <section id="accordian-section">
        <div id="accordian-text-box">
            <h2>FAQs</h2>
            <p>
                Explore the answers to some commonly asked questions about our pottery
                masterclasses and workshops.
            </p>

            <div id="accordian-box">
                <span v-for="(faq, index) in faqs" :key="index" @click="toggleAnswer(faq)">
                  <div class="accordian-q">
                    {{ faq.question }}
                  </div>
                  <div class="accordian-a" :class="{'accordian-active': faq.isOpen}">
                    {{ faq.answer }}
                  </div>
                </span>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Accordian",
    data() {
        return {
            faqs:[
                {
                    question: "Q: How can I register for the pottery masterclasses and workshops?",
                    answer: "A: To register, simply visit our website and fill out the registration form on the workshop section. Provide your name, email, and other required details, and click the 'REGISTER' button.",
                    isOpen: false,
                },
                {
                    question: "Q: Are the masterclasses and workshops free of charge?",
                    answer: " A: Yes, all our online pottery masterclasses and workshops are completely free. We believe in making pottery education accessible to everyone.",
                    isOpen: false,
                },
                {
                    question: "Q: What materials or equipment do I need for the masterclasses?",
                    answer: "A: The required materials and equipment vary for each masterclass. Once you register, you will receive a confirmation email containing a detailed list of materials needed for the specific workshop you have chosen. We strive to keep the required materials accessible and budget-friendly.",
                    isOpen: false,
                },
                {
                    question: "Q: Can beginners participate in the masterclasses?",
                    answer: "A: Absolutely! Our masterclasses are designed to cater to all skill levels, including beginners. Whether you're a novice or an experienced potter, you'll find valuable insights and techniques to enhance your pottery skills.",
                    isOpen: false,
                },
                {
                    question: " Q: How can I access the workshop materials and recordings?",
                    answer: "A: After registering for a masterclass, you will gain access to our online learning platform. There, you will find all the workshop materials, including instructional videos, presentation slides, and additional resources. You can access the platform anytime and revisit the materials as often as you like.",
                    isOpen: false,
                }
            ]
        };
    },
    methods: {
        toggleAnswer(faq) {
            faq.isOpen = !faq.isOpen;
        },
    }
}
</script>

<style scoped>

#accordian-section{
    background-color: #131313;
    border: 1px white solid;
}

#accordian-box{
    margin-top: 60px;
    margin-bottom: 80px;
}

#accordian-text-box{
    position: relative;
    text-align: center;
    margin-top: 60px;
    padding-left: 60px;
    padding-right: 60px;
}

#accordian-text-box p{
    margin-top: 30px;
    max-width: 45rem;
    margin-left: auto;
    margin-right: auto;
}
.accordian-a {
    display: none;
    padding: 20px;
    font-size: 1em;
    border: 0.5px solid white;
    color: black;
    background-color: #DEDEDE;
    text-align: left;
}

.accordian-q {
    font-size: 1em;
    padding: 20px;
    background-color: #131313;
    color: white;
    border: 0.5px white solid;
    cursor: pointer;
    text-align: left;
}

.accordian-q:hover{
    background-color: #282828;
}

.accordian-active {
    display: block;
}
</style>