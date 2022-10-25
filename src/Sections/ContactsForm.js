import React, { useState } from 'react'

const ContactsForm = () => {
    const [contactForm, setContactForm] = useState({name: '', email: '', comment: ''})
    const [formErrors, setFormErrors] = useState({})
    const [Submitted, setSubmitted] = useState(false)

    const validate = (values) => {
        const errors = {}
        const regex_email = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

        if(!values.name) {
            errors.name = "You must enter a name"
        }

        if(!values.email) {
            errors.email = "You must enter an e-mail address"
        }
        else if (!regex_email.test(values.email)) {
            errors.email = "You must enter a valid e-mail address (eg. name@domain.com)"
        }

        if(!values.comment) {
            errors.comment = "You must enter a comment"
        }
        else if(values.comment.length < 5) {
            errors.comment = "Your comment must be longer than five characters"
        }

        if(Object.keys(errors).length === 0) {
            setSubmitted(true)
        }
        else {
            setSubmitted(false) 
        }


        return errors;
    }

    const handleChange = (e) => {
        const {id, value} = e.target
        setContactForm({...contactForm, [id]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(contactForm))
    }
    
    return (
    <section className="contact-form">
        <div className="container-small">
            <h2>Come in Contact with Us</h2>
            <form onSubmit={handleSubmit} noValidate>
                <div>
                    <input id="name"  type="text" placeholder="Your Name"  value={contactForm.name} onChange={handleChange}/>
                    <div id="nameErrorMessage" className="errorMessage">{formErrors.name}</div>
                </div>
                <div>
                    <input id="email" type="email" placeholder="Your Email" value={contactForm.email} onChange={handleChange}/>
                    <div id="emailErrorMessage" className="errorMessage">{formErrors.email}</div>
                </div>
                <div className="textarea">
                    <textarea id="message"  placeholder="Comments" value={contactForm.comment} onChange={handleChange}></textarea>
                    <div id="commentErrorMessage" className="errorMessage">{formErrors.comment}</div>
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