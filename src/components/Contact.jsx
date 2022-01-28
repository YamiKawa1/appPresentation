import React from 'react';

function Contact() {
  return (
    <div id='contact'>
        <h1>Send me an email</h1>
        <div className='contact-input'>
            <input type="email" placeholder='examplegmail.com' />
            <a href="#">Contact</a>
        </div>
    </div>
    )
}

export default Contact;
