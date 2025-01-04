import { Button } from '@/components/ui/button'
import { SheetClose } from '@/components/ui/sheet'
import { addItem, CartItem, removeItem } from '@/store/cartSlice'
import Image from 'next/image'
import Link from 'next/link'

import React from 'react'
import { useDispatch } from 'react-redux'

type Props = {
    items:CartItem[]
}

const CartSidebar = ({items} : Props) => {
    const dispatch = useDispatch();
    const addCartHandler = (item:CartItem)=>dispatch(addItem(item));
    const removeCartHandler = (id:number)=>dispatch(removeItem({id}));
  return (
    <>
    <div className="my-6 h-full ">
        <h1 className="text-center text-bold text-lg mb-6">Your Cart</h1>
        {items.length ==0 &&(
            <div className="flex items-center w-full h-[80vh] flex-col justify-center">
                <Image src="/shop.jpg" alt="cart" width={200} height={200} className='object-cover mx-auto' />
                <h1 className="mt-8 text-2xl font-semibold">Your Cart is empty</h1>
            </div>
        )}
        {items.length > 0 &&(
            <div>
                {items?.map((item)=>{
                    return <div key={item.id} className=' pb-4 boreder-b-2 border-gray-300 border-opacity-60 p-4'>
                        <div>
                            <Image src={item?.image} alt={item.title} width={60} height={60} className='object-cover' />
                        </div>
                        <div>
                            <h1 className="text-sm w-4/5 font-semibold truncate">{item?.title}</h1>
                            <h1 className="text-base text-blue-950 font-bold">${(item?.price * item?.quantity).toFixed(2)}</h1>
                            <h1 className="text-base font-semibold  mb-2">Quantity : {item?.quantity}</h1>
                            <div className='flex items-center space-x-4'>
                                <Button size={'sm'} variant={'destructive'} onClick={() => removeCartHandler(item.id)}>Remove</Button>
                                <Button size={'sm'} onClick={() => addCartHandler(item)}>Add</Button>
                            </div>
                        </div>
                    </div>
                })}
                <Link href={'/cart'}>
                <SheetClose>
                <Button className="w-full my-6">View All Cart </Button>
                </SheetClose>
                </Link>
            </div>
        )}
    </div>
    </>
  )
}

export default  CartSidebar
