import React, {useContext} from 'react'
import Image from 'next/image'
import { BasketContext } from '../../../app/BasketContext'

interface OrderListProps {
  hidden: boolean;
}

function OrderList({ hidden }: OrderListProps) {
  const { cartItems, deleteItemById } = useContext(BasketContext)

  const handleDeleteItemClick = (itemId: string) => {
    deleteItemById(itemId);
  };

  return (
  <>
    { cartItems.length ? cartItems.map((item) => (
      <div key={item.id} className='relative'>
        <div className={`absolute right-0 bottom-2 p-2 bg-powder-pink text-sm md:text-md ${hidden ? 'hidden' : '' }`} onClick={() => handleDeleteItemClick(item.id)}>Віддалити</div>
          <div className='flex gap-3'>
            <div className='w-[100px] h-auto'>
              <Image src={item.image[0]} alt='product' width={100} height={100} className='min-w-[100px] h-auto'/>
            </div>
            <div className='shrink mr-[10px]'>
              <h4 className='text-md font-bold mb-[10px]'>{item.title}</h4>
              <div>
                <span className='text-sm'>Размер: </span><span className='text-sm'>{item.selectedSize}</span>
              </div>
              <div>
                <span className='text-sm'>Колір: </span><span className='text-sm'>{item.selectedColor}</span>
              </div>
              <span>{item.quantity}</span><span className='text-sm'>шт</span>
              <div className='flex justify-between mt-[10px]'>
            {item.discount ?
              <div>
                <span className='text-powder-red text-md'>{`${Math.round(item.price - (item.price * item.discount / 100)) * (item.quantity || 1)}.00 грн`}</span> <span className='line-through text-xs'>{`${item.price * (item.quantity || 1)}.00 грн`}</span>
              </div>
                : <span className='text-md'>{`${item.price}.00 грн`}</span>}
              </div>
            </div>
          </div>

          <div className='w-full h-[1px] bg-light-grey my-[15px]'></div>
        </div>))

        : null}
      </>
  )
}

export default OrderList
