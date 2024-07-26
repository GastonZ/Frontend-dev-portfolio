import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { cyber_four } from '../../assets';

const Contact = () => {

  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const [formData, setFormData] = useState({
    from_name: '',
    user_email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_j38b1nq',
      'template_7d0z0qs',
      formData, {
      publicKey: 'OSOwRGBuyrs8__7vU'
    }
    )
      .then((response) => {
        setFormData({
          from_name: '',
          user_email: '',
          message: ''
        })
        setEmailSent(true);
      })
      .catch((error) => {
        setEmailSent(false);
        setEmailError(true);
      });
  };

  return (
    <div id='contact' className='min-h-screen flex justify-center items-center bg-n-7 '>
      <div className="max-w-md mx-auto p-8 rounded-lg ">
        <h2 className="text-[60px] mb-6 text-center">Contact Me</h2>
        <form className='input-container flex flex-col items-center' onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="from_name" className="block text-sm font-medium text-white">
              Name
            </label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              className="mt-1 block w-full sm:w-[250px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="user_email" className="block text-sm font-medium  text-white">
              Email
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              className="mt-1 block sm:w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block px-3 py-2 border w-full sm:w-[500px] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              rows="4"
              required
            ></textarea>
          </div>
          {
            emailSent ?
              <div className='flex flex-col items-center'>
                <p className='text-center'>Thank you for contacting me ! I'll get in touch soon !</p>
                <img src={cyber_four} className='rounded-full h-40 w-40' />
              </div>
              :
              <div className='flex flex-col items-center gap-4'>
                <button className="btn" type="submit">
                  <strong>SEND</strong>
                  <div id="container-stars">
                    <div id="stars"></div>
                  </div>
                  <div id="glow">
                    <div className="circle"></div>
                    <div className="circle"></div>
                  </div>
                </button>
                {
                  emailError ? <p>Failed to send email, please try again or later</p> : <></>
                }
              </div>
          }
        </form>
      </div>
    </div>
  );
};

export default Contact;
