import React from "react";

const Contact = () => {
  return (
    <div className="my-10 p-5 md:p-0 md:w-4/5 mx-auto">
      <h2 className="text-2xl text-center font-semibold">Contact Me</h2>

      <form className="mt-5">
        <div className="space-y-5">
          <div>
            <label htmlFor="name">Name</label>
            <input
              className="border border-slate-300 block w-full px-4 py-2 rounded-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-indigo-500"
              type="text"
              placeholder="full Name"
            />
          </div>

          <div>
            <label htmlFor="name">Email</label>
            <input
              className="border border-slate-300 block w-full px-4 py-2 rounded-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-indigo-500"
              type="email"
              placeholder="example@gmail.com"
            />
          </div>

          <div>
            <div>
              <label htmlFor="name">Message</label>
            </div>
            <textarea
              className="textarea-bordered w-full textarea h-[200px] border border-slate-300 block w-full px-4 py-2 rounded-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-indigo-500"
              placeholder="Send Your Message..."
            ></textarea>
          </div>

          <button className="border px-4 py-2 rounded-full bg-indigo-500 text-white hover:bg-white hover:border-indigo-500 hover:text-black duration-500">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
