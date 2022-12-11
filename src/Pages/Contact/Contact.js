import React from 'react';
// import img from '../../assets/contact.svg';

const Contact = () => {
  return (
    <div className='my-10'>
      <h2 className='text-center text-4xl underline'>Get in Touch</h2>
      
      <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-10'>
        {/* <div className='p-4 md:pl-0'>
          <img className='sm:w-3/4 border-2 border-indigo-500 rounded-md' src={img} alt="" />
        </div> */}

        <div className=' p-4 lg:col-span-2'>
          <h2 className='text-2xl font-semibold'>Contact Me</h2>
          <form className='mt-5'>
            <div className='space-y-5'>
              <div>
                <label htmlFor="name">Name</label>
                <input className='border block w-full px-4 py-2 rounded-md' type="text" placeholder='full Name' />
              </div>

              <div>
                <label htmlFor="name">Email</label>
                <input className='border block w-full px-4 py-2 rounded-md' type="email" placeholder='example@gmail.com' />
              </div>

              <div>
                <div>
                  <label htmlFor="name">Message</label>
                </div>
                <textarea className="textarea-bordered w-full textarea" placeholder="Bio"></textarea>
              </div>

              <button className='w-[100px] border px-4 py-1 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white duration-500'>Send</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

/* 

<p>I am a Front-end Web Developer. I love to use my creativity and make something new. That's why I love to work with React.js . Over the last year, I gather knowledge in various parts of web development such as React, MongoDB, firebase, Node, Express, ES6, JavaScript, CSS3, HTML5 from "programming-hero". My ultimate goal is to become an awesome full-stack web developer and also can handle the back-end smoothly.</p>
animation ta add korty hove

banner img : md:w-2/3 lg:w-1/2*/