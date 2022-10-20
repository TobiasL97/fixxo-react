import React from 'react'

const ContactsForm = () => {
  return (
    <section className="contact-form">
        <div className="container-small">
            <h2>Come in Contact with Us</h2>
            <form>
                <div>
                    <input id="name"  type="text" placeholder="Your Name" />
                    <div id="nameErrorMessage" className="errorMessage"></div>
                </div>
                <div>
                    <input id="email" type="email" placeholder="Your Email" />
                    <div id="emailErrorMessage" className="errorMessage"></div>
                </div>
                <div className="textarea">
                    <textarea id="message"  placeholder="Comments"></textarea>
                    <div id="commentErrorMessage" className="errorMessage"></div>
                </div>
                <div>
                    <button className="button-theme" type="submit">Post Comments</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default ContactsForm