import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
      <footer className="max-w-[1920px] mx-auto bg-[#eeeef1] dark:bg-[#1a1a1a] pl-4 md:pl-8 lg:pl-12 pt-6 lg:pt-12">
      <div className="container ">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 lg:pl-20 gap-2 max-w-[1300px] mx-auto md:grid-cols-2 lg:grid-cols-4 text-center md:text-left">
          {/* Brand and Newsletter Section */}
          <div className="space-y-4 mt-6">
            <Link href="/" className="text-2xl font-bold dark:text-white">
              Hekto
            </Link>
            <form className="flex flex-col sm:flex-row gap-2 justify-center md:justify-start">
              <Input
                type="email"
                placeholder="Enter Email Address"
                className="rounded-md border-gray-200"
              />
              <Button className="bg-pink-500 hover:bg-pink-600">Sign Up</Button>
            </form>
            <p className="text-sm text-muted-foreground">
              57 Prince Road London, Greater London NW1 8JB, UK
            </p>
          </div>
    
          {/* Categories */}
          <div className="lg:pl-20">
            <h3 className="mb-4  text-lg font-semibold mt-6 text-[#1A0B5B] dark:text-white">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/laptops-computers" className="text-muted-foreground hover:text-primary">
                  Laptops & Computers
                </Link>
              </li>
              <li>
                <Link href="/cameras-photography" className="text-muted-foreground hover:text-primary">
                  Cameras & Photography
                </Link>
              </li>
              <li>
                <Link href="/smart-phones-tablets" className="text-muted-foreground hover:text-primary">
                  Smart Phones & Tablets
                </Link>
              </li>
              <li>
                <Link href="/video-games-consoles" className="text-muted-foreground hover:text-primary">
                  Video Games & Consoles
                </Link>
              </li>
              <li>
                <Link href="/waterproof-headphones" className="text-muted-foreground hover:text-primary">
                  Waterproof Headphones
                </Link>
              </li>
            </ul>
          </div>
    
          {/* Customer Care */}
          <div className="lg:pl-8">
            <h3 className="mb-4 text-lg font-semibold mt-6 text-[#1A0B5B] dark:text-white">Customer Care</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/my-account" className="text-muted-foreground hover:text-primary">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="/discount" className="text-muted-foreground hover:text-primary">
                  Discount
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-muted-foreground hover:text-primary">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/order-history" className="text-muted-foreground hover:text-primary">
                  Order History
                </Link>
              </li>
              <li>
                <Link href="/order-tracking" className="text-muted-foreground hover:text-primary">
                  Order Tracking
                </Link>
              </li>
            </ul>
          </div>
    
          {/* Pages */}
          <div className="lg:-ml-8">
            <h3 className="mb-4 text-lg font-semibold mt-6 text-[#1A0B5B] dark:text-white">Pages</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/browse-the-shop" className="text-muted-foreground hover:text-primary">
                  Browse the Shop
                </Link>
              </li>
              <li>
                <Link href="/category" className="text-muted-foreground hover:text-primary">
                  Category
                </Link>
              </li>
              <li>
                <Link href="/pre-built-pages" className="text-muted-foreground hover:text-primary">
                  Pre-Built Pages
                </Link>
              </li>
              <li>
                <Link href="/visual-composer-elements" className="text-muted-foreground hover:text-primary">
                  Visual Composer Elements
                </Link>
              </li>
              <li>
                <Link href="/woocommerce-pages" className="text-muted-foreground hover:text-primary">
                  WooCommerce Pages
                </Link>
              </li>
            </ul>
          </div>
        </div>
    
        {/* Bottom Bar */}
      </div>
        <div className="mt-16 bg-[#e0dfe2] dark:bg-[#1a1a1a] max-w-[1930px] bottom-0 -ml-9"> {/* Changed max-w to w-full */}
          <div className="flex flex-col items-center justify-evenly gap-6 lg:gap-56 border-t  py-7 md:flex-row">
            <p className="text-sm text-muted-foreground text-center">
              ©2024 - All Rights Reserved
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="https://facebook.com" className="p-3 rounded-full bg-[#1A0B5B]">
                <Facebook className="h-5 w-5 text-white" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://twitter.com" className="p-3 rounded-full bg-[#1A0B5B]">
                <Twitter className="h-5 w-5 text-white" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://instagram.com" className="p-3 rounded-full bg-[#1A0B5B]">
                <Instagram className="h-5 w-5 text-white" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
    </footer>
  
  )
}

