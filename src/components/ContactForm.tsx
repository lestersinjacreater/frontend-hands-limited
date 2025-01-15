// import React from 'react';

const Contact = () => {
  return (
    <section className="py-20 px-4 md:px-8 min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-blue-900 to-black">
      <div className="max-w-full mx-auto">
        <div className="grid md:grid-cols-3 gap-6 bg-white rounded-2xl overflow-hidden shadow-2xl">
          {/* Contact Information Panel */}
          <div className="md:col-span-1 bg-black p-8 md:p-12 relative overflow-hidden">
            <h2 className="text-3xl font-bold text-white mb-4">Contact Information</h2>
            <p className="text-white text-lg">
              123 Main Street<br />
              Anytown, CA 12345<br />
              (555) 555-5555<br />
              email@example.com
            </p>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2 p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                  Name
                </label>
                <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                  Email
                </label>
                <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                  Message
                </label>
                <textarea id="message" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" rows={4} />
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
