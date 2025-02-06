'use client';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import RootState from '../../wishlistRedux/wishlistSlice';
import { IoHeartOutline } from 'react-icons/io5';
import { RootState } from '@/app/redux/store';

const WishlistIcon = () => {
  const totalQuantity = useSelector((state: RootState) => state.wishlist.totalQuantity);
  const [clientQuantity, setClientQuantity] = useState(0);

  useEffect(() => {
    setClientQuantity(totalQuantity);
  }, [totalQuantity]);

  return (
    <div style={{ position: 'relative' }}>
      <span className="flex items-center gap-1 hover:text-gray-200 -ml-2 z-[999]">
        <IoHeartOutline className="w-5 h-5" />
      </span>
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

export default WishlistIcon;
