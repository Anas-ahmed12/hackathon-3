"use client"; // This marks the file as a client component

import DiscountItem from "./components/Home/DiscountItem";
// import FeaturedProducts from "./components/Home/FeaturedProduct";
import HeroCarousel from "./components/Home/HeroCarousel";
import LatestProduct from "./components/Home/LatestProduct";
import PreDiscount from "./components/Home/PreDiscount";
import SecondHero from "./components/Home/SecondHero";
import ShopexOffers from "./components/Home/ShopexOffers";
import TrendingProduct from "./components/Home/TrendingProduct";
import TopCategories from "./components/Home/TopCategories";
import NewsLetter from "./components/Home/NewsLetter";
import Brands from "./components/Home/brands";
import BlogComponent from "./components/Home/BlogComponent";
import ScrollToTop from "./components/Home/ScrollToTop";
import products from "./components/Home/DataFeatureProduct";
import { Provider } from 'react-redux';
import store from "./redux/store"
import FeaturedProducts from "./components/Home/FeaturedProduct";

export default function Home({Component, pageProps , products}:any) {
  return (
    // <Provider store={store}>
      <main>
        <HeroCarousel />
           <FeaturedProducts  />
          <LatestProduct />
         <ShopexOffers />
        <SecondHero />
        <TrendingProduct />
        <PreDiscount />
        <DiscountItem />
        <TopCategories />
        <NewsLetter />
        <Brands />
        <BlogComponent />
        {/* <ScrollToTop /> */}
      </main>
    // </Provider>
  );
}







// axha ya install ho rha h ap ya btao  ah1598973@gmail.com  ya gmail apki h na
// ah1598973@gmail.com ispe login ha sab axha or sanity bhi essi pr   g haan is hi ha ok w8