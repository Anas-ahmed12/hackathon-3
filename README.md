# Ecommerce Hackathon Website HEKTO

This is a fully responsive, feature-rich e-commerce website built during a hackathon using **Next.js**. The website includes dynamic components, engaging design, and smooth user experiences for showcasing and purchasing products with a modern and clean design and i use josefin sans font for the website which is shown in figma design.

## Features
- **Dynamic Navbar**: A multi-layered navbar with announcement bar, logo, search functionality, and navigation links.
- **Hero Carousel**: Auto-sliding product showcase with manual navigation controls , which is dynamic .
- **Product Grids**: Multiple sections showcasing featured, latest, discounted, and categorized products with hover effects and shadow animations and all products are dynamic .
- **Dynamic Pages**: Includes detailed product pages, blog lists, shop grids, cart and checkout pages, and more , by clicking on the product you can see the details of the product which has multiple images and colors and sizes and you can add to cart and checkout.
- **Zoom Functionality**: Zoom in on product images on hover and open a detailed modal view of the product for a closer look.
- **Add-to-Cart Functionality**: Add products to the cart, and dynamically display the cart items. When the cart is empty, a message like "Your cart is empty" will be shown.
- **Redux for State Management**: Centralized cart management using Redux to handle actions like adding, removing, and clearing items from the cart.
- **Newsletter Section**: Showcase the brands you're working with, such as Mestonix, Pure, etc.
- **Footer**: Organized links to pages, customer care, categories, and social media.

## Components Overview
### Navbar Components
1. **Announcement Bar**: Displays top announcements.
2. **Main Navbar**: Contains logo, links, and a search bar.

### Homepage Components
1. **Hero Section**: Auto-sliding carousel with manual controls for showcasing top products.
2. **Featured Products**: Grid display of products with image, title, price, and an add-to-cart button , colors and wishlist and zoom functionality are also shown.
3. **Latest Products**: Includes hover effects, sale tags, and interactive icons and when you click on the product you can see the details of the product which has multiple images and colors and sizes and you can add to cart and checkout.
4. **Shopex Offers**: 3D hover effects on offer cards.
5. **Hero Section 2**:Added the unique BnB Italian sofa with an 'Add to Cart' button."
6. **Discount Sections**: Products with discount prices and overlay effects and when you click on the product you can see the details of the product which has multiple images and colors and sizes and you can add to cart and checkout.
7. **Discount Items**: Displays the top three discounted products. On the left, it shows the title, features, and a 'Shop Now' button, which leads to the product details page with multiple images, colors, sizes, and options to add to cart and checkout. On the right, it displays the product image. At the top, there are three navigation buttons to navigate through the carousel."
8. **Blog Post Grid**: Displays blog posts with an image, author, date, title, paragraph, and a 'Read More' button. Clicking 'Read More' navigates to the blog details page, featuring multiple images and the full blog content.
9. **Scroll To Top**: A button that scrolls to the top of the page when clicked.

### Pages Overview
- **Contact Page**: Includes a background image, heading, paragraph, and a subscription button.
- **Shop Pages**: Various layouts like grid, list, sidebar, and detailed views.
- **FAQ Page**: Accordion-style Q&A sections.
- **Cart and Checkout Pages**: Interactive and responsive forms for the purchase process, including live updates for cart totals and item counts.

## Libraries & Packages Used
- `react-icons`
- `@fortawesome/react-fontawesome`
- `@fortawesome/free-solid-svg-icons`
- `@fortawesome/free-brands-svg-icons`
- `react-responsive-carousel`
- `shadcn/ui`
- `tailwindcss`
- `@reduxjs/toolkit react-redux`
- `react-toastify`
- `locomotive-scroll`
- `next-auth`
-  `framer-motion`

## How to Run Locally

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v18 or later)
- **npm** or **yarn**

### Installation Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/Mazz-Ather/Ecommerce-Hackathon
   cd Ecommerce-Hackathon
   npm install
   npm run dev
   ```

## Additional Details

- **Product Card Hover Interaction**: On the homepage, when a product is displayed and hovered over, it reveals three icons: Zoom, Wishlist, and Add to Cart.
 - **Zoom Functionality**: Since the Figma design did not provide details, I researched on Awwwards.com and implemented this feature to enhance user experience. When the Zoom icon is clicked, a modal opens.
 - **Left Side**: Displays a larger product image for closer inspection.
 - **Right Side**: Includes the product title, price, color selection options, an 'Add to Cart' button, and 'Wishlist' button.
The zoom functionality allows customers to closely inspect products through hover and modal views, improving usability and engagement."


**"Dynamic Product Pages and Add-to-Cart Functionality**:  
On the homepage, each product card displays three colors and three images as selectable options. When a specific **color** or **image** is clicked, the product preview updates to reflect the selected option. Once the **Add to Cart** button is clicked, the **exact image and color** of the product, along with its corresponding details, are added to the **cart** and displayed on the **Cart Page**. 

- **Dynamic Pages**: All dynamic product pages (including homepage and individual product pages) follow this logic. The product card will showcase the three available colors and images. When a color or image is selected, it dynamically updates both the product preview and the **Add to Cart** button.

- **Add-to-Cart Functionality**: The **Add to Cart** functionality ensures seamless shopping by dynamically updating the cart’s state.  
  - If the cart is empty, it will display the message: "Your cart is empty."  
  - Once items are added, the cart will automatically update the **total price** and **item count** based on the selections made. The cart will reflect the **specific image and color** of each product added.

This system ensures that the correct product variations (color and image) are consistently shown across all stages of the purchase process, from product selection to checkout.
 - dark theme toggle effect 
 "# hackathon-3" 
