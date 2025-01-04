import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <section className="text-gray-600 body-font bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="container px-5 py-24 mx-auto">
        {/* About Us Heading */}
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-4xl text-3xl font-semibold title-font text-gray-900 mb-4 tracking-wide">
            About Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700">
            We are a team of passionate individuals committed to bringing the best products to your doorstep. With a focus on quality, customer satisfaction, and innovation, we strive to make your shopping experience seamless and enjoyable.
          </p>
        </div>

        {/* Our Story and Mission */}
        <div className="flex flex-wrap justify-center -m-4">
          {/* Our Story */}
          <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
            <div className="relative bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
              <p className="leading-relaxed text-base text-gray-600">
                Founded in 2024, we started as a small online store with a mission to provide high-quality products at affordable prices. Over the years, we &rsquo ve expanded our offerings and built a loyal customer base by staying true to our values of transparency, excellence, and customer-first mentality.
              </p>
            </div>
          </div>
          
          {/* Our Mission */}
          <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
            <div className="relative bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
              <p className="leading-relaxed text-base text-gray-600">
                Our mission is to revolutionize the e-commerce space by offering an exceptional range of products, outstanding customer support, and a seamless shopping experience. We are committed to providing the highest standard of service and making a positive impact in our community.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="flex flex-wrap md:flex-row flex-col justify-center mt-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center w-full tracking-wide">
            Meet Our Amazing Team
          </h2>

          {/* Team Member 1 */}
          <div className="p-4  sm:w-full lg:w-1/4">
            <div className="bg-white p-6  shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out">
              <Image
                src={'/female1.webp'}
                alt="John Doe"
                width={428}
                height={428}
                className="w-full h-64 mb-4 transition-transform duration-300 hover:scale-105"
              />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Syeda Rida</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="p-4  sm:w-full lg:w-1/4">
            <div className="bg-white p-6  shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out">
            <Image
                src={'/female.webp'}
                alt="Jane smith"
                width={428}
                height={428}
                className="w-full h-64 mb-4 transition-transform duration-300 hover:scale-105"
              />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Jane Smith</h3>
              <p className="text-gray-600">Marketing Head</p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="p-4  sm:w-full lg:w-1/4">
            <div className="bg-white p-6 shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out">
            <Image
                src={'/female1.webp'}
                alt="emily"
                width={428}
                height={428}
                className="w-full h-64 mb-4 transition-transform duration-300 hover:scale-105"
              />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Emily Green</h3>
              <p className="text-gray-600">Product Manager</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
