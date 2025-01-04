import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-4 sm:px-6 py-12 md:py-24 flex-col-reverse md:flex-row items-center">
        {/* Content Section */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start items-center text-center md:text-left">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
            MEGA SALE <span className="text-red-700">SPECIAL</span>
            <br className="hidden lg:inline-block py-4" />
            OFFER UP TO <span className="text-red-700">60%</span> OFF
          </h1>
          <p className="mb-8 leading-relaxed text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis odio
            ab facere reiciendis, expedita quis modi consectetur unde natus
            repellat cupiditate magnam.
          </p>
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-4">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Shop Now
            </button>
            <button className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Explore More
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full sm:max-w-md mb-6 md:mb-0">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src={'/shop.jpg'}
            width={800}
            height={800}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
