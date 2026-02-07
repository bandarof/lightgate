import { FadeUp } from "@/components/Motion";
import Image from "next/image";

const offices = [
  {
    city: "Riyadh",
    address: "King Abdullah Financial District, Building 4",
    phone: "+966-569169169",
    email: "riyadh@lightgate.fest",
  },
  {
    city: "Jeddah",
    address: "Corniche Road, Cultural District",
    phone: "+966-591015666",
    email: "jeddah@lightgate.fest",
  },
];

export default function Contact() {
  return (
    <main>
      <section className="hero min-h-screen flex items-center">
        <img src="/contact.jpg" className="hero-bg" alt="Contact" />

        <FadeUp>
          <div className="container">
            <h1 className="text-6xl font-bold">
              Get <span className="text-orange-500">In Touch</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-gray-700 dark:text-gray-300">
              Tell us about your cultural vision and we&apos;ll craft the pathway to bring it to life.
            </p>
          </div>
        </FadeUp>
      </section>

      <section>
        <div className="container grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeUp>
            <div className="space-y-8">
              <div>
                <span className="text-sm uppercase tracking-[0.3em] text-orange-500">
                  Contact
                </span>
                <h2 className="mt-4 text-4xl font-bold text-gray-900 dark:text-white">
                  Let&apos;s create the next Lightgate experience
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                  Share your objectives, timeline, and location. Our team will respond with a tailored
                  proposal and recommended next steps.
                </p>
              </div>

              <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
                <p>Lightgate.fest</p>
                <p>lightgate.fest@gmail.com</p>
                <p>www.Lightgate.media</p>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Office Hours</p>
                  <p>Sunday - Thursday · 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp>
            <form className="space-y-6 rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-gray-900 dark:text-white">
                    First name
                  </label>
                  <input
                    type="text"
                    className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-orange-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
                    placeholder="Sara"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-900 dark:text-white">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-orange-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
                    placeholder="Almutairi"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-900 dark:text-white">
                  Work email
                </label>
                <input
                  type="email"
                  className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-orange-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
                  placeholder="name@organization.com"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-900 dark:text-white">
                  Project scope
                </label>
                <select className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-orange-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-white">
                  <option>Festival design & production</option>
                  <option>Immersive experience development</option>
                  <option>Brand & cultural strategy</option>
                  <option>Partnership inquiry</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-900 dark:text-white">
                  Tell us more
                </label>
                <textarea
                  rows={4}
                  className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-orange-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
                  placeholder="Share objectives, location, and timeline."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-orange-500 px-6 py-4 text-white transition hover:bg-orange-600"
              >
                Submit inquiry
              </button>
            </form>
          </FadeUp>
        </div>
      </section>

      <section className="bg-neutral-50 dark:bg-neutral-900/60">
        <div className="container">
          <FadeUp>
            <div className="grid gap-8 lg:grid-cols-2">
              {offices.map((office) => (
                <div
                  key={office.city}
                  className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm dark:border-neutral-800 dark:bg-neutral-950"
                >
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {office.city} Office
                  </h3>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">{office.address}</p>
                  <p className="mt-3 text-gray-600 dark:text-gray-300">{office.phone}</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{office.email}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <section>
        <div className="container">
          <FadeUp>
            <div className="rounded-3xl border border-orange-200 bg-gradient-to-r from-orange-50 via-white to-orange-100 p-12 shadow-sm dark:border-neutral-800 dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900">
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                    Experience Lightgate in action
                  </h2>
                  <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                    Request a private walkthrough of our flagship concepts and learn how we design
                    immersive cultural destinations.
                  </p>
                </div>
                <div className="relative h-56 overflow-hidden rounded-2xl">
                  <Image
                    src="/home.jpg"
                    alt="Lightgate experience"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
