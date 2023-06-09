<template>
    <div id="news-popup">
        <div class="popup-content">
            <img src="src/assets/images/news-popup-img.png" alt="" />
            <h2>Join the Community</h2>
            <p>
                Join our newsletter today and be the first to receive updates on new
                workshops, exclusive offers, and insider tips from expert potters.
                Don't miss out on this opportunity to enhance your pottery skills and
                become part of our thriving community.
            </p>
            <div id="news-popup-inputs">
                <div
                    class="inputbox"
                    v-if="!showSuccess"
                >
                    <input
                        id="email-input"
                        v-model="email"
                        type="email"
                        placeholder="Enter E-mail"
                        required
                    />
                    <div id="email-error" class="input-error" v-if="errorText">
                        {{ errorText }}
                    </div>
                </div>
                <div
                    class="inputbox"
                    v-if="!showSuccess"
                >
                    <VueRecaptcha
                        class="recaptcha-box"
                        :sitekey="siteKey"
                        :load-recaptcha-script="true"
                        @verify="handleSuccess"
                        @error="handleError"
                    ></VueRecaptcha>
                    <input class="btn" id="btn-signup" type="submit" value="Sign Up" @click="submitForm" />
                </div>
            </div>
            <div id="news-popup-success" class="popup-success" v-if="showSuccess">
                You have successfully subscribed to our newsletter.
            </div>
        </div>
        <div class="btn-close" @click="close">
            <img src="src/assets/icons/icons8-close-100.png" alt="" />
        </div>
    </div>
</template>

<script>
import { VueRecaptcha } from 'vue-recaptcha';

export default {
    components: {VueRecaptcha},
    name: "NewsPopup",
    data() {
        return {
            email: "",
            showSuccess: false,
            errorText: "",
            recaptchaSuccess: false,
        };
    },
    computed: {
        siteKey() {
            return '6LfeYoEmAAAAAKFA86AJJhbUc6eXOn6GBcjW5xrH';
        },
    },
    methods: {
        close() {
            this.$emit('close');
        },
        submitForm() {
            if (this.email.length > 0 && this.isValidEmail(this.email)) {
                if (this.recaptchaSuccess) {
                    // Success
                    this.showSuccess = true;
                    this.errorText = "";
                } else {
                    // Fail
                    this.showSuccess = false;
                    this.errorText = "Please confirm that you are not a robot.";
                }
            } else {
                // Fail
                this.showSuccess = false;
                this.errorText = "Please enter a valid e-mail address.";
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
    }
}
</script>

<style scoped>

#news-popup{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    background-color: #DEDEDE;
    width: 600px;
    padding: 20px 50px;
    box-shadow:  15px 15px rgba(0,0,0,0.08);
    border: 1px black;
    border-style: solid;
    border-radius: 3px;

}

#news-popup .popup-content{
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction:column;
}

#news-popup .popup-content img{
    margin-top: 20px;
    max-width: 200px;
}

#news-popup .popup-content h2{
   margin: 30px 0 20px;
}

#news-popup .popup-content p{
    text-align: center;
}

#news-popup .popup-content .inputbox {
    position: relative;
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap
}


#news-popup .popup-content .inputbox input {
    font-size: 1em;
    font-family: 'Montserrat', sans-serif;
    margin-top: 5px;
}
#news-popup .popup-content .inputbox input {
    width: 25rem;
    height: 2.4em;
    border: 1px solid black;
    border-radius: 3px;
    padding: 5px 10px;
}
.btn-close{
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;
}

.btn-close img{
    width: 30px;
}

.blur {
    filter: blur(20px);
    pointer-events: none;
    animation: blur 2s ease;
}

@keyframes blur {
    0% {
        -webkit-filter: blur(0px);
        -moz-filter: blur(0px);
        -o-filter: blur(0px);
        -ms-filter: blur(0px);
    }
    50% {
        -webkit-filter: blur(20px);
        -moz-filter: blur(20px);
        -o-filter: blur(20px);
        -ms-filter: blur(20px);
    }
}

</style>