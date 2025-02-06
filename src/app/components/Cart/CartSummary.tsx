'use client'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const CartSummary = () => {
  const { totalQuantity } = useSelector((state: RootState) => state.cart);

  return (
    <div>
      <p>Total Items: {totalQuantity}</p>
    </div>
  );
};

export default CartSummary;
