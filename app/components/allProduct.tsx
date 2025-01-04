'use client'
import { getAllProducts } from '@/Request/request';
import { Product } from '@/typing'
import { Loader } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import Productcard from './productCard';

const AllProduct = () => {
    const [products , setProducts] = useState<Product[] | null>(null);
    const [loading, setLoading] = useState(true);

    console.log(products)

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            try {
                const products:Product[] = await getAllProducts();
                setProducts(products);
            
            }catch (error) {
                console.log(error);
            }finally{
                setLoading(false);
            }
            
            };
            getData();
          
        
    },[])
  return (
   <>
   <div className='pt-16 pb-12'>
   <h1 className="text-2xl font-bold text-center mb-4">All Products</h1>
   {
    loading ?(
        <div className="flex justify-center items-center">
            <Loader size={32} className="animate-spin" />

        </div>
    ):(
        <div className="w-4/5 mx-auto mt-16 mb-16 grid grid-cols-1 md:grid-cols-3 sm:gird-col-2 gap-8 lg:grid-cols-4">
            {products?.map((product) => (
                <Productcard key={product.id} product={product} />
            ))}
        </div>
    )
   }
   </div>
   
   </>
  )
}

export default AllProduct