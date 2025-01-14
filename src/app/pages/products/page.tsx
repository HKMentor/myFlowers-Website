'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface User {
    name: string;
    price: number;
    image: string;
    rate: number;
    description: string;
    quantity: number;
    id: string;
}

const Products = () => {
    const [flowers, setFlowers] = useState<User[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<User | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://67862317f80b78923aa58c94.mockapi.io/test');
                const data = await response.json();
                setFlowers(data);
            } catch (error) {
                console.log('Products data not found', error);
            }
        };
        fetchData();
    }, []);

    const handleProductClick = (flower: User) => {
        setSelectedProduct(flower);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
    };

    return (
        <div className="container mx-auto p-6 px-16">
            <h2 className="text-4xl font-bold text-center text-blue-800 mb-8">Our Beautiful Flowers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {flowers.map((flower) => (
                    <div
                        key={flower.id}
                        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 cursor-pointer"
                        onClick={() => handleProductClick(flower)}
                    >
                        <div className="relative w-full h-64">
                            <Image
                                className="object-cover w-full h-full"
                                src={flower.image}
                                alt={flower.name}
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-700 truncate">{flower.name}</h3>
                            <p className="text-xl font-bold text-green-600 mt-2">${flower.price}</p>
                            <p className="text-sm text-gray-600 mt-2">Rating: {flower.rate} / 5</p>
                            <p className="text-sm text-gray-600 mt-2">{flower.description}</p>
                            <p className="text-sm text-gray-600 mt-2">In stock: {flower.quantity}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for product detail */}
            {selectedProduct && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg p-8 w-3/4 md:w-1/2">
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-2 right-2 text-gray-500 text-xl"
                        >
                            &times;
                        </button>
                        <h2 className="text-2xl font-semibold">{selectedProduct.name}</h2>
                        <div className="flex mt-4">
                            <div className="w-1/2">
                                <Image
                                    className="object-cover w-full h-64"
                                    src={selectedProduct.image}
                                    alt={selectedProduct.name}
                                    width={500}
                                    height={500}
                                />
                            </div>
                            <div className="w-1/2 pl-6">
                                <p className="text-lg font-bold text-gray-700">{selectedProduct.description}</p>
                                <p className="text-xl text-green-600 mt-4">${selectedProduct.price}</p>
                                <p className="text-sm text-gray-500 mt-2">Rating: {selectedProduct.rate} / 5</p>
                                <p className="text-sm text-gray-500 mt-2">In stock: {selectedProduct.quantity}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Products;
