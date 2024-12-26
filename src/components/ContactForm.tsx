import { SectionProps } from '../types/common';

export function ContactForm({ title, children }: SectionProps) {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 font-semibold">Name</label>
              <input type="text" id="name" className="w-full px-3 py-2 border rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
              <input type="email" id="email" className="w-full px-3 py-2 border rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block mb-2 font-semibold">Phone</label>
              <input type="tel" id="phone" className="w-full px-3 py-2 border rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2 font-semibold">Message</label>
              <textarea id="message" rows={4} className="w-full px-3 py-2 border rounded"></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>
        {children}
      </div>
    </section>
  );
}

