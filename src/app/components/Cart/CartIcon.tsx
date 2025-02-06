'use client'; // Ensures this component runs only on the client

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { IoCartOutline } from 'react-icons/io5';
// import Link from 'next/link';

const CartIcon = () => {
    const totalQuantity = useSelector((state: RootState) => state.cart.totalQuantity);
  const [clientQuantity, setClientQuantity] = useState(0); // State to avoid SSR issues

  useEffect(() => {
    // Ensure totalQuantity is set only on the client
    setClientQuantity(totalQuantity);
  }, [totalQuantity]);

  return (
    <div style={{ position: 'relative' }}>
      {/* <Link href="/pages/cart/cartPage"> */}
      <span className='flex items-center gap-1 hover:text-gray-200 -ml-2 z-[999]'>
        <IoCartOutline className='w-5 h-5' />
      </span>
      {/* </Link> */}
      {clientQuantity > 0 && (
        <span
          style={{
            position: 'absolute',
            top: '-10px',
            right: '-10px',
            background: 'red',
            color: 'white',
            borderRadius: '50%',
            width: '18px',
            height: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
          }}
        >
          {clientQuantity}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
