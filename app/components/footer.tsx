import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white shadow-inner body-font ">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap text-left gap-y-8">
          {/* Section 1 */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              ABOUT US
            </h2>
            <p className="text-gray-600 text-sm">
              Discover the latest trends in fashion and redefine your style with our curated collection of premium clothing and accessories.
            </p>
          </div>

          {/* Section 2 */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              QUICK LINKS
            </h2>
            <nav className="list-none mb-10 space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-600 hover:text-gray-900">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </nav>
          </div>

          {/* Section 3 */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              CONTACT
            </h2>
            <p className="text-gray-600 text-sm">
              Email: <span className="text-gray-900">syedarida995@gmail.com</span>
            </p>
            <p className="text-gray-600 text-sm">
              Phone: <span className="text-gray-900">03248299025</span>
            </p>
          </div>

          {/* Section 4 */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              SUBSCRIBE
            </h2>
            <div className="flex flex-wrap justify-start items-end gap-4">
              <div className="relative w-full sm:w-auto">
                <label
                  htmlFor="footer-field"
                  className="leading-7 text-sm text-gray-600"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="footer-field"
                  name="footer-field"
                  placeholder="Enter your email"
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:bg-white focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 text-base outline-none text-gray-900 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Subscribe
              </button>
            </div>
            <p className="text-gray-600 text-sm mt-4 text-left">
              Stay updated with the latest arrivals, offers, and trends in fashion.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
