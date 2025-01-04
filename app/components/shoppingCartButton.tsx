'use client'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { RootState } from '@/store/store';
import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from 'react-redux';
import CartSidebar from './cartSidebar';
const ShoppingCartButton = () => {

  const items = useSelector((state: RootState) => state.cart.item);
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  console.log(items);
  return (
    
    <Sheet>
       <SheetTrigger asChild>
    <div className='relative'>
        <span className='absolute -top-3 -right-2 w-6 h-6 bg-red-500 flex items-center justify-center rounded-full text-white text-xs flex-col'>{totalQuantity}</span>
        <FiShoppingCart cursor={'pointer'} size={30}  />
    </div>
    </SheetTrigger>
    <SheetContent className="overflow-auto h-full">
      <CartSidebar items={items}/>

    </SheetContent>
    </Sheet>
    
  )
}

export default ShoppingCartButton