import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Hero = () => {
    return (
        <section className="text-gray-700 body-font ">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <Image
                        className="object-cover object-center rounded-lg shadow-lg"
                        alt="hero"
                        src="/images/heroimg.jpg"
                        width={500} // Increased width
                        height={500} // Increased height
                    />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font text-4xl font-bold text-gray-900 mb-6">
                        Discover the Perfect Choice
                    </h1>
                    <p className="mb-8 leading-relaxed text-lg">
                        Elevate your lifestyle with high-quality, thoughtfully crafted products designed to make every moment extraordinary.
                    </p>
                    <div className="flex justify-center">
                        <Link href="https://www.instagram.com/hooria_codehub?igsh=MXRuNXZ3cm83amZ6eA==">
                            <button className="text-white bg-blue-600 border-0 py-3 px-8 focus:outline-none hover:bg-blue-700 rounded-lg text-lg">
                                Connect With Me            </button>
                        </Link>
                        <Link href="/pages/products">
                            <button className="ml-4 text-blue-600 bg-indigo-100 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-200 rounded-lg text-lg">
                                Exlpore Our Products            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero