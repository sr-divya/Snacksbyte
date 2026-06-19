import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

function Contact() {
  return (
    <section className="bg-[#f8f3ed]">
      {/* Hero Section */}
      <div className="bg-[#6f2d1f] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="mb-4 text-5xl font-bold">
            Get In Touch
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-gray-200">
            We'd love to hear from you. Whether it's
            feedback, questions, or snack recommendations,
            our team is here to help.
          </p>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="mx-auto -mt-10 grid max-w-6xl gap-6 px-6 md:grid-cols-3">
        <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
          <Mail
            size={40}
            className="mx-auto mb-4 text-[#6f2d1f]"
          />

          <h3 className="mb-2 text-xl font-semibold">
            Email Us
          </h3>

          <p className="text-gray-500">
            support@snackify.com
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
          <Phone
            size={40}
            className="mx-auto mb-4 text-[#6f2d1f]"
          />

          <h3 className="mb-2 text-xl font-semibold">
            Call Us
          </h3>

          <p className="text-gray-500">
            +91 98765 43210
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
          <MapPin
            size={40}
            className="mx-auto mb-4 text-[#6f2d1f]"
          />

          <h3 className="mb-2 text-xl font-semibold">
            Visit Us
          </h3>

          <p className="text-gray-500">
            Lucknow, Uttar Pradesh
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-4xl font-bold text-[#3d1f17]">
              Let's Talk
            </h2>

            <p className="mb-8 text-gray-600">
              Have a question about our products,
              orders, or delivery? Send us a message
              and we'll get back to you soon.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Clock
                  size={24}
                  className="text-[#6f2d1f]"
                />

                <span>
                  Monday - Saturday: 9 AM - 7 PM
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Mail
                  size={24}
                  className="text-[#6f2d1f]"
                />

                <span>hello@snackify.com</span>
              </div>

              <div className="flex items-center gap-4">
                <Phone
                  size={24}
                  className="text-[#6f2d1f]"
                />

                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-[#6f2d1f]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-[#6f2d1f]"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-[#6f2d1f]"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-[#6f2d1f]"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-[#6f2d1f] py-4 font-semibold text-white transition hover:bg-[#5b2418]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-12 text-center text-4xl font-bold text-[#3d1f17]">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="rounded-2xl bg-[#f8f3ed] p-6">
              <h3 className="font-semibold">
                How long does delivery take?
              </h3>

              <p className="mt-2 text-gray-600">
                Most orders are delivered within
                2–4 business days.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f8f3ed] p-6">
              <h3 className="font-semibold">
                Are your snacks preservative-free?
              </h3>

              <p className="mt-2 text-gray-600">
                Yes, we use premium ingredients and
                avoid artificial preservatives.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f8f3ed] p-6">
              <h3 className="font-semibold">
                Can I track my order?
              </h3>

              <p className="mt-2 text-gray-600">
                Absolutely! Tracking details are
                shared once your order ships.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-[#6f2d1f] py-16 text-center text-white">
        <h2 className="mb-4 text-4xl font-bold">
          Ready For Your Next Snack?
        </h2>

        <p className="mb-8 text-gray-200">
          Explore our delicious collection of healthy
          and tasty snacks.
        </p>

        <button className="rounded-full bg-yellow-400 px-8 py-4 font-semibold text-black transition hover:bg-yellow-300">
          Shop Now
        </button>
      </div>
    </section>
  );
}

export default Contact;