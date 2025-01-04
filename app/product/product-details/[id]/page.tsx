import { getProductsByCategory, getSingleProduct } from '@/Request/request';
import { Product } from '@/typing';
import { StarIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import AddToCart from './add-cart';
import Productcard from '@/app/components/productCard';

const ProductDetails = async ({ params }: { params: { id: string } }) => {
    const id = params.id;
    const singleProduct: Product = await getSingleProduct(id);
    const relatedProducts: Product[] = await getProductsByCategory(singleProduct.category);

    const num = Math.round(singleProduct.rating?.rate);
    const starArray = new Array(num).fill(0);

    return (
        <>
            <div className='mt-20'>
                <div className='w-4/5 mx-auto flex flex-col lg:flex-row items-center gap-12'>
                    {/* Image */}
                    <div className='flex-shrink-0'>
                        <Image src={singleProduct.image} width={400} height={400} alt='single image' />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 space-y-2">
                        <h1 className='text-2xl lg:text-3xl font-bold'>{singleProduct.title}</h1>
                        <div className='flex items-center gap-2'>
                            {/* Stars */}
                            <div className='flex items-center'>
                                {starArray.map((_, index) => (
                                    <StarIcon key={index} size={20} fill='yellow' className='text-yellow-600' />
                                ))}
                            </div>
                            <p className='text-base text-gray-700 font-semibold'>({singleProduct.rating.count} Reviews)</p>
                        </div>
                        <span className='w-1/4 h-[1.6px] bg-gray-400 rounded-lg block mt-4 opacity-20 mb-4'></span>
                        <h1 className='lg:text-6xl text-3xl md:text-4xl text-blue-950 font-bold'>${singleProduct?.price.toFixed(2)}</h1>
                        <p className='mt-4 text-base text-black opacity-70'>{singleProduct?.description}</p>
                        <p className='mt-4 text-sm text-black text-opacity-70 font-semibold'>Category  :  {singleProduct?.category}</p>
                        <p className='mt-2 text-sm text-black text-opacity-70 font-semibold'>Tag :  Online Shop</p>
                        <p className='mt-2 text-sm text-black text-opacity-70 font-semibold'>SKU :  {Math.random() * 500}</p>
                        <AddToCart  product ={singleProduct}/>
                    </div>
                </div>
                <div className='w-4/5 mt-16 mb-16 mx-auto'>
                <h1 className='text-2xl font-semibold text-black'>Related Products</h1>
                <div className='mt-4  mb-12 gird grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12'>
                    {relatedProducts.map((product) =>{
                        return <Productcard key={product.id} product={product}/>
                    })}
                </div>

                </div>
            </div>
        </>
    );
}

export default ProductDetails;
