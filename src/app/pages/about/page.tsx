import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div>
            <section className="text-gray-600 body-font bg-gradient-to-r from-pink-200 to-purple-100">
                <div className="container px-5 py-24 mx-auto flex items-center md:flex-row flex-col">
                    <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
                        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
                            ABOUT US
                        </h2>
                        <h1 className="md:text-3xl text-2xl font-medium title-font text-gray-900">
                            A Blooming Journey of Nature  Beauty
                        </h1>
                        <p className="leading-relaxed mt-4 text-base">
                            At [HK Essentials], we believe in the power of flowers to transform any space into a sanctuary. From our carefully curated collection of vibrant blooms to seasonal arrangements, we offer something to suit every occasion. Whether its a special celebration or just because, our flowers are handpicked with love and care. Explore our floral wonders today and let nature  beauty surround you.
                        </p>
                    </div>
                    <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
                        <Image src="/images/aboutimg.jpg" alt="Flower Arrangements" className="rounded-lg shadow-lg w-full md:w-1/2 h-auto" width={600}
                            height={600} />
                    </div>
                </div>
            </section>

            <section className="text-gray-600 body-font bg-gradient-to-r from-indigo-100 to-purple-100 py-24">
                <div className="container px-5 mx-auto flex flex-wrap items-center justify-center">
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-2xl font-medium title-font text-gray-900 mb-4">
                            Watch Our Event Setup
                        </h2>
                        <p className="leading-relaxed text-base mb-6">
                            Take a behind-the-scenes look at how we bring events to life! In this video, we showcase the meticulous setup process for our events, from floral arrangements to final touches. Watch as we transform spaces with our expert craftsmanship, creating unforgettable experiences for every occasion. At Event Empire, we don,t just plan events we make dreams come true!
                        </p>
                    </div>

                    <div className="w-full md:w-1/2 bg-gradient-to-r from-pink-200 to-purple-100">
                        <div className="video-container relative">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/oYZUED2eGXs?si=Qg2EQbumwqFwBt6W" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-gradient-to-r from-indigo-100 to-purple-100">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-semibold">Why Choose Event Empire?</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        At Event Empire, we specialize in creating breathtaking floral arrangements for every occasion. Whether its a wedding, corporate event, or intimate gathering, we ensure each flower tells a story. Our team handpicks every stem to guarantee freshness, and our service is fast, professional, and always tailored to your unique vision. Let us transform your event into an unforgettable experience.
                    </p>
                </div>
            </section>


            <section className="py-16 bg-gradient-to-r from-indigo-100 to-purple-100">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-semibold">What Our Clients Say</h2>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-14">
                        <div className="bg-white shadow-lg p-6 rounded-lg">
                            <p className="italic">Event Empire transformed our venue into a floral paradise! The arrangements were breathtaking, and the team was so professional.</p>
                            <p className="mt-4 font-semibold">- Ayesha T.</p>
                        </div>
                        <div className="bg-white shadow-lg p-6 rounded-lg">
                            <p className="italic">I cant thank Event Empire enough for making our wedding so memorable. The flowers were stunning, and they truly brought our vision to life.</p>
                            <p className="mt-4 font-semibold">- Ali S.</p>
                        </div>
                        <div className="bg-white shadow-lg p-6 rounded-lg">
                            <p className="italic">From the setup to the final details, Event Empire exceeded our expectations. The floral designs added the perfect touch to our corporate event.</p>
                            <p className="mt-4 font-semibold">- Sarah P.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="text-gray-600 body-font px-14 bg-gradient-to-r from-pink-200 to-purple-100">
                <div className="container px-5 py-24 mx-auto flex items-center md:flex-row flex-col">
                    <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
                        <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
                            FRESH BLOOMS DELIVERY
                        </h2>
                        <h1 className="md:text-3xl text-2xl font-medium title-font text-gray-900">
                            Discover Your Perfect Flower Arrangement
                        </h1>
                    </div>
                    <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
                        <button className="bg-gradient-to-r from-indigo-400 to-purple-200 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="w-6 h-6"
                                viewBox="0 0 512 512"
                            >
                                <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z" />
                            </svg>
                            <span className="ml-4 flex items-start flex-col leading-none">
                                <span className="text-xs text-gray-600 mb-1">GET IT ON</span>
                                <span className="title-font font-medium">Google Play</span>
                            </span>
                        </button>
                        <button className="bg-gradient-to-r from-indigo-400 to-purple-200  inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="w-6 h-6"
                                viewBox="0 0 305 305"
                            >
                                <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z" />
                                <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z" />
                            </svg>
                            <span className="ml-4 flex items-start flex-col leading-none">
                                <span className="text-xs text-gray-600 mb-1">Download on the</span>
                                <span className="title-font font-medium">App Store</span>
                            </span>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
