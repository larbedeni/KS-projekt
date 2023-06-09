<template>
    <section class="contact-section">
      <div class="contact-form">
        <div>
          <h2>Get in Touch</h2>
          <div>
            <p>Address: </p>
            <p class="bold">
                117 Riesaer Straße, Berlin
            </p>
          </div>
          <div>
            <p>E-mail: </p>
            <p class="bold">
                info@edminorpottery.com
            </p>
          </div>
        </div>
        <form class="registration-form" id="contact-form" action="">
          <label for="firstlastname">First and Last Name:*</label>
          <input
            type="text"
            id="firstlastname"
            class="input-field"
            required
            name="firstlastname"
            placeholder="Your First Name"
          />
          <label for="email">E-mail:*</label>
          <input
            type="email"
            name="email"
            class="input-field"
            required
            id="email"
            placeholder="Your E-mail"
          />
          <label for="message">Message:*</label>
          <textarea
            name="message"
            class="input-field"
            required
            id="message"
            placeholder="Write your message here"
          ></textarea>
          <input class="btn" id="contact-btn" type="submit" value="SEND" />
        </form>
      </div>
      <div class="contact-img"></div>
    </section>
  
</template>


