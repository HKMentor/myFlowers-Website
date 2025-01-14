import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Hero from './component/Hero'

const home = () => {
  return (
    <div>
      <section className="bg-cover bg-center mt-2 h-screen flex items-center justify-center relative"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/414660/pexels-photo-414660.jpeg?cs=srgb&dl=pexels-pixabay-414660.jpg&fm=jpg')" }}>
        
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="text-center text-white relative z-10 px-4 sm:px-8 lg:px-16">
          {/* Hero Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold -mt-32 text-shadow-lg">Bring Nature to Your Doorstep</h1>
          
          {/* Description Text */}
          <p className="mt-4 text-lg sm:text-xl md:text-2xl">
            Fresh Flowers Delivered to Your Home - Perfect for Every Occasion
          </p>
          
          {/* Main Call-to-Action Button */}
          <button className="mt-12 px-6 py-3 bg-pink-600 text-white text-lg rounded-full hover:bg-pink-700 transition duration-300 transform hover:scale-105">
            <Link href="/pages/products">Shop Now</Link>
          </button>
          
          {/* Additional Call-to-Action Section */}
          <div className="mt-8">
            <p className="text-md sm:text-lg md:text-xl">Explore our wide range of beautiful flowers and make every moment special!</p>
            <button className="mt-4 px-6 py-3 bg-white text-pink-600 text-lg rounded-full hover:bg-gray-100 transition duration-300">
              <Link href="/pages/about">Explore More</Link>
            </button>
          </div>
        </div>
      </section>
<Hero/>    
<section className="text-gray-600 body-font bg-gradient-to-r from-indigo-100 to-purple-100">
  <div className="container px-12 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
          Explore Our Beautiful Flower Collections
        </h1>
        <div className="h-1 w-20 bg-pink-500 rounded" />
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
        Whether you are looking for a fresh bouquet for a loved one, a unique floral arrangement for your home, or a charming indoor plant to brighten your space, we have something perfect for every occasion.
      </p>
    </div>
    <div className="flex flex-wrap -m-4">
      {/* Bouquets Section */}
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <Link href="/bouquets"className="transition-all duration-300 hover:scale-105">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:translate-y-2">
              <Image
                className="h-56 rounded w-full object-cover object-center mb-6"
                src="/images/bonquet.jpg"
                alt="Bouquets"
                width={300}
                height={300}
              />
              <h3 className="tracking-widest text-pink-500 text-xs font-medium title-font">
                Bouquets
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Elegant Bouquets for Every Occasion
              </h2>
              <p className="leading-relaxed text-base">
                Hand-picked fresh flowers arranged in beautiful bouquets for birthdays, anniversaries, weddings, and more.
              </p>
            </div>
        </Link>
      </div>

      {/* Floral Arrangements Section */}
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <Link href="/floral-arrangements" className="transition-all duration-300 hover:scale-105">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:translate-y-2">
              <Image
                className="h-56 rounded w-full object-cover object-center mb-6"
                src="/images/floral.jpg"
                alt="Floral Arrangements"
                width={300}
                height={300}
              />
              <h3 className="tracking-widest text-pink-500 text-xs font-medium title-font">
                Floral Arrangements
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Stunning Floral Arrangements
              </h2>
              <p className="leading-relaxed text-base">
                Unique and creative floral arrangements tailored for your special events, office spaces, or as a gift.
              </p>
            </div>
        </Link>
      </div>

      {/* Indoor Plants Section */}
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <Link href="/indoor-plants"
          className="transition-all duration-300 hover:scale-105">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:translate-y-2">
              <Image
                className="h-56 rounded w-full object-cover object-center mb-6"
                src="/images/indor.jpg"
                alt="Indoor Plants"
                width={300}
                height={300}
              />
              <h3 className="tracking-widest text-pink-500 text-xs font-medium title-font">
                Indoor Plants
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Liven Up Your Home with Indoor Plants
              </h2>
              <p className="leading-relaxed text-base">
                Choose from a range of beautiful indoor plants to add a refreshing touch to your living room or office.
              </p>
            </div>
        </Link>
      </div>

      {/* Flower Accessories Section */}
      <div className="xl:w-1/4 md:w-1/2 p-4 ">
        <Link href="/flower-accessories"
           className="transition-all duration-300 hover:scale-105">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:translate-y-2">
              <Image
                className="h-56 rounded w-full object-cover object-center mb-6"
                src="/images/flowerassoery.jpg"
                alt="Flower Accessories"
                width={300}
                height={300}
              />
              <h3 className="tracking-widest text-pink-500 text-xs font-medium title-font">
                Flower Accessories
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Floral Accessories & Vases
              </h2>
              <p className="leading-relaxed text-base mb-6">
                Explore a wide selection of flower vases, pots, and other floral accessories to complement your flowers.
              </p>
            </div>
        </Link>
      </div>
    </div>
  </div>
</section>

<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
        Raw Denim Heirloom Man Braid
      </h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
        Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy.
        Gastropub indxgo juice poutine, ramps microdosing banh mi pug.
      </p>
    </div>
    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      {[
        "Authentic Cliche Forage",
        "Kinfolk Chips Snackwave",
        "Coloring Book Ethical",
        "Typewriter Polaroid Cray",
        "Pack Truffaut Blue",
        "The Catcher In The Rye",
      ].map((item, index) => (
        <div key={index} className="p-2 sm:w-1/2 w-full group">
          <div className="bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 rounded-lg p-4 h-full items-center transform transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4 group-hover:text-purple-500 transition"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <path d="M22 4L12 14.01l-3-3" />
            </svg>
            <span className="title-font font-medium text-gray-900 group-hover:text-indigo-600">
              {item}
            </span>
          </div>
        </div>
      ))}
    </div>
    <button className="flex mx-auto mt-16 text-white bg-gradient-to-r from-purple-500 to-indigo-500 border-0 py-2 px-8 focus:outline-none hover:from-indigo-600 hover:to-purple-600 rounded-lg text-lg shadow-lg hover:shadow-xl transition duration-300">
      Explore More
    </button>
  </div>
</section>
<section className="text-gray-600 body-font bg-gradient-to-r from-pink-200 to-purple-100 mb-10">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-10">
      <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900">
        Our Achievements
      </h1>
      <p className="text-base leading-relaxed text-gray-700 mt-2">
        A glance at what we have accomplished so far, thanks to your support!
      </p>
    </div>
    <div className="flex flex-wrap -m-4 text-center ">
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-bold sm:text-5xl text-4xl text-blue-600">
          2.7K
        </h2>
        <p className="leading-relaxed text-gray-800 mt-2">Happy Users</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-bold sm:text-5xl text-4xl text-blue-600">
          1.8K
        </h2>
        <p className="leading-relaxed text-gray-800 mt-2">Subscribers</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-bold sm:text-5xl text-4xl text-blue-600">
          35
        </h2>
        <p className="leading-relaxed text-gray-800 mt-2">Total Downloads</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-bold sm:text-5xl text-4xl text-blue-600">
          4
        </h2>
        <p className="leading-relaxed text-gray-800 mt-2">Unique Products</p>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default home
