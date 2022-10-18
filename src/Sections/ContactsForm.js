import React from 'react'

const ContactsForm = () => {
  return (
    <section class="contact-form">
        <div class="container-small">
            <h2>Come in Contact with Us</h2>
            <form onsubmit="submitForm(event)" novalidate>
                <div>
                    <input id="name" onkeyup="validate(event)"  type="text" placeholder="Your Name" />
                    <div id="nameErrorMessage" class="errorMessage"></div>
                </div>
                <div>
                    <input id="email" onkeyup="validate(event)"  type="email" placeholder="Your Email" />
                    <div id="emailErrorMessage" class="errorMessage"></div>
                </div>
                <div class="textarea">
                    <textarea id="message" onkeyup="validate(event)"  placeholder="Comments"></textarea>
                    <div id="commentErrorMessage" class="errorMessage"></div>
                </div>
                <div>
                    <button class="button-theme" type="submit">Post Comments</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default ContactsForm