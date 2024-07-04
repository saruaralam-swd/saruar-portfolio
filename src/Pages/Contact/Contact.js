import React from "react";

const Contact = () => {
  return (
    <div className="my-10">
      <h2 className="text-center text-4xl underline">Get in Touch</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-10">
        <div className=" p-4 lg:col-span-2">
          <h2 className="text-2xl font-semibold">Contact Me</h2>
          <form className="mt-5">
            <div className="space-y-5">
              <div>
                <label htmlFor="name">Name</label>
                <input
                  className="border block w-full px-4 py-2 rounded-md"
                  type="text"
                  placeholder="full Name"
                />
              </div>

              <div>
                <label htmlFor="name">Email</label>
                <input
                  className="border block w-full px-4 py-2 rounded-md"
                  type="email"
                  placeholder="example@gmail.com"
                />
              </div>

              <div>
                <div>
                  <label htmlFor="name">Message</label>
                </div>
                <textarea
                  className="textarea-bordered w-full textarea"
                  placeholder="Bio"
                ></textarea>
              </div>

              <button className="w-[100px] border px-4 py-1 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white duration-500">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
