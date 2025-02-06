'use client';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { removeFromCart, updateQuantity } from '../../redux/cartSlice';

interface CartItemProps {
  item: {
    id: string;
    title: string;  // Added title property
    name: string;   // Keep name if needed
    price: number;
    quantity: number;
    imageUrl: string;  // Added imageUrl property
    size: string;      
    colors: string[];
  };
}

const CartItem = ({ item }: CartItemProps) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const quantity = parseInt(e.target.value, 10);
    dispatch(updateQuantity({ id: item.id, quantity }));
  };
  
  return (
    <div>
      <Image src={item.imageUrl} alt={item.name} className="w-20 h-20 mr-4" /> {/* Ensure image is displayed */}
      <h3>{item.title}</h3>
      <p>Price: ${item.price}</p>
      <p>Size: {item.size}</p> {/* Display size */}
      <p>Colors: {item.colors[0]}</p> {/* Display colors */}
      <input
        type="number"
        value={item.quantity}
        onChange={handleQuantityChange}
        min="1"
      />
      <button onClick={handleRemove}>Remove</button>
    </div>
    
  );
};

export default CartItem;
