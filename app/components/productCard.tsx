'use client'
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { addItem } from '@/store/cartSlice';
import { RootState } from '@/store/store';
import { Product } from '@/typing'
import { Heart, ShoppingBag, StarIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';


type  Props ={
    product: Product;
}

const Productcard = ({product}: Props) => {
    const num = Math.round(product.rating.rate);
    const ratingArray = new Array(num).fill(0);

  const items = useSelector((state: RootState) => state.cart.item);
  console.log(items);

    const dispatch = useDispatch();
    const addToCartHandler = (product: Product) => {

      toast({
        description: "Item added to cart",
        variant: "success",
        
        
      })

      dispatch(addItem(product));
      
    }
  return (
    <>
    <div className="p-4">
        <div className="w-[200px] h-[500px] ">
            <Image src={product.image} alt={product.title} width={100} height={100} className="w-[80%] h-[80%] object-contain  " />
            <p className='mt-0 text-xs text-gray-600 capitalize'>{product.category}</p>
            <Link href={`/product/product-details/${product.id}`}>
                <h2 className='text-lg cursor-pointer transition-all hover:underline sm:w-full sm:truncate hover:text-blue-500 mt-2 font-semibold text-black'>{product.title}</h2>
            </Link>
            <div className='flex items-center '>
              {ratingArray.map(() => (
                <StarIcon key={Math.random() * 1000} size={16} fill='yellow' className='text-yellow-500'/>
              ))}
            </div>

            <div className='flex mt-2 items-center space-x-2'>
              <p className='text-black text-base line-through font-semibold opacity-50'>{  `$${(product.price + 10).toFixed(2)}`}</p>
              <p className='text-black text-lg font-bold opacity-80'>{product.price}</p>
            </div>
            <div className='mt-4 flex items-center space-x-2'>
              <Button size={"icon"}  onClick={() => addToCartHandler(product)}>
                <ShoppingBag size={18} />
              </Button>
              <Button size={"icon"} className='bg-red-500 p-2 '>
                <Heart size={18}/>

              </Button>

            </div>

        </div>
    </div>
    </>
  )
}

export default Productcard