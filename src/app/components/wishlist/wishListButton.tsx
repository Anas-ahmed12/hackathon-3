import { useDispatch } from 'react-redux';
import { addToWishlist } from '@/app/wishlistRedux/wishlistSlice'; // Assuming you have a wishlist slice
import { FaHeart, FaRegHeart } from 'react-icons/fa'; // Heart icon for wishlist
import { toast } from 'react-toastify'; // Toast notification for success
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface WishlistButtonProps {
  showText?: boolean;
  product: {
    id?: string;
    title?: string;
    price?: number;
    imageUrl?: string;
    size?: string;
    name?: string;
    colors?: string[];
  };
  selectedColor?: string;
  products?: any;
}

const WishlistButton = ({ showText, product, selectedColor, products }: WishlistButtonProps) => {
  const dispatch = useDispatch();

  const handleAddToWishlist = () => {
    const productWithWishlistDetails = {
      ...product,
      imageUrl: product.imageUrl || '',
      colors: selectedColor ? [selectedColor] : [],
      size: product.size || '',
      id: product.id || '',
      title: product.title || '',
      price: Number(product.price) || 0,
      name: product.name || '',
    };

    dispatch(addToWishlist(productWithWishlistDetails)); // Dispatch the product to wishlist

    // Show success toast notification
    toast.success(
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-3">
          <FaHeart size={24} className="text-[#FB2E86]" />
          <div>
            <h4 className="font-semibold text-lg text-red-500">Added to Wishlist! ❤️</h4>
            <p className="text-sm text-gray-200">
              Yay! You added <strong className='text-[#FB2E86] text-lg'>{product.title || products.title}</strong> to your wishlist. <span className="text-[#FB2E86]">❤️</span>
            </p>
            <p className="text-xs text-gray-300">Keep adding your favorite items! 💖</p>
          </div>
        </div>
      </div>,
      {
        autoClose: 2000,
        position: "bottom-right",
        className: 'bg-gray-900 text-white rounded-lg p-4 shadow-lg relative',
        bodyClassName: 'text-white',
        icon: false,
        draggable: false,
        pauseOnHover: false,
        theme: 'dark',
      }
    );
  };

  return (
    <button
      className="rounded-full"
      onClick={handleAddToWishlist}
    >
      {showText ? (
      <FaHeart size={20} />
      ) : (
        <FaRegHeart size={20} />  // Use FaRegHeart instead of FontAwesomeIcon
      )}
    </button>
  );
};

export default WishlistButton;
