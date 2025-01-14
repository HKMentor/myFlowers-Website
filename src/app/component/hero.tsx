'use client'

import Image from 'next/image';
import React, { useEffect, useState } from 'react'

interface User {
    name: string,
    price: number,
    image: string,
    id: string
}

const Flower = () => {
    const [flower, setFlowers] = useState<User[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://67862317f80b78923aa58c94.mockapi.io/test');
                const data = await response.json();
                setFlowers(data);
            } catch (error) {
                console.log("products data not found", error);
            }
        }
        fetchData();
    }, []);

    console.log(flower);

    return (
        <div className="container mx-auto p-6 px-16">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Our Beautiful Flowers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {flower.map((flower) => (
                    <div key={flower.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <Image 
                            className="w-full h-48 object-cover"
                            src={flower.image} 
                            alt={flower.name} 
                            width={300} 
                            height={200} 
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-700 truncate">{flower.name}</h3>
                            <p className="text-xl font-bold text-green-600 mt-2">${flower.price}</p>
                            <button className="mt-4 w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Flower;
