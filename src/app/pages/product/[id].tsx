// 'use client';
// import Image from 'next/image';
// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';

// interface Product {
//     id: string;
//     name: string;
//     price: number;
//     image: string;
//     rate: number;
//     description: string;
//     quantity: number;
// }

// const ProductDetail = () => {
//     const router = useRouter();
//     const { id } = router.query; // Get the dynamic ID from the URL
//     const [product, setProduct] = useState<Product | null>(null);
//     const [loading, setLoading] = useState(true); // Added loading state for better UX

//     useEffect(() => {
//         if (id) {
//             const fetchProduct = async () => {
//                 try {
//                     const response = await fetch(`https://67862317f80b78923aa58c94.mockapi.io/test/${id}`);
//                     if (!response.ok) {
//                         throw new Error(`Failed to fetch product: ${response.statusText}`);
//                     }
//                     const data = await response.json();
//                     setProduct(data);
//                 } catch (error) {
//                     console.error('Failed to fetch product details:', error);
//                 } finally {
//                     setLoading(false);
//                 }
//             };

//             fetchProduct();
//         }
//     }, [id]);

//     if (loading) {
//         return <p>Loading product details...</p>;
//     }

//     if (!product) {
//         return <p>Product not found.</p>;
//     }

//     return (
//         <div className="container mx-auto p-6">
//             <div className="bg-white rounded-lg shadow-lg p-6">
//                 <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
//                 <div className="flex flex-col md:flex-row mt-6">
//                     <Image
//                         src={product.image}
//                         alt={product.name}
//                         className="w-full md:w-1/2 h-auto rounded-lg shadow-md"
//                         width={300}
//                         height={300}
//                     />
//                     <div className="md:ml-6 mt-6 md:mt-0">
//                         <p className="text-lg text-gray-700">{product.description}</p>
//                         <p className="text-xl font-bold text-green-600 mt-4">${product.price}</p>
//                         <p className="text-sm text-gray-600 mt-2">Rating: {product.rate} / 5</p>
//                         <p className="text-sm text-gray-600 mt-2">In stock: {product.quantity}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductDetail;
