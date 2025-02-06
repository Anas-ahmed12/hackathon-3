
import { useDispatch } from 'react-redux';
import { addToCart } from '@/app/redux/cartSlice';
import { IoCartOutline } from 'react-icons/io5';
import { toast } from 'react-toastify'; // Ensure toast is imported
import { FaYahoo } from 'react-icons/fa'; // Import the Yahoo icon

interface AddToCartButtonProps {
  showText?: boolean;
  product: {
    id?: string;
    title?: string;
    price?: number;
    imageUrl?: string;
    size?: string;
    name?: string;
    colors?: string[];
    // title?: string;
  };
  selectedColor?: string; // Ensure this is included
  products?: any;
}

const AddToCartButton = ({showText , product, selectedColor, products }: AddToCartButtonProps) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const productWithQuantity = { 
        ...product, 
        quantity: 1, 
        imageUrl: product.imageUrl || '', // Ensure imageUrl is a string
        colors: selectedColor ? [selectedColor] : [], // Only add the selected color
     
        size: product.size || '', // Provide a default value if size is undefined
        items: [], // Initialize items as an empty array
        totalQuantity: 1, // Set totalQuantity to 1 for the new item
         id: product.id || '',
         title: product.title || '',
         price: product.price || 0,
         name: product.name || '',
    }; 
    dispatch(addToCart(productWithQuantity)); // Dispatch the product with quantity
    
    // Show success toast notification

    toast.success(
      <div className="flex items-center space-x-4 relative">
        <div className="flex items-center space-x-3">
          <FaYahoo size={24} className="text-[#FB2E86]" /> {/* Yahoo Icon with custom color */}
          <div>
            <h4 className="font-semibold text-lg text-green-500">Success! 🎉</h4>
            <p className="text-sm text-gray-200">
              Yay! You added <strong>{product.title || products.title}</strong> to your cart. <span className="text-[#FB2E86]">🛒</span>
            </p>
            <p className="text-xs text-gray-300">Keep shopping and grab more amazing deals! 💥</p>
          </div>
        </div>
        
        {/* Loading bar at the bottom of the toast */}
        {/* <div className="absolute bottom-0 left-0 w-full h-[2px] pb-0 bg-gradient-to-r from-[#FB2E86] via-[#F79C42] to-[#FB2E86] animate-progress"></div> */}
      </div>,
      {
        autoClose: 2000,  // Automatically close toast after 2 seconds
        position: "bottom-right",  // Toast position
        className: 'bg-gray-900 text-white rounded-lg p-4 shadow-lg relative',  // Dark theme for the toast background
        bodyClassName: 'text-white', // Ensuring body text stays white
        icon: false,  // We will add our custom icon inside the toast
        // hideProgressBar: true,  // Hide progress bar to keep it clean
        draggable: false,  // Disable dragging
        pauseOnHover: false,  // Do not pause when hovered
        theme: 'dark',  // Dark theme for the toast
      }
    );
    
  };

  return (
    <button 
    className="p-2 rounded-full"
    onClick={handleAddToCart}
  >
    {showText ? (
      'Add to Cart'  // Show text only if showText is true
    ) : (
      <IoCartOutline size={20} />  // Otherwise show the icon
    )}
  </button>
  );
};

export default AddToCartButton;